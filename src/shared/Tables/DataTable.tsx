import { useState, type ReactNode, type ChangeEvent, type JSX } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  // Button,
  Paper,
  Tooltip,
  Menu,
  MenuItem,
  // Button,
} from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  // useTheme,
  type SxProps,
  type Theme,
} from "@mui/material/styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
// import SortIcon from "@mui/icons-material/SwapVert";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import MapIcon from "@mui/icons-material/Map";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// ─── Public Types ─────────────────────────────────────────────────────────────

/**
 * Definition for a single table column.
 *
 * @template T - The shape of each data row.
 *
 * @property key        - Unique identifier for the column (used as React key).
 * @property header     - Text shown in the column header.
 * @property width      - Optional fixed width (number → px, string → any CSS unit).
 * @property headerSx   - Optional MUI sx overrides for the <TableCell> header.
 * @property cellSx     - Optional MUI sx overrides for every body <TableCell>.
 * @property render     - Custom cell renderer. Receives the full row object and
 *                        must return a ReactNode. When omitted the raw value at
 *                        `key` is rendered as a string.
 */
export interface ColumnDef<T> {
  key: keyof T | string;
  header: string;
  width?: number | string;
  headerSx?: SxProps<Theme>;
  cellSx?: SxProps<Theme>;
  render?: (row: T, index: number) => ReactNode;
}

/**
 * Starred-row feature configuration.
 *
 * @template T - The shape of each data row.
 *
 * @property getStarred  - Returns whether a given row is currently starred.
 * @property onToggle    - Called when the user clicks the star icon on a row.
 */
export interface StarFeature<T> {
  getStarred: (row: T) => boolean;
  onToggle: (row: T) => void;
}

type MenuAction = () => void | Promise<void>;

interface MenuItem {
  id: number;
  title: string;
  method: MenuAction;
  showMenu?: boolean;
}
// interface ToolBarFilerItems {
//   id: number;
//   title?: string;
//   method?: MenuAction;
//   showMenu?: boolean;
//   value?: string | number;
// }

/**
 * Toolbar configuration object.
 *
 * @property dateRange      - Date-range label shown in the toolbar (e.g. "03/02/2025 – 03/03/2025").
 * @property toolbarStart   - ReactNode rendered on the left side of the toolbar
 *                            (after the built-in Sort / Filter / Date buttons).
 * @property toolbarEnd     - ReactNode rendered on the right side of the toolbar
 *                            (before the Add button).
 * @property addLabel       - Label for the primary "Add" CTA button (default: "Add Item").
 * @property onAdd          - Click handler for the Add button.
 */
// export interface ToolbarConfig {
//   dateRange?: string;
//   toolbarStart?: ReactNode;
//   toolbarEnd?: ReactNode;
//   addLabel?: string;
//   ctaIcon?: ReactNode;
//   onAdd?: () => void;
//   toolbarAnchorEl?: HTMLElement | null;
//   toolbarSetAnchorEl?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
//   toolbarHandleClick: (
//     event: React.MouseEvent<HTMLElement, MouseEvent>  ) => void;
//   toolbarHandleClose?: () => void;
//   toolBarFilterList?: ToolBarFilerItems[];
// }

/**
 * Props accepted by the generic DataTable component.
 *
 * @template T - The shape of each data row. Must have a numeric `id` field.
 *
 * @property data           - Array of row objects to render.
 * @property columns        - Column definitions controlling headers and cell rendering.
 * @property getRowId       - Returns the unique numeric id of a row (default: `row.id`).
 * @property selectable     - When true, renders a checkbox column for row selection
 *                            (default: true).
 * @property starFeature    - When provided, renders the star-toggle column.
 * @property showRowActions - When true, renders the ⋮ icon at the end of each row
 *                            (default: true).
 * @property onRowAction    - Callback fired when ⋮ is clicked for a row.
 * @property toolbar        - Toolbar configuration. Pass `false` to hide the toolbar entirely.
 */
export interface DataTableProps<T> {
  // Removed the { id: number } constraint
  data: T[];
  columns: ColumnDef<T>[];
  getRowId?: (row: T, index: number) => number | string; // Changed signature
  selectable?: boolean;
  starFeature?: StarFeature<T>;
  showRowActions?: boolean;
  onRowAction?: (row: T) => void;
  // toolbar?: ToolbarConfig | false;
  anchorEl?: HTMLElement | null;
  setAnchorEl?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  handleClick: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    rowIndex: number,
  ) => void;
  handleClose?: () => void;
  setOpenMenuIndex?: React.Dispatch<React.SetStateAction<number | null>>;
  openMenuIndex?: number | null;
  setDetails: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  menuItemList?: MenuItem[];
}

