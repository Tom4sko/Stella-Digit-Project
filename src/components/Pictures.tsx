import "../scss/Pictures.scss"

type picturesProps = {
  name: string,
  picture: string,
  link: string,
}

const Pictures = (e: picturesProps) => {
  return (
    <div className="one-picture">
      <img src={e.picture} alt="" className="picture" />
      <h1>{e.name}</h1> 
      <a href={e.link}>Link To Picture Source</a>
    </div>
  )
}

export default Pictures