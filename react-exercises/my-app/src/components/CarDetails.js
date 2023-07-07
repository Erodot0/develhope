import { useEffect, useRef } from "react";

export function CarDetails({data}) {
    const _formRef = useRef()

    function handleInput(event){
        const model = event.target.elements.model.value
        const year = event.target.elements.year.value
        const color = event.target.elements.color.value
        console.log({
            model,
            year,
            color
        }) 
    }

    useEffect(() => {
        _formRef.current.reset()
    }, [data])

    return(
        <div>
            <form onSubmit={handleInput} ref={_formRef}>
                <input name="model" defaultValue={data.model} />
                <input name="year" type="number" defaultValue={data.year} />
                <input name="color" defaultValue={data.color} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}