// ─── Internal Types ───────────────────────────────────────────────────────────

type SelectedSet = Set<number>;

// ─── Theme ────────────────────────────────────────────────────────────────────

// Replace the static theme with one that responds to the parent theme
// const dataTableTheme = (mode: "light" | "dark") =>
//   createTheme({
//     typography: {
//       fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
//       fontSize: 13,
//     },
//     palette: {
//       mode: mode, // This is crucial for MUI's built-in dark mode support
//       primary: { main: mode === "dark" ? "#ffffff" : "#1a1a1a" },
//       background: {
//         default: mode === "light" ? "#fafafa" : "#0f0f0f",
//         paper:
//           mode === "light"
//             ? "rgba(255, 255, 255, 0.95)"
//             : "rgba(28, 28, 28, 0.94)",
//       },
//     },
//     components: {
//       MuiTableCell: {
//         styleOverrides: {
//           root: {
//             padding: "10px 12px",
//             borderBottom: `1px solid ${mode === "light" ? "#f0f0f0" : "#3a3a4a"}`,
//             fontSize: 13,
//             color: mode === "light" ? "#374151" : "#e5e7eb",
//           },
//           head: {
//             backgroundColor: mode === "light" ? "#f9fafb" : "#2a2a3a",
//             color: mode === "light" ? "#6b7280" : "#9ca3af",
//             fontWeight: 600,
//             fontSize: 12,
//             borderBottom: `1px solid ${mode === "light" ? "#e5e7eb" : "#3a3a4a"}`,
//           },
//         },
//       },
//       MuiCheckbox: {
//         styleOverrides: {
//           root: {
//             padding: 4,
//             color: mode === "light" ? "#d1d5db" : "#4a4a5a",
//             "&.Mui-checked": { color: "#3b82f6" },
//           },
//         },
//       },
//     },
//   });

// ─── Shared Styles ────────────────────────────────────────────────────────────

// Make toolbar button styles theme-aware
// const toolbarBtnSx = (mode: "light" | "dark"): SxProps<Theme> => ({
//   textTransform: "none",
//   fontSize: 12,
//   fontWeight: 500,
//   color: mode === "light" ? "#374151" : "#e5e7eb",
//   borderColor: mode === "light" ? "#e5e7eb" : "#3a3a4a",
//   px: 1.5,
//   py: 0.6,
//   minWidth: "auto",
//   gap: 0.5,
//   "&:hover": {
//     borderColor: mode === "light" ? "#d1d5db" : "#4a4a5a",
//     backgroundColor: mode === "light" ? "#f9fafb" : "#3a3a4a",
//   },
// });

// ─── Sub-components ───────────────────────────────────────────────────────────

// interface ToolbarProps {
//   config: ToolbarConfig;
// }

// function DataTableToolbar({ config }: ToolbarProps): JSX.Element {
//   const {
//     // dateRange,
//     toolbarStart,
//     toolbarEnd,
//     addLabel = "Add Item",
//     ctaIcon,
//     onAdd,
//     toolbarAnchorEl,
//     toolbarHandleClick,
//     toolbarHandleClose,
//     toolBarFilterList,
//     // toolbarSetDetails,
//   } = config;
//   const { mode } = useThemeMode();
//   const toolbarOpen = Boolean(toolbarAnchorEl);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 1,
//         px: 2,
//         py: 1.2,
//         borderBottom: "1px solid #f0f0f0",
//         flexWrap: "wrap",
//       }}
//     >
//       {/* Built-in left controls */}
//       {/* <Button
//         variant="outlined"
//         size="small"
//         sx={toolbarBtnSx(mode)}
//         startIcon={<SortIcon sx={{ fontSize: 15 }} />}
//         endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 14 }} />}
//       >
//         Sort
//       </Button> */}

//       <Button
//         variant="outlined"
//         size="small"
//         sx={toolbarBtnSx(mode)}
//         startIcon={<FilterListIcon sx={{ fontSize: 15 }} />}
//         endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 14 }} />}
//         onClick={(e) => {
//           toolbarHandleClick(e);
//           // toolbarSetDetails(row);
//         }}
//       >
//         Filter
//       </Button>

