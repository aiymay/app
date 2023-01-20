import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import './style2.css'
import orn2 from './ornament2.png'
import orn1 from'./ornament1.png'
import back4 from './back4.jpg'
import line1 from './line1.jpg'
import line2 from'./line2.jpg'

const Customs = observer(({lang}) => {
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
    <img className="img1" src={back4} />

      <div className="site">
        <img className="orn2" src={orn1} />
        {lang.lang == "En"?<Link to='/customs'><p>CUSTOMS OF KAZAKH CULTURE</p></Link>:<Link to='/customs'><p>ОБЫЧАИ КАЗАХСКОЙ КУЛЬТУРЫ</p></Link>}
        <img className="orn2" src={orn1} />
      </div>

    <div className="container1">
        <div className="text2">
        {lang.lang == "En"?<h2>Hospitality customs</h2>:<h2>Обычаи гостеприимства</h2>}
        {lang.lang == "En"?<p>Hospitality is one of the main features of Kazakh culture. It has held an important place in the values of any Kazakh family since ancient times. One of the customs associated with hospitality is bata. When a guest was about to leave, the host family was supposed to give him a blessing. It is often expressed in poetic form and includes good wishes to the guest. Another custom associated with hospitality is shashu, which involves showering guests with sweets and money. This custom is often performed at weddings and other events when guests arrive.  </p>
        :<p>Гостеприимство является одной из главных особенностей казахской культуры. С древних времен она занимает важное место в ценностях любой казахской семьи. Одним из обычаев связанных с гостеприимством является бата. Когда гость собирается уходить, семья принимавшая гостя должна дать ему благословение. Она часто выражается в поэтической форме и включает добрые пожелания гостю. Другой обычай связанный с гостеприимством является шашу, он связан с осыпанием гостей конфетами и деньгами. Часто данный обычай проводится на свадьбах, и других мероприятий когда приходят гости.  </p>}  
        </div>
        <p><a href="#" className="rollover15"> </a></p>
      </div>

    <div className="lines">
    {lang.lang == "En"?<p>The customs associated with hosting guests</p>:<p>Обычаи связанные с приемом гостей</p>}
        <img className="line1" src={line1} />
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover16"> </a></p></center>
        {lang.lang == "En"?<p>One of the customs associated with receiving guests is "konakasy", which is associated with presenting treats to guests. From ancient times to the present day, it have always been the Kazakh people's norm to treat a guest, no matter who the guest was to the family. In the Kazakh nation there were three kinds of guests, the first was "arnaiy konak" - a guest invited by the family, "kydyrma konak" - an unexpected guest, "kudaiy konak" - an accidental traveler.</p>
        :<p>Одним из обычаев, связанных с приемом гостей, является "конакасы", который связан с преподнесением угощений гостям. С древних времен и до наших дней у казахов всегда было нормой угощать гостя, независимо от того, кем он приходился семье. У казахского народа существовало три вида гостей, первый - "арнай конак" - гость, приглашенный семьей, "кыдырма конак" - нежданный гость, "кудайы конак" - случайный путник.</p>}
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover17"> </a></p></center>
        {lang.lang == "En"?<p>Yerulik is a custom associated with newcomers. When newcomers came to the villages, a small party was organised for them to get acquainted with the newcomers and get them settled in quickly. In this custom, neighbours and inhabitants would help the newcomers with everyday chores and amenities.</p>
        :<p>Ерулик является обычаем, который связан с новоселенцами. Когда в деревни приезжали новые жители для них устраивали небольшой праздник для знакомства, быстрого адаптирования прибывшим. Помимо этого, в данном обычаи соседи и жители могли помогать новым приезжим с бытовым обустройством.</p>}
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover18"> </a></p></center>
        {lang.lang == "En"?<p>In the custom of “Konakkade”, the hosts have the opportunity to ask the guest to sing a song or play a musical instrument. This is, in its own way, a pledge for a cheerful feast.</p>
        :<p>В обычае ”Конаккаде” хозяева имеют возможность попросить гостя исполнить какую либо песню или сыграть на музыкальном инструменте. Это является в своем образе залог для веселого застолья.</p>}
      </div>
    </div> 

    <div className="container1">
        <div className="text2">
        {lang.lang == "En"?<h2>The customs associated with giving gifts</h2>:<h2>Обычаи связанные с преподнесением подарков</h2>}
        {lang.lang == "En"? <p>In Kazakh culture, there is a custom - "Suyinshi", which is associated with the fact that the person who brings good news will receive a gift from the family in gratitude. Another custom from ancient Kazakh culture is giving a gift of "Bes Zhaksy", which consists of 5 valuable items. The first is a camel, the second a high-speed horse, an expensive carpet, a diamond sabre and a sable coat. This gift was given to respected people in the Kazakh nation.</p>
        :<p>В казахской культуре существует обычай - “Сүйінші”, который связан с тем, что человек принесший хорошую новость, в благодарность от семьи получает подарок.  В древней казахской культуре существовал обычай дарить подарок “Бес жаксы”, который состоит из 5 ценных вещей. Первым является верблюд , второй быстроногий скакун, дорогой ковер, алмазная сабля, соболья шуба. Данный подарок преподносился уважаемым людям в казахском народе.</p>}  
        </div>
        <p><a href="#" className="rollover19"> </a></p>
      </div>

      <div className="lines">
      {lang.lang == "En"?<p>Customs related to the birth of a child</p>:<p>Обычаи связанные с рождением ребенка</p>}
        <img className="line1" src={line2} />
        </div>
        <div className="blocks1">
       <div className="item1">
        <center><p><a href="#" className="rollover25"> </a></p></center>
        {lang.lang == "En"? <p>The first custom that is carried out when a child is born is the "Esim Koyu". This custom is a naming ceremony, which can be performed at other celebrations like shildehana or in normal circumstances. This ceremony is performed by respected people, who also bless the child.</p>
        :<p>Самым первым обычаем который осуществляется при рождении ребенка является “Есім кою”. Данный обычай это обряд имянаречения, он может проводится на других праздниках как шілдехана, либо в обычных условиях. Данный обряд дают исполнять уважаемым людям, которые кроме этого благословляют ребенка.</p>}  
       </div>

      <div className="item2">
        <center><p><a href="#" className="rollover26"> </a></p></center>
        {lang.lang == "En"? <p>The second custom associated with the birth of a child is "Besik Toi" or "Besikke Salu". It is celebrated on the third or fifth day after the birth of the child. After the feast, the most important event begins - placing the child in a cradle. The baby was placed in the cradle by his grandmother, who first spread healing herbs to drive away evil spirits, wrapped the baby and tied ribbons around the cradle. Then the baby is placed in the cradle and covered with seven ritual items: a cloth and shawls for girls, a comb and mirror for the cot, a fur coat and shawl for boys, and a bridle for the cot.</p>
        :<p>Вторым обычаем который связан с рождением ребенка является “Бесік той” или “Бесікке салу”. Он отмечается на третий или пятый день после рождения ребенка. После застолья начиналось самое главное событие - укладывание ребенка в колыбель. В колыбель младенца укладывает бабушка, до этого она окуривает кроватку целебными травами для изгнания злых духов, пеленает младенца и перевязывает лентами. После этого ребенка кладут в колыбель, и накрывают его 7 ритуальными вещами: для девочек-ткани и платки, в кроватку кладут расческу и зеркало, для мальчиков-шуба,шапан, в кроватку-узду.</p>}  
      </div>

      <div className="item3">
        <center><p><a href="#" className="rollover27"> </a></p></center>
        {lang.lang == "En"? <p>The third custom after the birth of a child is the "Kyrkynan Shygaru". Kyrkynan Shygaru is a ritual that takes place on the fortieth day after the baby is born. Until the 40th day the baby cannot have his/her hair and nails cut as it is considered as protection against evil spirits. Also, a baby should not be shown to strangers before that date. During the ritual, silver jewellery and coins are first placed in a wooden bowl. Then forty spoons of water are poured into the bowl and the baby is washed with this water, accompanying the process with kind wishes. Afterwards, jewellery from the bowl is given to the female guests, and the child's nails and hair are cut.</p>
        :<p>Третьим обычаем после рождения ребенка является “Кыркынан шыгару”. Кыркынан шыгару это обряд который проводится на сороковой день после рождения младенца.До наступления 40-го дня малышу нельзя стричь волосы и ногти, поскольку это считается защитой от злых духов. Также до этого дня ребенка нельзя показывать незнакомым людям. Во время ритуала серебряные украшения и монеты сначала кладут в деревянную чашу. Затем в чашу наливают сорок ложек воды и этой водой омывают младенца, сопровождая процесс добрыми пожеланиями. После этого украшения из чаши отдают гостям женского пола, а ребенку стригут ногти и волосы.</p>}
      </div>
    </div> 

    <div className="container1">
        <div className="text2">
        {lang.lang == "En"?<h2>Customs related to marriage</h2>:<h2>Обычаи связанные со вступлением в брак</h2>}
        {lang.lang == "En"? <p>After "Kyz Uzatu", the bride's arrival was followed by a kelin tusiru celebration in which the bride was solemnly welcomed by her husband's relatives. On her way she was showered with sweets and sweets - "shashu". The bride's face was covered with a white shawl or veil before this ceremony. During this ceremony a zhyrshy-singer with a dombra performs betashar zhyrshy, introducing her to her husband's relatives and saying good wishes. At the end of the rite, the bridegroom's mother opens the bride's face and the wedding feast and celebrations begin.</p>  
        :<p>После “Кыз узату” по приезду невесты устраивался праздник келін түсіру, в котором невесту торжественно встречали родственники ее мужа. По пути ее осыпали конфетами и сладостями - “шашу”. После этого проводился обряд “беташар”, до этого обряда лицо невесты закрывалось белым платком или фатой. Во время этого обряда жыршы-певец с домброй исполняет беташар жыршы, во время которой он знакомит ее с родственниками мужа и говорит хорошие пожелания. По окончании обряда мать жениха открывала лицо невесты, начинался свадебный пир и празднования.</p>}
        </div>
        <p><a href="#" className="rollover28"> </a></p>
      </div>

      <div className='bibliography'>
      <h2>Bibliography of sources</h2>
      <p>Абжан Г.М., Абылханова Г.А.(2014). ОБЫЧАИ И ТРАДИЦИИ КАЗАХСТАНА. Современные наукоемкие технологии, (10), 54-58. https://top-technologies.ru/ru/article/view?id=34724</p>
<p>Advantour. (n.d.). Традиции гостеприимства в Казахстане. Retrieved from:
https://www.advantour.com/rus/kazakhstan/traditions/hospitality.htm </p>
<p>Advantour. (n.d.). Свадебные традиции в Казахстане. Retrieved from:
https://www.advantour.com/rus/kazakhstan/traditions/wedding.htm </p>
<p>Dimash-efc. (n.d.).  «Традиции и обычаи казахов. Рождение ребенка». Retrieved from:
https://dimash-efc.ru/tradicii-i-obychai-kazahov-rozhdenie-rebenka </p>
<p>Dimash-efc. (n.d.).  «Традиции и обычаи казахов. Свадьба». Retrieved from:
https://dimash-efc.ru/tradicii-i-obychai-kazahov-svadba </p>
<p>Gogolnik,O. (n.d.). Казахские традиции и обычаи при рождении ребенка. Retrieved from:
https://www.nur.kz/esoterics/signs/1645802-kazakhskie-tradicii-obychai-pri-rozhde/ </p>
    </div>

    <div className='bibliography-pic'>
      <h2>Bibliography of pictures</h2>
      <p>[Painting of Kazakh steppe.] (n.d.). Retrieved from: https://pin.it/27LgOC7</p>
<p>[Painting of giving bata.] (n.d.). Retrieved from: https://proof.kz/files/uploads/obriad_bata_beru.jpg </p>
<p>[Photograph of shashu.] (n.d.). Retrieved from: 
http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/567b69a4-c4f2-4585-83a5-0aeed08fea49/375c25f5-d26b-4538-8f12-0b7d548dc2a7.jpg </p>
<p>[Painting of giving  konakasy.] (n.d.). Retrieved from: 
http://sun9-11.userapi.com/impf/c624018/v624018795/4551d/UhcB9pBkH_M.jpg?size=604x537&quality=96&sign=2165c12f5a138a9261e1b7d7c67c483c&type=album </p>
<p>[Painting of hosting guests.] (n.d.). Retrieved from: 
http://sun9-10.userapi.com/impf/c623830/v623830520/16f87/4ecZasUEohg.jpg?size=450x453&quality=96&sign=d0e8bdffef159df48e606da179954963&type=album </p>
<p> [Painting of Yerulik.] (n.d.). Retrieved from: 
https://static.tildacdn.com/tild6362-3637-4861-b130-376130626361/3fe37fb01fca4b0d891e.jpg </p>
<p>[Photograph of Yerulik.] (n.d.). Retrieved from: 
https://imgtest.mir24.tv/uploaded/images/2021/September/730c4f8028bac7abd3db7cdfd75fdf77b2843aaba4fa08652f5af22465980f8f.jpg </p>
<p>[Painting of Konakkade.] (n.d.). Retrieved from: 
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fcicekmangal%2Fphotos%2Fa.1741741179451493%2F2507043042921299%2F%3Ftype%3D3&psig=AOvVaw2CGDzdAyoMIQEbKeR4FbBr&ust=1673195789668000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPifnrzstfwCFQAAAAAdAAAAABAH </p>
<p>[Photograph of Konakkade.] (n.d.). Retrieved from: 
https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rkw5OEBxB60ZHo7XYjlLc--aaKTM5SRkZCeTgDn6uOyic </p>
<p>[Painting of Suyinshi.] (n.d.). Retrieved from: 
https://static.365info.kz/uploads/2019/01/2ebbc313512d7cc1ee35553277a9049d-e1548910746817.jpg </p>
<p>[Photograph of Bes Zhaksy.] (n.d.). Retrieved from: 
http://sun9-81.userapi.com/impf/c849220/v849220403/131286/vVYYAKSBU-I.jpg?size=604x338&quality=96&sign=554c04bef37d7dfa22c7cb803644f041&type=album </p>
<p>[Photograph of Esim Koyu.] (n.d.). Retrieved from: 
http://qamshy.kz/media/2022/07/19/crop-61_2_484x860_b17d2089-86fe-44d5-9669-eb53142b5960-960x500.jpeg?width=600&height=315</p>
<p>[Painting of Esim Koyu.] (n.d.). Retrieved from: 
https://el.kz/upload/medialibrary/7f9/7f941544f408895a3e67a69bc54ac4a5.png  </p>
<p>[Photograph of Besik Toi.] (n.d.). Retrieved from: 
https://kazpravda.kz/media/uploads/publication2/116/27/116274-image.jpg </p>
<p>[Painting of Besik Toi.] (n.d.). Retrieved from: 
http://bilim-all.kz//uploads/images/2019/05/16/original/bb2d0104d18cd3bc85afc37621bc546d.jpg </p>
<p>[Photograph of Kyrkynan Shygaru.] (n.d.). Retrieved from: 
https://pandaland.kz/uploads/FILES/c93/c93e4f1cbdc6f46ae29e06fd292a1fa6.jpg</p>
<p>[Photograph of Kyrkynan Shygaru process.] (n.d.). Retrieved from: 
https://pandaland.kz/uploads/FILES/281/2813340a31fe83f56349cd71a8c84b6e.jpg </p>
<p>[Painting of kelin tusiru.] (n.d.). Retrieved from: 
https://upload.wikimedia.org/wikipedia/kk/thumb/e/e5/%D0%91%D0%B5%D1%82%D0%B0%D1%88%D0%B0%D1%80.jpg/300px-%D0%91%D0%B5%D1%82%D0%B0%D1%88%D0%B0%D1%80.jpg </p>
<p>[Photo of kelin tusiru.] (n.d.). Retrieved from: 
https://kzvesti.kz/wp-content/uploads/2022/09/betashar.jpg </p>
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
    <img className="orn4" src={orn2} />
    </div>

        </main>
      )
    }
)
export default Customs;