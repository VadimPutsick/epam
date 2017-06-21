import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/what_new.css';

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {this.props.value}
//       </button>
//     );
//   }
// }


// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square value={i} />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for Me {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }
var friends_stories = [
    {
        name: "Someone",
        avatar: "img/Fanta.jpg"
    },
    {
        name: "Someone",
        avatar: "img/Fanta.jpg"
    },
    // {
    //     name: "Someone",
    //     avatar: "img/Magic_leaf.jpg"
    // },
    // {
    //     name: "Someone",
    //     avatar: "img/Fanta.jpg"
    // },
    // {
    //     name: "Someone",
    //     avatar: "img/Fanta.jpg"
    // },
    // {
    //     name: "Someone",
    //     avatar: "img/Magic_leaf.jpg"
    // },
    // {
    //     name: "Someone",
    //     avatar: "img/Fanta.jpg"
    // },
    // {
    //     name: "Someone",
    //     avatar: "img/Fanta.jpg"
    // },
    // {
    //     name: "Someone",
    //     avatar: "img/Magic_leaf.jpg"
    // },
];
var homies_online = [
    {
        avatar: "img/Fanta.jpg"
    },
    {
        avatar: "img/Fanta.jpg"
    },
    {
        avatar: "img/Fanta.jpg"
    }
];
var notify = [
    {
        logo: "img/Fanta.jpg",
        date: "20 июня 13:54",
        author: "Someone",
        text: " приглашает вступить Вас в сообщество",
        group: " Любители Фанта",
        button: ""
    },
    // {
    //     logo: "img/Fanta.jpg",
    //     date: "20 июня 13:54",
    //     author: "Someone",
    //     text: " приглашает вступить Вас в сообщество",
    //     group: " Любители Фанта",
    //     button: "none"
    // },
];




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


//  function blue_line(){
//     var s = document.getElementsByName('news');
//     s[0].style.borderLeft= "2px solid #6285AF";
//     s[0].style.fontWeight= "bold";
//     s[0].color = "#000"
// }


class Logo extends React.Component{
  render(){
    return(
      <div className="logo">
          <img className="logo_img" src="img/logo.png" alt=""/>
      </div>
    );
  }
}
class SearchBar extends React.Component{
  render(){
    return(
       <div className="search_bar">
          <img className="search_img" src="img/search.png" alt=""/>
          <label for="search_input"></label><input className="search_input" type="text" size="20" value="Поиск"/>
      </div>
    );
  }
}
class NotificationsMusic extends React.Component{
    constructor(props){
        super(props);
        this.overlay_on = this.overlay_on.bind(this);
        this.notif_on = this.notif_on.bind(this);
    }
    overlay_on() {
        document.getElementById('overlay').style.display = "block";
    }
    notif_on() {
        var c = document.getElementById('notifications');
        var d = document.getElementsByClassName("blue_bell");
        if(c.style.display == "flex"){
            c.style.display = "none";
            d[0].style.backgroundColor = "";
        }
        else{
            c.style.display = "flex";
            d[0].style.backgroundColor = "#3d6a9c";
        }
    }
  render(){
    return(
        <div className="notifications_music">
          <img className="blue_bell" onClick={this.notif_on} src="img/not_bell.png" alt=""/>
          <img className="blue_note" onClick={this.overlay_on} src="img/blue_note.png" alt=""/>
        </div>
  );
}
}
class Notification extends React.Component{
  render(){
      var data = this.props.data;
      var notificationTemplate = data.map(function(item, index)
      {
          return (
              <div key={index} className="notification">
                  <img className="logo_n" src={item.logo} alt=""/>
                  <p className="info"><a href="">{item.author}</a>{item.text}
                      <a href="">{item.group}</a></p>
                  <p className="notif_date">{item.date}</p>
                  <div className="yes" style={{display:item.button}}>Присоединиться</div>
                  <div className="no" style={{display:item.button}}>Отклонить</div>
              </div>

          )
      })
    return(
        <div>
        {notificationTemplate}

        </div>
    );
  }
}

