import React from 'react'
// import { useNavigate} from 'react-router-dom';

import logo from '../images/MusicWaves_logo1.png'
import { Banner} from '../components/banner'
import { Login } from '../components/Login';
import { Signup } from '../components/Signup';
import { Footer } from '../components/footer'


export const Home = () => {
// const navigate = useNavigate();
  return (
    <div className="App-header App">
        <Banner/>
        <Login/>
        <Signup/>
        <div style={{minHeight:'100vh'}}>
          <img src={logo} className="App-logo" alt="logo girando" />
              <h1>Acerca de Nosotros</h1>
      <p>Comparte tu conexión con la música.</p>
        </div>
        
      <Footer/>
    </div>
  );
}
