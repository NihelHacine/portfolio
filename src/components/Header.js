import React from 'react'
import '../Header.css'
import { Fade } from 'react-awesome-reveal';

function Header() {

    
  return (
  <div className='header'>

    <div className='head-img'><Fade cascade damping={0.1} duration={4000} triggerOnce><img src='profil.png' alt='nihelhacine'/></Fade></div>
    <div className='head-desc'>
      <h2>I'm Nihel Hacine</h2>
      <a className='head-a'  href="#" target="_blank">FullStack Web <br/>developer</a>
      <main class="full">
  <section class="animation" >
    <div class="first"><div>React Js</div></div>
    <div class="second"><div>Node Js</div></div>
    <div class="third"><div>Express</div></div>
  </section>
</main>
  <div className='btn'> 
  <a href="#contact" className='btn-a'>Contact me</a>
  <a className='btn-a'> CV-DOWNLOAD </a>
 </div>
    </div>

  </div>
  )
}

export default Header