import React from 'react';

const Admissions = () => {
  return (
    <section className="admissions-section">
      <h2>Admissions</h2>
      <p>
        Join Kenya Medical Training College and take the first step toward a rewarding career in healthcare. 
        Our admissions process is designed to be simple and transparent.
      </p>
      <h3>Admission Requirements</h3>
      <ul>
        <li>KCSE Certificate with a minimum grade of C-</li>
        <li>Pass in relevant science subjects (Biology, Chemistry, Physics)</li>
        <li>Completed application form</li>
        <li>Application fee payment receipt</li>
      </ul>
      <h3>How to Apply</h3>
      <ol>
        <li>Download the application form from our website.</li>
        <li>Fill out the form and submit it to the nearest KMTC campus.</li>
        <li>Pay the application fee via M-Pesa or bank deposit.</li>
        <li>Wait for the admission letter.</li>
      </ol>
      <button className='download'>Download Application Form</button>
    </section>
  );
};

export default Admissions;