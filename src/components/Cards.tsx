import "../scss/Card.scss"

type cardProps = {
  name: string,
  picture: string,
  link: string,
}

const Cards = (e: cardProps) => {
  return (
    <div className="one-card">
        <img src={e.picture} alt="" className="picture" />
        <h1>{e.name}</h1> 
        <a href={e.link}>Link To Picture Source</a>
        <p>Some cool description for pineapple.</p>
    </div>
  )
}

export default Cards