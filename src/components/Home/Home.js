import React, { useEffect, useState } from 'react';
import Content from '../content/Content';
import './Home.css';

const Home = () => {

    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setdata(data))
    },[])

    

    return (
        <div className='grid grid-cols-5 gap-4'>
            <div className='border col-span-4'>

                <div className='grid grid-cols-3 gap-4 '>

                {
                        data.map(db =><Content 
                            picture={db.picture}
                            name={db.name}
                            timer={db.timer}
                            email={db.email}
                            key={db.id}
                            ></Content>)
                    }
                </div>
                    
            </div>
            <div className='border col-span-1'>
                <h1 className='text-2xl mt-6'>About Me</h1>
                <p className='text-orange-800 font-serif font-semibold text-xl'>Name: Jahidul Islam</p>
             <div>
                
             </div>

            </div>
        </div>
    );
};

export default Home;