import { Card, CardHeader, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export const SidebarCard = ({ exercise, removeExercise }) => {
  return (
    <Card>
      <CardHeader
        title={exercise.name}
        action={
          <IconButton onClick={() => removeExercise(exercise)}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        }
      />
    </Card>
  );
};
