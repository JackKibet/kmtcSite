import React from 'react';

const News = () => {
  return (
    <section className="news-section">
      <h2>News & Events</h2>
      <div className="news-grid">
        <div className="news-card">
          <h3>KMTC Graduation Ceremony 2023</h3>
          <p>
            The 2023 graduation ceremony will be held on December 15th at the KMTC Nairobi Campus. 
            All graduates are invited to attend.
          </p>
        </div>
        <div className="news-card">
          <h3>New Campus in Mombasa</h3>
          <p>
            KMTC has opened a new campus in Mombasa, offering programs in nursing and clinical medicine. 
            Applications are now open.
          </p>
        </div>
        <div className="news-card">
          <h3>Scholarship Opportunities</h3>
          <p>
            KMTC is offering scholarships to needy students. Apply before the deadline on November 30th, 2023.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;