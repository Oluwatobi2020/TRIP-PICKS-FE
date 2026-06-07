import * as React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import {useModal} from "../../hooks"

interface BaseModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  open?: boolean;
  disableBackdropClose?: boolean;
  nonGlobal?: boolean;
  [key: string]: any;
}

const style = {
//   bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
  width: "100%",
  padding: "2rem 3rem 2rem 3rem",
  overflowX: "auto",
};

const BaseModal = ({
  children,
  onClose,
  open,
  disableBackdropClose,
  nonGlobal,
  ...props
}: BaseModalProps) => {
  const { showModal } = useModal();

  const handleClose = (!disableBackdropClose && onClose) ? onClose : undefined;

  return (
    <div>
      <Dialog
        open={nonGlobal ? open ?? false : showModal ?? false}
        onClose={handleClose}
        {...props}
      >
        <Box sx={style}>{children}</Box>
      </Dialog>
    </div>
  );
};

export default BaseModal;
