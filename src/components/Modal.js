import React, { useState } from 'react'

function Modal({children, isOpenModal, setIsOpenModal}) {

  return (
    <div onClick={(e) => e.target.id == "modal" ? setIsOpenModal(false) : ""} className={`fixed top-0 duration-300 bottom-0 left-0 right-0 backdrop-blur z-50 ${isOpenModal ? "scale-1" : "scale-0"}`}  id='modal'>
        <div className='w-[600px] p-5 rounded-md bg-slate-300 absolute top-0 bottom-0 left-0 m-auto right-0 h-[500px]'>{children}</div>
    </div>
  )
}

export default Modal