class Notifications extends React.Component{
  render(){
    return(
      <div id="notifications">
        <div className="notif_header">
          <a href="" id="notif">Уведомления</a>
          <a href="" id="settings">Настройки</a>
        </div>
        <Notification data={notify}/>
        <div className="show_more">
          <a id="more" href="">Показать все</a>
        </div>
      </div>
    );
  }
}
class UserPanel extends React.Component{
  render(){
    return(
        <div className="user_panel">
          <div>
            <span className="us_name">{this.props.name}</span>
            <img className="fanta_logo" src="img/Fanta.jpg" alt=""/>
            <img className="arrow" src="img/head_arrow.png" alt=""/>
          </div>
          <div className="user_properties">
            <a className="top" href="">Моя страница</a>
            <div className="user_menu_split"></div>
            <a href="">Редактировать</a>
            <a href="">Настройки</a>
            <a href="">Помощь</a>
            <div className="user_menu_split"></div>
            <a className="bottom" href="">Выйти</a>
          </div>
        </div>
    );
  }
}
UserPanel.defaultProps = {name: "User"};
class HeaderContent extends React.Component{
  render(){
    return(
          <div className="header">
            <div className="header_content">
              <Logo />
              <SearchBar />
              <NotificationsMusic />
              <Notifications />
              <UserPanel />
            </div>
          </div>
    );
  }
}
class Support extends React.Component{
  render(){
    return(
      <div className="support">
              <a href="">Блог</a>
                <a href="">Разработчикам</a><br/>
               <a href="">Реклама</a>
              <div className="extended">
                <a  href="">Еще <i className="down"></i></a>
              <div className="ext_items">
                <a className="top" href="">О компании</a>
                <a href="">Вакансии</a>
               <a href="">Правила</a>
               <a href="">Помощь</a>
               <a className="bottom" href="">Язык: русский</a>
              </div>
             </div>
      </div>
    );
  }
}
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.overlay_on = this.overlay_on.bind(this);
    }
    overlay_on() {
        document.getElementById('overl').style.display = "block";
    }
  render(){
    return(
      <div className="menu">
        <div className="menu_item">
        <img className="tool" src="img/tool.png" alt=""/>
        <img className="menu_img" src="img/home_icon.png" alt=""/>
        <span className="item_name">Моя Страница</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/news.png" alt=""/>
          <span className="item_name">Новости</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/messages.png" alt=""/>
          <span className="item_name">Сообщения</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/homies.png" alt=""/>
          <span className="item_name">Друзья</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/groups.png" alt=""/>
          <span className="item_name">Группы</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/photo.png" alt=""/>
          <span className="item_name">Фотографии</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/musique.png" alt=""/>
          <span className="item_name" onClick={this.overlay_on}>Музыка</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/movies.png" alt=""/>
          <span className="item_name">Видео</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/games.png" alt=""/>
          <span className="item_name">Игры</span>
        </div>
        <div className="menu_item_split"></div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/goodies.png" alt=""/>
          <span className="item_name">Товары</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/docs.png" alt=""/>
          <span className="item_name">Документы</span>
        </div>
        <Support />
      </div>
    );
  }
}
class WhatsNew_ADD extends React.Component{

   render(){
    return(
      <div className="WhatsNew_ADD">

           <div className="WhatsNew_input">
                      <div>
                        <img className="fanta_logo_new" src="img/Fanta.jpg" alt=""/>   
                      </div>       
                      <div className="what_input">
                        <textarea  id="text_area" className="message"  >Что у Вас нового?</textarea>
                      </div>
                      <div >            
                        <img className="what_img"  src="img/smile.png" alt=""/>                       
                      </div>
            </div>
            <div className="WhatsNew_submit">
            
                  <div >  
                             
                            <img className="what_img_add" src="img/musique.png" alt=""/>
                            
                            <img className="what_img_add" src="img/movies.png" alt=""/>
                            <img className="what_img_add" src="img/photo.png" alt=""/>  
                                   
                            <span className="add_element"> Ещё  </span>
                           
                  </div>
                  <div>
                   <img className="what_img_add"  src="img/unlock.png" alt=""/>
                
                  <div className="WhatNew_submit">
                    Отправить             
                  </div> 
                  </div>
             </div>
      </div>

    );
  }
}
class WhatsNew_Prime extends React.Component{

   render(){
    return(
         <div>
                      <div>
                        <img className="fanta_logo_new" src="img/Fanta.jpg" alt=""/>   
                      </div>       
                      <div className="what_input">
                        Что у Вас нового?
                      </div>
                      <div className="what_img_group" >            
                        <img className="what_img" src="img/musique.png" alt=""/>
                        <img className="what_img" src="img/movies.png" alt=""/>
                        <img className="what_img" src="img/photo.png" alt=""/>
                      </div>
          </div>


    );
  }
}


class WhatsNew extends React.Component{

  constructor(){
     super();
 
    
    this.state = {start:<WhatsNew_Prime/>}
    this.add = this.add.bind(this);
    this.over = this.over.bind(this);


  };
  add()
  {
     
          this.setState({start:<WhatsNew_ADD/>})
         
        
  };
  over()
  {
          
     
          this.setState({start:<WhatsNew_Prime/>}) ;
        
  };
  
