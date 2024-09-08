import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const CategoryList = () => {
    const  [jobs , setjobs] = useState([]) ; 
    const [lengthdata , setlengthdata] = useState(4) ;
    useEffect(() =>{
        fetch('jobs.json') 
        .then(res => res.json())
        .then(data => setjobs(data)) ;
    }, [])
    return (
        <div>
            <div>
            <h2 className='text-center text-3xl'>job category List {jobs.length} </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nobis nisi maiores voluptates unde commodi, laudantium repellat! Eaque, non a?</p>
            </div>

            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0 ,lengthdata).map((job => <Job job={job} key={job.id}></Job> ))
                }
            </div>

            <div className={lengthdata === jobs.length && "hidden"}>
                <button 
                onClick={()=>setlengthdata(jobs.length)}
                className='btn btn-primary'>show All Jobs</button>
            </div>
            
        </div>
    
    );
};

export default CategoryList;