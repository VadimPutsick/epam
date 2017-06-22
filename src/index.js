import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContent from './components/header.js';
import Menu from './components/menu.js';
import Posts from './components/posts.js';
import SubMenu from './components/submenu.js';
import FriendsOnline from './components/friend.js';
import {OverlayNew,Overlay} from './components/overlay.js';
import {homies_online} from './components/data.js';


import './index.css';
import './css/what_new.css';





function timer(){
    const obj=document.getElementById('timer_inp');
    obj.innerHTML--;
    if(obj.innerHTML==0){

        setTimeout(function(){var s = document.getElementsByClassName("friends-online");
            s[0].style.display = "none";},1000);

    }
    else{setTimeout(timer,1000);
    }
}
setTimeout(timer,1000);







// class FriendsAvatar extends React.Component{
//   render(){
//     return(
//       <img className="friend_online" src="img/Fanta.jpg" alt="Friend"/>
//     );
//   }
// }

class Content extends React.Component{
  constructor(props){
      super(props);
      this.notif_off = this.notif_off.bind(this);
    }
    notif_off() {
        document.getElementById('notifications').style.display = "none";
        document.getElementsByClassName("blue_bell")[0].style.backgroundColor = "";
    }
  render(){
    return(
          <div className="content" onClick={this.notif_off}>
            <Menu />
            <Posts />
            <SubMenu />
            <FriendsOnline data={homies_online}/>
          </div>
    );
  }
}


class Page extends React.Component{
    render(){
        return(
            <div className="page">
              <HeaderContent />
              <Content />
                <Overlay />
                <OverlayNew />
              <FriendsOnline data={homies_online}/>
          </div>  
        );
    }
}


// ========================================

// ReactDOM.render(
//   <ShoppingList />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Page data-tip="Показать друзей онлайн"/>,
  document.getElementById('root')
);