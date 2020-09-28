import React from 'react';
import './AboutUs.css';

const AboutUs = React.memo(({ darkMode }) => {
  return (
    <section className="contacts">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad1399a61240ef1d7f226a4918d6155eae678e2acb0f7f01743d5e750302b7e4d&amp;source=constructor"
        width="100%"
        height="550"
        frameBorder="0"
        title="myFrame"></iframe>
      <div className="contacts-block">
        <div className={darkMode ? 'contacts-block__dark' : 'contacts-block__adress'}>
          <span className="contacts-block__title">Адрес офиса</span>
          г. Хабаровск, ул. Пионерская, д. 1
        </div>
      </div>
    </section>
  );
});

export default AboutUs;
