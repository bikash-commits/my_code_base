import React from 'react';
import Avatar from './avatar';

 const userDetails = {
   name: 'Bikash Mahapatra',
   bio: 'I am a music lover. sometimes i like to sing also.',
   handles: {
     facebook: "https://www.facebook.com/bikash",
     instagram: "https://www.instagram.com/bikash_06",
     linkedIn: "https://www.linkedin.com/bikash"
  }
 }
export default class UserDetails extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="user-details-container">
        <Avatar name={userDetails.name} bio={userDetails.bio} handles={userDetails.handles}/>
      </div>
    );
  }
}