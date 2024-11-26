import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import LayoutSelector from "./LayoutSelector";
import { Box, Button, Typography } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";

const ResumeBuilder = () => {
  const [selectedLayout, setSelectedLayout] = useState("layout1");
  const resumeData = useSelector((state) => state.resume);
  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Resume", 10, 10);
    // Add more detailed resume data here
    doc.save("resume.pdf");
  };

  return (
    <>
      <Typography variant="h4" ml={5} p={2} gutterBottom>
        Build Your Resume
      </Typography>
      <ResumeForm onChange={() => {}} />
      <Box m={5} p={2} gutterBottom>
        <LayoutSelector
          selectedLayout={selectedLayout}
          onChange={setSelectedLayout}
        />
        <div ref={previewRef}>
          <ResumePreview
            resumeData={resumeData}
            selectedLayout={selectedLayout}
          />
        </div>
      </Box>
      <Box className="flex justify-center gap-4 my-4">
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Print Resume
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDownloadPDF}
        >
          Download as PDF
        </Button>
      </Box>
    </>
  );
};

export default ResumeBuilder;
