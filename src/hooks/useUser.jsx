/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import { api } from '../utils/axios';

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [name, setName] = useState('')

  async function getUser(){
    try {
      const response = await api.get(`/me`);
      setName(response.data.name);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ name, getUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const { name, getUser } = useContext(UserContext)
  return { name, getUser }
}
