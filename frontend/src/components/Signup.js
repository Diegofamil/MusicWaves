import React,{useState} from 'react'
import $ from 'jquery'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

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
      body: JSON.stringify({email, pwd})
    })
    // alert('Usuario creado')
  
  }
return (
  <div className="modal" id="modal_signup">
      <div className="modalContainer">
        
      <div className="modalTitle" style={{flex:'1'}}>
        <p>Comienza la aventura</p> 
        <div className='close' style={{flex:'1'}}> 
            <p onClick={e=> closeModal(e)}>X</p>
        </div>
      </div>
      <div  style={{flex:'1'}}>
        <label htmlFor="email">
          Email
        </label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div  style={{flex:'1'}}>
    <label htmlFor="password">
      Contraseña
    </label>
        <input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}></input>
      </div>
      <div className="modalButtons" style={{flex:'1'}}>
        <button className="buttonCancel" onClick={e=> closeModal(e)}>Cancelar</button>
        <button className="buttonAccept" onClick={handleUsers}>Resgistrarse</button>
      </div>
      </div>

  </div>
)
}
