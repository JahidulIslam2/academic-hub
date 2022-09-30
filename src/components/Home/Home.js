import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Content from '../content/Content';


const Home = () => {

    const [cardInfo,setInfo]=useState([])

    const [addTime,setTime]=useState(0)

    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
        
    const addPracticeTime=(cardInfo)=>{
                const newAddTime=addTime+cardInfo;
                setTime(newAddTime)
    }
    

    return (
        <div className='grid grid-cols-6 gap-4 '>
            <div className=' col-span-4'>

                <div className='grid grid-cols-3 gap-4 '>

                {
                        cardInfo.map(db =><Content 
                            picture={db.picture}
                            name={db.name}
                            timer={db.timer}
                            email={db.email}
                            key={db.id}
                            addPracticeTime={addPracticeTime}
                            ></Content>)
                    }
                </div>
                    
            </div>
            <div className=' col-span-2 bg-stone-500 shadow-gray-900 '>
                <h1 className='text-2xl mt-6'>About Me</h1>
                <p className='text-orange-800 font-serif font-semibold text-xl'>Name: Jahidul Islam</p>
             <div className='h-16 w-auto bg-slate-200 rounded-md m-2 shadow-xl '>
                <h1 className=''>
                    <small className='text-green-600'>age: 22, </small>
                    <small className='text-orange-600'>aim: programming, </small><br/>
                    <small className='text-red-900'>hobby: astrography</small>
                </h1>
             </div>
                <Cart addTime={addTime}></Cart>
            </div>
        </div>
    );
};

export default Home;
