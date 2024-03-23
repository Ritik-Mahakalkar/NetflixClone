import React from 'react';
import './Header.css'
import netflix from '../Assets/netflix.png'
import { useNavigate,Link } from 'react-router-dom'/*use to redirect the another web page from one page  and  link is use to open another page*/
const Header = () => {
    const navigate=useNavigate();
    const clickHandler =(e)=>{
      e.preventDefault();/*use to protect page from refreshing it means desable the refreshing by 'preventDefaul'*/
      navigate('/login');   /* redirecting on dashboard */ 
    }


    // in link to is use to  sed an root page
    return (
        <div>
            <nav class="navbar navbar-light bg-light navigation ">
                  <div class="container-fluid  navigation">
                         <Link class="navbar-brand" to="/"> 
                               <img src={netflix}/>
      
                          </Link>
    

                           <select class="form-select  selections"  aria-label="Default select example">
                                   <option selected>English </option>
                                   <option value="1">हिंदी</option>
                                   <option value="2">मराठी </option>
                            </select>
                            <button type="button" class="btn btn-danger  sign" onClick={clickHandler}> Sign In</button>
    
                    </div>
               </nav>
         </div>
    );
}

export default Header;
