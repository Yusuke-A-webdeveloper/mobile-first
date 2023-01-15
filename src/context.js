import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();
const url = `https://course-api.com/react-tours-project`;

const AppProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ loading, tours }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
