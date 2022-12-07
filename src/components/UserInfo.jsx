import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

function UserInfo({user}) {

  const {showUser} = useContext(UserContext)

  return (
    <tr className='bg-gray-50'>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{user.id} </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{user.first_name} </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{user.last_name}</td>
      <td className='p-3 text-sm text-cyan-600 whitespace-nowrap'> 
          <a href="#" onClick={()=>{
              const modal = document.querySelector('.modal')
              modal.classList.remove('hidden')
              showUser(user)
            }}
          >Ver</a>
      </td>
    </tr>
  )
}

export default UserInfo