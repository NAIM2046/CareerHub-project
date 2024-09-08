import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData() ; 
    const {id} = useParams() ;
    const idInt =  parseInt(id) ;
    const job = jobs.find(job=>job.id === idInt) ;
    console.log(job) ;
    const {job_description , job_responsibility , educational_requirements , experiences} = job 
     return (
        <div>
            
            <div className='grid md:grid-cols-4 gap-4'>
                 <div className='border  md:col-span-3   '>
                    <div className='mb-8'>
                   
                    <p> <b>Job Description : </b> {job_description}</p>

                    </div>
                    <div className='mb-8'>
                        <p> <b>Job Responsibility :</b>  {job_responsibility}</p>
                    </div>
                    <div className='mb-8'>
                        <p> <b>Educational Requirements :</b>  {educational_requirements}</p>
                    </div>

                    <div className='mb-8'>
                        <p> <b>experiences :</b>  {experiences}</p>
                    </div>

                   
                   

                 </div>
                 <div className='border md:col-span-1 bg-emerald-100  '>
                 <h3 className='text-center font-semibold mt-3'>job details </h3>

                 <button className='btn btn-primary w-full md:mt-96 '>Apply Now</button>
                 </div>
            </div>

        </div>
    );
};

export default JobDetails;