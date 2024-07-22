import React, { useEffect } from 'react';
import "./OfflineTraining.css";
import trainingImage from "../Images/Offline.jpg";
import image1 from "../Images/Offline1.jpg";
import image2 from "../Images/Offline2.jpg";
import image3 from "../Images/Offline3.jpg";


  

export default function OfflineTraining() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="offline-trainings">
      <div className="content2">
        <div className="intro-section2">
          <div className="intro-text2">
            <h1>
              <u>Offline Trainings</u>
            </h1>
            <p>
              <b>
                **Empowering Individuals with Cutting-Edge Software Skills.**
              </b>
            </p>

            <p>
              Our Software Training Center is a transformative hub where
              aspiring professionals and career-minded individuals embark on a
              journey to master the latest software tools and technologies.
              Through a comprehensive curriculum and hands-on training, we
              empower our students with the skills and knowledge to excel in the
              competitive tech industry. Our experienced instructors, drawn from
              the industry's top ranks, guide students through immersive
              learning experiences that cover a wide range of software domains,
              including programming languages, software development, data
              analytics, and cloud computing. Our commitment to personalized
              learning ensures that each student receives the attention and
              support they need to achieve their full potential. Whether you're
              a complete beginner or an experienced professional seeking to
              advance your career, our offline training programs are
              meticulously designed to cater to your unique learning needs. Join
              us and unlock the power of software proficiency, opening doors to
              a world of exciting opportunities and limitless possibilities.
            </p>
          </div>
          <img
            src={trainingImage}
            alt="Offline Training"
            className="training-image2"
          />
        </div>

        <div className="image-gallery2">
          <img src={image1} alt="Image1" className="gallery-image" />
          <img src={image2} alt="Image2" className="gallery-image" />
          <img src={image3} alt="Image3" className="gallery-image" />
        </div>
        <div className="reasons-section2">
          <h2>Why Choose Our Offline Trainings?</h2>
          <ul>
            <li>Hands-on experience with real-world projects</li>
            <li>Personalized instruction from industry experts</li>
            <li>Opportunity to network with peers and professionals</li>
            <li>Interactive workshops and seminars</li>
            <li>Flexible scheduling options</li>
          </ul>
          <p>
            Our offline trainings are meticulously crafted to meet the evolving
            demands of the industry and equip you with the skills and confidence
            to thrive in your career. Whether you're a seasoned professional or
            just starting your journey, our offline programs cater to learners
            of all levels.
          </p>

          <p>
            For any inquiries or assistance regarding our offline training
            programs, feel free to <a href="tel:">contact us at 9921810120</a>{" "}
            and our team will be happy to assist you. We are committed to
            providing you with the best learning experience and helping you
            achieve your professional goals.
          </p>
          <p>
            Take the next step in your career and join our offline training
            programs today! Accelerate your career growth with our expert-led
            sessions.
          </p>
        </div>
      </div>
    </div>
  );
}
