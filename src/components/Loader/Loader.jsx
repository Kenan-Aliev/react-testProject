import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loader({ isAssetsFirstLoad }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: isAssetsFirstLoad && "100vh",
        alignItems: "center",
        justifyContent: "center",
        // width: "100vw",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
