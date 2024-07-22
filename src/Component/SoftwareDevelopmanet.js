import React from 'react';
import './SoftwareDevelopmanet.css';
import largeImage from '../Images/softwareupgraded.jpg'; // Replace 'your-image.jpg' with the actual image file name

const SoftwareDevelopmanet = () => {
  return (
    <div className='software-container'>
      <div className='software-card'>
        <h1>Software Development</h1>
        <div className='large-image-container'>
          <img src={largeImage} alt='Software Development' className='large-image' />
        </div>
      </div>
    </div>
  );
}

export default SoftwareDevelopmanet;
