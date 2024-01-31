export const customStylesModal = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

export const customStylesTable = {
    rows: {
        style: {
            minHeight: "72px", // override the row height

            borderRadius: "2px",

            border: "1px solid #f9f9f9"
        }
    },
    headCells: {
        style: {
            paddingLeft: "8px", // override the cell padding for head cells
            paddingRight: "8px",
            fontSize: "16px"
        }
    },
    cells: {
        style: {
            paddingLeft: "8px", // override the cell padding for data cells
            paddingRight: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            fontSize: "15px"
        }
    }
};
