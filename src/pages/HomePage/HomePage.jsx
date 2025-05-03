import { Container, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={10}>
        <HomeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome Home!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          This is your starting point. Explore your contacts or register to get started.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;

  
