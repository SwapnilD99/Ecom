import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import './loginPage.css'
import title from '../image/logo1.png'
import {auth} from '../firebase'


export default function LoginPage() {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const history = useHistory();

    const SignIn = e =>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const Register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                console.log(auth);
            })
            .catch(error => alert(error.message))
            if(auth){
                history.push('/')
            }
    }

    return (
        <div className="loginPage">
            
            <Link to="/">
                <img src={title} alt="logo_here" className="title"/>
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={SignIn}><strong>SIGN IN</strong></button>
                    <p className="text"><strong>Don't have a Account!!!</strong></p>
                    <p>(To create new account enter email and password in the above form and click on "Create New Account")</p>
                    <button onClick={Register}><strong>Create New Account</strong></button>
                </form>
            </div>
            
        </div>
    )
}
