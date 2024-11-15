import React from "react";
import Header from "./Header";
import AddEntry from "./AddEntry";
import Listing from "./Listing";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  return (
    <div>
      <Header />
      <AddEntry />
      <Listing />
    </div>
  );
}

export default Home;
