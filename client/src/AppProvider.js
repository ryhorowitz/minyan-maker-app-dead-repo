import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [shuls, setShuls] = useState([])
  const [shulDetails, setShulDetails] = useState({})
  useEffect(() => {
    // get shuls
    fetch(`shuls`)
      .then(r => r.json())
      .then(shuls => setShuls(shuls))
  }, [])

  return (
    <AppContext.Provider value={{
      user, setUser,
      shuls, setShuls,
      shulDetails, setShulDetails
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;