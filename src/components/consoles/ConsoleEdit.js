import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const ConsoleEdit = () => {
    const [console, assignconsole] = useState({
        name: "",
        description: ""
    })
    const { consoleId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/MyConsoles/${consoleId}`)
            .then(response => response.json())
            .then((data) => {
                assignconsole(data)
            })
    }, [consoleId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/MyConsoles/${console.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(console)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/myconsoles")
            })
    }


    return <form className="consoleForm">
        <h2 className="consoleForm__title">Service console</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={console.description}
                    onChange={
                        (evt) => {
                            const copy = { ...console }
                            copy.description = evt.target.value
                            assignconsole(copy)
                        }
                    }>{console.description}</textarea>
            </div>
        </fieldset>
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
}