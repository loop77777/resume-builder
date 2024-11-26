import React from "react";
import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isBetween from "dayjs/plugin/isBetween";
import advancedFormat from "dayjs/plugin/advancedFormat";

// Extend dayjs with the necessary plugins
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(isBetween);
dayjs.extend(advancedFormat);

const ResumeForm = ({ onChange }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      fields: [{ name: "", value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const onSubmit = (data) => {
    onChange(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 mx-12 p-4">
      {/* Details */}
      <Typography variant="h6" gutterBottom>
        Your Details
      </Typography>
      <TextField
        name="title"
        label="Job Title"
        variant="outlined"
        margin="dense"
      />
      <Box display={"flex"} gap={2}>
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          margin="dense"
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          margin="dense"
        />
      </Box>
      <Box display={"flex"} gap={2}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          margin="dense"
        />
        <TextField
          name="phone"
          label="Phone"
          variant="outlined"
          margin="dense"
        />
      </Box>
      <br />
      <Divider className="my-4" />
      <br />
      {/* Bio */}
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Typography variant="body2" gutterBottom width={1 / 2}>
        Be concise - The harsh reality is that hiring managers spend an average
        of six seconds on each resume. So, you'll want to keep your summary
        short and sweet.
      </Typography>
      <Controller
        name="summary"
        control={control}
        render={({ field }) => (
          <ReactQuill
            {...field}
            theme="snow"
            placeholder="Summary"
            style={{ width: "100%", marginBottom: "16px" }}
          />
        )}
      />
      <br />
      <Divider className="my-4" />
      <br />
      {/* Experience */}
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>
      <Typography variant="body2" gutterBottom width={1 / 2}>
        List your most recent experience first. Include your job title, the
        company name, and dates worked. Add up to 5 bullet points describing
        your responsibilities and achievements.
      </Typography>
      <Box display={"flex"} gap={2}>
        <TextField
          name="jobTitle"
          label="Job Title"
          variant="outlined"
          margin="dense"
        />
        <TextField
          name="company"
          label="Company/Employer"
          variant="outlined"
          margin="dense"
        />
      </Box>
      <Typography variant="body2" gutterBottom>
        Period
      </Typography>
      <Box display={"flex"} gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker localeText={{ start: "Start", end: "End" }} />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          name="location"
          label="Location"
          variant="outlined"
          margin="dense"
        />
      </Box>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <ReactQuill
            {...field}
            theme="snow"
            placeholder="Description"
            style={{ width: "100%", marginBottom: "16px" }}
          />
        )}
      />
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => append({ name: "", value: "" })}
        startIcon={<Add />}
      >
        Add Field
      </Button>
      <br />
      <br />
      <Divider className="my-4" />
      <br />
      {/* Education */}
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      <Typography variant="body2" gutterBottom width={1 / 2}>
        List your most recent education first. Include your degree, major,
        school name, and dates attended. Add up to 5 bullet points describing
        your responsibilities and achievements.
      </Typography>
      <Box display={"flex"} gap={2}>
        <TextField
          name="degree"
          label="Degree"
          variant="outlined"
          margin="dense"
        />
        <TextField
          name="major"
          label="Major"
          variant="outlined"
          margin="dense"
        />
      </Box>
      <Box display={"flex"} gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker localeText={{ start: "Start", end: "End" }} />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          name="location"
          label="Location"
          variant="outlined"
          margin="dense"
        />
      </Box>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <ReactQuill
            {...field}
            theme="snow"
            placeholder="Description"
            style={{ width: "100%", marginBottom: "16px" }}
          />
        )}
      />
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => append({ name: "", value: "" })}
        startIcon={<Add />}
      >
        Add Field
      </Button>
      <br />
      <br />
      <Divider className="my-4" />
      <br />
      {/* Skills */}
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body2" gutterBottom width={1 / 2}>
        List your most relevant skills first. Include up to 10 skills.
      </Typography>
      {fields.map((field, index) => (
        <Box display={"flex"} gap={2} key={field.id}>
          <TextField
            {...`fields.${index}.name`}
            label="Skill"
            variant="outlined"
            margin="dense"
          />
          <IconButton
            type="button"
            onClick={() => remove(index)}
            color="secondary"
          >
            <Remove />
          </IconButton>
        </Box>
      ))}
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => append({ name: "", value: "" })}
        startIcon={<Add />}
      >
        Add Field
      </Button>
      <br />
      <br />
      <Divider className="my-4" />
      <br />
      {/* Projects */}
      <Typography variant="h6" gutterBottom>
        Projects & Achievements
      </Typography>
      <Typography variant="body2" gutterBottom width={1 / 2}>
        List your most relevant projects and achievements first. Include up to 5
        projects and achievements.
      </Typography>
      {fields.map((field, index) => (
        <Box display={"flex"} gap={2} key={field.id}>
          <TextField
            {...`fields.${index}.name`}
            label="Project/Achievement"
            variant="outlined"
            margin="dense"
          />
          <Controller
            name={`fields.${index}.value`}
            control={control}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                placeholder="Description"
                style={{ width: "100%", marginBottom: "16px" }}
              />
            )}
          />
          <IconButton
            type="button"
            onClick={() => remove(index)}
            color="secondary"
          >
            <Remove />
          </IconButton>
        </Box>
      ))}
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => append({ name: "", value: "" })}
        startIcon={<Add />}
      >
        Add Field
      </Button>
      <br />
      <br />
      <br />
      <Button type="submit" variant="contained" color="secondary">
        Save
      </Button>
    </form>
  );
};

export default ResumeForm;
