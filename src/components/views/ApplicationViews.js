import { Outlet, Route, Routes } from "react-router-dom"
import { ConsoleEdit } from "../consoles/ConsoleEdit"
import { ConsoleForm } from "../consoles/ConsoleForm"
import { ConsoleList } from "../consoles/ConsoleList"
import { MyConsoles } from "../consoles/MyConsoles"
import { ManufacturerList } from "../manufacturers/Manufacturers"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>ConsoleVerse</h1>
                    <div></div>

                    <Outlet />
                </>
            }>

                <Route path="consoles" element={ <ConsoleList /> } />
				<Route path="manufacturers" element={ <ManufacturerList/> } />
				<Route path="console/create" element={ <ConsoleForm/> } />
				<Route path="myconsoles" element={ <MyConsoles/> } />
				<Route path="consoles/:consoleId/edit" element={ <ConsoleEdit/> } />
				
            </Route>
        </Routes>
    )
}