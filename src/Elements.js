import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import './style2.css'
import orn2 from './ornament2.png'
import orn1 from'./ornament1.png'
import back2 from './back2.jpg'
import line1 from './line1.jpg'
import line2 from'./line2.jpg'

const Elements = observer(({lang}) => {
  const ToggleRu = () => {
    lang.toggleRu()
  }
  const ToggleEng = () => {
    lang.toggleEn()
  }
      return (
        <main className='body'>
          <div class="menu">
<ul class="topmenu">
  <img className="orn1" src={orn1} />
  <li className="menu11">
    {lang.lang == "En"?<p>Our articles</p>:<p>Наши статьи</p>}
    <div className="submenu1">
        <ul className="submenu">
        {lang.lang == "En"?<Link to='/elements'><li>Elements of Kazakh culture</li></Link>:<Link to='/elements'><li>Элементы казахской культуры</li></Link>}
        {lang.lang == "En"?<Link to='/traditions'><li>Traditions of Kazakh culture</li></Link>:<Link to='/elements'><li>Традиции казахской культуры</li></Link>}
        {lang.lang == "En"?<Link to='/customs'><li>Customs of Kazakh culture</li></Link>:<Link to='/customs'><li>Обычаи казахской культуры</li></Link>}
        {lang.lang == "En"?<Link to='/ancient'><li>Ancient customs and traditions of Kazakh culture</li></Link>:<Link to='/ancient'><li>Древние обычаи и традиции казахской культуры</li></Link>}
        {lang.lang == "En"?<li><a href="food.html">Kazakh national food</a></li>:<li><a href="food.html">Казахская национальная еда</a></li>}
      </ul>  
        </div>
    </li>
    <Link to='/'><li className="logomenu"><p>TARIH.KZ</p></li></Link>
    {lang.lang == "En"?<Link to='/about'><li className="menu11"><p>About</p></li></Link>:<Link to='/about'><li className="menu11"><p>О нас</p></li></Link>}
    <div className='ln-control'>
      <button onClick={ToggleRu}>Ru</button>
      <button onClick={ToggleEng}>Eng</button>
      </div>
    </ul>    
  </div>
    <img className="img1" src={back2} />

      <div className="site">
        <img className="orn2" src={orn1} />
        {lang.lang == "En"?<Link to='/elements'><p>ELEMENTS OF KAZAKH CULTURE</p></Link>:<Link to='/elements'><p>ЭЛЕМЕНТЫ КАЗАХСКОЙ КУЛЬТУРЫ</p></Link>}
        <img className="orn2" src={orn1} />
      </div>

      
        <div className="lines">
        {lang.lang == "En"?<p>Kazakh national clothes</p>:<p>Казахская национальная одежда</p>}
        <img className="line1" src={line1} />
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover1"> </a></p></center>
        {lang.lang == "En"?<p>One of the most important elements of all cultures is national clothing. In ancient times, almost all members of Kazakh culture wore roughly the same type of clothing, which differed only in quality and the presence of jewellery. </p>
        :<p>Одним из важнейших элементов всех культур является национальная одежда. В древности практически все представители казахской культуры носили примерно одинакового типа одежду, которая отличалась только качеством и присутствием украшений. </p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover2"> </a></p></center>
        {lang.lang == "En"?<p>The Kazakh costume for men consisted of a shapan or dressing gown with a belt and a headdress. The headdress could be a skullcap, a cap or a fur hat and was changed depending on weather conditions. </p>
        :<p>Казахский костюм для мужчин состоял из шапана или халата с поясом и головного убора. Головным убором могли быть тюбетейка, колпак или меховая шапка, они сменялись в зависимости от погодных условий. </p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover3"> </a></p></center>
        {lang.lang == "En"?<p>Women's costume consisted of gowns, a Saukele wedding headdress. After having a baby and getting married, girls wore a "kimeshek", which is a white shawl that was tied on the head in different ways.</p>
        :<p>Женский костюм состоял из платьев, свадебного головного убора Саукеле. после рождения ребенка и замужества девушки надевали “кимешек”, что является белой шалью, которая завязывалась на голову разными образами.</p>}
      </div>
    </div> 
      
    <div className="container1">
        <div className="text1">
        {lang.lang == "En"?<h2>Kazakh literature</h2>:<h2>Казахская литература</h2>}
        {lang.lang == "En"?<p>Kazakh literature and poetry was created many thousands of years ago, and the art of words was well developed. Various stories and legends have been retold over the centuries, the most common being the epics "Korkyt-ata" and "Oguzname". In medieval times, it was common in Kazakhstan to tell stories and perform to the accompaniment of national instruments: dombra and kobyz. Also at that time reading competitions - aytys - were held, which is a genre of oral poetry. The written literature of Kazakhstan developed in the nineteenth century, during which time one of the most prominent Kazakh writers was Abai Kunanbayev.</p>
        :<p>Казахская литература и поэзия была создана много тысяч лет назад, в ней было хорошо развито словесное искусство. На протяжении многих веков пересказывались различные сказания и легенды, самыми распространенными из них были эпосы “Коркыт-ата” и “Огузнаме”. В Средневековье в Казахстане было распространено повествовать рассказы и произведения под аккомпанемент национальных инструментов: домбры и кобыза. Помимо этого в это время устраивались состязания в чтениях - айтыс, что является жанром устной поэзии. Письменная литература Казахстана развивалась в XIX веке, в данный период времени одним из самых выдающихся казахских писателей являлся Абай Кунанбаев.</p>}  
        </div>
        <p><a href="#" className="rollover11"> </a></p>
      </div>

    <div className="lines">
    {lang.lang == "En"?<p>Kazakh yurt</p>:<p>Казахская юрта</p>}
        <img class="line1" src={line2} />
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover21"> </a></p></center>
        {lang.lang == "En"?<p>The Kazakh yurt is also an important element of culture, as it is the main house of a nomad. A yurt consists of three elements, first of them is a lattice (kerege), which forms the walls of yurt.</p>
        :<p>Казахская юрта также является важным элементом культуры, поскольку это главный дом кочевника. Юрта состоит из трех элементов, первый из них - решетка (кереге), которая образует стены юрты.</p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover22"> </a></p></center>
        {lang.lang == "En"?<p>Kazakh culture it symbolizes comfort, connection with the Earth and the Universe. The last part of a yurt is the top - shanyrak.</p>
        :<p>В казахской культуре она символизирует уют, связь с Землей и Вселенной. Последней частью юрты является верх - шанырак.</p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover23"> </a></p></center>
        {lang.lang == "En"?<p>A yurt is a portable house, it can be easily assembled and disassembled into parts, these parts are loaded on horses and camels during migration. Another part of a yurt is a dome of poles (yuk), which is the roof of the yurt.</p>
        :<p>Юрта это переносной дом, его возможно легко собрать и разобрать на части, эти части грузили на лошадей и верблюдов при перекочевке. Другая часть юрты - купол из жердей (юк), который является крышей юрты.</p>}
      </div>
    </div> 

    <div className="container1">
        <div className="text1">
        {lang.lang == "En"?<h2>Handicrafts of Kazakhstan</h2>:<h2>Ремесла Казахстана</h2>}
        {lang.lang == "En"?<p>The first handicrafts of Kazakhstan were created under the influence of the nomadic way of life. In order to have a comfortable nomadic environment, people created various necessary items. Trees were cultivated to create comfort and safety, horse riding equipment was created, and felts for yurts were sewn. In addition, in order to survive in harsh winter weather conditions, such crafts as making warm fur coats and hats from leather and fur were developed. Also, forging and jewellery-making were developed in Kazakhstan.</p>  
        :<p>Первые ремесла Казахстана были созданы под влиянием кочевого образа жизни. Для того, чтобы иметь комфортные условия для кочевки, люди создавали различные необходимые вещи. Для создания уюта и безопасности обрабатывались деревья, создавалась экипировка для езды на лошадях, также вышивались войлоки для юрт. Помимо этого для выживания в суровых погодных условиях зимой развились такие ремесла как, пошив теплых шуб, шапок из кожи, меха. Также в Казахстане развивалось кузнечное и ювелирное дело.</p>}
        </div>
        <p><a href="#" className="rollover21"> </a></p>
      </div>

      <div className="lines">
      {lang.lang == "En"?<p>Kazakh equestrian games</p>:<p>Казахские конные игры</p>}
        <img className="line1" src={line1} />
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover31"> </a></p></center>
        {lang.lang == "En"?<p>Equestrian games were popular in Kazakhstan because riding a horse was an important part of nomadic life. The most popular game is Kokpar, the essence of this game is to compete for the carcass of a sheep to be carried to a certain place.</p>  
        :<p>Конные игры являлись популярными в казахстане, поскольку езда на коне была важной частью жизни кочевников. Самой популярной игрой является “Кокпар”, суть данной игры заключается в борьбе за тушу барана, которую нужно пронести в определенное место.</p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover32"> </a></p></center>
        {lang.lang == "En"?<p>Another popular game was Alaman Beige, a long-distance race of 10, 20, 50 and in some cases 100 km. In this game, riders could show off their riding skills and demonstrate their strong horse.</p>  
        :<p>Другая популярная игра - «Аламан байге», это скачки на большие дистанции - 10,20,50 и в некоторых случаях 100 километров. В этой игре наездники могли продемонстрировать свои навыки верховой езды и показать свою сильную лошадь.</p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover33"> </a></p></center>
        {lang.lang == "En"?<p>Besides, there was Kyz-Kuu game. At a distance of 300-400 metres a girl on horseback rides first, and the guy who starts riding later tries to catch up with the girl by taking off her handkerchief. </p>  
        :<p>Помимо этого существовала игра “Кыз куу”. В ней на дистанции 300-400 метров сначала скачет девушка на лошади, а за ней парень который начинает скачку несколько позже и пытается догнать девушку, сняв с ее руки платок. </p>}
      </div>
    </div> 

    <div className="container1">
        <div className="text1">
        {lang.lang == "En"?<h2>Kazakh music</h2>:<h2>Казахская музыка</h2>}
        {lang.lang == "En"?<p>Kazakh music in ancient times was based on folklore and had no musical notation. Thus, it was handed down from generation to generation and was more characterised by improvisation. The first Kazakh music genre was created in the 15th-17th centuries - it was called "kuy". In this genre, the musician performed a work on dombra, and also used it to sing stories from legends and fairy tales. It was only at the beginning of the 20th century that academic classical music developed, based on knowledge from Russian and European schools of music.</p> 
        :<p>Казахская музыка в древности была основе на фольклоре и в ней не существовала нотная запись. Таким образом она передавалась от поколения к поколению и в ней больше присутствовало импровизации. Первый казахский музыкальный жанр был создан в 15-17 веках, он назывался кюем. В этом жанре музыкант исполнял произведение на домбре, также с помощью него люди могли петь истории из легенд и сказок. Только в начале 20 века сформировалась академическая классическая музыка, основанная на знаниях с русских и европейских музыкальных школ.</p>}
        </div>
        <p><a href="#" className="rollover4"> </a></p>
      </div>

      <div className='bibliography'>
      <h2>Bibliography of sources</h2>
      <p>Advantour. (n.d.). Казахская культура. Retrieved from:
https://www.advantour.com/rus/kazakhstan/culture.htm </p>
<p>Advantour. (n.d.). Традиции Казахстана. Retrieved from:
https://www.advantour.com/rus/kazakhstan/traditions.htm </p>
    </div>
    <div className='bibliography-pic'>
      <h2>Bibliography of pictures</h2>
      <p>[Photograph of Kazakh nation and steppe]. (n.d.). Retrieved from: 
https://i.pinimg.com/736x/10/ad/96/10ad96684e189bf08c9ca22e209ea704.jpg </p>
      <p>[Photograph of Kazakh man in national clothes]. (n.d.). Retrieved from: https://pin.it/6r7MGF9</p>
<p>[Man in kazakh national clothes]. (n.d.) Retrieved from: https://pin.it/7MACdVr</p>
<p>[Photo of sketches of Kazakh national clothes]. (n.d.). Retrieved from: https://pin.it/6WF4Sqs</p>
<p>[Photograph of Kazakh girl in national clothes]. (n.d.). Retrieved from: https://pin.it/1OTvCMo</p>
<p>[Portrait of poet Abay Kunanbayev]. (n.d.). Retrieved from: https://vechastana.kz/wp-content/uploads/01-101.jpg </p>
<p>[Painting of Kazakh akyn]. (n.d.). Retrieved from: https://adebiportal.kz/upload/1/2017/02/22/d93736213adbef5d604d75f714ca4d52.jpg </p>
<p>[Photograph of lattice of kazakh yurt]. (n.d.). Retrieved from: 
https://putidorogi-nn.ru/images/stories/aziya/kazahstan/kazahskaya_yurta_3.jpg</p>
<p>[Photograph of shanyrak of kazakh yurt]. (n.d.). Retrieved from: https://st4.depositphotos.com/1004423/20678/i/1600/depositphotos_206785122-stock-photo-kazakh-shanyrak-the-roof-of.jpg</p>
<p>[Photograph of kazakh yurt]. (n.d.). Retrieved from: 
https://kzvesti.kz/wp-content/uploads/2021/09/1e5c9c98ba418f5edc81ea7d48e68912825c7c.jpg </p>
<p>[Photograph of Kazakh jewelry]. (n.d.). Retrieved from: https://www.inform.kz/radmin/fotofiles/2019/12/17/1912171221430634f.jpg</p>
<p>[Photograph of Kazakh handicrafts]. (n.d.). Retrieved from: https://e-history.kz/storage/tmp/resize/news/1200_0_c8e88babc5b4ecabc5aea29e260f83f3.jpg </p>
<p>[Photograph of Kazakh game kokpar]. (n.d.). Retrieved from:
https://www.advantour.com/img/kazakhstan/culture/horse-games/kokpar.jpg</p>
<p>[Photograph of Kazakh horse racing]. (n.d.). Retrieved from:
https://kazpravda.kz/media/uploads/publication2/119/50/119507-image.jpg</p>
<p>[Photograph of Kazakh boy and girl on horses.] (n.d.). Retrieved from:
https://eastroute.com/wp-content/uploads/2018/07/kis-kuu12.jpg </p>
<p>[Photograph of akyn.] (n.d.). Retrieved from:
https://static.tildacdn.com/tild3532-3938-4732-a538-376338653066/83.jpg </p>
<p>Ethno-folk band Turan and orchestra of folk instruments
[Kazakh National Kurmangazy Conservatoire.] (n.d.). Retrieved from:
https://musicnews.kz/wp-content/uploads/2013/02/2_IMG_2963.jpg  </p>
    </div>

    <div className="blockk">
      <img className="orn3" src={orn2} />
      <center>
      <div className="end">
      {lang.lang == "En"?<p >PRODUCED BY</p>:<p>СОЗДАНО</p>}
      <div className="end2">
      {lang.lang == "En"?<p>Aidargaliyeva Aiym</p>:<p>Айдаргалиевой Айым</p>}
        <p>2022</p>
      </div>
    </div> 
    </center>
    <img class="orn4" src={orn2} />
    </div>

        </main>
      )
    }
)
  export default Elements;