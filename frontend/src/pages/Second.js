import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import SPT_CONFIG from '../config/spotifyConfig';
import { authURL, getPlaylist } from '../Spotify/controller';
import { Banner } from '../components/banner';


export const Second = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [playlists,setPlaylist] = useState("")
 

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      SPT_CONFIG.ACCESS_TOKEN = hash
        .substring(1)
        .split("&")
        .find(elem => elem.startsWith("access_token"))
        .split("=")[1];
        setToken(SPT_CONFIG.ACCESS_TOKEN)
        window.location.hash =""
        const res = getPlaylist(token)
        console.log(res);
        setPlaylist(res.items|| []) 
    }else{
      alert("Token no reconocido")
    }
  
  },[token])

// async function Playlist() {
//   if (token) {
//   const result = await getPlaylist(token)
//   console.log(result);
//   setPlaylist(result.items|| []) 
//   } else {
//     alert("Autorizacion para playlist no permitida.")
//   }
// }



  return (
    <div className="App-header App">
      <Banner></Banner>
      <h1>Autenticacion Completada</h1>
      <p>Bienvenido a nuestra aplicación.</p>
      
      {!token && (
        <a
          href={authURL}
        >
          <button>Conectar con Spotify</button>
        </a>
      )}
     {token && (
      <div>
      <h1>Mis playlist de Spotify</h1>
      <ul>
        {playlists.map((playlist)=>(
          <li key= {playlist.id}>
            <img 
            src={playlist.images[0]?.url}
            alt={playlist.name}
            style={{width:"50px",verticalAlign:"middle",marginRight:"10px"}}
            />
            {playlist.name}  
           </li>
        ))}
      </ul>
      </div>
)}
      {/*<button onClick={()=> Playlist()}>Obtener Playlist</button> */}
      <button onClick={() => navigate('/')}>Volver</button>
    </div>
  );
}
