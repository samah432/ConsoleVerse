import { useEffect, useState } from "react"
import "./ManufacturerList.css"
import { Link } from "react-router-dom";



export const ManufacturerList = () => {
    const [manufacturers, setManufacturer] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/Manufacturers`)
                .then(response => response.json())
                .then((ManufacturerArray) => {
                    setManufacturer(ManufacturerArray)
                })
        },
        [] 
    )
    return <>
        <h2>List of Manufacturers</h2>

        <article className="manufacturers">
            {
                manufacturers.map(
                    (manufacturer) => {
                        return <section className="manufacturers">


                        </section>
                    }
                )
            }
        </article>
        </>
}