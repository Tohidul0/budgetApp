import { Route, Router, Routes } from "react-router-dom";
import AddEntry from "./components/AddEntry";
import Header from "./components/Header";
import Listing from "./components/Listing";
import { EntriesProvider } from "./context/EntriesContext";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/Auth";

function App() {
  return (
    <AuthProvider>
      <EntriesProvider>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home></Home>}></Route>
          </Route>
        </Routes>
      </EntriesProvider>
    </AuthProvider>
  );
}

export default App;
