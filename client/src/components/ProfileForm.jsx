import React, { useState } from 'react';
import axios from 'axios'


const stateData = {
  "California": ["Los Angeles", "San Francisco", "San Diego"],
  "New York": ["New York City", "Buffalo", "Rochester"],
  "Texas": ["Houston", "Dallas", "Austin"],
  "Florida": ["Miami", "Orlando", "Tampa"],
  "Illinois": ["Chicago", "Springfield", "Peoria"]
}




const ProfileForm = ({setDataAdded}) => {
  const [showPopup, setShowPopup] = useState(false);
  
  const [formData, setFormData] = useState({
    firstname: '',
    lastName: '',
    profileImage: '',
    age: '',
    gender: '',
    hobbies: '',
    country: '',
    state: '',
    city: '',
  });
  

  function convertToBase64(file){
    
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setFormData({
      ...formData,
      profileImage: base64,
    });
  }

  const handleSubmit = (e) => {
    if(formData.firstname!=''&& formData.lastName!=''&& formData.profileImage!=''&& formData.age!=''&& formData.gender!=''&& formData.hobbies!=''&&
formData.country!=''&& formData.state!=''&& formData.city!='' ){
  e.preventDefault();
  // Handle form submission here, such as sending data to a server
  console.log(formData);
  
  axios.post('/profile/add', {data: formData, token: localStorage.getItem('login-token')})
.then(response => {
  // Handle success
  setDataAdded(prev => (prev+1))
 if(response.status === 201){
  console.log("Saved Successfully");
  setFormData({
    firstname: '',
    lastName: '',
    profileImage: '',
    age: '',
    gender: '',
    hobbies: '',
    country: '',
    state: '',
    city: '',
  });
 }
})
.catch(error => {
  // Handle error
  console.error('Error:', error);
});
}else{
  alert('Enter all Data');
  console.log(formData);
}
    
    
    // You can also reset the form after submission if needed
    
  };

  return (
    <div>
      <button onClick={()=>{setShowPopup(!showPopup)}}>Add Profile</button>
      {showPopup && (
        <div className="popup">
        <div className="popup-content">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{margin: '10px'}}>Enter  Profile Detail </div>
            <button onClick={()=>{setShowPopup(!showPopup)}} style={{width: '30%',flexDirection:'flex-start'}}>X</button>
          </div>
        
        <form onSubmit={handleSubmit}>
        <div style={ {width: "100%"}}> 
        <div className='input-box2'>
        <input
            type="text"
            name="firstname"
            value={formData.firstname}
            placeholder='First Name'
            onChange={handleChange}
          />
        </div>
          
        
        
        <div className='input-box2'>
          <input
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        
        <div className='input-box2'>
          <input 
            type="file"
            lable="Image"
            name="myFile"
            id='file-upload'
            accept='.jpeg, .png, .jpg'
            onChange={(e) => handleFileUpload(e)}
           />
       </div>
        
        
       <div className='input-box2'>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder='Age'
            onChange={handleChange}
          />
        </div>
        
        
        <div className='input-box2'>
          <select name="gender" placeholder='Gender' value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className='input-box2'>
          <input
            type="text"
            name="hobbies"
            placeholder='Hobbies'
            value={formData.hobbies}
            onChange={handleChange}
          />
          </div>
  
          <div className='input-box2'>
          <select type="text"
            name="country"
            placeholder='Country'
            value={formData.country}
            onChange={handleChange} >
               <option value="">Select Country</option>
            <option value="male">USA</option>
            </select>
            </div>
            <div className='input-box2'>
          <select
            type="text"
            name="state"
            placeholder='State'
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            {Object.keys(stateData)?.map((name)=>(<option value={name}>{name}</option>))}
          </select>
        </div>
        
        
        <div className='input-box2'>
          <select
            type="text"
            name="city"
            value={formData.city}
            placeholder='City'
            onChange={handleChange}
          >
            <option value="">{(formData.state===""?"Select State First": "Select City")}</option>
            {stateData[formData.state]?.map((name)=>(<option value={name}>{name}</option>))}
          </select>
        </div>
        </div>
        
        
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
      )}
    </div>
    
  );
};

export default ProfileForm;
