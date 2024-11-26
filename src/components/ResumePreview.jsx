import { Box } from "@mui/material";
import React from "react";
import ResumeTemplate1 from "./Templates/ClassicLayout";
import ResumeTemplate3 from "./Templates/CreativeLayout";
import ResumeTemplate2 from "./Templates/ModernLayout";

const ResumePreview = ({ resumeData, selectedLayout }) => {
  const renderTemplate = () => {
    switch (selectedLayout) {
      case "layout1":
        return <ResumeTemplate1 data={resumeData} />;
      case "layout2":
        return <ResumeTemplate2 data={resumeData} />;
      case "layout3":
        return <ResumeTemplate3 data={resumeData} />;
      default:
        return <ResumeTemplate1 data={resumeData} />;
    }
  };

  return <Box>{renderTemplate()}</Box>;
};

export default ResumePreview;
