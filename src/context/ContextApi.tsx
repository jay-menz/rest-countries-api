  import React, { createContext, useContext, useEffect, useState } from 'react';
  import axios from 'axios';

  interface Props {
    children: React.ReactNode
  }

  const http = axios.create({
    baseURL: 'https://restcountries.com/v2',
  });

  const ApiContext = createContext<any>(null);

  export const ApiProvider = ({ children }: Props) => {
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
        try {
          const response = await http.get('/all');
          setCountries(response.data);
        } catch (error) {
          console.error('Failed to retrieve countries:', error);
        }
      };
    useEffect(() => {
      fetchCountries();
    }, []);

    return <ApiContext.Provider value={countries}>{children}</ApiContext.Provider>;
  };

  export const useApi = () => useContext(ApiContext);
