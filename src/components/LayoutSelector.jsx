import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const LayoutSelector = ({ selectedLayout, onChange }) => (
  <FormControl variant="outlined" fullWidth>
    <InputLabel id="layout-selector-label">Select Layout</InputLabel>
    <Select
      labelId="layout-selector-label"
      value={selectedLayout}
      onChange={(e) => onChange(e.target.value)}
      label="Select Layout"
    >
      <MenuItem value="layout1">Layout 1</MenuItem>
      <MenuItem value="layout2">Layout 2</MenuItem>
      <MenuItem value="layout3">Layout 3</MenuItem>
    </Select>
  </FormControl>
);

export default LayoutSelector;
