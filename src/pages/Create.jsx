import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

export default function Create() {
  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>

      {/* icons */}
    </Container>
  );
}
