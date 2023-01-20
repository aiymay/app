import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import './style2.css'
import orn2 from './ornament2.png'
import orn1 from'./ornament1.png'
import back6 from './back6.jpeg'
import line1 from './line1.jpg'
import line2 from'./line2.jpg'

const Ancient = observer(({lang}) => {
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
  <img className="orn1" src={orn1} alt=''/>
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
    <img className="img1" src={back6} alt=''/>

      <div className="site3">
        <img className="orn2" src={orn1} alt=''/>
        {lang.lang == "En"?<Link to='/ancient'><p>ANCIENT CUSTOMS AND TRADITIONS OF KAZAKH CULTURE</p></Link>:<Link to='/ancient'><p>ДРЕВНИЕ ОБЫЧАИ И ТРАДИЦИИ КАЗАХСКОЙ КУЛЬТУРЫ</p></Link>}
        <img className="orn2" src={orn1} alt=''/>
      </div>

      
        <div className="lines">
        {lang.lang == "En"?<p>The earliest customs of the Kazakh people</p>:<p>Древние обычаи казахского народа</p>}
        <img className="line1" src={line1} alt=''/>
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover35"> </a></p></center>
        {lang.lang == "En"?<p>"Ashamayga mingizu" is a ceremony in which a boy of 6-7 years of age was supposed to be given a horse and a horsewhip. This rite signalled the boy's growth to become a real dzhigit or warrior. During the celebration, all the elders congratulated and blessed the boy, wishing him to perform more feats. Afterwards, parents could hold a celebration for their son in honour of the event. </p>
        :<p>“Ашамайға мінгізу” является обрядом, в котором мальчику 6-7 лет полагалось дарить коня и камчу. Данный обряд свидетельствовал о росте мальчика, который становится настоящим джигитом или воином. При праздновании, все старшие люди поздравляли и благословляли юнца, желая ему совершать больше подвигов. После этого, родители могли устроить праздник сыну в честь этого события. </p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover36"> </a></p></center>
        {lang.lang == "En"?<p>Another ancient rite is "Tugan zherge aunatu". In this custom, a person who has spent or lived a long time away from their homeland should be rolled in the ground upon arrival in their homeland. The meaning of this custom is to reunite a person with his native land, which is considered important in Kazakh culture.</p>
        :<p>Еще одним древним обрядом является “Туған жерге аунату”. В данном обычае человек который провел или прожил долгое время далеко от своих родных земель должен был обваляться в земле по приезду на родину. Смысл данного обычая заключается в воссоединении человека с родными землями, что считается важным в казахской культуре.</p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover37"> </a></p></center>
        {lang.lang == "En"?<p>"Bastangy" is a custom in which the younger generation had a celebration for themselves. Usually such celebrations were held after the adults had left, and they also highlighted various good wishes to one another.</p>
        :<p>“Бастанғы” является обычаем, в котором молодое поколение устраивало торжество для себя. Обычно такие праздники проводились после отъезда взрослых, также на них особо выделялись различные хорошие пожелания друг другу.</p>}
      </div>
    </div> 
      
    <div className="container1">
        <div className="text1">
        {lang.lang == "En"?<h2>Family traditions</h2>:<h2>Семейные традиции</h2>}
        {lang.lang == "En"?<p>One of the ancient traditions of Kazakh culture is the ritual of "tilashar", held when a child begins to speak his or her first words. After that, parents would invite an expressive, wise man to their house to say some words to the child. If the child repeated these words, it was considered to be a good omen. "Kursak toi" is one of the ancient Kazakh traditions, which relates to the news of a wife's pregnancy. This news has always been a great joy for a Kazakh family, so the bride's mother-in-law would invite the women, specifically relatives and neighbours, to visit afterwards. A festive dastarkhan was laid and a ram was slaughtered to celebrate the good news and the meat cooked was served to the guests. Afterwards, the invitees would say their best wishes to the family and daughter-in-law, congratulating them on this joyous occasion. </p> 
        :<p>Одной из древних традиций казахской культуры является обряд “тілашар”, проводившийся когда ребенок начинал говорить свои первые слова. После этого, родители звали к себе в дом выразительного, мудрого человека который произносил ребенку некоторые слова. В случае того, что ребенок повторял эти слова, для него это считалось хорошим предзнаменованием. “Құрсақ той” является одной из древних казахских традиция, которая связана с новостью о беременности невестки. Данная новость всегда была огромной радостью для казахской семьи, поэтому свекровь невесты после этого приглашала в гости женщин, а именно родственниц и соседок. Накрывался праздничный дастархан, также в честь радостной новости резался баран и приготовленное мясо подавалось гостям. После этого, приглашенные говорили наилучшие пожелания семье и невестке, поздравляя их с таким радостным событием. </p>} 
        </div>
        <p><a href="#" className="rollover38"> </a></p>
      </div>

    <div classv="lines">
    {lang.lang == "En"?<p>Ancient wedding customs</p>:<p>Древние свадебные традиции</p>}
        <img className="line1" src={line2} alt=''/>
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover45"> </a></p></center>
        {lang.lang == "En"?<p>"Shash oru" is an ancient Kazakh tradition that is associated with braiding a girl's hair. It was believed that before marriage a girl should braid her hair only in one braid, this showed that she was unmarried. During and after her wedding she would already braid her hair in two braids, which demonstrated her new status in life. </p>
        :<p>“Шаш өру” является древней казахской традицией, которая связана с плетением косичек у девушки. Считалось, что до замужества девушки должны заплетать волосы только в одну косу, это показывало, что она незамужняя. Во время и после своей свадьбы она заплетала свои волосы уже в две косы, что демонстрировало ее новый статус в жизни. </p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover46"> </a></p></center>
        {lang.lang == "En"?<p>"At tergeu" is a tradition that relates to a girl's life after marriage. The new daughter-in-law could not call her husband's relatives by name, so she had to come up with her own nicknames for each. In doing so, she had to find nicknames that suited each in-law in terms of their character. With this, her husband's relatives evaluated her resourcefulness, intelligence, and the appropriateness of the chosen names. This tradition was a sign of mutual respect between the daughter-in-law and her husband's relatives.</p>
        :<p>“Ат тергеу” является традицией которая связана с жизнью девушки после замужества. Новая невестка не могла называть родственников своего мужа по имени, поэтому она должна была придумать каждому свои прозвища. При этом, она должна была подобрать такие прозвища, которые соответствовали каждому родственнику по их характеру. Этим родственники мужа оценивали ее находчивость, ум, уместность подобранных имен. Данная традиция являлась признаком взаимного уважения между невесткой и родственниками мужа.</p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover47"> </a></p></center>
        {lang.lang == "En"?<p>The tradition of "Salemdeme" is also related to a girl's life after the wedding. In ancient times a girl could not see her relatives after marriage, so whenever possible she would send them a special message, which could be in the form of a shawl or any other handicraft. The ornaments that were embroidered were a message to the parents about her current state and destiny after the wedding. If the ornament khosharmyuz or ram's horn was present in the message, it made it clear that she was offended and disrespected in her new family. On the contrary, the kusmuryn or bird's beak signified that the girl was living in well-being and was treated as her own daughter. </p>
        :<p>Традиция “Сәлемдеме” также связана с жизнью девушки после свадьбы. В древности после свадьбы девушка не могла видеться с своими родными, поэтому при любой возможности она отправляла им специальную весточку, которая могла быть в виде платочка или любого другого рукоделия. Орнаменты которые были вышиты ей были для родителей сообщением о ее текущем состоянии и судьбе после свадьбы. Если в весточке присутствовал орнамент қошқармүйіз или бараний рог, это давало понять, что в новой семье ее обижают и неуважительно к ней относятся. Напротив, элемент құсмұрын или птичий клюв, означал, что девушка живет в благополучии и к ней относятся как к родной дочери.   </p>}
      </div>
    </div> 

<div className="site2">
        <img className="orn2" src={orn1} alt=''/>
        {lang.lang == "En"?<p id="food">KAZAKH NATIONAL FOOD</p>:<p id="food">КАЗАХСКАЯ НАЦИОНАЛЬНАЯ ЕДА</p>}
        <img className="orn2" src={orn1} alt=''/> 
      </div>

    <div className="container1">
        <div className="text2">
        {lang.lang == "En"?<h2>Beshbarmak</h2>:<h2>Бешбармак</h2>}
        {lang.lang == "En"?<p>The main national food in Kazakhstan is beshbarmak. It is served in almost every Kazakh home in case of solemn celebrations, invitations to guests and so on. This dish includes boiled meat, which is the most important part of the dish; horsemeat, mutton or beef can be used as meat. Also the thin boiled dough and broth which was used to cook the meat are included. When the dish is served, the cooked dough is placed first, then the meat and the broth are poured over the whole dish. </p>  
        :<p>Главным национальным блюдом в Казахстане является “бешбармак”. Его подают практически в каждом доме у казахов в случае торжественных празднований, приглашений гостей и так далее. В состав данного блюда входят вареное мясо, которое является самой главной частью блюда, в качестве мяса могут использоваться конина, баранина или говядина. Также включается тонкое вареное тесто и бульон в котором варилось мясо. При подаче блюда сначала кладется вареное тесто, затем мясо и все блюдо поливается бульоном. </p>}
        </div>
        <p><a href="#" className="rollover48"> </a></p>
      </div>

      <div className="lines">
      {lang.lang == "En"?<p>Kazy, Sirne, Irimshik</p>:<p>Казы, Сірне, Ірімшік</p>}
        <img className="line1" src={line1} alt=''/> 
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover55"> </a></p></center>
        {lang.lang == "En"?<p>Another important dish in Kazakh national food is kazy. This is homemade sausage made of horse meat, the recipe of kazy has been preserved since ancient times of the Kazakh people. Kazy is made from meat taken from a horse rib, the meat is stuffed into a well cleaned gut. Then it is tied on both sides and boiled for two hours. </p>
        :<p>Другим важным блюдом в казахской национальной еде является казы. Это домашняя колбаса из конины, рецепт казы сохранялся с древних времен казахского народа. Казы готовится из мяса взятое из ребра лошади, мясо набивает в хорошо очищенную кишку. Затем ее завязывают с двух сторон и варят от два часа. </p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover56"> </a></p></center>
        {lang.lang == "En"?<p>Sirne is a Kazakh food made from lamb meat. First, lamb is stewed on fire for a long time, which makes the meat very soft and tender. Then boiled potatoes, onions and other various vegetables are added to the roast to taste.  </p>
        :<p>Сырне является казахским блюдом изготовленным из мяса барашка. Сначала, барашка долго томят на огне, что делает мясо очень мягким и нежным. Затем в жаркое добавляют вареную картошку, лук и другие различные овощи по вкусу. </p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover57"> </a></p></center>
        {lang.lang == "En"?<p>Irimshik is one of the important snacks for Kazakh dastarkhan, it is a curd that has a sweet taste even without adding sugar to it. When making irimshik, first the milk is brought to the boil on low heat, then it is cooled down a little, a sourdough is added, stirred and left for a few hours. When the curd clot is formed, it is separated from the liquid. Irimshik is divided into two kinds, white and red, with red irimshik dried a little in the sun. </p>
        :<p>Иримшик - одна из важных закусок казахского дастархана, это творог, который имеет сладкий вкус даже без добавления сахара. При приготовлении иримшика молоко сначала доводят до кипения на слабом огне, затем немного остужают, добавляют закваску, перемешивают и оставляют на несколько часов. Когда образуется творожный сгусток, его отделяют от жидкости. Иримшик делится на два вида - белый и красный, причем красный иримшик немного подсушивают на солнце. </p>}
      </div>
    </div> 

    <div className="container1">
        <div className="text2">
        {lang.lang == "En"?<h2>Kumys, baursak</h2>:<h2>Кумыс, бауырсак</h2>}
        {lang.lang == "En"?<p>Kumys is one of the healthiest drinks in the Kazakh culture. It is made from mare's milk and contains various vitamins that help cure various diseases: riboflavin (B2), vitamin B12, thiamin (B1), vitamin C, biotin, folic acid and pantothenic acid. Baursaks is an integral part of any dastarkhan in Kazakhstan. They are made of yeast dough, which is fried in oil. Baursaks can have a sweet taste and they serve as a snack on the table, it is served not only with main dishes, but also with tea.</p>  
        :<p>Кумыс является одним из самых полезных напитков в казахской культуре. Оно изготовляется из кобыльего молока, также содержит различные витамины помогающие излечить различные болезни: рибофлавин (B2), витамин B12, тиамин (B1), витамин C, биотин, фолиевую и пантотеновую кислоты. Баурсаки являются неотъемлемой частью любого дастархана в Казахстане. Они готовятся из дрожжевого теста, которое обжаривается в масле. Баурсаки могут иметь сладкий вкус и они служат закуской на столе, его подают не только к основным блюдам, но и к чаю.</p>}
        </div>
        <p><a href="#" className="rollover58"> </a></p>
      </div>

      <div className='bibliography'>
      <h2>Bibliography of sources</h2>
      <p>Абжан Г.М., Абылханова Г.А.(2014). ОБЫЧАИ И ТРАДИЦИИ КАЗАХСТАНА. Современные наукоемкие технологии, (10), 54-58. https://top-technologies.ru/ru/article/view?id=34724</p>
<p>Advantour. (n.d.). Традиционные казахские блюда. Retrieved from:
https://www.advantour.com/rus/kazakhstan/dishes.htm </p>
<p>Оспанулы, Е. (2016). 8 Казахских традиций о которых вы не знали. Retrieved from:
https://the-steppe.com/razvitie/10-kazahskih-tradiciy-o-kotoryh-vy-ne-znali </p>
<p>Рахимжан, Н. (2022).  Шесть забытых традиций казахского народа. Retrieved from:
https://www.zakon.kz/6008190-shest-zabytykh-kazakhskikh-traditsii.html  </p>
    </div>

    <div className='bibliography-pic'>
      <h2>Bibliography of pictures</h2>
      <p>Te, E. [Painting of Nauryz.] (n.d.). Retrieved from: 
https://tengrinews.kz/userdata/images/u355/resized/28ed42f58edb145187e84e3752bd4662.jpeg  </p>
<p>[Painting of Ashamayga mingizu.] (n.d.). Retrieved from: 
https://kaz.tengrinews.kz/userdata/news_kk/2018/news_294098/thumb_m/photo_52201.jpg </p>
<p>[Photo of Ashamayga mingizu.] (n.d.). Retrieved from: 
http://anamenbala.kz/wp-content/uploads/2012/01/ashamaiga_minu.jpg</p>
<p>[Painting of Tugan zherge aunatu.] (n.d.). Retrieved from: 
https://sun9-29.userapi.com/impg/c855624/v855624298/21e93d/WveDzZSi3VU.jpg?size=960x587&quality=96&sign=afc24c437814b644fe20e45c6bcf9664&c_uniq_tag=3FmT-HpDvfCM7nflQKGWFJ_CQT6o9SpvXzf198lRJ1k&type=album</p>
<p>[Painting of Tugan zherge aunatu custom.] (n.d.). Retrieved from: 
https://kaz.365info.kz/wp-content/uploads/2021/12/2d9e3cde7eaa231916fa66d734c10889-600x400.jpg </p>
<p> [Photo of Bastangy.] (n.d.). Retrieved from: 
https://www.soyle.kz/upload/images/cd13dfe911decd42df3857b62a6a123e.jpg </p>
<p>[Photo of Bastangy with a girl.] (n.d.). Retrieved from: 
http://stan.kz/wp-content/uploads/2016/12/glx9VbfOLsE.jpg </p>
<p>[Painting of “tilashar”.] (n.d.). Retrieved from: 
https://toibiznes.kz/imagecache/original/images/16062017115207_f3ccdd27d2000e3f9255a7e3e2c48800.jpg</p>
<p>[Painting of Kursak toi.] (n.d.). Retrieved from: 
https://the-steppe.com/templateEditor/kcfinder/upload/files/kursaktoi.jpg  </p>
<p>[Photo of Kazakh girl with two braids.] (n.d.). Retrieved from: 
https://old.aqmeshit-aptalygy.kz/uploads/posts/2020-07/1594701923_100656133_281132943041037_1230655385805519820_n.jpg</p>
<p>[Photo of Shash oru.] (n.d.). Retrieved from: 
https://massaget.kz/userdata/news/news_22391/image_l.jpg</p>
<p>[Painting of "At tergeu".] (n.d.). Retrieved from:
https://the-steppe.com/templateEditor/kcfinder/upload/files/shashoru.jpg </p>
<p>[Photograph of "At tergeu".] (n.d.). Retrieved from:
https://osken-onir.kz/uploads/posts/2018-02/1519552839_keln.jpg </p>
<p>[Painting of "Salemdeme" tradition.] (n.d.). Retrieved from:
https://the-steppe.com/templateEditor/kcfinder/upload/files/esik_koru(1).jpg </p>
<p>[Photo of "Salemdeme"] (n.d.). Retrieved from:
https://el.kz/upload/medialibrary/8fc/8fcd1c41154eea1ba272e4a11017a033.jpg </p>
<p>[Photograph of Beshbarmak dish] (n.d.). Retrieved from:
http://multivarka-receptik.ru/wp-content/uploads/2022/10/beshbarmak-reczept-klassicheskij.jpg  </p>
<p>[Photograph of dough for Beshbarmak] (n.d.). Retrieved from:
https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/14071.jpg </p>
<p>[Photograph of Kazy] (n.d.). Retrieved from:
https://maida.kz/wp-content/uploads/2020/01/%D0%A1%D1%8B%D1%80%D0%BD%D0%B5-%D0%A2%D0%B0%D0%B1%D0%B0%D0%BA-10900-%D1%82%D0%B3_.jpg </p>
<p>[Photograph of Sirne] (n.d.). Retrieved from:
https://images.satu.kz/175838375_w640_h640_syrne-iz-baraniny.jpg </p>
<p>[Photograph of Sirne] (n.d.). Retrieved from:
https://www.advantour.com/img/kazakhstan/dishes/irimshik.jpg </p>
<p>[Photograph of Red Irimshik] (n.d.). Retrieved from:
https://www.advantour.com/img/kazakhstan/dishes/irimshik.jpg </p>
<p>[Photograph of  white Sirne] (n.d.). Retrieved from:
https://chef.tm/public/pics/124/124273_0.jpg </p>
<p>[Photograph of  Kumys] (n.d.). Retrieved from:
https://foodbay.com/wiki/wp-content/uploads/2020/09/eb995f.jpg </p>
<p>[Photograph of  Baursaks] (n.d.). Retrieved from:
https://i.ytimg.com/vi/GdP2vJqxwj8/maxresdefault.jpg </p>
    </div>

    <div className="blockk">
      <img className="orn3" src={orn2} alt=''/>
      <center>
      <div className="end">
      {lang.lang == "En"?<p >PRODUCED BY</p>:<p>СОЗДАНО</p>}
      <div className="end2">
      {lang.lang == "En"?<p>Aidargaliyeva Aiym</p>:<p>Айдаргалиевой Айым</p>}
        <p>2022</p>
      </div>
    </div> 
    </center>
    <img class="orn4" src={orn2} alt=''/>
    </div>

        </main>
      )
    }
)
export default Ancient;