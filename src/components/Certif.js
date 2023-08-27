import React from 'react'
import '../Certif.css'
import { Fade } from 'react-awesome-reveal'


function Certif() {
  return (
    <Fade cascade damping={0.1} duration={3000} direction='right' triggerOnce>
    <div className='certif' id='certif'>
        <div className='timeline-section'>
        <div className="timeline">
        <h2 className='certifTitle'>Certifications & Diplomas </h2>

          {/*first*/}
          <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div className="timeline__event__icon">
              {/* <i class="lni-sport"></i>*/}
            </div>
            <div className="timeline__event__date">
              Aout 2023
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
              GOMYCODE
              </div>
              <div className="timeline__event__description">
                <p>GOMYCODERS Onboarding/Training : welcoming / Teaching philosophy / Learn and teach </p>
              </div>
            </div>
          </div>
          {/*second*/}
       

          <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div className="timeline__event__icon ">
              {/* <i class="lni-sport"></i>*/}
            </div>
            <div className="timeline__event__date">
              July 2023
            </div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">
                GOMYCODE
              </div>
              <div className="timeline__event__description">
                <p>FullStack JS Web Bootcamp (ReactJs / NodeJS / Express )</p>
              </div>
            </div>
          </div>
          {/*third*/}
          <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div className="timeline__event__icon">
              {/* <i class="lni-sport"></i>*/}
            </div>
            <div className="timeline__event__date">
              Mai 2023
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                INCO Academy/Minassa
              </div>
              <div className="timeline__event__description">
                <p>Go into tech Bootcamp (Wordpress / Audit seo / Marketing Digital / web-design) </p>
              </div>
            </div>
          </div>
          {/*forth*/}
          <div className="timeline__event animated fadeInUp timeline__event--type1">
            <div className="timeline__event__icon">
              {/* <i class="lni-sport"></i>*/}
            </div>
            <div className="timeline__event__date">
              Septembre 2020 
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                Institut supérieur de gestion Gabes
              </div>
              <div className="timeline__event__description">
                <p>E-commerce Master degree </p>
              </div>
            </div>
          </div>
          {/*first*/}
          <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div className="timeline__event__icon ">
              {/* <i class="lni-sport"></i>*/}
            </div>
            <div className="timeline__event__date">
              Mai 2016
            </div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">
              Institut supérieur de gestion Gabes
              </div>
              <div className="timeline__event__description">
                <p>Basic Bachelor's Degree in Management Computing </p>
              </div>
            </div>
          </div>
          {/*second*/}
          <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div className="timeline__event__icon">
              {/* <i class="lni-sport"></i>*/}
            </div>
            <div className="timeline__event__date">
              June 2013
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                Abouloubaba school 
              </div>
              <div className="timeline__event__description">
                <p>Baccalaureat in computer sciences</p>
              </div>
            </div>
          </div>
       
        </div>
        </div>
    </div>
    </Fade>
  )
}

export default Certif