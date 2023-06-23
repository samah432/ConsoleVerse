import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./MyConsoles.css"
import { Link } from "react-router-dom";
import { ConsoleList } from "./ConsoleList";




export const MyConsoles = () => {
    const [consoles, setConsoles] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/MyConsoles`)
                .then(response => response.json())
                .then((ConsoleArray) => {
                    setConsoles(ConsoleArray)
                })
        },
        [] 
    )

    const ConsoleArray= () => {
        fetch(`http://localhost:8088/MyConsoles`)
          .then((response) => response.json())
          .then((ConsoleArray) => {
            setConsoles(ConsoleArray);
          });
      }

    const deleteButton = (console) => {
        return <button onClick={() => {
            fetch(`http://localhost:8088/MyConsoles/${console.id}`, {
                method: "DELETE"
            })
                .then(() => {
                    ConsoleArray()
                })
        }} className="ticket_delete">Delete</button>
}


    return <>
        <h2>My Consoles</h2>
        <button onClick={() => navigate("/console/create")}>Add a console</button>
        <article className="">
            {
                consoles.map(
                    (console) => {
                        return <section className="console">
                            <header>
                            <Link to={`/consoles/${console.id}/edit`}>Console {console.id} (Edit)</Link>
                            </header>
                            <header>{console.name}</header>
                            <footer>{console.description}</footer>
                            {
                                deleteButton(console)
                            }

                        </section>
                    }
                )
            }
        </article>
        </>
}
