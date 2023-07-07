import { useState, useCallback } from "react"

export function useCounter(initialValue){
    const [counter, setCounter] = useState(initialValue)

    const handleCounterReset = useCallback(function handleCounterReset() {
        setCounter(initialValue)
    },[initialValue])

    const handleCounterIncrement = useCallback(function handleCounterIncrement(){
        setCounter((c) => c + 1 )
    },[])

    const handleCounterDecrease = useCallback(function handleCounterDecrement(){
        setCounter((c) => c - 1 )
    },[])
 return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrease,
    onReset: handleCounterReset,
 }
}