import React from 'react';


function Card({ profileData }) {
  const { firstname, lastName, profileImage, age, gender, hobbies, country, state, city } = profileData;

  return (
    <div className="card grid-card ">
      <div className="header">
        <div className="name">
          <span style={{marginRight: '0.25em'}}>{firstname}</span>
          <span>{lastName}</span>
        </div>
        <div className="age-gender">
          <span style={{marginRight: '0.25em'}}>{age} years</span>
          <span>{gender}</span>
        </div>
      </div>
      <div className="image-container">
        <img src={profileImage} style={{with: '100%', height: '100%'}} alt="Profile" className="profile-image" />
      </div>
      <div className="info">
        <div className="hobbies">
          <span>Hobbies: {hobbies}</span>
        </div>
        <div className="location">
          <span>{city}, {state}, {country}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
