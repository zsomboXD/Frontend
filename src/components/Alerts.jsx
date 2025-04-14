import React from 'react'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export const Alerts = ({txt,err}) => {
    useEffect(()=>{
        if(err) toast.error(err)
        else toast.success(txt)
    },[txt,err])

  return (
    <div>
      <ToastContainer />
    </div>
  )
}
