import './home.css'
import Upbar from "../components/Topbar/Upbar"
import Sidebar from "../components/Sidebar/Sidebar"
import Feed from '../components/Feed/Feed';
import Rightbar from '../components/Rightbar/Rightbar';

export default function Home() {
  return (

  <>
    <Upbar/>
            <div className="homeContainer">
               <Sidebar/>
                 <Feed/>
                   <Rightbar/>  
                          </div>
  </>
  );
}
