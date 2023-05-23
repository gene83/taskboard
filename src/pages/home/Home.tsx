import { useEffect } from "react";
import { useNavigate } from "react-router";
import Board from "../../components/Board/Board";
import AppHeader from "../../components/AppHeader/AppHeader";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      return;
    }

    // TODO Load data
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <AppHeader />
      <Board />
    </>
  );
};

export default Home;
