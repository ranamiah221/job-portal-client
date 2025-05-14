import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaDeleteLeft } from "react-icons/fa6";

const MyApplications = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [user?.email])

    const handleDeleteJob=(id)=>{
       fetch(`http://localhost:5000/job-application/${id}`, {
        method:'DELETE'
       })
       .then(res=> res.json())
       .then(data=> {
        if(data.deletedCount > 0){
            const remain = applications.filter(job => job._id !== id)
            setApplications(remain)
            alert('Deleted Successfull')
        }
       })
    }
 
    return (
        <div>
            <div className="overflow-x-auto px-10 my-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Serial
                            </th>
                            <th>Comapany logo</th>
                            <th>Job Title</th>
                           
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((job, idx)=><tr key={job._id}>
                            <th>
                              {idx +1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </td>
                            <td>
                                {job.title}
                            </td>
                           
                            <th>
                                <button onClick={()=>handleDeleteJob(job._id)} className="btn btn-ghost btn-lg"><FaDeleteLeft></FaDeleteLeft></button>
                            </th>
                        </tr>)
                        }
                        
                       
                      
                    </tbody>
                    {/* foot */}
                  
                </table>
            </div>
        </div>
    );
};

export default MyApplications;