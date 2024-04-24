import React from 'react';
import '../index.css'; // Import custom CSS

function AboutUs() {
  return (
    <section id='AboutUs'>
      <section className="about-us-section">
        <div className="about-us-content">
          <h1 className="about-us-heading">About Us</h1>
          <p className="about-us-text">
            Vishwakarma Government Engineering College (VGEC) is a premier engineering institute located in Ahmedabad, Gujarat, India. 
            Established in 1994, VGEC is affiliated with Gujarat Technological University (GTU) and approved by the All India Council for Technical Education (AICTE).
          </p>
          <p className="about-us-text">
            The college offers undergraduate and postgraduate programs in various disciplines of engineering and technology. 
            With state-of-the-art infrastructure, experienced faculty, and a conducive learning environment, VGEC aims to provide quality education and 
            nurture the talents of its students to excel in their chosen fields.
          </p>
          <p className="about-us-text">
            At VGEC, we are committed to fostering innovation, research, and entrepreneurship among our students. 
            Our alumni have made significant contributions to various industries and sectors, both nationally and internationally.
          </p>
          <p className="about-us-text">
            For more information about VGEC, please visit our official website or contact us directly. We look forward to welcoming you to our campus.
          </p>
        </div>
      </section>
    </section>
  );
}

export default AboutUs;
