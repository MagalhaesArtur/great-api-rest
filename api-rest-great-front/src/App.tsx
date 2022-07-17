import MainPageButtons from "./components/mainPageButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./components/createUser";
import DeleteUser from "./components/deleteUser";
import SearchUserCPF from "./components/searchUserCPF";
import SearchUserByName from "./components/searchUserByName";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-roxin-500 items-center">
      <Router>
        <Routes>
          <Route path="/" element={<MainPageButtons />} />
          <Route path="/register" element={<CreateUser />} />
          <Route path="/delete" element={<DeleteUser />} />
          <Route path="/user" element={<SearchUserCPF />} />
          <Route path="/users" element={<SearchUserByName />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
