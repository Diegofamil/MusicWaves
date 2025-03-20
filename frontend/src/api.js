export const getUsers = async () => {    
    return await fetch('http://localhost:8080/users').then(res => res.json())
}