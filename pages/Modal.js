import React from 'react'
import { createPortal } from 'react-dom'
import { useState,useEffect } from 'react';

const Modal = (props) => {
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setOpen(true)

        }, 5000)
    },[])
    const handleModalClose = (e) =>{
        e.preventDefault();
        setOpen(false)
    }
    const modalContent = props.open ? (
        <div className='overflow-y-hidden'>                                                                                           
        {/* This is the modal backdrop */}
        <div className='block fixed left-0 top-0 w-full h-full bg-black bg-opacity-40 z-49'> 
        {/* This is the modal content */}
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 py-5 px-10 rounded-md text-center z-50'>
        <h2 className='text-slate-200 text-xl font-medium my-5 max-[420px]:text-xs'>Hey there! I hope you are having a good day.</h2>
        <p className='text-slate-200 text-lg font-normal my-5 max-w-lg mx-auto max-[420px]:text-xs'>This is not a portfolio website, this was my attempt at learning Tailwind CSS. This is a basic React/Next + Tailwind CSS portfolio project.</p>
        <button onClick={handleModalClose} className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-teal-700 hover:bg-cyan-700 hover:text-slate-300 hover:rounded-sm min-[200px]:mx-auto'>Close</button>
        </div>
        </div>
        </div>
    ) : null
    
    if(open){
        return createPortal(modalContent, document.getElementById('portal'))
    } else 
    return null
}

export default Modal