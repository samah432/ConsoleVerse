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

        <article className="manufacturer">
            {
                manufacturers.map(
                    (manufacturer) => {
                        return (
                         <section className="manufacturers">
                            {<img className="ManuImg" src={manufacturer.image} alt="ManuImg" />}
                            <footer>{manufacturer.overview}</footer>
                        </section>
                        )
                    }
                )
            }
        </article>
        </>
}