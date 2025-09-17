import React,{useState} from 'react'
import $ from 'jquery'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [username, setUserName] = useState('')

  function closeModal(e) {
    console.log(e)
    let parent = $(e.target).parents('.modal')
    $(parent).removeClass('show')
  }
  const handleUsers = async (e) =>{
    e.preventDefault()
    console.log(email, pwd)
    await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cors': 'no-cors'
      },
      body: JSON.stringify({email,username,pwd})
    })
    // alert('Usuario creado')
  
  }
return (
  <div className="modal" id="modal_signup">
      <div className="modalContainer" style={{width:'40%'}}>
        
      <div className="modalTitle" style={{flex:'2'}}>
        <p>Comienza la aventura</p> 
        <div className='close' style={{flex:'1'}}> 
            <p style={{fontSize:'24px'}} onClick={e=> closeModal(e)}>X</p>
        </div>
      </div>
      <div  style={{flex:'1',display:'flex',width:'100%',justifyContent:'space-around'}}>
        <label htmlFor="email" style={{minWidth:'8vw',textAlign:'left'}}>
          Email
        </label>
        <input className="basicInput" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div style={{flex:'1',display:'flex',width:'100%',justifyContent:'space-evenly'}}>
        <label htmlFor="username" style={{minWidth:'8vw'}}>
          Nombre de usuario
        </label>
        <input className="basicInput" style={{width:'28vh'}} type="username" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
      </div>
      <div  style={{flex:'1',display:'flex',width:'100%',justifyContent:'space-around'}}>
    <label htmlFor="password">
      Contraseña
    </label>
        <input className="basicInput" type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}></input>
      </div>
      <div className="modalButtons" style={{flex:'2',display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <button className="buttonCancel" onClick={e=> closeModal(e)}>Cancelar</button>
        <button className="buttonAccept" onClick={handleUsers}>Resgistrarse</button>
      </div>
      </div>

  </div>
)
}
