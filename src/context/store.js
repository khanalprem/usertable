import React, { createContext, useContext, useEffect, useState } from 'react';

import ProductData from '../components/ProductData';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ProductData)
  },[]);

  return <AppContext.Provider value ={{data}}>{children}</AppContext.Provider>
  
};

const useAppContext = () => {
  return useContext(AppContext)
}

export  {AppProvider, AppContext, useAppContext}