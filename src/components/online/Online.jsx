import "./online.css"

export default function Online({user}) {
  return (
    <>
    <li className="rightbar__Friend">
      <div className="rightbar__Profile-Img-Container">
        <img src={user.profilePicture} alt="" className="rightbar__Profile-Img" />
        <span className="rightbar__Online"></span>
      </div>
      <span className="rightbar__Username">{user.username}</span>
    </li>
    </>
  )
}
