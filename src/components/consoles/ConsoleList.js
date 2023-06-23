import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./ConsoleList.css"


export const ConsoleList = () => {
    const [consoles, setConsoles] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/Consoles`)
            .then(response => response.json())
            .then((consoleArray) => {
                setConsoles(consoleArray)
            })
    }, [])

    return <>
            <h2>List of Consoles</h2>

            <article className="consoles">
                {
                    consoles.map(
                        (console) => {
                            return (
                                <section className="console">
                                    <header>{console.name}</header>
                                    <footer>{console.description}</footer>
                                    {<img className="ConsoleImg" src={console.image} alt="ConsoleImg" />}
                                </section>
                            )
                        }
                    )
                }
        </article>
        </>
}
