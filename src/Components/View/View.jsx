import React,{useState,useContext,useEffect} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import './View.css';
import { postContext } from '../../store/postContext';
function View() {

  const {firebase} = useContext(FirebaseContext)
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(postContext)

  
 
 
  useEffect(() => {
    if (postDetails && postDetails.userId) {
      const { userId } = postDetails;
      console.log('here');
      firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
        res.forEach(doc => {
          setUserDetails(doc.data());
        });
      });
    }
  }, []);
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails? postDetails.url:''}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails ? postDetails.price : ''}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
          
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userName}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
