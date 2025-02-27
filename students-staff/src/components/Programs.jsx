import React from 'react';

const Programs = () => {
  return (
    <section className="programs-section">
      <h2>Our Programs</h2>
      <div className="programs-grid">
        <div className="program-card">
          <h3>Diploma in Nursing</h3>
          <p>
            A comprehensive nursing program designed to equip students with the necessary skills to provide quality patient care 
            in hospitals, clinics, and community settings.
          </p>
        </div>
        <div className="program-card">
          <h3>Diploma in Clinical Medicine</h3>
          <p>
            Training for clinical officers to provide primary healthcare services, including diagnosis, treatment, and preventive care.
          </p>
        </div>
        <div className="program-card">
          <h3>Diploma in Pharmacy</h3>
          <p>
            Prepare for a career in pharmaceutical services, including drug dispensing, patient counseling, and healthcare management.
          </p>
        </div>
        <div className="program-card">
          <h3>Diploma in Medical Laboratory Sciences</h3>
          <p>
            Train to become a medical laboratory technologist, capable of conducting diagnostic tests and research in medical laboratories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;