//       {/* {dateRange && (
//         <Button
//           variant="outlined"
//           size="small"
//           sx={{ ...toolbarBtnSx(mode), gap: 0.7 }}
//           startIcon={<CalendarTodayIcon sx={{ fontSize: 14 }} />}
//         >
//           {dateRange}
//         </Button>
//       )} */}

//       {/* Consumer-supplied left slot */}
//       {toolbarStart}

//       <Box sx={{ flex: 1 }} />

//       {/* Built-in right controls */}
//       {/* <Button
//         variant="outlined"
//         size="small"
//         sx={toolbarBtnSx(mode)}
//         startIcon={<AddCircleOutlineIcon sx={{ fontSize: 15 }} />}
//       >
//         Add Activity
//       </Button> */}
//       {/* <Button
//         variant="outlined"
//         size="small"
//         sx={toolbarBtnSx(mode)}
//         startIcon={<ContentCopyIcon sx={{ fontSize: 14 }} />}
//       >
//         Duplicate
//       </Button> */}
//       {/* <Button
//         variant="outlined"
//         size="small"
//         sx={toolbarBtnSx(mode)}
//         startIcon={<MapIcon sx={{ fontSize: 15 }} />}
//       >
//         Map
//       </Button> */}
//       {/* <Button
//         variant="outlined"
//         size="small"
//         sx={toolbarBtnSx(mode)}
//         startIcon={<AttachFileIcon sx={{ fontSize: 14 }} />}
//       >
//         Attach
//       </Button> */}
//       {/* <Button
//         variant="outlined"
//         size="small"
//         sx={toolbarBtnSx(mode)}
//         startIcon={<FileDownloadIcon sx={{ fontSize: 15 }} />}
//         endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 14 }} />}
//       >
//         Export
//       </Button> */}

//       {/* Consumer-supplied right slot */}
//       {toolbarEnd}

//       {/* Primary CTA */}
//       <Button
//         variant="contained"
//         size="small"
//         onClick={onAdd}
//         startIcon={ctaIcon}
//         sx={{
//           textTransform: "uppercase",
//           fontSize: "0.7em",
//           fontWeight: 500,
//           padding: "5px 20px",
//           backgroundColor: "primary.main",
//           borderRadius: "40px",
//           boxShadow: "none",
//           // "&:hover": { bgcolor: "#1d4ed8", boxShadow: "none" },
//         }}
//       >
//         {addLabel}
//       </Button>

//       <Menu
//         id="basic-menu-2"
//         anchorEl={toolbarAnchorEl}
//         open={toolbarOpen}
//         onClose={toolbarHandleClose}
//         slotProps={{
//           list: {
//             "aria-labelledby": "basic-button-2",
//           },
//         }}
//       >
//         {toolBarFilterList?.map((singleItems: any) => {
//           const { id, title, method } = singleItems;
//           return (
//             <MenuItem
//               sx={{
//                 fontWeight: 400,
//                 fontSize: "0.7em",
//                 color: mode === "light" ? "#374151" : "#e5e7eb",
//               }}
//               onClick={() => method()}
//               key={id}
//             >
//               {singleItems?.title}
//             </MenuItem>
//           );
//         })}
//         {/* <MenuItem>Delete</MenuItem> */}
//       </Menu>
//     </Box>
//   );
// }

// ─── Generic DataTable ────────────────────────────────────────────────────────

/**
 * A fully generic, reusable MUI data table.
 *
 * Usage example:
 * ```tsx
 * const columns: ColumnDef<Contact>[] = [
 *   { key: "name",    header: "Name",    render: (row) => <NameCell contact={row} /> },
 *   { key: "company", header: "Company" },
 *   { key: "status",  header: "Status",  render: (row) => <StatusChip status={row.status} /> },
 * ];
 *
 * <DataTable
 *   data={contacts}
 *   columns={columns}
 *   starFeature={{ getStarred: (r) => r.starred, onToggle: handleToggle }}
 *   toolbar={{ dateRange: "03/02/2025 – 03/03/2025", addLabel: "Add Contact", onAdd: handleAdd }}
 * />
 * ```
 */
