import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export const ExerciseCard = ({ exercise, add, remove, isSelected }) => {
  return (
    <Card sx={{ width: "45%" }}>
      <CardHeader title={exercise.name} />
      <CardMedia
        component="img"
        height="300"
        src={require(`../../images/${exercise.image}`)}
      />
      <CardActions>
        {!isSelected ? (
          <IconButton aria-label="Add exercise" onClick={add}>
            <AddCircleOutlineIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="Remove exercise" onClick={remove}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        )}
        <Chip label={exercise.focus} color="primary" />
        {/* <Chip label={exercise.type} color="primary" /> */}
        <Chip label={exercise.difficulty} color="secondary" />
      </CardActions>
    </Card>
  );
};
