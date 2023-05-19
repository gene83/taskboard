import { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    useEffect( () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
             navigate("/login");
             return;
        }

        // TODO Load data
    }, []);

    return (
        <div>
            <h1>This is the home page</h1>
        </div>
    )
}

export default Home;