
import React from 'react';

const Content = (props) => {
    const {name,picture,timer,email,key}=props
    return (
        <div className=''>
            {/* <img src={picture} alt="" srcset="" />
            <h2>{name}</h2>
            <p>{timer}</p>
            <p>{email}</p> */}
            
            <div>
            <div className="card card-compact w-72 h-96 bg-base-100 shadow-xl gap-7 p-4 bg-slate-200 mt-9">
                        <figure><img src={picture} alt="img" /></figure>
                <div className="card-body mt-4">
                    <h2 className="card-title mt-4 text-lg font-bold">Name: {name}</h2>
                    <p>work time: {timer}h</p>
                    <div className="card-actions justify-end">
                        <p>If your photos aren't good enough, then you're not close enough.</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-9"> add list</button>
                    </div>
                </div>
                </div>
            </div>
     </div>
    );
};

export default Content;