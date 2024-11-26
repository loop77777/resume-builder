import { Button, Typography } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import LayoutSelector from "./LayoutSelector";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

const ResumeBuilder = () => {
  const [selectedLayout, setSelectedLayout] = useState("layout1");
  const [isFormSaved, setIsFormSaved] = useState(false);
  const resumeData = useSelector((state) => state.resume);
  const previewRef = useRef();

  const handlePrint = () => {
    const input = previewRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.autoPrint();
      window.open(pdf.output("bloburl"), "_blank");
    });
  };

  const handleDownloadPDF = () => {
    const input = previewRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  const handleFormSave = () => {
    setIsFormSaved(true);
  };

  const handleEdit = () => {
    setIsFormSaved(false);
  };

  return (
    <div className="mx-auto my-4 max-w-screen-lg">
      <Typography variant="h4" ml={5} p={2} gutterBottom>
        {isFormSaved ? "Preview Your Resume" : "Build Your Resume"}
      </Typography>
      {!isFormSaved ? (
        <ResumeForm onChange={handleFormSave} />
      ) : (
        <>
          <div className="m-5 p-2 bg-white shadow-lg rounded-lg">
            <LayoutSelector
              selectedLayout={selectedLayout}
              onChange={setSelectedLayout}
            />
            <div ref={previewRef} className="resume-content">
              <ResumePreview
                resumeData={resumeData}
                selectedLayout={selectedLayout}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 my-4">
            <Button variant="contained" color="primary" onClick={handlePrint}>
              Print Resume
            </Button>
            <Button variant="contained" onClick={handleEdit}>
              Edit Resume
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDownloadPDF}
            >
              Download as PDF
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResumeBuilder;
