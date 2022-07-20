import PiedDePage from "./PiedDePage";
import Banniere from "./Banniere";
import UserCard from "./UserCard";
import logo from '../assets/blogeo.png'
import Formulaire from "./Formulaire";
import { useState } from "react";

function App(){
    // const [name, setName]= useState('')

     return (
    <div>
     <Banniere >
        <img src={logo} alt="logo blogeo"></img>
        <h1>Bienvenue sur Blogeo</h1>
    </Banniere>
     <UserCard /> 
     
     <Formulaire /> 
     <PiedDePage />
     
     
     </div>
     )
 }
 export default App;