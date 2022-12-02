import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import allExercises from "../../data/exercises.json";
import { exerciseDifficultyScore } from "../../utils/utils";
import { ExerciseCard } from "../ExerciseCard/ExerciseCard";

const StyledSelectionArea = styled.div`
  border-left: 1px solid black;
  padding: 5% 5% 20% 5%;
  overflow: auto;
  background-color: #e8f1f5;
`;

const SelectionControls = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
`;

const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  justify-content: space-evenly;
  height: 100%;
`;

export const ExerciseSelection = ({
  selected,
  addExercise,
  removeExercise,
}) => {
  const [exercises, setExercises] = useState(allExercises);
  const [difficulties, setDifficulties] = useState([
    "Beginner",
    "Intermediate",
    "Advanced",
  ]);
  const [focuses, setFocuses] = useState(["Push", "Pull", "Legs", "Core"]);
  const [sorts, setSorts] = useState([]);

  const handleDifficultiesChange = (event) => {
    const {
      target: { value },
    } = event;
    setDifficulties(value);
  };

  const handleFocusesChange = (event) => {
    const {
      target: { value },
    } = event;
    setFocuses(value);
  };

  const handleSortsChange = (event) => {
    const {
      target: { value },
    } = event;
    setSorts(value.sort());
  };

  useEffect(() => {
    // Apply filters first
    let newExercises = allExercises.filter(
      (exercise) =>
        difficulties.includes(exercise.difficulty)
    );

    newExercises = newExercises.filter(
      (exercise) => focuses.includes(exercise.focus)
    )

    // Apply sorts
    if (sorts.includes("Alphabetically")) {
      newExercises = newExercises.sort((exercise1, exercise2) => {
        if (exercise1.name < exercise2.name) return -1;
        if (exercise1.name > exercise2.name) return 1;
        return 0;
      });
    }
    if (sorts.includes("By Difficulty")) {
      newExercises = newExercises.sort(
        (exercise1, exercise2) =>
          exerciseDifficultyScore(exercise1) -
          exerciseDifficultyScore(exercise2)
      );
    }

    // Apply changes
    setExercises(newExercises);
  }, [difficulties, focuses, sorts]);

  return (
    <StyledSelectionArea>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>Select Exercises</Typography>
      <SelectionControls>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Focus</InputLabel>
          <Select
            multiple
            onChange={handleFocusesChange}
            value={focuses}
            input={<OutlinedInput label="Focuses" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} color="primary" />
                ))}
              </Box>
            )}
          >
            {["Push", "Pull", "Core", "Legs"].map((focus) => (
              <MenuItem key={focus} value={focus}>
                <Checkbox checked={focuses.indexOf(focus) > -1} />
                {focus}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Difficulties</InputLabel>
          <Select
            multiple
            onChange={handleDifficultiesChange}
            value={difficulties}
            input={<OutlinedInput label="Difficulty" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} color="secondary" />
                ))}
              </Box>
            )}
          >
            {["Beginner", "Intermediate", "Advanced"].map((difficulty) => (
              <MenuItem key={difficulty} value={difficulty}>
                <Checkbox checked={difficulties.indexOf(difficulty) > -1} />
                {difficulty}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Sort</InputLabel>
          <Select
            multiple
            onChange={handleSortsChange}
            value={sorts}
            input={<OutlinedInput label="Sort" />}
            renderValue={(selected) => selected.join(", ")}
          >
            {["Alphabetically", "By Difficulty"].map((value) => (
              <MenuItem key={value} value={value}>
                <Checkbox checked={sorts.indexOf(value) > -1} />
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectionControls>
      <CardArea>
        {exercises.map((exercise) => {
          const isSelected =
            selected.filter((elt) => elt.name === exercise.name).length !== 0;
          const add = () => addExercise(exercise);
          const remove = () => removeExercise(exercise);
          return (
            <ExerciseCard
              exercise={exercise}
              key={exercise.name}
              add={add}
              remove={remove}
              isSelected={isSelected}
            />
          );
        })}
      </CardArea>
    </StyledSelectionArea>
  );
};