export function DataTable<T extends { id: number }>({
  data,
  columns,
  // getRowId = (row, index) => index,
  selectable = true,
  starFeature,
  showRowActions = true,
  // onRowAction,
  // toolbar,
  anchorEl,
  handleClick,
  handleClose,
  setDetails,
  menuItemList,
}: DataTableProps<T>): JSX.Element {
  const open = Boolean(anchorEl);
  const [selected, setSelected] = useState<SelectedSet>(new Set());

  // ── Selection handlers ───────────────────────────────────────────────────

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelected(
      e.target.checked ? new Set(data?.map((_, index) => index)) : new Set(),
    );
  };

  const handleSelectRow = (rowIndex: number): void => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(rowIndex) ? next.delete(rowIndex) : next.add(rowIndex);
      return next;
    });
  };

  const allSelected: boolean =
    data?.length > 0 && selected?.size === data?.length;
  const indeterminate: boolean = selected?.size > 0 && !allSelected;

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          border: `1px solid "#e5e7eb"`,
          overflow: "hidden",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Toolbar */}
        {/* {toolbar !== false && toolbar && <DataTableToolbar config={toolbar} />} */}

        {/* Table */}
        <TableContainer component={Paper} elevation={0}>
          <Table size="small" sx={{ minWidth: 600, width: "100%" }}>
            {/* Head */}
            <TableHead>
              <TableRow>
                {selectable && (
                  <TableCell padding="checkbox" sx={{ width: 40 }}>
                    <Checkbox
                      size="small"
                      indeterminate={indeterminate}
                      checked={allSelected}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                )}

                {starFeature && <TableCell sx={{ width: 24 }} />}

                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    sx={{
                      width: col.width,
                      ...col.headerSx,
                      fontSize: "0.7em",
                    }}
                  >
                    {col.header}
                  </TableCell>
                ))}

                {showRowActions && <TableCell sx={{ width: 32 }} />}
              </TableRow>
            </TableHead>

            {/* Body */}
            <TableBody>
              {data?.map((row, index) => {
                const isSelected = selected?.has(index);
                const isStarred = starFeature?.getStarred(row) ?? false;

                return (
                  <TableRow
                    key={index}
                    hover
                    selected={isSelected}
                    sx={{
                      "&.Mui-selected": {
                        bgcolor: "#eff6ff",
                      },
                      "&.Mui-selected:hover": {
                        bgcolor: "#dbeafe",
                      },
                      cursor: "pointer",
                      "&:last-child td": { borderBottom: 0 },
                    }}
                  >
                    {/* Checkbox */}
                    {selectable && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          size="small"
                          checked={isSelected}
                          onChange={() => handleSelectRow(index)}
                        />
                      </TableCell>
                    )}

                    {/* Star */}
                    {starFeature && (
                      <TableCell sx={{ px: 0.5 }}>
                        <IconButton
                          size="small"
                          onClick={() => starFeature.onToggle(row)}
                          sx={{ p: 0.3 }}
                        >
                          {isStarred ? (
                            <StarIcon sx={{ fontSize: 16, color: "#f59e0b" }} />
                          ) : (
                            <StarBorderIcon
                              sx={{
                                fontSize: 16,
                                color: "#d1d5db",
                              }}
                            />
                          )}
                        </IconButton>
                      </TableCell>
                    )}

                    {/* Data cells */}
                    {columns?.map((col) => (
                      <TableCell
                        key={String(col?.key)}
                        sx={{ ...col.cellSx, fontSize: "0.65em" }}
                      >
                        {col?.render
                          ? col?.render(row, index)
                          : String(
                              (row as Record<string, unknown>)[
                                String(col?.key)
                              ] ?? "",
                            )}
                      </TableCell>
                    ))}

                    {/* Row actions */}
                    {showRowActions && (
                      <TableCell>
                        <Tooltip title="More options">
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              handleClick(e, index);
                              setDetails(row);
                            }}
                            sx={{
                              p: 0.3,
                              color: "#9ca3af",
                            }}
                          >
                            <MoreVertIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          {menuItemList?.map((singleMenu: any) => {
            const { id, title, method } = singleMenu;
            return (
              <MenuItem
                sx={{
                  fontWeight: 400,
                  fontSize: "0.7em",
                  color: "#374151",
                }}
                onClick={() => method()}
                key={id}
              >
                {title}
              </MenuItem>
            );
          })}
          {/* <MenuItem>Delete</MenuItem> */}
        </Menu>
      </Box>
    </div>
  );
}

export default DataTable;
