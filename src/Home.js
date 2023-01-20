import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import './home.css'
import orn2 from './ornament2.png'
import orn1 from './ornament1.png'
import girl from'./girl.jpg'
import yurt from'./yurt.jpg'
import kyz from'./kyz.jpg'
import back from'./back.jpg'

const Home = observer(({lang}) =>  {
  const ToggleRu = () => {
    lang.toggleRu()
  }
  const ToggleEng = () => {
    lang.toggleEn()
  }
      return (
        <main className='body'>
          <div className='menu'>
<ul className='topmenu'>
  <img className='orn1' src={orn1} alt='orn1' />
  <li className='menu11'>
    {lang.lang === "En"?<p>Our articles</p>:<p>Наши статьи</p>}
    <div className='submenu1'>
        <ul className='submenu'>
        {lang.lang === "En"?<Link to='/elements'><li>Elements of Kazakh culture</li></Link>:<Link to='/elements'><li>Элементы казахской культуры</li></Link>}
        {lang.lang === "En"?<Link to='/traditions'><li>Traditions of Kazakh culture</li></Link>:<Link to='/elements'><li>Традиции казахской культуры</li></Link>}
        {lang.lang === "En"?<Link to='/customs'><li>Customs of Kazakh culture</li></Link>:<Link to='/customs'><li>Обычаи казахской культуры</li></Link>}
        {lang.lang === "En"?<Link to='/ancient'><li>Ancient customs and traditions of Kazakh culture</li></Link>:<Link to='/ancient'><li>Древние обычаи и традиции казахской культуры</li></Link>}
      </ul>  
        </div>
    </li>
    <Link to='/'><li className="logomenu2"><p>TARIH.KZ</p></li></Link>
    {lang.lang === "En"?<Link to='/about'><li className="menu11"><p>About</p></li></Link>:<Link to='/about'><li className="menu11"><p>О нас</p></li></Link>}
    <div className='ln-control'>
      <button onClick={ToggleRu}>Ru</button>
      <button onClick={ToggleEng}>Eng</button>
      </div>

    </ul>    
  </div>
    <img className='img1' src={back} alt='back'/>
    <div className='buttonn'>
    {lang.lang === "En"?<Link to='/about'><p>ABOUT</p></Link>:<Link to='/about'><p>О НАС</p></Link>}
          </div>
    <div className="blockk2">
      <img className="orn31" src={orn2} alt='orn2'/>
      <div className="block">
      {lang.lang === "En"?<h2>Welcome!</h2>:<h2>Добро пожаловать!</h2>}
      {lang.lang === "En"?<p>The homeland is everyone's paradise.</p>:<p>Родимый край для каждого — рай.</p>}
    </div>
    <img className="orn41" src={orn2} alt='orn2'/>
    </div>
    <div className="block22"></div>
      <div className="h1">
      {lang.lang === "En"?<center><h2>ABOUT US</h2></center>:<center><h2>О НАС</h2></center>}
      {lang.lang === "En"?<center><p>This site presents its readers with the opportunity to learn about one of the cultures of Central Asia - the Kazakh culture, which encompasses many features. </p></center>:<center><p>Этот сайт представляет своим читателям возможность познакомиться с одной из культур Центральной Азии - казахской культурой, которая включает в себя множество особенностей. </p></center>}
      </div>

      <div className="site-main">
        <img className="orn2" src={orn1} alt='orn1' />
        {lang.lang === "En"?<Link to='/elements'><p>ELEMENTS OF KAZAKH CULTURE</p></Link>:<Link to='/elements'><p>ЭЛЕМЕНТЫ КАЗАХСКОЙ КУЛЬТУРЫ</p></Link>}
        <img className="orn2" src={orn1} alt='orn1' />
      </div>

      <div className="elementss11">
        <div className="elements11">
      <div className="item-main">
        <img src="https://previews.123rf.com/images/byheaven/byheaven1505/byheaven150500013/39640619-dombra-kazakh-instrument-apples-and-baursak-dish-on-the-grass-at-sunset-sky.jpg" alt='oaa'/>
        </div>

      <div className="item-main2">
        <img src={girl} alt='girl' />
      </div>

      <div className="item-main3">
        <center><img src={yurt} alt='yurt'/></center>
      </div>
    </div>
    {lang.lang === "En"?<div className="text-main"><p>Elements of Kazakh culture originate from ancient times of Kazakhstan's history and encapsulate the peculiarities of the nomadic way of life. Elements of Kazakh culture include national clothing, literature, yurts, handicrafts and equestrian games.</p></div>:<div className="text-main"><p>Элементы казахской культуры берут свое начало с древнейших времен истории Казахстана и заключают в себе особенности кочевого образа жизни. К элементам казахской культуры относятся национальная одежда, литература, юрты, ремесла и конные игры.</p></div>}
      </div>
      
      <div className="site-main2">
        <img className="orn2" src={orn1} alt='orn1'/>
        {lang.lang === "En"?<Link to='/traditions'><p>TRADITIONS OF KAZAKH CULTURE</p></Link>:<Link to='/elements'><p>ТРАДИЦИИ КАЗАХСКОЙ КУЛЬТУРЫ</p></Link>}
        <img className="orn2" src={orn1} alt='orn1'/>
      </div>

      <div className="elementss-main">
      <div className="elements-main2">
      <div className="item-main11">
        <center><img src={kyz} alt='kyz'/></center>
        </div>

      <div className="item-main21">
        <center><img src="https://assembly.kz/upload/iblock/726/7263f7e6ae4783627837738d36d419a0.jpg" alt='sh'/></center>
      </div>

      <div className="item-main31">
        <center><img src="https://almaty.tv/news_photo/1616220144_news_b.jpeg" alt='item31'/></center>
      </div>
    </div>
    {lang.lang === "En"?<div className="text-main2"><p>The traditions of Kazakh culture, which have been shaped and changed over many centuries, are a huge legacy from our ancestors. Our articles describe traditions related to weddings, gift-giving traditions, Nauryz, hospitality, child-rearing and mutual help.</p></div>:<div className="text-main2"><p>Традиции казахской культуры, которые формировались и изменялись на протяжении многих веков, являются огромным наследием от наших предков. В наших статьях описаны традиции, связанные со свадьбой, традиции дарения подарков, Наурыз, гостеприимство, воспитание детей и взаимопомощь.</p></div>}
  </div>

      <div className="site-main4">
        <img className="orn2" src={orn1} alt='orn1'/>
        {lang.lang === "En"?<Link to='/customs'><p>CUSTOMS OF KAZAKH CULTURE</p></Link>:<Link to='/elements'><p>ОБЫЧАИ КАЗАХСКОЙ КУЛЬТУРЫ</p></Link>}
        <img className="orn2" src={orn1} alt='orn1'/> 
      </div>

      <div className="elementss11">
    <div className="elements11">
      <div className="item-main11">
        <center><img src="https://massaget.kz/userdata/news/news_40355/image_l.jpg" alt='elem'/></center>
        </div>

      <div className="item-main21">
        <center><img src="http://www.zharar.com/uploads/posts/2016-07/1469527372_42c4c4.jpg" alt='elem2'/></center>
      </div>

      <div className="item-main31">
        <center><img src="https://massaget.kz/userdata/news/news_37875/image_b.jpg" alt='elem3'/></center>
      </div>
    </div>
    {lang.lang === "En"?<div className="text-main"><p>Customs are an essential part of Kazakh culture, which reveals the values and mentality of the Kazakh people. You can learn about Kazakh customs related to hospitality, gift-giving, childbirth and marriage.</p></div>:<div className="text-main"><p>Обычаи - это неотъемлемая часть казахской культуры, которая раскрывает ценности и менталитет казахского народа. Вы можете узнать о казахских обычаях, связанных с гостеприимством, дарением подарков, рождением детей и браком.</p></div>}
  </div>

      <div className="site-main3">
        <img className="orn2" src={orn1} alt='orn1'/>
        {lang.lang === "En"?<Link to='/ancient'><p>THE MOST ANCIENT TRADITIONS AND CUSTOMS OF KAZAKH CULTURE</p></Link>:<Link to='/ancient'><p>ДРЕВНИЕ ТРАДИЦИИ И ОБЫЧАИ КАЗАХСКОЙ КУЛЬТУРЫ</p></Link>}
        <img className="orn2" src={orn1} alt='orn1'/>
      </div>

      <div className="elementss-main">
    <div className="elements-main2">
      <div className="item-main">
        <center><img src="https://the-steppe.com/templateEditor/kcfinder/upload/files/shashoru.jpg" /></center>
        </div>

      <div className="item-main2">
        <center><img src="https://the-steppe.com/templateEditor/kcfinder/upload/files/kursaktoi.jpg" /></center>
      </div>

      <div className="item-main3">
        <center><img src="https://toibiznes.kz/imagecache/original/images/16062017115207_f3ccdd27d2000e3f9255a7e3e2c48800.jpg" alt='item3'/></center>
      </div>
    </div>
    {lang.lang === "En"?<div className="text-main2"><p>There are traditions and customs that are not practiced in modern times in Kazakhstan. However, they also play an important role in portraying the characteristics of Kazakh culture. </p></div>:<div className="text-main2"><p>В Казахстане существуют традиции и обычаи, которые не практикуются в современное время. Однако, они также играют важную роль в отображении особенностей казахской культуры. </p></div>}
  </div>

  <div className='bibliography-pic'>
      <h2>Bibliography of pictures</h2>
      <p>[Painting of a Kazakh girl’s dance.] (n.d.). Retrieved from: https://pin.it/5o3iGZy</p>
<p>[Photograph of dombyra]. (n.d.). Retrieved from: https://previews.123rf.com/images/byheaven/byheaven1505/byheaven150500013/39640619-dombra-kazakh-instrument-apples-and-baursak-dish-on-the-grass-at-sunset-sky.jpg</p>
<p>[Photograph of Kazakh girl in national clothes]. (n.d.). Retrieved from: https://pin.it/F9CzDfR</p>
<p>[Photograph of Kazakh yurt]. (n.d.). Retrieved from: https://pin.it/3uVOPcF</p>
<p>[Painting of Kyz uzatu] (n.d.). Retrieved from:https://pin.it/1W5V0qX </p>
<p> Айтбаев, С.  (n.d.). [Painting of Kazakh culture] Retrieved from:
https://assembly.kz/upload/iblock/726/7263f7e6ae4783627837738d36d419a0.jpg </p>
<p> [Painting of a Nauryz celebration.] (n.d.). Retrieved from: 
https://almaty.tv/news_photo/1616220144_news_b.jpeg </p>
<p>[Painting of Hospitality] (n.d.). Retrieved from:
https://massaget.kz/userdata/news/news_40355/image_l.jpg </p>
<p>[Painting of Kazakh family] (n.d.). Retrieved from:
http://www.zharar.com/uploads/posts/2016-07/1469527372_42c4c4.jpg </p>
<p>[Painting of Kazakh women in yurt] (n.d.). Retrieved from:
https://massaget.kz/userdata/news/news_37875/image_b.jpg </p>
<p>[Painting of At tergeu] (n.d.). Retrieved from:
https://the-steppe.com/templateEditor/kcfinder/upload/files/shashoru.jpg </p>
<p>[Painting of Kursak toi] (n.d.). Retrieved from:
https://the-steppe.com/templateEditor/kcfinder/upload/files/kursaktoi.jpg </p>
<p>[Painting of tilashar] (n.d.). Retrieved from:
https://toibiznes.kz/imagecache/original/images/16062017115207_f3ccdd27d2000e3f9255a7e3e2c48800.jpg </p>
    </div>

    <center>
     <div className="end-main">
     {lang.lang === "En"?<p >PRODUCED BY</p>:<p>СОЗДАНО</p>}
      <div className="end-main2">
      {lang.lang === "En"?<p>Aidargaliyeva Aiym</p>:<p>Айдаргалиевой Айым</p>}
        <p>2022</p>
      </div>
    </div> 
    </center>
        </main>
      )
    }
)

    export default Home;