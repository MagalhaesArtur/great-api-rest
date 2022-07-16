import MainPageButtons from "./components/mainPageButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./components/createUser";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<MainPageButtons />} />
          <Route path="/register" element={<CreateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
