import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const TodoInput = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "420px",
        m: "auto",
        "& > :not(style)": { m: 1, width: "46%" },
      }}
      noValidate
    >
      <TextField id="outlined-title" label="Title" variant="outlined" />
      <TextField
        id="outlined-dueDate"
        label="Due Date"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <TextField
        id="outlined-description"
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        sx={{ width: "100% !important" }}
      />

      <TextField
        id="outlined-priority"
        select
        label="Priority"
        variant="outlined"
        value=""
      >
        <MenuItem value="high">High</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="low">Low</MenuItem>
      </TextField>

      <TextField
        sx={{
          "& > :not(style)": { m: "auto", width: "100%" },
        }}
        id="outlined-submit-input"
        type="submit"
        value="Add Todo"
      />
    </Box>
  );
};

export default TodoInput;
