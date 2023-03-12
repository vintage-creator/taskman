import React from "react";
import Router from "./Router/Router";
import { useTheme} from "switch-mode";

function App() {
const {theme} = useTheme();
  
  return (
    <div style={{backgroundColor: theme === "light" ? "#080910" : "white",
    color: theme === "light" ? "white" : "#080910",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px"}} className='App'>
      <Router/>
    </div>
  );
}

export default App;
