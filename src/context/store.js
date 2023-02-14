import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'

import ProductData from '../components/ProductData';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // (async () => {
    //   const response = await axios.get(URL);
    //   setData(response.data);
    // })();
    setData(ProductData)
  },[]);

  return <AppContext.Provider value ={{data: ProductData}}>{children}</AppContext.Provider>
  
};

const useAppContext = () => {
  return useContext(AppContext)
}

export  {AppProvider, AppContext, useAppContext}