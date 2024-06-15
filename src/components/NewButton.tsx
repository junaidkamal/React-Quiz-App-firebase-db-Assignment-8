import React from "react";
import { Button } from "@mui/material";

const NewButton = (props: any) => {
    const {label, onClick} = props;
  return (
    <>
      <Button
      color="secondary"
      variant="contained"
      onClick={onClick}
      sx={{ borderRadius: 50, paddingX: 10 }}>
        {label}
      </Button>

    </>
  );
}

export default NewButton;
