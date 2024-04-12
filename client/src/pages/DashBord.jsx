import React,{useState,useEffect} from 'react'
import Form from '../components/ProfileForm'
import Table from '../components/Table'
import axios from 'axios'
import Grid from '../components/Grid'

function DashBord() {
    const [data, setData] = useState([])
    const [isGrid, setIsGrid] = useState(true);
    const [isDataAdded,setDataAdded] = useState(0)
  useEffect(()=>{
    axios.post('profile/fetch', {token: localStorage.getItem('login-token')})
  .then(response => {
    setData([...response.data])
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });
  },[setDataAdded])
  return (
    <div>
      <div  style={{display: 'flex', flexDirection: 'row'}}>
      <button onClick={()=>{setIsGrid(!isGrid)}}>
      {isGrid ? (
        <img
          src="row.png"  
          alt="Grid Icon"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
      ) : (
        <img
          src="menu.png"  
          alt="Flex Icon"
          style={{ width: '20px', height: '20px', marginRight: '5px' }}
        />
      )}
      </button>
        <Form  setDataAdded={setDataAdded}/>
        </div>
        {isGrid? <Grid data={data}/>:<Table data={data}/> }
        
    </div>
  )
}

export default DashBord