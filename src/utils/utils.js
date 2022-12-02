export const exerciseDifficultyScore = (exercise) => {
  if (exercise.difficulty === "Beginner") return 1;
  else if (exercise.difficulty === "Intermediate") return 2;
  else return 3;
};

export const sumArray = (arr) =>
  arr.reduce((accumulated, curr) => accumulated + curr, 0);
