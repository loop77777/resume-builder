import React from 'react';
import ResumeTemplate1 from './Templates/ClassicLayout';
import ResumeTemplate2 from './Templates/ModernLayout';
import ResumeTemplate3 from './Templates/CreativeLayout';
import { Box, Typography } from '@mui/material';

const ResumePreview = ({ resumeData, selectedLayout }) => {
  const renderTemplate = () => {
    switch (selectedLayout) {
      case 'layout1':
        return <ResumeTemplate1 data={resumeData} />;
      case 'layout2':
        return <ResumeTemplate2 data={resumeData} />;
      case 'layout3':
        return <ResumeTemplate3 data={resumeData} />;
        default:
        return <ResumeTemplate1 data={resumeData} />;
    }
  };

  return (
    <Box>
      <Typography variant='h4'>Preview Your Resume</Typography>
      {renderTemplate()}
    </Box>
  );
};

export default ResumePreview;