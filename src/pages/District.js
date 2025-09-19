import { Link, useNavigate } from "react-router-dom";
import React, {useState, useEffect } from "react";
import axios from "axios";
import PageLoader from "./Loader";

function District(){

  const[loading,setloading] = useState(true)
  const[districts , setDistrict] = useState([])
  var navigate = useNavigate();

  useEffect(()=>{
    var url = `https://localhost:44385/api/Districts`;
    axios.get(url).then(res => {
        setDistrict(res.data.Data)
        setloading(false)
    }).catch(error => {
        console.error(error)
    }
    )
   },[])

   if(loading){
    return(
        <PageLoader/>
    )
   }

   const deleteStudent =async (e,id)=>{
        e.preventDefault();

        let url = `https://localhost:44385/api/Districts/deleteDistrict?key=${id}`

        try{
            var res =await axios.delete(url)

            if(res.data.Success){
                alert(`District deleted sucessfully: ${res.data.Data}`);
                window.location.reload();            }
            else{
                alert(`Failed to deleted district: ${res.data.ErrorMessage}`);
            }
        }
        catch(error){
            alert("Error saving data. Please try again.");
            console.error("API Error:", error);
        }
    }

   var districtData = Array.isArray(districts) ? (
    districts.map((data, index) => (
      <tr key={index}>
        <td>{index+1}</td>
        <td>{data.Id}</td>
        <td>{data.DistrictName}</td>
        <td>{data.DistrictKN}</td>
        <td>{data.DistrictCode}</td>
        <td>
            <Link to={`/district/${data.Id}/edit`} state={{data}} className="btn btn-success">Edit</Link>
        </td>
        <td>
            <Link onClick={(e) => deleteStudent(e,data.Id)} className="btn btn-danger">Delete</Link>
        </td>
      </tr>
    ))
  ) : (
    <tr><td colSpan="3">No Data Available</td></tr>
  );
  

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>
                                District List
                                <Link to={"/district/create"} className="btn btn-primary float-end">Add district</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Sl.No</th>
                                        <th>District Id</th>
                                        <th>District Name</th>
                                        <th>District Name Kannada</th>
                                        <th>District Code</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {districtData}
                                </tbody>
                            </table>   
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default District;