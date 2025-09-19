import axios from "axios";
import React, { useState } from "react"
import { Link , useNavigate} from "react-router-dom";

function DistrictCreate(){

    const navigate = useNavigate();

    const[district , setDistrict] = useState({
        DistrictName : "",
        DistrictKN : "",
        DistrictCode : ""
    })

    const handleCode  = (e)=>{

        setDistrict({...district , [e.target.name]: e.target.value })
    }

    const saveDistrict = async(e) =>{
        e.preventDefault();

        const data ={
            DistrictName : district.DistrictName,
            DistrictKN : district.DistrictKN,
            DistrictCode : district.DistrictCode
        };

        var JsonObjStr = JSON.stringify(data);

        let formData = new FormData();

        formData.append("JsonObjStr",JsonObjStr)

        let url = `https://localhost:44385/api/Districts/postDistrict`;
        try{
            const res =await axios.post(url,formData ,{
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if(res.data.Success){
                alert(`District saved successfully! ID: ${res.data.Data}`);

                setDistrict({
                    DistrictName : "",
                    DistrictKN : "",
                    DistrictCode : ""
                });

                 // redirect to district
                navigate("/district")
            }
            else{
                alert(`Failed to save district: ${res.data.ErrorMessage}`);
            }

        }
        catch(error){
            alert("Error saving data. Please try again.");
            console.error("API Error:", error);
        }
         
    }


    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>
                                Add District 
                                <Link to={"/district"} className="btn btn-danger float-end">Back</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveDistrict}>
                                <div className="mb-3">
                                    <label>District Name</label>
                                    <input type="text" name="DistrictName" id="DistrictName" value={district.DistrictName} onChange={handleCode} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label>District Kannada Name</label>
                                    <input type="text" name="DistrictKN" id="DistrictKN" value={district.DistrictKN} onChange={handleCode} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label>DistrictCode</label>
                                    <input type="text" name="DistrictCode" id="DistrictCode" value={district.DistrictCode} onChange={handleCode} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DistrictCreate;

