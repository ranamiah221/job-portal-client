import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const ApplyJob = () => {
    const {id}=useParams();
    const {user}=useAuth();
    const navigate=useNavigate()

    const submitAppliedJob=(e)=>{
        e.preventDefault();
       const form = e.target;
       const github = form.github.value;
       const linkdin = form.linkdin.value;
       const resume = form.resume.value;
       const applications={
        jobId: id,
        applicantEmail:user?.email,
        github,
        linkdin,
        resume
       }
       fetch('http://localhost:5000/job-application',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(applications)
       })
       .then(res=> res.json())
       .then(data=>{
        if(data.insertedId){
            alert("job application successful")
            navigate('/myApplications')
        }
       })

    }

    return (
        <div className="hero bg-base-200 min-h-screen py-8">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={submitAppliedJob} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Github Link</label>
                            <input type="url" name="github" className="input" placeholder="Github Link" />
                            <label className="fieldset-label">Linkdin Link</label>
                            <input type="url" name="linkdin" className="input" placeholder="Linkdin Link" />
                            <label className="fieldset-label">Resume Link</label>
                            <input type="url" name="resume" className="input" placeholder="Resume Link" />
                            <button type="submit" className="btn btn-neutral mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
           
        </div>
    );
};

export default ApplyJob;