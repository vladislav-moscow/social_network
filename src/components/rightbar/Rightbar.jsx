import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__Wrapper">
        <div className="birthday__Container">
          <img src="/assets/gift.png" alt="" className="birthday__Img" />
          <span className="birthday__Text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar__Ad" />
        <h4 className="rightbar__Title">Online Friends</h4>
        <ul className="rightbar__Friend-List">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
          
        </ul>
      </div>
    </div>
  )
}
