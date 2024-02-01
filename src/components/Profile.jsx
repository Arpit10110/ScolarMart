import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{Link} from "react-router-dom"
import "../style/Profile.css"
const Profile = () => {
    const dispatch=useDispatch();
    const {MartUserName} = useSelector(state=>state.Local);
    const {MartUserPhone} = useSelector(state=>state.Local);
    const {MartUserAddres} = useSelector(state=>state.Local);
    const {MartUserEmail} = useSelector(state=>state.Local);
    const {Email} = useSelector(state=>state.Local);
    useEffect(() => {
        document.title = 'ScolarMart | Profile';
    }, []);
    
    const Logout =()=>{
        dispatch({
            type:"LogOut"
        })
    }
  return (
    <>
    <div className="ProfileDiv">
        <div className="ProfileCont">
            <h4>Name : {MartUserName}</h4>
            <h4>Phone NO : {MartUserPhone}</h4>
            <h4>Address : {MartUserAddres}</h4>
            <h4>Email : {MartUserEmail}</h4>
            <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
            <div className="profilebtns">
                <Link to="/editProfile">Edit Profile🖊️</Link>
                <Link to="/" onClick={Logout}>Log Out</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile