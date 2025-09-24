import SPT_CONFIG from "../config/spotifyConfig";


export let authURL = `${SPT_CONFIG.AUTH_ENDPOINT}?client_id=${SPT_CONFIG.CLIENT_ID}&redirect_uri=${encodeURIComponent(SPT_CONFIG.REDIRECT_URI)}&response_type=${SPT_CONFIG.RESPONSE_TYPE}&scope=${encodeURIComponent(SPT_CONFIG.SCOPES)}`;

 export function LoginSpt() {
        console.log(authURL)
        window.location = authURL;
}

export async function getPlaylist(token) {
    const response = await fetch("https://api.spotify.com/v1/me/playlists",{
        headers:{
            Authorization:`Bearer ${token}`,
        },
    });
    if (response.ok) {
         const data = await response.json()
         return data
    }else{
        return "Fallo de programa"
    }
}
