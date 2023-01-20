import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import './style2.css'
import orn2 from './ornament2.png'
import orn1 from'./ornament1.png'
import back7 from './back7.jpg'
import line1 from './line1.jpg'
import line2 from'./line2.jpg'

const About = observer(({lang}) => {
  const ToggleRu = () => {
    lang.toggleRu()
  }
  const ToggleEng = () => {
    lang.toggleEn()
  }
      return (
        <main className='body'>
          <div className="menu">
<ul className="topmenu">
  <img className="orn1" src={orn1} alt='orn1'/>
  <li className="menu11">
  {lang.lang === "En"?<p>Our articles</p>:<p>Наши статьи</p>}
    <div className="submenu1">
        <ul className="submenu">
        {lang.lang === "En"?<Link to='/elements'><li>Elements of Kazakh culture</li></Link>:<Link to='/elements'><li>Элементы казахской культуры</li></Link>}
        {lang.lang === "En"?<Link to='/traditions'><li>Traditions of Kazakh culture</li></Link>:<Link to='/elements'><li>Традиции казахской культуры</li></Link>}
        {lang.lang === "En"?<Link to='/customs'><li>Customs of Kazakh culture</li></Link>:<Link to='/customs'><li>Обычаи казахской культуры</li></Link>}
        {lang.lang === "En"?<Link to='/ancient'><li>Ancient customs and traditions of Kazakh culture</li></Link>:<Link to='/ancient'><li>Древние обычаи и традиции казахской культуры</li></Link>}
      </ul>  
        </div>
    </li>
    <Link to='/'><li className="logomenu"><p>TARIH.KZ</p></li></Link>
    {lang.lang === "En"?<Link to='/about'><li className="menu11"><p>About</p></li></Link>:<Link to='/about'><li className="menu11"><p>О нас</p></li></Link>}
    <div className='ln-control'>
      <button onClick={ToggleRu}>Ru</button>
      <button onClick={ToggleEng}>Eng</button>
      </div>
    </ul>    
  </div>
    <img className="img1" src={back7} alt=''/>

     <div className="elements">
      <div className="container1">
        <div className="text2">
        <div className="lines2">
        {lang.lang === "En"?<p>ABOUT TARIH.KZ</p>:<p>О TARIH.KZ</p>}
        <img className="line2" src={line1} alt='line1'/>
        </div>
        {lang.lang === "En"?<p>This site presents its readers with the opportunity to learn about one of the cultures of Central Asia - the Kazakh culture, which encompasses many features. The site also provides you with more information about the ancient culture of Kazakhstan to help you learn about its history.</p>:<p>Этот сайт представляет своим читателям возможность узнать об одной из культур Центральной Азии - казахской культуре, которая включает в себя множество особенностей. Сайт также предоставляет вам больше информации о древней культуре Казахстана, чтобы помочь вам узнать о его истории.</p>}  
        </div>
        <p><a className="rollover78"> </a></p>
      </div>

      <div className='bibliography-pic'>
      <h2>Bibliography of pictures</h2>
      <p>Кулбатыров, Р. (2017). [Painting of kudalar] (n.d.). Retrieved from: https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkRfcr-KRXXFYvhFP9tS4t96aKTM5SRkZCeTgDn6uOyic  </p>
<p>[Photograph of Kazakh girls in national clothes] (n.d.). Retrieved from:
https://pin.it/7FqKIvv
</p>
    </div>

    <center>
     <div className="end3">
     {lang.lang === "En"?<p >PRODUCED BY</p>:<p>СОЗДАНО</p>}
      <div className="end2">
      {lang.lang === "En"?<p>Aidargaliyeva Aiym</p>:<p>Айдаргалиевой Айым</p>}
        <p>2022</p>
      </div>
    </div> 
    </center>
    </div>

        </main>
      )
    }
)
export default About;