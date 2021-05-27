import  React, {useState} from "react"
import './index.css'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import icon from "../images/spichka-icon.png"
import phoneIcon from "../images/phone-icon.png"
import upsideDownTriangleDashed from "../images/upside-down-triangle-dashed.png"
import upsideDownTriangle from "../images/upside-down-triangle.png"
import plusSmall from "../images/plus-small.png"
import triangleStandart from "../images/triangle-standart.png"
import circle from "../images/circle.png"
import plusBig from "../images/plus-big.png"
import obliqueLines from "../images/oblique-lines.png"
import startFlag from "../images/start-flag.png"


const IndexPage = () => {

  const [animationStyle, setAnimationStyle] = useState({
    strokeDashoffset: '6150'
  })

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.y)
    if(currPos.y < - 600 && currPos.y > - 800) {
      console.log('style')
      setAnimationStyle({strokeDashoffset: '6150'})
  }else if(currPos.y < - 800 && currPos.y > - 1000) {
    setAnimationStyle({strokeDashoffset: '7300'})
  }else if(currPos.y < - 1200 && currPos.y > - 1400) {
    setAnimationStyle({strokeDashoffset: '8210'})
  }else if(currPos.y < - 1400 && currPos.y > - 1600) {
    setAnimationStyle({strokeDashoffset: '9130'})
  }else if(currPos.y < - 1600 && currPos.y > - 1800) {
    setAnimationStyle({strokeDashoffset: '10050'})
  }else if(currPos.y < - 1800 && currPos.y > - 2000){
    setAnimationStyle({strokeDashoffset: '10970'})
  }else if(currPos.y < - 2200 && currPos.y > - 2400){
    setAnimationStyle({strokeDashoffset: '11890'})
  }else if(currPos.y < - 2400 && currPos.y > - 2600){
    setAnimationStyle({strokeDashoffset: '12300'})
  }else{
    return animationStyle
  }
  },[animationStyle])

  return (
    < >
      <div className="main-block">
        <svg className="right-line" width="739" height="850" viewBox="0 0 739 850" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M366.5 -1.52588e-05C375 -114 739 -1.14441e-05 739 -1.14441e-05V850.001L0 788C147 675 138.5 601.5 368 632C458.182 643.985 529.758 609.029 583.426 562.173C687.957 470.907 696.434 326.853 599.064 227.982C587.964 216.711 561.318 194.095 547.777 185.916C428.936 114.134 358.447 108.007 366.5 -1.52588e-05Z" fill="white"/>
        </svg>

          <div className="header">
                <div className="header-spichka">
                  <h1 className="header-text">Спичка</h1>
                  <div className="header-icon"><img src={icon} alt="icon" /></div>
                </div>
                <div className="portfolio-contacts_block">
                  <div className="portfolio">Портфолио</div>
                  <div className="contacts">Контакты</div>
                </div>
                <div className="phone-number-block">
                  <img className="phone-icon" src={phoneIcon} alt="phone icon"></img>
                  <div className="number">8 928 877 37 40</div>
                </div>
                <button className="contact-us">Связаться с нами</button>
                <div className="triangle">
                  <img className="upside-down-triangle-dashed" src={upsideDownTriangleDashed} alt="upside down "></img>
                  <img className="upside-down-triangle" src={upsideDownTriangle} alt="upside down triangle"></img>
                </div>
                <img className="plus-small" src={plusSmall} alt="plus small"></img>
                <img className="triangle-standart" src={triangleStandart} alt="triangle standart"></img>
                <div className="header-tagline">
                  <h1 className="header-tagline-h1">Digital-решения</h1>
                  <h1 className="header-tagline-h1">для вашего бизнеса</h1>
                </div>
                <div className="services">
                  <h6>SaaS E-commerce</h6>
                  <h6>|</h6>
                  <h6>Мобильные приложения</h6>
                  <h6>|</h6>
                  <h6>CRM-системы</h6>
                </div>
                <button className="leave-request_button">Оставьте заявку</button>
                <img className="circle" src={circle} alt="circle"></img>
                <img className="plus-big" src={plusBig} alt="plus-big"></img>
                <img className="oblique-lines" src={obliqueLines} alt="oblique-lines"></img>
                
          </div>
          <div className="how-we-work_block">
            <svg className="bottom-line" width="1440" height="919" viewBox="0 0 1440 919" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M-55.7783 229.686C-55.8752 218.163 -49.8836 207.444 -40.0172 201.489L109.001 111.558C208.294 51.6359 330.969 45.3166 435.893 94.7191L532.781 140.338C603.811 173.781 688.158 159.397 744.088 104.302C748.945 99.5173 754.969 96.0867 761.562 94.3509L1074.16 12.0489C1139.89 -5.25488 1209.28 -2.52486 1273.44 19.8887L1512.46 103.385C1551.54 117.037 1577.82 153.772 1578.14 195.166L1583.57 918.183H-49.9858L-55.7783 229.686Z" fill="white"/>
            </svg>
            <div className="how-we-work_container">
            <h2 className="how-we-work_text">Как мы работаем</h2>
            <div className="animation_svg-upper-line">
              <svg width="824" height="1146" viewBox="0 0 824 1146" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M383 1145H97.5C44.2045 1145 1 1101.8 1 1048.5V1048.5C1 995.205 44.2045 952 97.5 952H724.81C773.55 952 813.06 912.489 813.06 863.75V863.75C813.06 815.011 773.55 775.5 724.81 775.5H98.25C44.5403 775.5 1 731.96 1 678.25V678.25C1 624.54 44.5403 581 98.25 581H724.58C773.446 581 813.06 541.386 813.06 492.52V492.52C813.06 443.653 773.446 404.039 724.58 404.039H99.3763C45.0446 404.039 1 359.995 1 305.663V305.663C1 251.331 45.0445 207.287 99.3762 207.287H713.06C768.289 207.287 813.06 162.515 813.06 107.287V17V6.46979C813.06 3.72505 815.285 1.5 818.03 1.5H819C821.209 1.5 823 3.29086 823 5.5V5.5" stroke="#FF4601" strokeWidth="2"/>
              </svg>
            </div>
            <div className="animation_svg-bottom-line">
              <svg width="815" height="1144" viewBox="0 0 815 1144" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M374 1136.5L373 1131.5M373 1131.5H87.1896C40.1073 1131.5 1.93958 1093.33 1.93958 1046.25V1046.25C1.93958 999.168 40.1073 961 87.1896 961H716C770.124 961 814 917.124 814 863V863C814 808.876 770.124 765 716 765H89.4396C41.1147 765 1.93958 725.825 1.93958 677.5V677.5C1.93958 629.175 41.1147 590 89.4396 590H716.139C770.186 590 814 546.186 814 492.139V492.139C814 438.092 770.186 394.278 716.139 394.278H91.0785C41.8484 394.278 1.93958 354.369 1.93958 305.139V305.139C1.93958 255.909 41.8484 216 91.0785 216H704C764.751 216 814 166.751 814 106V25.2488V0M373 1131.5V1144" stroke="#FF4601" strokeWidth="2"/>
              </svg>
            </div>
            <div className="animation-svg-start-finish" style={animationStyle}>
              <svg width="836" height="1144" viewBox="0 0 815 1144" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M374 1136.5L373 1131.5M373 1131.5H87.1896C40.1073 1131.5 1.93958 1093.33 1.93958 1046.25V1046.25C1.93958 999.168 40.1073 961 87.1896 961H716C770.124 961 814 917.124 814 863V863C814 808.876 770.124 765 716 765H89.4396C41.1147 765 1.93958 725.825 1.93958 677.5V677.5C1.93958 629.175 41.1147 590 89.4396 590H716.139C770.186 590 814 546.186 814 492.139V492.139C814 438.092 770.186 394.278 716.139 394.278H91.0785C41.8484 394.278 1.93958 354.369 1.93958 305.139V305.139C1.93958 255.909 41.8484 216 91.0785 216H704C764.751 216 814 166.751 814 106V25.2488V0M373 1131.5V1144" stroke="#FF4601" strokeWidth="20"/>
              </svg>
            </div>
                <div className="start-flag">
                    <img src={startFlag} alt="start-flag"></img>
                </div>
                <div className="animation-circle">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="36" fill="white" stroke="#FF4601" strokeWidth="8"/>
                  </svg>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default IndexPage
