import React from 'react'
import { MyCard } from './MyCard'

export const CardsContainer = ({posts}) => {
  return (
    <div className='d-flex flex-wrap gap-3 justify-content-center'>
      {posts && posts.map(obj=>
        <MyCard key={obj.id} {...obj}/>
      )}
    </div>
  )
}


