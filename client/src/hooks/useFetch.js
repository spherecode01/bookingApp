import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const backendUrl = "https://booking-app-obdh.onrender.com";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(backendUrl);
        setData(res.data);
        console.log(data, "this is data")
        
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [backendUrl]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(backendUrl);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;