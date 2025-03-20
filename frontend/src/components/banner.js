import React from 'react'
import $ from 'jquery'
import { useNavigate} from 'react-router-dom';

import logo from '../images/MusicWaves_logo1.png'

export const Banner = () => {
const navigate = useNavigate();

    function OpenModal(modal) {
        console.log(modal)
        let body = $('body')
        body.find('#'+modal).addClass('show')
        console.log(body.find('#'+modal))
    }
  return (
    <div className="Banner">
        <div  style={{cursor:'pointer',flex:'8',textAlign:"left"}}>
            <img  onClick={() => navigate('/second')} className="image_logo" src={logo}  alt="logo"/>
        </div>
        <div style={{cursor:'pointer',flex:'1',display:'flex',alignItems:'center'}} >
            <button className="buttonLogin" onClick={()=>OpenModal('modal_login')}>
                Iniciar Sesión 
            </button>
        </div>
        <div style={{cursor:'pointer',flex:'1',display:'flex',alignItems:'center'}} >
        <button className="buttonSignup" onClick={()=>OpenModal('modal_signup')}>
            Registrarse
            </button> 
        </div>
    </div>
  )
}
// {{marginRight: spacing + 'em'}}