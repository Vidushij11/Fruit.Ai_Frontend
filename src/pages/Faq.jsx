import React, { useEffect, useState } from 'react'
import FaqCard from '../components/FaqCard'
import sideImage from '../assets/faqSideImage.png'
import axios from 'axios'

export default function Faq() {

  const serverUrl = import.meta.env.VITE_API_URL;
  const [faqs,setFaqs] = useState([]);
  const [reset,setReset] = useState(1);

  useEffect(()=>{
    const getFaqs = async () => {
      try{
        const res = await axios.get(serverUrl + '/api/v1/faqs');
        if(res.status===200){
          setFaqs(res.data);
          console.log("faqs",faqs)
        }else{
          alert("error connecting to the server")
        }
      }catch(e){
        alert('error connecting to the server')
        console.error(e.message)
      }
    }
    getFaqs();
  },[reset])

  const addFaq = async ()=>{
    const newQuestion = window.prompt("Enter new question:");
    const newAnswer = window.prompt("Enter new answer:");
    if (newQuestion && newAnswer) {
      await axios.post(serverUrl + "/api/v1/faqs/", {
        question: newQuestion,
        answer: newAnswer,
      });
    }
    setReset(r=>r+1);
  }

  const deleteFaq = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this FAQ?")
    if(confirm)
      await axios.delete(serverUrl + "/api/v1/faqs/"+id)
    setReset(r=>r+1);
  }

  const editFaq = async (id) => {
    const newQuestion = window.prompt("Enter new question:");
    const newAnswer = window.prompt("Enter new answer:");
    if (newQuestion && newAnswer) {
      await axios.put(serverUrl + "/api/v1/faqs/" + id, {
        question: newQuestion,
        answer: newAnswer,
      });
    }
    setReset(r=>r+1);
  };

  return (
    <div className='flex w-full px-2 py-4 md:px-24 md:py-10 min-h-screen bg-[#E2ECEF]'>
      <div className='md:w-3/5 flex flex-col gap-4 h-full w-full'>
        <h1 className='text-purple-500 md:text-4xl text-2xl font-medium'>FREQUENTLY</h1>
        <h1 className='text-purple-500 md:text-4xl text-2xl font-medium mb-5'>ASKED <span className='text-blue-400'>QUESTION</span></h1>
        {
          faqs && faqs.length>0?(
            faqs.map((faq)=><FaqCard key={faq.id} question={faq.question} answer={faq.answer} editFaq={editFaq} deleteFaq={deleteFaq} id={faq.id}/>)
          ):(
            <p>No Faqs present</p>
          )

        }
        <div className='flex items-center justify-center'>
          <div className='bg-blue-500 px-2 py-2 rounded-md font-bold text-white cursor-pointer' onClick={addFaq}>Add FAQ</div>
        </div>
      </div>
      <div className='hidden md:inline-block'>
        <img src={sideImage} alt="" className='p-10 h-[90vh] w-full'/>
      </div>
    </div>
  )
}
