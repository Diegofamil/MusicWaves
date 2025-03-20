export const getUsers = async () => {    
    return await fetch('http://localhost:8080/api/users').then(res => res.json())
}