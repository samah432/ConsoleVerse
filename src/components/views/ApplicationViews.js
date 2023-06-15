import { Outlet, Route, Routes } from "react-router-dom"
import { ConsoleList } from "../consoles/ConsoleList"
import { ManufacturerList } from "../manufacturers/Manufacturers"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>ConsoleVerse</h1>
                    <div>Where it all began...</div>

                    <Outlet />
                </>
            }>

                <Route path="consoles" element={ <ConsoleList /> } />
				<Route path="manufacturers" element={ <ManufacturerList/> } />
            </Route>
        </Routes>
    )
}