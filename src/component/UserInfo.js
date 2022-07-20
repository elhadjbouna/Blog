import '../styles/UserCard.css'
import Rating from './Rating'
import UserCard from './UserCard'
function UserInfo ({nom, commentaire, etoile, smiley}) {
    
    return (<li className="userInfo">
             
               
                <li>{nom}<br></br>{commentaire}<br></br>
                    <Rating value={etoile}/>
                    <Rating value={smiley}/>
                    </li>
            
            </li>)
}
export default UserInfo