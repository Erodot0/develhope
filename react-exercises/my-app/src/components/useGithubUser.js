import { useEffect, useState } from "react"

export function useGithubUser(username){
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(null)


    const fetchData = async (username) => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const resJson = await res.json()
            if(res.status !== 200){
                setError(new Error("Errore"))
            }
            setData(resJson)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchData(username)
    },[username])

    return {
            data: data,
            error: error,
            loading: loading,
            fetchData: fetchData,
    }
}