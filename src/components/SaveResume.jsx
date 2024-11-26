import React from 'react';
import jsPDF from 'jspdf';

const SaveResume = ({ resumeData }) => {
  const handleSave = () => {
    const doc = new jsPDF();
    doc.text('Resume', 10, 10);
    // Add more detailed resume data here
    doc.save('resume.pdf');
  };

  return <button onClick={handleSave}>Save as PDF</button>;
};

export default SaveResume;