import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const getMe = async (token) => {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            // Temporary solution
            return (window.location.href = "/");
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    const token = localStorage.getItem("token");

    if (!token) {
      toast.warn(`Please Login Now!`);
      return navigate("/");
    }

    // get user information
    getMe(token);
  }, [navigate]);

  return children;
}

export default Protected;
