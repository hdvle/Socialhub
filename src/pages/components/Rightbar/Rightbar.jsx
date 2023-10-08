import "./rightbar.css"
export default function Rightbar() {
    return (
              <div className="rightbar">
                <div className="rightbarWrapper">
                  <div className="birthdayContainer">
                  <img className="birthdayImg" src="assets/gift.png" alt=""/>
                    <span className="birthdayText">
                      <b>Shruti Patwardhan</b> and <b>2 other friends</b> have a birthday today.
                     </span>
                    </div>
              
                  <img className="rightbarAd" src="assets/ad.png" alt=""/>
                    <h4 className="rightbarTitle">Online Friends</h4>
                  <ul className="rightbarFriendList">

                      <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/4.jpg" alt=""/>
                        <span className="rightbarOnline"></span>
                        </div>
                            <span className="rightbarUsername">Damon Salvatore</span>
                      </li>

                      
                      <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                        <span className="rightbarOnline"></span>
                        </div>
                            <span className="rightbarUsername">Megan Lopez</span>
                      </li>

                      
                      <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/2.jpg" alt=""/>
                        <span className="rightbarOnline"></span>
                        </div>
                            <span className="rightbarUsername">Kavya Kulkarni</span>
                      </li>

                      
                      <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/5.jpg" alt=""/>
                        <span className="rightbarOnline"></span>
                        </div>
                            <span className="rightbarUsername">Viren Singh</span>
                      </li>

                      
                      <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/7.jpg" alt=""/>
                        <span className="rightbarOnline"></span>
                        </div>
                            <span className="rightbarUsername">Swayam Shekhawat</span>
                      </li>

                      <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/8.jpg" alt=""/>
                        <span className="rightbarOnline"></span>
                        </div>
                            <span className="rightbarUsername">Shruti Patwardhan</span>
                      </li>

                      <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/9.jpg" alt=""/>
                        <span className="rightbarOnline"></span>
                        </div>
                            <span className="rightbarUsername">Dnyanda Rao</span>
                      </li>

                      <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/10.jpg" alt=""/>
                        <span className="rightbarOnline"></span>
                        </div>
                            <span className="rightbarUsername">Shraddha Patel</span>
                      </li>

                  </ul>   
                    </div>
                  </div>                 
    );
}