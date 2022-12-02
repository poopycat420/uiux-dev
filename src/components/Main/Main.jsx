import { useState } from "react";
import styled from "styled-components";
import { ExerciseSelection } from "../ExerciseSelection/ExerciseSelection";
import { Sidebar } from "../Sidebar/Sidebar";

const MainFlexLayout = styled.main`
  height: 90vh;
  display: grid;
  width: 100%;
  grid-template-columns: 25% 75%;
`;

export const Main = () => {
  const [selected, setSelected] = useState([]);

  // Add/Remove
  const addExercise = (exercise) => {
    setSelected([...selected, exercise]);
  };

  const removeExercise = (exercise) => {
    setSelected(
      selected.filter((selection) => selection.name !== exercise.name)
    );
  };

  return (
    <MainFlexLayout>
      <Sidebar
        selected={selected}
        setSelected={setSelected}
        removeExercise={removeExercise}
      />
      <ExerciseSelection
        selected={selected}
        addExercise={addExercise}
        removeExercise={removeExercise}
      />
    </MainFlexLayout>
  );
};
