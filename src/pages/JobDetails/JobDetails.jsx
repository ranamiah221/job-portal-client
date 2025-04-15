import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const { _id, title, description,company,applicationDeadline} = job
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>Applied Company : {company}</p>
                <p>Applied Date : {applicationDeadline}</p>
                <div className="card-actions">
                    <Link to={`/applyJob/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;