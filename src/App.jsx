import UserList from "./components/UserList"
import Modal from "./components/Modal"

function miApp() {
  return (
    <main className="bg-slate-300 h-screen">
      <div className="p-5 pl-10 pr-10 bg-slate-700"> 
        <h1 className="text-xl font-bold text-white">Usuarios</h1> 
      </div>
      <div className="container mx-auto p-10">
        <UserList/>
        <><Modal/></>
      </div>
      
    </main>
  ) 
}

export default miApp