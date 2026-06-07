

interface TableButtonTypes {
  index: number;
  pageNo: number;
  currentPage: number;
  handlePageChange: (currentPage: number) => {};
}

const TableButton = ({ index, pageNo, currentPage, handlePageChange }: TableButtonTypes) => {
  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
      <button
        key={index}
        style={{
          backgroundColor: index === currentPage ? "primary.main" : "grey",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "0.5rem 0.8rem 0.5rem 0.8rem",
          marginRight: "0.5rem",
          fontSize: "0.7em",
          fontWeight: 550,
        }}
        // className={`btn ${
        //   pageNo === currentPage ? "btn-primary" : "btn-secondary"
        // } mx-1`}
        onClick={() => handlePageChange(currentPage)}
      >
        {currentPage}
      </button>
    </div>
  );
};

export default TableButton;
