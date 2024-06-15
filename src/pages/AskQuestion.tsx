import { Box } from "@mui/material";
import NewButton from "../components/NewButton";
import NewFooter from "../layout/NewFooter";
import NewHeader from "../layout/NewHeader";
import NewTextarea from "../components/NewTextarea";
import { useState } from "react";
import { sendData } from "../config/firebasemethods";

export default function AskQuestion() {
  const [question, setQuestion] = useState("");

  const addData = () => {
    let obj = {
      question: question,
      createdAt: JSON.stringify(new Date()),
    };

    sendData("questions", obj);
  };

  return (
    <>
      <NewHeader />
      <Box className="container p-3">
        <Box>
          <NewTextarea
            value={question}
            onChange={(e: any) => {
              setQuestion(e.target.value);
            }}
            label="Ask Question"
          />
          <Box className="py-3">
            <NewButton onClick={addData} label="Submit" />
          </Box>
        </Box>
      </Box>
      <NewFooter />
    </>
  );
}
