import {React, useContext} from 'react'
import {UserContext} from '../context/UserContext'

export default function Modal() {

    const {usuario} = useContext(UserContext)

    return (
        <div className='modal h-screen w-full fixed left-0 top-0 flex justify-center items-center
                       bg-black bg-opacity-50 hidden'>
                <div className="bg-white rounded-xl shadow-lg w-1/4 overflow-auto">
                    <div className="border-b px-4 py-2 bg-sky-800 flex justify-center">
                        <img className='rounded-full border-solid bg-sky-500 border-2 shadow-2xl' src={usuario.avatar} ></img>
                    </div>
                    <div>
                            <div className='text-center pb-3'>
                                <h2 className='font-semibold text-3xl p-1'>
                                    {usuario.first_name} {usuario.last_name}
                                </h2>
                                <p className='text-sky-700 p-2'>{usuario.email}</p>
                            </div>
                    </div>
                    <div className="border-b px-4 pb-4 flex justify-center ">
                        <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"  onClick={()=>{
                            const modal = document.querySelector('.modal')
                            modal.classList.add('hidden')}}>
                                Cerrar
                        </button>
                    </div>
                </div>
        </div>
    )
}
