import React,{useState} from 'react'
import $ from 'jquery'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    function closeModal(e) {
      console.log(e)
      // let el = e.target
      let parent = $(e.target).parents('.modal')
      $(parent).removeClass('show')
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
          <label htmlFor="email" style={{minWidth:'8vw'}}>
            Email
            </label>
          <input className="basicInput" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div  style={{flex:'1',display:'flex',width:'100%',justifyContent:'space-around'}}>
          <label htmlFor="password">
            Contraseña
            </label>
          <input className="basicInput" type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}></input>
        </div>
        <div  style={{flex:'2',display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>
          <button className="buttonAccept">Inciar Sesion</button>
        </div>
        </div>

    </div>
  )
}
