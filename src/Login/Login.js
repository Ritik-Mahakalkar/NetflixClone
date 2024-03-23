import React, { useState } from 'react'
import{initializeApp} from 'firebase/app';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";//method name for sign up sign in
import { firebaseConfig } from '../Components/Firebase/FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom'/*use to redirect the another web page from one page */
import './Login.css'
const Login = ({pg}) => {//pg use as props to get value from app.js

const app=initializeApp(firebaseConfig);//using fiebase

const [email,setEmail]=useState('');//state is an internal data of an componrnt /things  it is used tho maintain the data
const [password,setPassword]=useState('');//state is an internal data of an componrnt /things  it is used tho maintain the data
const [name,setname]=useState('');//state is an internal data of an componrnt /things  it is used tho maintain the data
const [emailValid,SetemailValid]=useState(true);
const[passwordValid,SetpasswordValid]=useState(true);
const [isUserExist, setUserExist]=useState(false);


const auth=getAuth();
//console.log(auth);

//for validation  use from google->
const validation =(fieldName, value) =>{
  switch(fieldName) {
    case 'email':
      return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    case 'password':
      return value.length >= 6;
    default:
      break;
      }
}
//--------
  const navigate=useNavigate();
  const OnClickHandler =(e)=>{
    e.preventDefault();/*use to protect page from refreshing it means desable the refreshing by 'preventDefaul'*/
    
    if(!validation('email', email) || !validation('password', password)){
      SetemailValid(validation('email', email));
      SetpasswordValid(validation('password', password));
      return;
    }


    if(pg){
      signInWithEmailAndPassword(auth,email,password)//mathode for send  to data for  sign in in firebase
    .then(auth =>{
      if(auth){
        navigate('/dashboard');   /* redirecting on dashboard */  
      }
    })
    .catch(error => setUserExist(true));// if user is not athonticate  firebase  will be show error
    }else{
           createUserWithEmailAndPassword(auth,email,password,name)//mathode for send  to data for  sign up in firebase
           .then(
            auth =>{
              if(auth){
                navigate('/dashboard')
              }
            }
           )
           .catch(error => console.log(error));
    }
    
    

  }



  // onchange handler method
  const emailOnChangeHandler = (e) =>{//use to set th value
    setEmail(e.target.value)
  }

  const passwordOnChangeHandler = (e) =>{ //use to set th value
    setPassword(e.target.value)

  }
  const nameOnChangeHandler = (e) =>{ //use to set th value
    setname(e.target.value)

  }
  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white">{pg ? "Sign In":"Sign Up"}</h1> 
        <br/>
        <form>
          <input className="form-control" value={email}  onChange ={emailOnChangeHandler} type="email" placeholder="Email"/>
          {!emailValid &&<p className='text-danger'>Email is invalid / blank</p>}
          <input className="form-control" value={password} onChange ={passwordOnChangeHandler}  type="password"  placeholder="Password"/>
          {!passwordValid &&<p className='text-danger'>Passwod is invalid / blank</p>}
          {pg ||<input className="form-control" value={name} onChange ={nameOnChangeHandler}  type="text"  placeholder="Name"/>}
          <button className="btn btn-danger btn-block" onClick={OnClickHandler} >{pg ? "Sign In":"Sign Up"}</button>
          <br/>
           { pg && <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">Remember Me
            </label>
          </div>}
         
        </form>
        <br/>
        <br/>
        {isUserExist && <p className='text-danger'>User does not exist</p>}
        <div className="login-form-other">
          <div className="login-signup-now"> {pg ? "New to Netflix?":"Existing User on Netflix?"} 
          <Link className="" to={pg ? '/SignUp':'/login'}> {pg ? "  Sign Up now":"  Sign In now"} </Link> 
          </div>
          <div className='a1'><Link className="" target='_self' to="/">  Back</Link></div>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
  )
}

export default Login
