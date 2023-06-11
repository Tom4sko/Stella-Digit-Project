import "../scss/Sidebar.scss"
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2>Pineapple🍍</h2>
        <button type="button" className="button">Download</button>
        <div className="links">
            <ul className="pictures">
                <li><a href="https://uzitocna.pravda.sk/seniori/clanok/655193-co-vsetko-dokaze-ananas-uzdravuje-oci-ci-ustnu-dutinu/">Picture 1</a></li>
                <li><a href="https://www.cas.sk/clanok/2626637/ananas-ako-superpotravina-bojovnik-proti-rakovine-aj-obezite/">Picture 2</a></li>
                <li><a href="https://mannamydla.sk/blog/ananas-priatel-vasej-pleti">Picture 3</a></li>
                <li><a href="https://www.piestanskydennik.sk/2016/06/28/televizny-farmar-popiera-bukovskeho-teoriu-o-skodlivosti-mlieka/">Picture 4</a></li>
                <li><a href="https://knowyourmeme.com/memes/but-its-honest-work">Picture 5</a></li>
            </ul>
            <ul className="social-link">
                <a href="https://www.facebook.com/"> <BsFacebook /> </a>
                <a href="https://www.instagram.com/"> <BsInstagram /> </a>
                <a href="https://twitter.com/?lang=sk"> <BsTwitter /> </a>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar