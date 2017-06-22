import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';

class FriendsOnline extends React.Component{
  render(){
      var data = this.props.data;
      var friendsTemplate = data.map(function(item, index)
      {
          return (
              <div key={index} class="img_block">
                  <img className="friend_online" src={item.avatar} alt="Friend"/>
              </div>
          )
      })
    return(
          <div className="friends-online" data-title="Показать друзей онлайн">
              {friendsTemplate}
            <div className="counter_result">
            <span className="amount" id="timer_inp">
              40
            </span>
            <img className="online_img" src="img/homies.png"  alt="Friends"/>
            </div>
          </div>
    );
  }
}
export default FriendsOnline;