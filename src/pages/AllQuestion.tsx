import { Box, Paper, Typography } from "@mui/material";
import NewFooter from "../layout/NewFooter";
import NewHeader from "../layout/NewHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../config/firebasemethods";

export default function AllQuestion() {
  const [allQuestions, setAllQuestions] = useState<any>([]);

  const navigate = useNavigate();

  const getQuestions = () => {
    getData("questions");
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <NewHeader />
      <Box className="container p-3">
        {allQuestions &&
          Array.isArray(allQuestions) &&
          allQuestions.length > 0 &&
          allQuestions.map((x, i) => (
            <Paper
              onClick={() => {
                navigate(`/question/${x.id}`);
              }}
              className="p-4 bg-ligt m-3"
              key={i}
            >
              <Typography className="fs-4 fw-bold">{x.question}</Typography>
              <Box>
                <Box>Total Answers : 567</Box>
              </Box>
            </Paper>
          ))}
      </Box>
      <NewFooter />
    </>
  );
}
