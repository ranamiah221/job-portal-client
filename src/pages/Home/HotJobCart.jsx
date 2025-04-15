import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotJobCart = ({ job }) => {
    const {_id, title, location, description, salaryRange, requirements,company_logo }=job
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <div className='flex items-center gap-4'>
                <img className='w-16' src={company_logo} alt="" />
                 <div>
                 <h2 className="card-title">{title}</h2>
                 <p className="inline-flex items-center"><IoLocationSharp />{location}</p>
                 </div>
                </div>
                <p className="text-justify">{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {
                        requirements.map((skills, idx)=><p key={idx} className="border border-black rounded-lg p-1">{skills}</p>)
                    }
                </div>
                <div className="flex items-center">
                    <p className="flex items-center">Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">View Job</button></Link>
                </div>
            </div>
        </div>
    );
};


 
   

export default HotJobCart;