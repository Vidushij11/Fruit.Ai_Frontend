import React, { useState } from 'react'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

export default function FruitCard({image, singlePrice, name}) {
    const [count, setCount] = useState(1);
    function incCount(){
        setCount(c=>c+1);
    }
    function decCount(){
        setCount(c=>{
            if(c>1){
                return c-1;
            }else return 1;
        })
    }
  return (
    <div className='max-w-3xl w-full p-2 rounded-lg flex h-24 gap-2 bg-white'>
        <img src={image} alt="" className='h-full w-20'/>
        <div className='flex flex-col gap-1 w-full'>
            <div className='flex justify-between items-center gap-8'>
                <p className='text-lg text-orange-600'>{name}</p>
                <div className='flex gap-2 justify-center items-center text-xl'>
                    <div onClick={decCount}>
                        <IoIosRemoveCircleOutline />
                    </div>
                    <p>    
                        {count}
                    </p>
                    <div onClick={incCount}>
                        <IoIosAddCircleOutline />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center gap-8'>
                <p className='text-lg text-orange-600'>$ {singlePrice}</p>
                <p className='text-lg text-orange-600'>$ {singlePrice * count}</p>
                
            </div>

            <div></div>
        </div>
    </div>
  )
}
