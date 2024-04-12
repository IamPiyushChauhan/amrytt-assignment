import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

function Grid({data}) {
  
  return (
    <div className='grid-container'>
      {data.map((item,index)=>(<Card profileData={item}/>))}
    </div>
  )
}

export default Grid