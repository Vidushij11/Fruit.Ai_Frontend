import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const FaqCard = ({ question, answer, editFaq, deleteFaq, id }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="h-full border-black border-solid border-2 flex flex-col pl-6 pb-0 pt-0">
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-medium'>{question}</h1>
                <div className='w-8 h-8 text-black bg-blue-500 text-3xl font-medium flex items-center justify-center cursor-pointer pb-2' onClick={toggleExpand}><span>
                    {expanded?"-":"+"}
                </span></div>
            </div> 
            {expanded?(
                <div className='flex flex-col pb-2 gap-2'>
                    <p>
                        {answer}
                    </p>
                    <div className='flex gap-4'>
                        <div className='cursor-pointer' onClick={()=>{
                            editFaq(id)
                        }}>
                            <MdEdit />
                        </div>
                        <div className='text-red-600 cursor-pointer' onClick={()=>{
                            deleteFaq(id)
                        }}>
                            <MdDelete />
                        </div>
                    </div>
                </div>
            ):(<></>)}
        </div>
    );
};

export default FaqCard;