  render(){
    return(
          <div className="whats_new" onClick={this.add} onBlur={this.over}>            
          {this.state.start}           
          </div>
    );
  }
}
class Stories extends React.Component{
  render(){
    var data = this.props.data;
    var storiesTemplate = data.map(function(item, index)
    {
        return (
            <div key={index} className="story_block">
                <img className="fanta_story" src={item.avatar} alt=""/><br />
                <span className="smb">{item.name}</span>
            </div>
        )
    })
    return(
          <div className="stories">
            <p className="story">Истории</p>
              {storiesTemplate}
          </div>
    );
  }
}
// Stories.defaultProps = {smname: "Someone", smbname: "Someone"};
class Feedback extends React.Component{
    constructor(props){
        super(props);
        this.state = {likes: 3120, repost: 420};
        this.like = this.like.bind(this);
        this.repost = this.repost.bind(this);
    }
    like(){
        this.setState({likes: this.state.likes + 1});
    }
    repost(){
        this.setState({repost: this.state.repost + 1});
    }
  render(){
    return(
          <div className="feedback">
            <img className="like_img" onClick={this.like} src="img/like.png" alt=""/>
            <span className="feed_info">Нравится {this.state.likes}</span>
            <img className="like_img" onClick={this.repost} src="img/repost.png" alt=""/>
            <span className="feed_info">{this.state.repost}</span>
            <span className="view_info">89K</span>
            <img className="view_img" src="img/view.png" alt=""/>
          </div>
    );
  }
}
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {post: "img/Magic_leaf.jpg"};
        this.press = this.press.bind(this);
    }
    press(){
        this.setState({post: "img/Pure_magic.jpg"});
    }
  render(){
    return(
          <div className="post">
            <img className="post_img" onClick={this.press} src={this.state.post} alt=""/>
          </div>
    );
  }
}
Post.defaultProps = {post: "img/Magic_leaf.jpg"};
class GroupMessage extends React.Component{
  render(){
    return(
          <div className="group_message">
            <img className="group_logo" src="img/group.png" alt=""/>
            <p className="author">
              <b>{this.props.groupname}</b><br/>
              <span className="publication_date">{this.props.date}</span>
            </p>
            <div className="drop_reply">
              <img className="point3" src="img/3point.png" alt=""/>
              <div className="drop_content">
                <a href="">Это не интересно</a>
                <a href="">Пожаловаться</a>
              </div>
            </div>
            <Post />
            <Feedback />
          </div>
    );
  }
}
GroupMessage.defaultProps = {groupname:"Группа", date: "вчера в 12:02"};
class Posts extends React.Component{
  render(){
    return(
          <div className="posts">
            <WhatsNew />
            <Stories data={friends_stories}/>
            <GroupMessage />
          </div>
    );
  }
}
class Hot extends React.Component{
  render(){
    return(
          <div className="hot">
            <img className="hot_img" src="img/interesting.png" alt=""/>
            <span className="hot_interesting">Сначала интересные</span>
            <div className="toggle_switch">
            <label className="switch">
              <input type="checkbox"></input>
              <div className="slider round"></div>
            </label>
            </div>
          </div>
    );
  }
}
class ActivityFeed extends React.Component{
    // constructor(){
    //     super();
    //     this.press = this.press.bind(this);
    // }
    // press(num){
    //     // var c = document.getElementsByClassName("recs");
    //     //     c[this.props.num].style.borderLeftWidth = 2;
    //     //     c[this.props.num].style.borderLeftColor = "#6285AF";
    //     //     c[this.props.num].style.borderLeftStyle = "solid";
    //
    // }
  render(){
    return(
          <div className="activity_feed">
            <ul className="act_list">
              <li className="news">Новости
                <img className="sort" src="img/add.png" alt=""/>
                <img className="sort" src="img/sort.png" alt=""/>
              </li>
              <ul className="sub_news">
                <li>Фотографии</li>
                <li>Видеозаписи</li>
              </ul>
              <li >Рекомендации</li>
              <li >Поиск</li>
              <li >Статьи</li>
              <div className="list_split"></div>
              <li >Обновления</li>
              <li className="comments">Комментарии</li>
            </ul>
          </div>
    );
  }

}
class SubMenu extends React.Component{
  render(){
    return(
          <div className="sub_menu">
            <ActivityFeed />
            <Hot />
          </div>
    );
  }
}
// class FriendsAvatar extends React.Component{
//   render(){
//     return(
//       <img className="friend_online" src="img/Fanta.jpg" alt="Friend"/>
//     );
//   }
// }
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
class Overlay extends React.Component{
    constructor(props){
        super(props);
        this.overlay_off = this.overlay_off.bind(this);
    }
    overlay_off() {
        document.getElementById('overlay').style.display = "none";
    }
    render(){
        return(
            <div id="overlay" onClick={this.overlay_off}>
                <div className="overlay_text">
                    <div className="ov_text">Музыка ВКонтакте</div>
                    <iframe id="iframe" frameborder="0" src={this.props.playlist}>
                        Слушайте
                        <a href='https://music.yandex.ru/users/music-blog/playlists/1175'>
                            Громкие новинки месяца
                        </a> — <a href='https://music.yandex.ru/users/music-blog'>
                        Вконтакте</a> на Яндекс.Музыке
                    </iframe>
                </div>
            </div>
        );
    }
}
Overlay.defaultProps = {playlist: "https://music.yandex.ru/iframe/#playlist/music-blog/1175/show/cover/description/black/"};
class OverlayNew extends React.Component{
    constructor(props){
        super(props);
        this.overlay_off = this.overlay_off.bind(this);
    }
    overlay_off() {
        document.getElementById('overl').style.display = "none";
    }
    render(){
        return(
            <div id="overl" onClick={this.overlay_off}>
                <div className="overlay_text">
                    <div className="o_text">ВКонтакте</div>
                    <iframe id="iframe" width="100%" height="450" scrolling="no" frameborder="no" src={this.props.playlist}>
                    </iframe>
                </div>
            </div>
        );
    }
}
OverlayNew.defaultProps = {playlist: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/293221837&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"};
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