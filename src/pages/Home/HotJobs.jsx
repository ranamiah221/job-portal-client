import { useEffect, useState } from "react";
import HotJobCart from "./HotJobCart";


const HotJobs = () => {
    const [jobs, setJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])
    return (
        <div className="grid grid-cols-4 gap-5 my-8">
            {
                jobs.map(job=> <HotJobCart key={job._id} job={job}></HotJobCart>)
            }
        </div>
    );
};

export default HotJobs;