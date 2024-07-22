import React ,{useEffect}from 'react';
import './Internship.css';
import image1 from '../Images/Offline1.jpg';
import image2 from '../Images/Offline2.jpg';

function Internship() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="internship-content">
      <div className="background">
      <MainSection />
      <InfoSection />
      <DetailsSection />
      </div>
    </div>
  );
}

const MainSection = () => {
  return (
    <section className="main-section" >
      <div className="overlay"></div>
      <div className="contentI">
        <h1>CGPI Software Private Limited:</h1> 
        <h1>Your Gateway to a Rewarding Internship in Data Science, Data Analytics, Full Stack, Web, React, AWS, Java, and Django</h1>
      </div>
    </section>
  );
};

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-content">
        <h2>Intern with CGPI Software Private Limited</h2>
        <p>
          CGPI Software Private Limited is a leading software development company that offers a wide range of services, including data science, data analytics, full stack development, web development, React, AWS, Java, and Django. As a company that values innovation and excellence, CGPI Software Private Limited is committed to providing college students with a rewarding internship experience that will help them develop their skills and prepare them for a successful career in the tech industry.
        </p>
        <p>
          Our internship program is designed to provide students with hands-on experience in various aspects of software development. As an intern at CGPI Software Private Limited, you will have the opportunity to work on real-world projects, collaborate with experienced professionals, and learn from industry experts. Our internship program is open to students from all backgrounds, including data science, data analytics, full stack development, web development, React, AWS, Java, and Django.
        </p>
      </div>
      <div className="info-image">
        <img src={image1} alt="Intern with CGPI Software" />
      </div>
    </section>
  );
};

const DetailsSection = () => {
  return (
    <section className="details-section">
      <div className="details-content">
        <ul>
          <li>
            <h3>Data Science Internship</h3>
            <p>
              As a data science intern, you will work on projects that involve data analysis, machine learning, and predictive modeling. You will learn how to use various tools and techniques to extract insights from data and develop data-driven solutions to complex problems. Our data science interns work closely with our team of data scientists and analysts, who will guide you through the entire process and help you develop your skills.
            </p>
          </li>
          <li>
            <h3>Data Analytics Internship</h3>
            <p>
              If you are interested in data analytics, our internship program will provide you with the opportunity to work on projects that involve data visualization, reporting, and business intelligence. You will learn how to use tools like Tableau, Power BI, and Excel to create interactive dashboards and reports that help businesses make data-driven decisions. Our data analytics interns work closely with our team of analysts, who will guide you through the entire process and help you develop your skills.
            </p>
          </li>
          <li>
            <h3>Full Stack Development Internship</h3>
            <p>
              For those interested in full stack development, our internship program will provide you with the opportunity to work on projects that involve front-end and back-end development. You will learn how to use tools like HTML, CSS, JavaScript, React, Node.js, and Express.js to build web applications that are both functional and visually appealing. Our full stack development interns work closely with our team of developers, who will guide you through the entire process and help you develop your skills.
            </p>
          </li>
          <li>
            <h3>Web Development Internship</h3>
            <p>
              If you are interested in web development, our internship program will provide you with the opportunity to work on projects that involve front-end development using HTML, CSS, and JavaScript. You will learn how to use tools like Bootstrap, jQuery, and AJAX to build responsive and interactive web applications. Our web development interns work closely with our team of developers, who will guide you through the entire process and help you develop your skills.
            </p>
          </li>
          <li>
            <h3>React Internship</h3>
            <p>
              For those interested in React, our internship program will provide you with the opportunity to work on projects that involve front-end development using React and Redux. You will learn how to use tools like Webpack, Babel, and ESLint to build scalable and maintainable web applications. Our React interns work closely with our team of developers, who will guide you through the entire process and help you develop your skills.
            </p>
          </li>
          <li>
            <h3>AWS Internship</h3>
            <p>
              If you are interested in AWS, our internship program will provide you with the opportunity to work on projects that involve cloud computing and infrastructure management. You will learn how to use tools like Amazon EC2, Amazon S3, and Amazon RDS to build scalable and reliable cloud-based applications. Our AWS interns work closely with our team of cloud engineers, who will guide you through the entire process and help you develop your skills.
            </p>
          </li>
          <li>
            <h3>Java Internship</h3>
            <p>
              For those interested in Java, our internship program will provide you with the opportunity to work on projects that involve back-end development using Java and Spring. You will learn how to use tools like Maven, Gradle, and JUnit to build robust and scalable enterprise applications. Our Java interns work closely with our team of developers, who will guide you through the entire process and help you develop your skills.
            </p>
          </li>
          <li>
            <h3>Django Internship</h3>
            <p>
              If you are interested in Django, our internship program will provide you with the opportunity to work on projects that involve back-end development using Python and Django. You will learn how to use tools like Django REST framework, Celery, and Docker to build scalable and maintainable web applications. Our Django interns work closely with our team of developers, who will guide you through the entire process and help you develop your skills.
            </p>
          </li>
        </ul>
      </div>
      <div className="details-image">
        <img src={image2} alt="CGPI Software Internships" />
      </div>
    </section>
  );
};

export default Internship;
