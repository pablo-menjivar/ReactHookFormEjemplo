import { useEffect, useState } from 'react'
import { url } from '../../utils/apiUrl'
import { toast } from 'react-hot-toast'
 
const useFetchUsers =()=>{
    const [users, setUsers] = useState([])
 
    const getUsers = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("Error al obtener los usuarios")
            }
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            console.error("Error al obtener los usuarios:", error)
            toast.error("Error al obtener los usuarios")
        }
    }
    //funcion para obtener un usuario por su id
    //se usa async/await para manejar la asincronía de la llamada a la API
    const getUserById = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`)
            if (!response.ok) {
                console.log("Hubo un error al obtener el usuario")
                throw new Error("Hubo un error al obtener el usuario")
            }
            const data = await response.json()
            return data
        } catch (error) {
            console.error("Error al obtener el usuario:", error)
            console.log("Hubo un error al obtener el usuario")
            return null
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return { users, getUserById, getUsers }
}
export default useFetchUsers