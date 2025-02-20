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
        <div onClick={() => navigate('/second')} style={{cursor:'pointer',flex:'8',textAlign:"left"}}>
            <img className="image_logo" src={logo} alt="logo"/>
        </div>
        <div style={{cursor:'pointer',flex:'1'}} onClick={()=>OpenModal('modal_login')}>
        <h6>Iniciar Sesion
            </h6>
        </div>
        <div style={{cursor:'pointer',flex:'1'}} onClick={()=>OpenModal('modal_signup')}>
        <h6>
            Registrarse
            </h6> 
        </div>
    </div>
  )
}
// {{marginRight: spacing + 'em'}}