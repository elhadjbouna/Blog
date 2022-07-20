import { useState } from 'react';
import '../styles/Formulaire.css'
function Formulaire () {
    const [name , setName] = useState('toto');
    const [email , setEmail] = useState('');
    const [commentaire , setCommentaire] = useState('');

    function checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validate() {
        var email = document.getElementById("email").value;
    
        if (checkEmail(email)) {
            alert('Adresse e-mail valide');
        } else {
            alert('Adresse e-mail non valide');
        }
        return false;
    }

    // function to update state of name,email,commentairewith 
    // value enter by user in form

return (
    <div className="formulaire">
        <form>
            <label>
                    Nom :
            <input type="text" name="name" required onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                    Email :
                    <input type="text" id='email' required onChange={(e) => setEmail(e.target.value)} />
              </label>
            <label>
                     Commentaire :
                    <input type="text" name="commentaire" required onChange={(e) => setCommentaire(e.target.value)} />
             </label>
             <button type='submit' onclick="validate()">Validate!</button>
        </form>    
            
    </div>
    )

}

export default Formulaire