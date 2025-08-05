import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Take Career Quiz</Button>
      <Button variant="outlined">Explore Paths</Button>
    </Stack>
  );
}
