import "./App.css";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Notes />}></Route>
        <Route path={"/create"} element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
