import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import './style2.css'
import orn2 from './ornament2.png'
import orn1 from'./ornament1.png'
import back3 from './back3.jpg'
import line1 from './line1.jpg'
import line2 from'./line2.jpg'

const Traditions = observer(({lang}) => {
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
        {lang.lang === "En"?<li><a href="food.html">Kazakh national food</a></li>:<li><a href="food.html">Казахская национальная еда</a></li>}
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
    <img className="img1" src={back3} alt='back3' />

      <div className="site">
        <img className="orn2" src={orn1} alt='orn1' />
        {lang.lang === "En"?<Link to='/traditions'><p>TRADITIONS OF KAZAKH CULTURE</p></Link>:<Link to='/traditions'><p>ТРАДИЦИИ КАЗАХСКОЙ КУЛЬТУРЫ</p></Link>}
        <img className="orn2" src={orn1} alt='orn1' />
      </div>

      
        <div className="lines">
        {lang.lang === "En"?<p>Traditions associated with weddings</p>:<p>Традиции связанные с свадьбой</p>}
        <img className="line1" src={line1} alt='line1'/>
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover41"> </a></p></center>
        {lang.lang === "En"?<p>Since ancient times, Kazakh culture has paid special attention to the lineage of the bride and groom, as it affects the emergence of blood-lineage marriages. According to the Kazakh tradition people cannot get married to the representatives of a common kin, and also to the people who are less than seventh tribe of kin. This tradition was also beneficial for the health of future offspring. </p>
        :<p>С древности в казахской культуре уделяют особое внимание на род жениха и невесты, так как это влияет на появление кровно-родственных браков. Согласно казахской традиции люди не могут вступать в брак с представителями общего рода, а также с людьми, которые состоятся в родстве, менее чем в седьмом колене. Данная традиция была также имела благоприятное влияние на здоровье будущего потомства. </p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover42"> </a></p></center>
        {lang.lang === "En"?<p>Before the wedding ceremony in Kazakh culture, kudalyk (matchmaking) takes place. On the days before the wedding, matchmakers come to the bride's home, the purpose of their visit is to get to know the bride's close relatives and to arrange the girl's marriage. In the course of this tradition, the close relatives receive gifts from the guests. </p>
        :<p>Перед свадебной церемонией в казахской культуре проводится құдалық (сватовство). В преддверии свадьбы сваты приезжают в дом невесты, целью их визита является знакомство с близкими родственниками невесты и согласовать свадьбу, замужество девушки. В процессе данной традиции близкие родственники получают от гостей подарки.</p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover43"> </a></p></center>
        {lang.lang === "En"?<p>Afterwards, the next stage is kyz uzatu - send-off of the bride. A smaller number of guests from the groom's side are invited to this celebration. At the end of the celebration, a farewell song is sung by the bride's friends and relatives, this song is called "synsu". When it begins, the girl puts on a saukele, the bride's Kazakh headdress, and then she walks down a white walkway ("aq zhol"), which symbolizes happy marriage life. The day after the ceremony, the bride and her matchmakers leave for the groom's house.</p>
        :<p>После, следующим этапом является “қыз ұзату” - проводы невесты. На данный праздник зовут меньшее количество гостей со стороны жениха. В конце торжества должна прозвучать прощальная песня, которую могут исполнять подруги и родственники невесты, данная песня называется “сыңсу”. Когда она начинает исполняться девушка надевает саукеле -казахский головный убор невесты, затем она идет по белой дорожке («ақ жол»), которая символизирует счастливую супружескую жизнь. На следующий день после торжества невеста уезжает вместе с сватами в дом жениха.</p>}
      </div>
    </div> 
      
    <div className="container1">
        <div className="text1">
        {lang.lang === "En"?<h2>Traditions related to gift-giving</h2>:<h2>Традиции связанные с преподнесением подарков</h2>}
        {lang.lang === "En"?<p>In Kazakh culture there was a tradition of showing respect to a guest - "At mingizip shapan zhabu". An honoured guest, who is a highly respected person and has visited the village, is given a horse and an expensive chapan (camel hair outer garment with chintz lining) as a sign of recognition. In Kazakh tradition, baigazy is the giving of a gift to a younger person by an older person, most often given to children. In many cases this gift is given when children or young girls and boys buy new clothes. Adults giving baigazy say wishes and congratulations on the new items.</p>
        :<p>В казахской культуре существовала традиция показания уважения гостю - «Ат мінгізіп шапан жабу». Почетный гость, являющийся очень уважаемым человеком и посетивший деревню, в знак признания получает в подарок коня и дорогой чапан(верхняя одежда из верблюжьей шерсти с ситцевой подкладкой).В казахских традициях байғазы является преподнесение подарка от старшего младшему, чаще всего данный подарок дается детям. Во многих случаях такой подарок делают когда дети или молодые девушки, парни приобретают новую одежду. Взрослые даря Байгазы говорят пожелания и поздравления с новыми вещами.</p>}  
        </div>
        <p><a href="#" className="rollover51"> </a></p>
      </div>

    <div className="lines">
    {lang.lang === "En"?<p>Nauryz traditions</p>:<p>Традиции Наурыза</p>}
        <img className="line1" src={line2} alt='line2'/>
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover61"> </a></p></center>
        {lang.lang === "En"?<p>In Kazakh culture, Nauryz is the celebration of spring, which marks the day of the vernal equinox. People wore bright national costumes, had fun and congratulated each other. Up to now Nauryz is of great importance in Kazakhstan, and every year the whole country brightly celebrates it by arranging social events, festive celebrations. Nowadays, the tradition of inviting relatives and friends over to celebrate the holiday together and to wish each other kind words has been preserved. </p>
        :<p>В казахской культуре праздник наурыз является праздником весны, который предзнаменует день весеннего равноденствия. Люди надевали яркие национальные костюмы, веселились и поздравляли друг друга. По сей день в Казахстане Наурыз имеет огромное значение и каждый год вся страна ярко празднует его устраивая общественные мероприятия, праздничные гуляния. В наши дни сохранилась традиция звать своих родственников и друзей в гости для того, чтобы вместе отпраздновать праздник и пожелать другу добрые слова. </p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover62"> </a></p></center>
        {lang.lang === "En"?<p>During Nauryz, food is an integral part of the celebration. For our culture it was important to consider the number 7, as it symbolized the time units of universal eternity. One of the most important dishes was Nauryz-kozhe - soup, which was made of 7 ingredients: water, flour, meat, oil, millet, salt and milk. After cooking Nauryz-kozhe was poured into seven bowls and placed before elders-aksakals. </p>
        :<p>Во время Наурыза неотъемлемой часть праздника является еда, для нашей культуры было важно учитывать число 7, так как оно символизировало единицы времени вселенской вечности. Одним из важнейших блюд являлся Наурыз-коже - суп который изготовлялся из 7 ингредиентов: вода, мука, мясо, масло, пшено, соль и молоко. После приготовления Наурыз-коже разливают в семь чаш и ставят перед старцами-аксакалами.</p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover63"> </a></p></center>
        {lang.lang === "En"?<p>In addition, Nauryz was celebrated together with folk games, competitions and horse races. These entertainments include the games " Audaryspek", "Aikysh-uykysh", "zhanyltpash" and "jumbak". The game " Audaryspek" consists of pulling each other out of the saddle, mostly men took part in it. "Zhumbak is a game of solving riddles, and zhynyltpash is a competition in short phrases.</p>
        :<p>Помимо этого, Наурыз праздновался вместе с народными играми, состязаниями и скачками. В данные развлечения включены игры «Аударыспек», «Айкыш-уйкыш», «жанылтпаш» и «жумбак». Игра «Аударыспек» заключается в перетягивании друг друга из седла, в основном в ней участвовали мужчины. “Жумбак” является разгадывание загадок, “жынылтпаш” состязания в скороговорках.</p>}
      </div>
    </div> 

    <div className="container1">
        <div className="text2">
        {lang.lang === "En"?<h2>Traditions related to hospitality</h2>:<h2>Традиции связанные с гостеприимством</h2>}
        {lang.lang === "En"?<p>One of the main traditions of the Kazakh people is hospitality. From ancient times, the culture has preserved the rule that says to welcome a guest as a messenger of God. That is why hospitality is a major necessity in the modern world. In ancient times, the inhabitants of the steppes always welcomed a guest cordially and tried to create favourable conditions for him. For this reason, travellers were sure that every Kazakh family would welcome him pleasantly on the road.</p> 
        :<p>Одной из главных традиций казахского народа является гостеприимство. С древних времен в культуре сохранилось правило, которое говорит о том, чтобы встречать гостя как посланника Бога. Именно поэтому в современном мире гостеприимство входит в главные необходимости. В древние времена степные жители всегда радушно встречали гостя и старались создать для него благоприятные условия. По этой причине путники были уверены, что в дороге каждая казахская семья приятно его примет в гости.</p>} 
        </div>
        <p><a href="#" className="rollover64"> </a></p>
      </div>

      <div className="lines">
      {lang.lang === "En"?<p>Traditions related to the child in the family</p>:<p>Традиции связанные с ребенком в семье</p>}
        <img className="line1" src={line1} alt='line1'/>
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover71"> </a></p></center>
        {lang.lang === "En"?<p>Kazakh culture celebrates the birth of a child with a celebration called "Shildekhana". This celebration is held on the first week of the child's birth, on an odd day: 3, 5 or 7. All relatives and guests gathered at the celebration said only sincere, good wishes and congratulations to the family. </p>
        :<p>В казахской культуре в честь рождения ребенка проводится праздник, называемый - “Шілдехана”. Данный праздник проводят в первую неделю рождения ребенка, на нечетный день: 3, 5 или 7. Все родственники и гости собравшиеся на празднике произносили только искренние, добрые пожелания и поздравления семье. </p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover72"> </a></p></center>
        {lang.lang === "En"?<p>In Kazakh culture, when a child turns one year old or takes his or her first steps, the "Tusau Kesu" celebration is held. During the ceremony, the child's feet are entangled in a figure of eight with special ropes, which is a symbol of infinity. In ancient times a respected elderly person would then cut these ropes. This tradition was performed so that the child could walk quickly, and it was also believed that the performance of this ceremony would give the child a bright and prosperous future. </p>
        :<p>В казахской культуре, когда ребенку исполняется один год или же когда ребенок делает свои первые шаги, проводился праздник “Тусау кесу”. При проведении обряда ножки ребенка опутывают специальными веревками восьмеркой, что является символом бесконечности. В давние времена после этого уважаемый человек преклонного возраста перерезал эти веревки. Данная традиция проводилась для того, чтобы ребенок смог быстро начать ходить, также считается, что проведение этого обряда даст малышу светлое и удачное будущее. </p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover73"> </a></p></center>
        {lang.lang === "En"?<p>In the upbringing of a child in the Kazakh people, special attention was paid to teaching respect for elders. This became a tradition in Kazakh families, as a respectful attitude to elders was of great cultural importance. From childhood, children were brought up in a decent and conscientious attitude to adults. </p>
        :<p>В воспитании ребенка в казахском народе особое внимание уделялось приучение к уважению к старшим. Это стало традицией в казахских семьях, так как уважительное отношение к старшим имело огромное значение в культуре. С детства в детях воспитывали порядочному и добросовестному отношению с взрослыми людьми. </p>}
      </div>
    </div> 

    <div className="container1">
        <div className="text2">
        {lang.lang === "En"?<h2>Traditions related to mutual help</h2>:<h2>Традиции связанные с взаимопомощью</h2>}
        {lang.lang === "En"?<p>Mutual aid has been one of the most important parts of Kazakh culture, as traditions of helping people have been preserved since ancient times. One of such traditions is "Zhylu", this tradition was related to helping people who were victims of natural disasters. People could morally and financially support the victims, they helped with the provision of clothes and money. Another tradition related to mutual assistance is "Asar". This tradition involves relatives and friends helping a family who are having difficulties with a hurried, difficult job.</p>  
        :<p>Взаимопомощь являлась одной из важнейших частей казахской культуры, поскольку с древних времен в народе сохранились традиции оказания помощи. Одной из таких традиций является “Жылу”, эта традиция была связана с оказанием помощи людям которые стали жертвами стихийных бедствий. Люди могли морально и финансово поддержать пострадавших, они помогали с предоставлением одежды и денег. Другой традицией связанной с взаимопомощью является “Асар”. Данная традиция заключается в оказании помощи родственниками и друзьями семье, у которой появились трудности в выполнении спешную, сложной работы.</p>}
        </div>
        <p><a href="#" className="rollover74"> </a></p>
      </div>

      <div className='bibliography'>
      <h2>Bibliography of sources</h2>
      <p>Абжан Г.М., Абылханова Г.А.(2014). ОБЫЧАИ И ТРАДИЦИИ КАЗАХСТАНА. Современные наукоемкие технологии, (10), 54-58. https://top-technologies.ru/ru/article/view?id=34724</p>
<p>Dimashnews. (2021). Тусаукесер (тусау кесу) – казахская традиция разрезания пут. Retrieved from:
https://ru.dimashnews.com/tusau-keser-tusau-kesu-kazahskaja-tradicija-razrezanija-put/ </p>
<p>Dimash-efc. (n.d.).  «Традиции и обычаи казахов. Рождение ребенка». Retrieved from:
https://dimash-efc.ru/tradicii-i-obychai-kazahov-rozhdenie-rebenka </p>
 </div>
 
    <div className='bibliography-pic'>
      <h2>Bibliography of pictures</h2>
      <p>[Painting of a Kazakh couple.] (n.d.). Retrieved from: https://pin.it/6PQFzDy</p>
<p>[Painting of a Kazakh girl during wedding.] (n.d.). Retrieved from:
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_WHNpVrGZuLfWUCGjWsX0BJOjXsO0mJ-r_lXdoPjeTkMK0ytQqyK7N24_AArbIJ5V8Y&usqp=CAU </p>
<p>[Photograph of a Kazakh couple.] (n.d.). Retrieved from: https://pin.it/5ibJyti </p>
<p>[Painting of a Kazakh wedding.] (n.d.). Retrieved from:
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fhalyktarihy%2Fphotos%2Fa.471996730024528%2F509470916277109%2F%3Ftype%3D3&psig=AOvVaw1oWVgcfdhTPZLuheGj7G5x&ust=1673175274786000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNCb94GgtfwCFQAAAAAdAAAAABAP </p>
<p>[Painting of a Kudalyk.] (n.d.). Retrieved from:https://egemen.kz/media/2020/06/08/7.jpg </p>
<p>[Painting of a Kyz uzatu.] (n.d.). Retrieved from: https://toibiznes.kz/imagecache/original/images/kyz-uzatu_1463554502.jpg </p>
<p>[Painting of a Kyz uzatu.] (n.d.). Retrieved from:  https://pin.it/1W5V0qX </p>
<p>[Photograph of At mingizip shapan zhabu.] (n.d.). Retrieved from: https://syr-jurty.kz/wp-content/uploads/2021/12/unnamed-1.jpg </p>
<p>[Photograph of Baigazy.] (n.d.). Retrieved from:
http://sun9-23.userapi.com/impg/jVRjnQzlvB_Q5l7vCIMX4w8YLwNn_JF5ZndjZQ/B1cw4AP5eqU.jpg?size=604x519&quality=96&sign=67be57a18dcc8bafaea8644c0840b621&type=album </p>
<p>[Painting of a Nauryz celebration.] (n.d.). Retrieved from: https://almaty.tv/news_photo/1616220144_news_b.jpeg </p>
<p>[Painting of nauryz in kazakh family.] (n.d.). Retrieved from: 
https://thumb.tildacdn.com/tild6533-3866-4230-b636-643836363935/-/resize/824x/-/format/webp/image_2.jpg
</p>
<p>[Photo of Nauryz kozhe.] (n.d.). Retrieved from: 
https://www.archive.inform.kz/fotoarticles/20190319220940.jpg </p>
<p>[Photo of Nauryz equestrian games.] (n.d.). Retrieved from: 
http://silkadv.com/sites/default/files/Kazahstan/Kultura/Igry/Audyryspak/0_1_22.03.2015%20800.JPG </p>
<p>[Painting of Nauryz.] (n.d.). Retrieved from: 
https://dknews.kz/storage/news/2022-03/8UI8MMkwvjBqzVRg35v1jW4vc97SxscnSHLXQijg.jpg </p>
<p>[Painting of mother and child  in Kazakh culture.] (n.d.). Retrieved from: 
https://7kun.kz/wp-content/uploads/2015/04/88c8acd23703263c3337f366e33481ec_Generic1.jpg </p>
<p>[Painting of Shildekhana .] (n.d.). Retrieved from: 
https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRfetXlSBpMrgn7kixs0VVZg</p>
<p>[Photo of Tusau Kesu.] (n.d.). Retrieved from: 
https://ztb.kz/media/imperavi/57e588809acd5.jpg </p>
<p>[Photo of upbringing children.] (n.d.). Retrieved from: 
http://ic.pics.livejournal.com/open_kz/61719910/208443/208443_600.png </p>
<p>[Photo of upbringing children to respect elders.] (n.d.). Retrieved from: 
https://kazpravda.kz/media/uploads/publication2/960/48/96048-image.jpg </p>
<p>[Photo of Zhylu.] (n.d.). Retrieved from: 
https://toibiznes.kz/index.php/imagecache/original/images/10102017172251_asar.jpg </p>
<p>[Photo of Asar.] (n.d.). Retrieved from: 
https://weproject.media/upload/medialibrary/799/799f2bd541353ee8480edac08541f6c3.jpg </p>
    </div>

    <div className="blockk">
      <img className="orn3" src={orn2} alt='orn2'/>
      <center>
      <div className="end">
      {lang.lang === "En"?<p >PRODUCED BY</p>:<p>СОЗДАНО</p>}
      <div className="end2">
      {lang.lang === "En"?<p>Aidargaliyeva Aiym</p>:<p>Айдаргалиевой Айым</p>}
        <p>2022</p>
      </div>
    </div> 
    </center>
    <img className="orn4" src={orn2} alt='orn2'/>
    </div>

        </main>
      )
    }
)
export default Traditions;