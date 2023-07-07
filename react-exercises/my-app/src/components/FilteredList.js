import { useMemo } from "react";

export function FilteredList({list}) {

    const filterListArray = useMemo(() => {
        return list.filter((person) => person.age > 18)
    }, [list])


    return (
        <div>
            <h1>Filtered list</h1>
            <div>
                { filterListArray.map((person) => (
                    <div key={`${person.name} ${person.id}`}>
                        <p>Name: {person.name} Age: {person.age}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}