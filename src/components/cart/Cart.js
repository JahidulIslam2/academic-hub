import React from 'react';

const Cart = () => {
    return (
        <div>
            <h1 className='mt-6 text-2xl text-left font-bold'>target complete at...</h1>
            <div className='h-20 w-auto bg-slate-300 rounded-md m-2'>
                <button className='bg-blue-500 rounded-full m-4 h-12 w-12  hover:bg-blue-700 text-white font-bold'>1hr</button>
                <button className='bg-blue-600 rounded-full m-4 h-12 w-12  hover:bg-blue-700 text-white font-bold'>2hr</button>
                <button className='bg-blue-700 rounded-full m-4 h-12 w-12  hover:bg-blue-700 text-white font-bold'>3hr</button>
                <button className='bg-blue-700 rounded-full m-4 h-12 w-12  hover:bg-blue-700 text-white font-bold'>4hr</button>
            </div>
            
            <div>
                <h1  className='mt-6 text-2xl text-left font-bold text-stone-900'>Daily Work TIme...</h1>
                <div className='h-12 w-60 bg-slate-300 rounded-md m-2'>
                <h2 className='text-left pt-2 font-sans font-semibold'>practice Time:</h2>
                </div>
                <div className='h-12 w-60 bg-slate-300 rounded-md m-2'>
                <h2 className='text-left pt-2 font-sans font-semibold'>Breack Time:</h2>
                </div>
            </div>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Activity Complete</button>
        </div>
    );
};

export default Cart;