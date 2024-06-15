import { Box, Typography } from "@mui/material";
import NewFooter from "../layout/NewFooter";
import NewHeader from "../layout/NewHeader";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function Question() {
  return (
    <>
      <NewHeader />
      <Box className="container p-3">
        <h1>
          <QuestionMarkIcon fontSize="large" />
        </h1>
         <Typography className="fs-1">gh hko efto eooj</Typography>
      </Box>
      <NewFooter />
    </>
  );
}
