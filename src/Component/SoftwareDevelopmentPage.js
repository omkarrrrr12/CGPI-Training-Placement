import React, {useEffect}from 'react';
import './SoftwareDevelopmentPage.css'; 
import image1 from '../Images/Offline3.jpg';
import image2 from '../Images/Offline2.jpg';

const SoftwareDevelopmentPage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="software-development-page">
      <div className="content3">
      <h1><u>Software Development</u></h1>
      <p>CGPI Software Private Limited is a leading provider of comprehensive digital solutions designed to empower businesses of all sizes. With a focus on innovation and customer satisfaction, CGPI has established itself as a trusted partner for numerous reputed companies. Our suite of services encompasses website building, customized software and app development, domain registration, hosting, and digital marketing through Google Ads.</p>

      <p>Our team of experienced professionals leverages the latest technologies and industry best practices to create websites that are both visually appealing and highly functional. We understand the unique requirements of each business and tailor our designs accordingly, ensuring that your online presence effectively communicates your brand's message and drives conversions.</p>

      <img src={image1} alt="Website Building" />

      <p>Furthermore, we specialize in developing customized software and mobile applications that streamline your operations, automate processes, and enhance productivity. Our software solutions are tailored to meet specific business needs, providing you with a competitive edge in today's digital landscape.</p>

      <img src={image2} alt="Customized Software and App Development" />

      <p>To ensure the seamless operation of your online presence, we offer reliable domain registration and hosting services. Our state-of-the-art data centers provide secure and scalable hosting environments, guaranteeing the availability and performance of your website.</p>

      <p>Additionally, we harness the power of Google Ads to elevate your digital marketing efforts. Our team of certified Google Ads specialists creates targeted campaigns that reach your desired audience, drive traffic to your website, and generate qualified leads.</p>

      <p>By partnering with CGPI Software Private Limited, you can leverage our expertise to build a robust online presence, streamline your operations, and achieve your business goals. Our commitment to quality, innovation, and customer satisfaction sets us apart as the ideal choice for businesses seeking comprehensive digital solutions.</p>
    </div>
    </div>
  );
};

export default SoftwareDevelopmentPage;
