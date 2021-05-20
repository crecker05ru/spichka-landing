import * as React from "react"
import './index.css'
import icon from "../images/spichka-icon.png"
import phoneIcon from "../images/phone-icon.png"
import upsideDownTriangleDashed from "../images/upside-down-triangle-dashed.png"
import upsideDownTriangle from "../images/upside-down-triangle.png"
import plusSmall from "../images/plus-small.png"
import triangleStandart from "../images/triangle-standart.png"
// markup
const IndexPage = () => {
  return (
    < >
      <div className="main-block">
        <svg className="right-line" width="739" height="850" viewBox="0 0 739 850" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M366.5 -1.52588e-05C375 -114 739 -1.14441e-05 739 -1.14441e-05V850.001L0 788C147 675 138.5 601.5 368 632C458.182 643.985 529.758 609.029 583.426 562.173C687.957 470.907 696.434 326.853 599.064 227.982C587.964 216.711 561.318 194.095 547.777 185.916C428.936 114.134 358.447 108.007 366.5 -1.52588e-05Z" fill="white"/>
        </svg>
        <svg className="bottom-line" width="1440" height="919" viewBox="0 0 1440 919" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-55.7783 229.686C-55.8752 218.163 -49.8836 207.444 -40.0172 201.489L109.001 111.558C208.294 51.6359 330.969 45.3166 435.893 94.7191L532.781 140.338C603.811 173.781 688.158 159.397 744.088 104.302C748.945 99.5173 754.969 96.0867 761.562 94.3509L1074.16 12.0489C1139.89 -5.25488 1209.28 -2.52486 1273.44 19.8887L1512.46 103.385C1551.54 117.037 1577.82 153.772 1578.14 195.166L1583.57 918.183H-49.9858L-55.7783 229.686Z" fill="white"/>
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
          </div>
      </div>
    </>
  )
}

export default IndexPage
