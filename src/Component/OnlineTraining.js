import React, { useEffect } from 'react';
import "./OnlineTraining.css";
import trainingImage from "../Images/Online.jpg";
import image1 from "../Images/Online1.jpg";
import image2 from "../Images/Online2.jpg";
import image3 from "../Images/Online3.jpg";

export default function OnlineTraining() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="trainings-online">
      <div className="content">
        <div className="intro-section">
          <div className="intro-text">
            <h1>
              <u>Online Trainings</u>
            </h1>
            <p>
              <b>
                **Elevate Your Tech Skills with Our Comprehensive Software
                Training Center.**
              </b>
            </p>
            <p>
              Harness the power of technology with our immersive software
              training programs, designed to equip you with the in-demand skills
              required to succeed in today's digital landscape. Whether you
              prefer the convenience of online learning or the hands-on
              experience of classroom instruction, we offer tailored solutions
              to meet your unique needs.
            </p>

            <img
              src={trainingImage}
              alt="Online Training"
              className="training-image"
            />
          </div>

          <div className="image-gallery">
            <img src={image1} alt="Image1" className="gallery-image" />
            <img src={image2} alt="Image2" className="gallery-image" />
            <img src={image3} alt="Image3" className="gallery-image" />
          </div>

          <p>
            Whether you're a complete beginner or a seasoned professional
            seeking to enhance your skills, our software training center has a
            program designed for you. We offer customized training plans,
            certification preparation courses, and corporate training solutions
            tailored to meet the specific needs of your organization.
          </p>
        </div>

        <div className="reasons-section">
          <h2>Why Choose Our Online Trainings?</h2>
          <ul>
            <li>Flexible scheduling to accommodate your busy lifestyle</li>
            <li>Access to high-quality course materials and resources</li>
            <li>Expert instructors with industry experience</li>
            <li>Interactive learning environment for better engagement</li>
            <li>Opportunity to network with peers and professionals</li>
          </ul>

          <p>
            For any inquiries or assistance regarding our online training
            programs, feel free to <a href="tel:">contact us at 9921810120</a>{" "}
            and our team will be happy to help you.
          </p>
          <p>
            Invest in your future with our comprehensive software training
            programs and unlock new career opportunities. Join us today and
            embark on the path to becoming a highly skilled and confident
            software professional.
          </p>
        </div>
      </div>
    </div>
  );
}
