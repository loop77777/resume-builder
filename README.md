# Resume Builder

## Description

This is a web application that allows users to create and download a resume in PDF format.

## Features

## Technologies

### Frontend

- React
- Material-UI
- Tailwind CSS
- react-redux
- react-router-dom
- @mui/x-date-picker, @mui/x-date-picker-pro - Date picker
- react-to-print - print resume
- react-hook-form - form validation
- react-quill - rich text editor

#### Theme

- [resume-builder-theme](./src/theme/resume-theme-codes.txt)

#### Components

- Header
- Layout: LayoutSelector, ResumePreview
- Resume form: PersonalInfo, Experience, Education, Skills, Projects
- ResumeBuilder: Manages the form, layout selection, preview, and download/print functionality.
- ResumePreview: Dynamically renders the selected resume template.
- ResumeTemplate1 and ResumeTemplate2: Different layouts for the resume.
- LayoutSelector: Allows the user to select a layout.
- SaveResume: Handles saving the resume as a PDF.
- Footer

#### Resume Templates

Template 1: Classic Layout: A traditional resume layout with sections stacked vertically.
Template 2: Modern Layout: A modern layout with a sidebar for skills and a main content area for other sections.
Template 3: Creative Layout: A creative layout with a split view for experience and education, and a centered header.

---

dayjs Formatting: Used dayjs to format the dateRange values to strings before rendering them.
Grid2: Used Grid2 for layout in ResumeTemplate2 and ResumeTemplate3.
dangerouslySetInnerHTML: Used dangerouslySetInnerHTML to render the HTML content in the ResumePreview component.

Why dangerouslySetInnerHTML is Used:
Rendering Rich Text: When using rich text editors like ReactQuill, the content is often stored as HTML strings. To render this HTML content correctly in your React components, you need to use dangerouslySetInnerHTML.
HTML Content: If your data includes HTML tags (e.g., <p>, <b>, <i>), using dangerouslySetInnerHTML ensures that these tags are rendered as HTML elements rather than plain text.
