import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ConsoleForm = () => {
    const [console, update] = useState({
        description: "",
        name: ""
    })

    const [manufacturers, updateManufacturers] = useState([])
    const [manufacturerId, updateManufacturerId] = useState("")
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch(`http://localhost:8088/Manufacturers`)
                .then(response => response.json())
                .then((manufacturersArray) => {
                    updateManufacturers(manufacturersArray)
                })
        },

        [] 
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


    // TODO: Create the object to be saved to the API
    const ConsoleToSendToAPI = {
        userId: manufacturerId.id,
        name: console.name,
        description: console.description
    }


    // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/MyConsoles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ConsoleToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/myconsoles")
            })
    }

    return (
        <form className="ConsoleForm">
            <h2 className="ConsoleForm__title">New Service Console</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Console Name"
                        value={console.name}
                        onChange={
                            (evt) => {
                                const copy = {...console}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of Console"
                        value={console.description}
                        onChange={
                            (evt) => {
                                const copy = {...console}
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <div className="form-group">
                <label htmlFor="manufacturer">Manufacturer:</label>
                <select name="manufacturer" id="manufacturer" value={console.manufacturer} onChange={(event) => {
                    const copy = {...console}
                    copy.manufacturer = event.target.value
                    update(copy)
                    updateManufacturerId(event.target.value)
                }}>
                    <option value="">Select a manufacturer</option>
                    {manufacturers.map((manufacturer) => (
                        <option value={manufacturer.company}>{manufacturer.company}</option>
                    ))}
                </select>

            </div>
                <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Console
            </button>
        </form>
    )
}
