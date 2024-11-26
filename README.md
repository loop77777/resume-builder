# Resume Builder Technical Documentation

## Overview

The Resume Builder is a web application that allows users to create, preview, and download resumes in PDF format. The application is built using modern web technologies and follows a component-based architecture.

## Architecture

### Component-Based Architecture

The application is structured using a component-based architecture, which promotes reusability and maintainability. The main components include:

- **Header**: Displays the application title and a theme switcher.
- **Footer**: Contains links to privacy policy, terms of service, and contact information.
- **ResumeBuilder**: Manages the form, layout selection, preview, and download/print functionality.
- **ResumeForm**: Handles user input for personal details, experience, education, skills, and projects.
- **ResumePreview**: Dynamically renders the selected resume template.
- **LayoutSelector**: Allows the user to select a layout.
- **ResumeTemplate1, ResumeTemplate2, ResumeTemplate3**: Different layouts for the resume.

### State Management

The application uses Redux for state management. The state is divided into slices, with the main slice being `resumeSlice`, which manages the resume data.

### Routing

The application uses `react-router-dom` for client-side routing, allowing users to navigate between different views.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for building responsive and accessible components.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **react-redux**: Official React bindings for Redux.
- **react-router-dom**: Declarative routing for React applications.
- **@mui/x-date-pickers**: Date picker components from Material-UI.
- **react-to-print**: A library for printing React components.
- **react-hook-form**: A library for managing form state and validation.
- **react-quill**: A rich text editor for React.
- **html2canvas**: A library for converting HTML to canvas.
- **jsPDF**: A library for generating PDF documents.

### Theme

The application supports light and dark themes, which are managed using Material-UI's theming capabilities. The theme configuration is stored in `Theme.js`.

- [resume builder color pallate](./src/theme/resume-theme-codes.txt)

## Problem Solving

### Issue 1: Rendering Rich Text Content

**Problem**: The application needed to render rich text content from a WYSIWYG editor.

**Solution**: We used `react-quill` for rich text editing and `dangerouslySetInnerHTML` to render the HTML content. To ensure security, we sanitized the HTML content before rendering.

### Issue 2: Consistent PDF Generation

**Problem**: The generated PDF was not consistent across different screen sizes, and some content was missing.

**Solution**: We used `html2canvas` to capture the HTML content as an image and `jsPDF` to generate the PDF. We set a fixed width for the resume content using Tailwind CSS to ensure consistency.

### Issue 3: Conditional Rendering and Navigation

**Problem**: The application needed to conditionally render the form and preview sections and allow users to navigate between them.

**Solution**: We used state management to track whether the form was saved and conditionally rendered the appropriate sections. We also added an edit button to allow users to go back and edit the resume.

### Issue 4: Responsive Design

**Problem**: The header and content needed to be responsive and aligned properly on different screen sizes.

**Solution**: We used Material-UI's `Container` component to center the content and applied responsive styles using Tailwind CSS.

## Resume Builder Features

### Resume Templates

Template 1: Classic Layout: A traditional resume layout with sections stacked vertically.
Template 2: Modern Layout: A modern layout with a sidebar for skills and a main content area for other sections.
Template 3: Creative Layout: A creative layout with a split view for experience and education, and a centered header.

### Form Sections

dayjs Formatting: Used dayjs to format the dateRange values to strings before rendering them.
Grid2: Used Grid2 for layout in ResumeTemplate2 and ResumeTemplate3.
dangerouslySetInnerHTML: Used dangerouslySetInnerHTML to render the HTML content in the ResumePreview component.

Why dangerouslySetInnerHTML is Used:
Rendering Rich Text: When using rich text editors like ReactQuill, the content is often stored as HTML strings. To render this HTML content correctly in your React components, you need to use dangerouslySetInnerHTML.
HTML Content: If your data includes HTML tags (e.g., <p>, <b>, <i>), using dangerouslySetInnerHTML ensures that these tags are rendered as HTML elements rather than plain text.

#### PDF Generation

HTML to Canvas: Used html2canvas to convert the HTML content to a canvas element.

## Conclusion

The Resume Builder application leverages modern web technologies and follows best practices for component-based architecture and state management. By addressing various challenges, we ensured a consistent and user-friendly experience across different devices and screen sizes. The use of libraries like `html2canvas` and `jsPDF` enabled us to provide robust PDF generation and printing functionality.
