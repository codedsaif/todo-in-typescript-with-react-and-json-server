import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const TodoInput = () => {
  interface TodoProps {
    title: String;
    date: Date;
    description: String;
    priority: "low" | "medium" | "high";
    isCompleted: boolean;
  }
  const [todoValue, setTodoValue] = useState<TodoProps>({
    title: "",
    date: new Date(),
    description: "",
    priority: "low",
    isCompleted: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "date" ? new Date(e.target.value) : e.target.value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // console.log("TodoList", todoValue);
      const res = await fetch(`http://localhost:8080/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoValue),
      });
      const data = await res.json();
      console.log("Todo Added Successful", data);
    } catch (error) {
      console.log("ERROR IN ADDING TODO", error);
    }
  };
  const minDate = new Date().toISOString().slice(0, 16);

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
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-title"
        label="Title"
        variant="outlined"
        name="title"
        value={todoValue.title}
        onChange={handleChange}
      />
      <TextField
        id="outlined-dueDate"
        label="Due Date"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: minDate }}
        variant="outlined"
        name="date"
        value={todoValue.date.toISOString().slice(0, 16)}
        onChange={handleChange}
      />

      <TextField
        id="outlined-description"
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        sx={{ width: "100% !important" }}
        name="description"
        value={todoValue.description}
        onChange={handleChange}
      />

      <TextField
        id="outlined-priority"
        select
        label="Priority"
        variant="outlined"
        name="priority"
        value={todoValue.priority}
        onChange={handleChange}
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
