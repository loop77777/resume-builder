import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Button, TextField, IconButton, Typography, Box, Divider } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setFields } from '../store/resumeSlice';
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
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
  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      details: {
        title: '',
        firstName: '',
        lastName: '',
      },
      summary: '',
      experience: [{ company: '', role: '', description: '', dateRange: [null, null], location: '' }],
      education: [{ institution: '', degree: '', description: '', dateRange: [null, null], location: '' }],
      skills: [{ skill: '' }],
      projects: [{ name: '', description: '' }],
    },
  });

  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: 'experience',
  });

  const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
    control,
    name: 'education',
  });

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: 'skills',
  });

  const { fields: projectFields, append: appendProject, remove: removeProject } = useFieldArray({
    control,
    name: 'projects',
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    onChange(data);
    dispatch(setFields(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 mx-12 p-4">
      {/* Details Section */}
      <Typography variant="h6" gutterBottom>
        Your Details
      </Typography>
      <Controller
        name="details.title"
        control={control}
        rules={{ required: 'Job Title is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Job Title"
            variant="outlined"
            margin="dense"
            error={!!errors.details?.title}
            helperText={errors.details?.title?.message}
          />
        )}
      />
      <Box display={"flex"} gap={2}>
        <Controller
          name="details.firstName"
          control={control}
          rules={{ required: 'First Name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              variant="outlined"
              margin="dense"
              error={!!errors.details?.firstName}
              helperText={errors.details?.firstName?.message}
            />
          )}
        />
        <Controller
          name="details.lastName"
          control={control}
          rules={{ required: 'Last Name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              variant="outlined"
              margin="dense"
              error={!!errors.details?.lastName}
              helperText={errors.details?.lastName?.message}
            />
          )}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Summary Section */}
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Controller
        name="summary"
        control={control}
        rules={{ required: 'Summary is required' }}
        render={({ field }) => (
          <ReactQuill
            {...field}
            theme="snow"
            placeholder="Write a brief summary about yourself"
            style={{ marginBottom: '16px' }}
          />
        )}
      />
      {errors.summary && <Typography color="error">{errors.summary.message}</Typography>}

      <Divider sx={{ my: 2 }} />

      {/* Experience Section */}
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>
      {experienceFields.map((item, index) => (
        <Box key={item.id} display="flex" flexDirection="column" gap={2} marginBottom={2}>
          <Controller
            name={`experience[${index}].company`}
            control={control}
            rules={{ required: 'Company is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Company"
                variant="outlined"
                margin="dense"
                error={!!errors.experience?.[index]?.company}
                helperText={errors.experience?.[index]?.company?.message}
              />
            )}
          />
          <Controller
            name={`experience[${index}].role`}
            control={control}
            rules={{ required: 'Role is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Role"
                variant="outlined"
                margin="dense"
                error={!!errors.experience?.[index]?.role}
                helperText={errors.experience?.[index]?.role?.message}
              />
            )}
          />
          <Typography variant="body2" gutterBottom>
            Period
          </Typography>
          <Box display={"flex"} gap={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name={`experience[${index}].dateRange`}
                control={control}
                render={({ field }) => (
                  <DateRangePicker
                    {...field}
                    startText="Start Date"
                    endText="End Date"
                    renderInput={(startProps, endProps) => (
                      <>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                      </>
                    )}
                  />
                )}
              />
            </LocalizationProvider>
            <Controller
              name={`experience[${index}].location`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Location"
                  variant="outlined"
                  margin="dense"
                />
              )}
            />
          </Box>
          <Controller
            name={`experience[${index}].description`}
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                placeholder="Describe your role and responsibilities"
                style={{ marginBottom: '16px' }}
              />
            )}
          />
          {errors.experience?.[index]?.description && <Typography color="error">{errors.experience[index].description.message}</Typography>}
          <IconButton
            onClick={() => removeExperience(index)}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Remove />
          </IconButton>
        </Box>
      ))}
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => appendExperience({ company: '', role: '', description: '', dateRange: [null, null], location: '' })}
        startIcon={<Add />}
      >
        Add Experience
      </Button>

      <Divider sx={{ my: 2 }} />

      {/* Education Section */}
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      {educationFields.map((item, index) => (
        <Box key={item.id} display="flex" flexDirection="column" gap={2} marginBottom={2}>
          <Controller
            name={`education[${index}].institution`}
            control={control}
            rules={{ required: 'Institution is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Institution"
                variant="outlined"
                margin="dense"
                error={!!errors.education?.[index]?.institution}
                helperText={errors.education?.[index]?.institution?.message}
              />
            )}
          />
          <Controller
            name={`education[${index}].degree`}
            control={control}
            rules={{ required: 'Degree is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Degree"
                variant="outlined"
                margin="dense"
                error={!!errors.education?.[index]?.degree}
                helperText={errors.education?.[index]?.degree?.message}
              />
            )}
          />
          <Typography variant="body2" gutterBottom>
            Period
          </Typography>
          <Box display={"flex"} gap={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name={`education[${index}].dateRange`}
                control={control}
                render={({ field }) => (
                  <DateRangePicker
                    {...field}
                    startText="Start Date"
                    endText="End Date"
                    renderInput={(startProps, endProps) => (
                      <>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                      </>
                    )}
                  />
                )}
              />
            </LocalizationProvider>
            <Controller
              name={`education[${index}].location`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Location"
                  variant="outlined"
                  margin="dense"
                />
              )}
            />
          </Box>
          <Controller
            name={`education[${index}].description`}
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                placeholder="Describe your education"
                style={{ marginBottom: '16px' }}
              />
            )}
          />
          {errors.education?.[index]?.description && <Typography color="error">{errors.education[index].description.message}</Typography>}
          <IconButton
            onClick={() => removeEducation(index)}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Remove />
          </IconButton>
        </Box>
      ))}
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => appendEducation({ institution: '', degree: '', description: '', dateRange: [null, null], location: '' })}
        startIcon={<Add />}
      >
        Add Education
      </Button>

      <Divider sx={{ my: 2 }} />

      {/* Skills Section */}
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      {skillFields.map((item, index) => (
        <Box key={item.id} display="flex" alignItems="center" marginBottom={2}>
          <Controller
            name={`skills[${index}].skill`}
            control={control}
            rules={{ required: 'Skill is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Skill"
                variant="outlined"
                margin="dense"
                error={!!errors.skills?.[index]?.skill}
                helperText={errors.skills?.[index]?.skill?.message}
              />
            )}
          />
          <IconButton
            onClick={() => removeSkill(index)}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Remove />
          </IconButton>
        </Box>
      ))}
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => appendSkill({ skill: '' })}
        startIcon={<Add />}
      >
        Add Skill
      </Button>

      <Divider sx={{ my: 2 }} />

      {/* Projects Section */}
      <Typography variant="h6" gutterBottom>
        Projects
      </Typography>
      {projectFields.map((item, index) => (
        <Box key={item.id} display="flex" flexDirection="column" gap={2} marginBottom={2}>
          <Controller
            name={`projects[${index}].name`}
            control={control}
            rules={{ required: 'Project Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Project Name"
                variant="outlined"
                margin="dense"
                error={!!errors.projects?.[index]?.name}
                helperText={errors.projects?.[index]?.name?.message}
              />
            )}
          />
          <Controller
            name={`projects[${index}].description`}
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme="snow"
                placeholder="Describe your project"
                style={{ marginBottom: '16px' }}
              />
            )}
          />
          {errors.projects?.[index]?.description && <Typography color="error">{errors.projects[index].description.message}</Typography>}
          <IconButton
            onClick={() => removeProject(index)}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Remove />
          </IconButton>
        </Box>
      ))}
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => appendProject({ name: '', description: '' })}
        startIcon={<Add />}
      >
        Add Project
      </Button>
      {/* <Divider sx={{ my: 2 }} /> */}
      <br />
      <br />
      <Button type="submit" variant="contained" color="secondary" style={{ marginTop: '16px' }}>
        Save
      </Button>
    </form>
  );
};

export default ResumeForm;
