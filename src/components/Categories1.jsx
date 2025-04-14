import React from 'react'
import { useContext } from 'react'
import { CategContext } from '../context/CategContext'
import { FormGroup, Input, Label } from 'reactstrap'

export const Categories1 = ({selCateg,setSelCateg}) => {
  const {categories1}=useContext(CategContext)

  const handleChange=(event)=>{
    const {value,checked}=event.target 
    setSelCateg(prev=> checked ? [...prev,value] : prev.filter(categ=>categ!=value))
  }

  return (
    <div>
      {categories1 && categories1.map(obj=>
          <FormGroup  check   inline   key={obj.id}   >
            <Input type="checkbox" value={obj.name} onChange={handleChange}  checked={selCateg.includes(obj.name)}/>
            <Label >  {obj.name}    </Label>   
          </FormGroup> 
      )}
    </div>
  )
}


