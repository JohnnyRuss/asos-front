import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
    </>
  );
}

export default App;
