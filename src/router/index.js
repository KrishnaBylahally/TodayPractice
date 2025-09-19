import React from "react"
import {Routes , Route} from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import District from "../pages/District"
import DistrictCreate from "../pages/DistrictCreate"
import DistrictEdit from "../pages/DistictEdit"

function MyRouter(){
    return(
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/district"  element={<District />} />
            <Route path="/district/create" element={<DistrictCreate />} />
            <Route path="/district/:id/edit" element={<DistrictEdit/>}/>
        </Routes>
    )
}

export default MyRouter;