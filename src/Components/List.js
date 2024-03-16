import React from 'react'
import ListCard from './ListCard'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div>
     <Link  ><ListCard title={"hello"}></ListCard></Link>  
     <Link  ><ListCard></ListCard></Link>  
     <Link  ><ListCard></ListCard></Link>  
     <Link  ><ListCard></ListCard></Link>  
     <Link  ><ListCard></ListCard></Link>  
     <Link  ><ListCard></ListCard></Link>  
     <Link  ><ListCard></ListCard></Link>  
     <Link  ><ListCard></ListCard></Link>  
     <Link  ><ListCard></ListCard></Link>  
    </div>
  )
}

export default List
