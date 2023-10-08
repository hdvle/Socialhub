import Share from '../share/Share'
import Postt from '../post/Postt'
import './feed.css'
export default function Feed() {
  return (
    <div className='feed'>
     <div className='feedWrapper'>
          <Share/>
          <Postt/>
          <Postt/>
          <Postt/>
          <Postt/>

       </div>
    </div>

  );
}
