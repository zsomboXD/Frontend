import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useConfirm } from 'material-ui-confirm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const DeleteAccount = () => {
    const {user,logoutUser,deleteAccount}=useContext(UserContext)
    const confirm=useConfirm()
    const navigate=useNavigate()

    useEffect(()=>{
        !user && navigate('/')
    },[user])

    const handleDelete=async ()=>{
        try {
            await confirm({
                description:"Ez egy visszavonhatatlan művelet!",
                confirmationText:"Igen",
                cancellationText:"Mégsem",
                title:"Biztosan ki szeretnéd törölni a flhasználói fiókodat?"
            })
            await deleteAccount()
            logoutUser()
        } catch (error) {
            console.log('mégse:',error);
            
        }
    }

  return (
    <div className='page'>
      
        <button className="btn btn-danger" onClick={handleDelete}>Felhasználói fiók törlése</button>
    </div>
  )
}

