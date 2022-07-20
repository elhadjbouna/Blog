import '../styles/UserCard.css'
import UserInfo from './UserInfo'
import Rating from './Rating'
function UserCard(){
    const Users=[
        {
            nom: 'Thomas',
            commentaire: 'aime le football',
            etoile: 1,
            smiley: 3,
            ami: 'Follow'},
        {
            nom: 'Kim',
            commentaire: 'Adore la lecture',
            etoile: 4,
            smiley: 3,
            ami: 'Follow'},
        {
            nom: 'Romain',
            commentaire: 'aime dormir',
            etoile: 4,
            smiley: 3,
            ami: 'unFollow'},
        {
            nom: 'Pizi',
            commentaire: 'danseur professionnel',
            etoile: 4,
            smiley: 3,
            ami: 'Follow'},
        {
            nom: 'Thomas',
            commentaire: 'mon commentaire',
            etoile: 4,
            smiley: 3,
            ami: 'unFollow'}]

        return (
            <div className="userCard">
            <ul>
                {Users.map((user)=>(
                    <UserInfo 
                    nom={user.nom} 
                    commentaire={user.commentaire}
                    etoile={user.etoile}
                    smiley={user.smiley}
                    
                    />


                ))}
            </ul>
            </div>
        )
    
}
export default UserCard