import { useState } from "react"

export function useForm(){
    const [data, setData] = useState({
        username:"",
        password:"",
        remember:false
      })
    
      function handleInputChange(event){
        const {name,type,value,checked} = event.target
        setData({
          [name]: type === "checkbox" ? checked : value
        })
      }

      return {
        data: data,
        onInputChange: handleInputChange,
      }
}