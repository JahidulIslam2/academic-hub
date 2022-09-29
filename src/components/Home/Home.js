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
        <div className='bg-slate-100 grid grid-cols-12 h-screen'>
            <div className=' grid-cols-7 border-l-pink-900'>
                <h1 >main body</h1>
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
            <div className='sidebar grid-cols-5 border-slate-900'>
             <h1>sidebar</h1>
            </div>
        </div>
    );
};

export default Home;