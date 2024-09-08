import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
const Job = ({job}) => {
  const  { id ,logo , job_title ,company_name,remote_or_onsite,location,job_type,salary,} = job ;
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src= {logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className='px-5 py-2 font-extrabold border border-orange-500 mr-4 rounded-xl'>{remote_or_onsite}</button>
        <button className='px-5 py-2 font-extrabold border border-orange-500 mr-4 rounded-xl'>{job_type}</button>
    </div>
       <div className='flex'>
        <h3 className='flex mr-3'><IoLocationOutline className='text-xl' />
        <p>{location}</p>
        </h3>
        <h3 className='flex'>
        <BiDollar className='text-xl' />
        <p>{salary}</p>
        </h3>
       </div>
    <div className="card-actions">
      <Link to ={`/job/${id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Job;