import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebar__Friend">
      <img className="sidebar__Friend-Img" src={user.profilePicture} alt="" />
      <span className="sidebar__Friend-Name">{user.username}</span>
    </li>
  );
}