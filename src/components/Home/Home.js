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
        <div className='grid grid-cols-6 gap-4 lg:grid-cols-6 sm:col-span-6 '>
            <div className=' col-span-4 sm:col-span-4 lg:col-span-4'>

                <div className='grid grid-cols-3 gap-4 lg:col-span-3 sm:col-span-2'>

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
            <div className=' col-span-2 bg-stone-500 shadow-gray-900 lg:col-span-2 sm:col-span-2 '>
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
            {/* Question */}
            <div>
                <h1 className='font-extrabold'>how Work React..?</h1>
                <p> React implements a virtual DOM that is basically a DOM tree representation in JavaScript.So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.</p>

                <p>
                    <h1>Difference by props and State</h1>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                </p>
                <h1 className='font-extrabold'>why use useEffect other than data load..?</h1>
                <p>
                    useEffect hook Some Use case.Running on state change: validating input field.live filtering. trigger animation on new array value.update paragraph list on fetched API data update.
                </p>
            </div>
        </div>
    );
};

export default Home;



