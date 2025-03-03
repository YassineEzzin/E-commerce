
import './App.css'
import Header1 from './components/header/Header1.jsx'
import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme.jsx";
import Header2 from './components/header/Header2.jsx';
import Header3 from './components/header/Header3.jsx';


function App() {
  const [theme, colorMode] = useMode();
Header1

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Header1/>
        <Header2/>
        <Header3/>
      </div>
      </ThemeProvider>

    </ColorModeContext.Provider>
  )
}

export default App
