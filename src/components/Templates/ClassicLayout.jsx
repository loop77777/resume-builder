import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import dayjs from "dayjs";

const ResumeTemplate1 = ({ data }) => (
  <Box className="p-8 bg-white shadow-lg rounded-lg">
    <Typography variant="h4" className="text-center font-bold mb-4">
      {data.details.firstName} {data.details.lastName}
    </Typography>
    <Typography variant="h6" className="text-center mb-4">
      {data.details.title}
    </Typography>
    <Divider className="my-4" />
    <Typography variant="h5" className="font-semibold mb-2">
      Summary
    </Typography>
    <div dangerouslySetInnerHTML={{ __html: data.summary }} className="mb-4" />
    <Divider className="my-4" />
    <Typography variant="h5" className="font-semibold mb-2">
      Experience
    </Typography>
    {data.experience.map((exp, index) => (
      <Box key={index} className="mb-4">
        <Typography variant="h6" className="font-semibold">
          {exp.company}
        </Typography>
        <Typography variant="subtitle1" className="italic">
          {exp.role} ({dayjs(exp.dateRange[0]).format("MMM YYYY")} -{" "}
          {dayjs(exp.dateRange[1]).format("MMM YYYY")})
        </Typography>
        <Typography variant="body2" className="mb-2">
          {exp.location}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: exp.description }} />
      </Box>
    ))}
    <Divider className="my-4" />
    <Typography variant="h5" className="font-semibold mb-2">
      Education
    </Typography>
    {data.education.map((edu, index) => (
      <Box key={index} className="mb-4">
        <Typography variant="h6" className="font-semibold">
          {edu.institution}
        </Typography>
        <Typography variant="subtitle1" className="italic">
          {edu.degree} ({dayjs(edu.dateRange[0]).format("MMM YYYY")} -{" "}
          {dayjs(edu.dateRange[1]).format("MMM YYYY")})
        </Typography>
        <Typography variant="body2" className="mb-2">
          {edu.location}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: edu.description }} />
      </Box>
    ))}
    <Divider className="my-4" />
    <Typography variant="h5" className="font-semibold mb-2">
      Skills
    </Typography>
    <ul className="list-disc list-inside">
      {data.skills.map((skill, index) => (
        <li key={index}>{skill.skill}</li>
      ))}
    </ul>
    <Divider className="my-4" />
    <Typography variant="h5" className="font-semibold mb-2">
      Projects
    </Typography>
    {data.projects.map((project, index) => (
      <Box key={index} className="mb-4">
        <Typography variant="h6" className="font-semibold">
          {project.name}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </Box>
    ))}
  </Box>
);

export default ResumeTemplate1;
