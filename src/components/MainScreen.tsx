import "../scss/MainScreen.scss"
import Cards from "./Cards"
import Pictures from "./Pictures"

const MainScreen = () => {
  return (
    <section>
        <div className="text-wrapper">
          <h2>Pineapple🍍</h2>
          <p>Pôvod ananásu: Ananás (Ananas comosus) je tropické ovocie pochádzajúce z Južnej Ameriky, konkrétne z oblasti dnešnej Brazílie a Paraguaja. Od 15. storočia sa rozšíril do ďalších častí sveta a stal sa populárnym po celom svete. Názov "ananás": Slovo "ananás" pochádza z guanahanského jazyka, ktorým hovorili miestni obyvatelia na Karibských ostrovoch. Pôvodný význam slova je "vynikajúce ovocie". Neobvyklý rast ananásu: Ananás je zaujímavý aj svojím spôsobom rastu. Je to jedna z mála rastlín, ktorá produkuje len jedno ovocie na jednej rastline. Ovocie ananásu je vlastne zhluk ovocných šupiek, ktoré sú sústredené na vrchole rastliny.  Enzym bromelain: Ananás obsahuje enzým nazývaný bromelain, ktorý pomáha pri trávení. Bromelain tiež obsahuje proteolytické enzýmy, ktoré majú protizápalové vlastnosti a môžu podporovať hojenie rán. Vitamíny a minerály: Ananás je bohatý na vitamín C, ktorý je dôležitý pre imunitný systém a tvorbu kolagénu. Obsahuje tiež vitamíny A, B6, B1 a minerály ako draslík a mangán. 
          Exotická chuť: Chuť ananásu je kombináciou sladkosti a sviežosti s miernou kyslosťou. Táto kombinácia robí z ananásu obľúbené ovocie na prípravu šalátov, dezertov, džúsov a kokteilov.</p>
        </div>

        <div className="main-cards">
          <h2>About Us</h2>
          <div className="card-wrapper">
            <Cards name="Pineapple" picture="src/images/ananas1.jpg" link="https://uzitocna.pravda.sk/seniori/clanok/655193-co-vsetko-dokaze-ananas-uzdravuje-oci-ci-ustnu-dutinu/" />
            <Cards name="More pineapple" picture="src/images/ananas2.jpg" link="https://www.cas.sk/clanok/2626637/ananas-ako-superpotravina-bojovnik-proti-rakovine-aj-obezite/" />
            <Cards name="Triangle pineapple" picture="src/images/ananas3.jpg" link="https://mannamydla.sk/blog/ananas-priatel-vasej-pleti" />
          </div>
        </div>

        <div className="main-pictures">
          <h2>Our Workers</h2>
          <div className="picture-wrapper">
            <Pictures name="Martin Bagár" picture="src/images/farmar.jpg" link="https://www.piestanskydennik.sk/2016/06/28/televizny-farmar-popiera-bukovskeho-teoriu-o-skodlivosti-mlieka/" />
            <Pictures name="Dave Brant" picture="src/images/farmar2.jpg" link="https://knowyourmeme.com/memes/but-its-honest-work" />
          </div>
        </div>

    </section>
  )
}

export default MainScreen