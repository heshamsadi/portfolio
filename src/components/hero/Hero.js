import { useEffect } from 'react'
import './Hero.css'
import ProfilePic from "../../assets/images/profile-pic.png"



function Hero(props){


  
    return (<>
        <div className="hero">
          <div className="heroLeft">
            <h1 className="heroName">Hicham ESSAIDI</h1>
            <h3 className="heroTitle">Front End Developer</h3>
            <p className="heroText">A passionate Front-End Developer
              hailing from Morocco.
              <br/><br/> With a solid foundation in web development, I'm
              dedicated to creating stunning websites that combine design excellence
              with seamless user experiences.
              <br/>
              <br/>
              Let's embark on a digital journey together!</p>
            <div className='heroBtnContainer'>
              <button className="heroBtn">Download CV</button>
              <button className="heroBtn">Contact</button>
            </div>
            <div className='heroIconsContainer'>
        <a href="https://github.com/heshamsadi/" target="_blank">
            <i class="fab fa-github"></i>
        </a>
        
        <a href="https://www.linkedin.com/in/hicham-essaidi-840b11288/" target="_blank">
            <i class="fab fa-linkedin"></i>
        </a>
        


        
        <a href="mailto:hichamessaidi74@gmail.com">
            <i class="fas fa-envelope"></i>
        </a>
        

            </div>

          </div>
          <div className="heroRight">
            <div className='heroImageContainer'>
              <div className='bgTextCt1'>
                <h1 className='bgText bgText11'>HICHAMHICHAMHICHAMHICHAM</h1>
                <h1 className='bgText bgText12'>HICHAMHICHAMHICHAMHICHAM</h1>
              </div>
              <div className='bgTextCt2'>
                <h1 className='bgText bgText21'>HICHAMHICHAMHICHAMHICHAM</h1>
                <h1 className='bgText bgText22'>HICHAMHICHAMHICHAMHICHAM</h1>
              </div>
            

             <img src={ProfilePic} className="heroImage" alt="profileImage"/>
            </div>
            <div className='heroSkillsIconsContainer'>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-shopify"></i>
            </div>
          </div>
          
        </div>
    </>)
}

export default Hero;