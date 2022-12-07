import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export function UserContextProvider(props) {
  
  // const [tasks, setTasks] = useState([])
  const [usuario, setUsuario] = useState([])
  const [listUsers, setListUsers] = useState([])

  useEffect(()=>{
    setUsuario([])
  },[])

  useEffect(function(){
    async function fetchData(){
      const response = await fetch('https://reqres.in/api/users');
      const json = await response.json();
      setListUsers(json.data)
    }
    fetchData();
  }, [])

  function showUser(user){
     setUsuario(user)
  }

  return (
    <UserContext.Provider value={{
      listUsers,
      showUser,
      usuario
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
