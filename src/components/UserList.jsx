import UserInfo from './UserInfo'
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

function TaskList() {

  const {listUsers} = useContext(UserContext)


  return (
    <div className="overflow-auto rounded-lg shadow">
      <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='w-10 p-3 text-sm font-semibold tracking-wide text-left'></th>
                <th className='w-35 p-3 text-sm font-semibold tracking-wide text-left'>Nombre</th>
                <th className='w-35 p-3 text-sm font-semibold tracking-wide text-left'>Apellido</th>
                <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'></th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {listUsers.map((user) => (
                <UserInfo key={user.id} user={user} />
              ))}
            </tbody>
      </table>
    </div>
  )
}

export default TaskList