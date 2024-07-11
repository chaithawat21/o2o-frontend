import React,{useEffect} from "react";
import AppRouter from "./routes/AppRouter";
import useAuth from "./hooks/useAuth";


function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
