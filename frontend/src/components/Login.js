import React,{useState} from 'react'
import $ from 'jquery'
// import { useNavigate} from 'react-router-dom';

import { LoginSpt } from "../Spotify/controller";
import { getUsers } from '../api';

export const Login = () => {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')

    // const navigate = useNavigate();

    function closeModal(e) {
      console.log(e)
      // let el = e.target
      let parent = $(e.target).parents('.modal')
      $(parent).removeClass('show')
    }
   const handleLogin = async () =>{
    console.log(username, pwd)
    
    const data = await getUsers();
    console.log(data)
    const auth = data.find(user => user.username.toLowerCase() === username.toLowerCase() && user.pwd === pwd);
    console.log(auth)
    if(auth){
      LoginSpt();
      // navigate('/second');
    }else{
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="modal" id="modal_login">
        <div className="modalContainer">
          <div className="modalTitle" style={{flex:'2'}}>
            <p>Bienvenido</p>
           
          <div className='close' style={{flex:'1'}}>
              <p onClick={e=> closeModal(e)}>X</p>
          </div> 
          </div>

        <div  style={{flex:'1',display:'flex',width:'100%',justifyContent:'space-around'}}>
          <label htmlFor="username" style={{minWidth:'8vw'}}>
            Usuario
            </label>
          <input className="basicInput" type="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        </div>
        <div  style={{flex:'1',display:'flex',width:'100%',justifyContent:'space-around'}}>
          <label htmlFor="password">
            Contraseña
            </label>
          <input className="basicInput" type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}></input>
        </div>
        <div  style={{flex:'2',display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>
          <button className="buttonAccept" onClick={handleLogin}>Inciar Sesion</button>
        </div>
        </div>

    </div>
  )
}
