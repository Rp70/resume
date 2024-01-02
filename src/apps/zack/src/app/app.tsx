import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

export function App() {
  // Use default theme`
  // Add <CssBaseline /> to reset all browser to a standard style
  // Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      This is resume template page
    </ThemeProvider>
  );
}

export default App;
