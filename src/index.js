import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
var posts = [
    {
        logo: "img/group.png",
        date: "вчера в 12:02",
        groupname: "Группа",
        text: "",
        img: "img/Magic_leaf.jpg",
        likes: 3120,
        reposts: 420,
        views: "89K"
    },
    // {
    //     logo: "img/Magic_leaf.jpg",
    //     date: "сегодня в 18:07",
    //     groupname: "Группа группа",
    //     text: "Всем почитателям Игоря",
    //     img: "img/Pure_Magic.jpg",
    //     likes: 420,
    //     reposts: 42,
    //     views: "9K"
    // },
];
var friends = [
    {
        avatar: "img/Fanta.jpg",
        name: "Someone",
        status: "New-York, NY",
        online: true,
    },
    {
        avatar: "img/Magic_leaf.jpg",
        name: "Not Someone",
        status: "Texas, TX",
        online: true,
    },
    {
        avatar: "img/Fanta.jpg",
        name: "Def Someone",
        status: "Black Lodge, WA",
        online: true,
    },
    {
        avatar: "img/Fanta.jpg",
        name: "Some One",
        status: "Chicago, IL",
        online: true,
    },
    {
        avatar: "img/Fanta.jpg",
        name: "Someone's friend",
        status: "Austin, TX",
        online: true,
    },
        {
        avatar: "img/Fanta.jpg",
        name: "Lonesome",
        status: "New-York, NY",
        online: false,
    },
    {
        avatar: "img/Fanta.jpg",
        name: "Not Lonesome",
        status: "Texas, TX",
        online: false,
    },
    {
        avatar: "img/Fanta.jpg",
        name: "Def Lonesome",
        status: "Black Lodge, WA",
        online: false,
    },
    {
        avatar: "img/Fanta.jpg",
        name: "Lonesome One",
        status: "Chicago, IL",
        online: false,
    },
    {
        avatar: "img/Fanta.jpg",
        name: "Lonesome's friend",
        status: "Austin, TX",
        online: false,
    },
];




// function timer(){
//     const obj=document.getElementById('timer_inp');
//     obj.innerHTML--;
//     if(obj.innerHTML==0){
//
//         setTimeout(function(){var s = document.getElementsByClassName("friends-online");
//             s[0].style.display = "none";},1000);
//
//     }
//     else{setTimeout(timer,1000);
//     }
// }
// setTimeout(timer,1000);


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
      constructor(props){
        super(props);
        this.open_on_key = this.open_on_key.bind(this);
    }
    open_on_key(e){
    if(e.keyCode == '17' || e.keyCode == '191'){
        var k = document.getElementsByClassName('all_friends_menu');
            for(let i = 0; i < k.length; i++)
                k.item(i).style.visibility = "visible";             
        }
    } 
  render(){
    return(
       <div className="search_bar">
          <img className="search_img" src="img/search.png" alt=""/>
          <label for="search_input"></label><input className="search_input" type="text" size="20" placeholder="Поиск" onKeyDown={this.open_on_key}/>
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
        let c = document.getElementById('notifications');
        let d = document.getElementsByClassName("blue_bell");
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
                <a  href="">Еще <i className="down"/></a>
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
        this.friends = this.friends.bind(this);
        this.posts = this.posts.bind(this);
    }
    overlay_on() {
        document.getElementById('overl').style.display = "block";
    }
    friends() {
        var s = document.getElementsByClassName('friends_list');
        for(let i = 0; i<s.length; i++){
           s.item(i).style.display = "";
        }
        document.getElementsByClassName('posts')[0].style.display = "none";
    }
    posts(){
        document.getElementsByClassName('posts')[0].style.display = "block";
        var s = document.getElementsByClassName('friends_list');
        for(let i = 0; i<s.length; i++){
            s.item(i).style.display = "none";
        }
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
          <span className="item_name" onClick={this.posts}>Новости</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/messages.png" alt=""/>
          <span className="item_name">Сообщения</span>
        </div>
        <div className="menu_item">
          <img className="tool" src="img/tool.png" alt=""/>
          <img className="menu_img" src="img/homies.png" alt=""/>
          <span className="item_name" onClick={this.friends}>Друзья</span>
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
class NoFriends extends React.Component{
    render(){
            return(
                <div className="no_friends">
                    <div>Ни одного друга не найдено.</div>
                </div>
            )
        }
    }
function photo_on() {
    var m = document.getElementsByClassName('friend');
    var s = document.getElementsByClassName('big');
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j <s.length; j++){
            if(i == j)
                s.item(i).style.display = "block";
        }
    }
}

// if ([].indexOf) {
//     var find = function(array, value) {
//         return array.indexOf(value);
//     }
// } else {
//     var find = function(array, value) {
//         for (var i = 0; i < array.length; i++) {
//             if (array[i] === value) return i;
//         }
//         return -1;
//     }
// }

class Friend extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var data = this.props.data;
        var name = this.props.name;
        var friendTemplate = data.map(function(item, index)
        {
            if(item.name == name){
                if(item.online) {
                    return (
                        <div key={index} className="friend">
                            <img className="avatar" src={item.avatar} alt=""/>
                            <div className="zoom_in">
                                <div className="zoom_outer" onClick={photo_on}>
                                    <img src="img/zoom_photo.png"/>
                                </div>
                            </div>
                            <Big_avatar avatar={item.name} />
                            <span id="online"/>
                            <div className="friend_info">
                                <a className="friend_name">{item.name}</a>
                                <div className="friend_status">{item.status}</div>
                                <a className="message_to_friend">Написать сообщение</a>
                            </div>
                            <div className="drop_friend">
                                <img className="points3" src="img/3point.png" alt=""/>
                                <div className="friend_content">
                                    <a href="" className="top">Просмотреть друзей</a>
                                    <a href="" className="top">Предложить друзей</a>
                                    <div className="friend_split"/>
                                    <a href="" className="top">Убрать из друзей</a>
                                    <div className="friend_split"/>
                                    <a href=""  id="change_list">
                                        <div>
                                        Настроить списки
                                        <i className="down"/>
                                        </div>
                                        <ul className="hidden_settings">
                                            <li>Лучшие друзья</li>
                                            <li>Родственники</li>
                                            <li>Коллеги</li>
                                            <li>Друзья по вузу</li>
                                            <li className="bottom">Друзья по школе</li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
                else{
                    return (
                        <div key={index} className="friend">
                            <img className="avatar" src={item.avatar} alt=""/>
                            <div className="zoom_in">
                                <div className="zoom_outer">
                                    <img src="img/zoom_photo.png"/>
                                </div>
                            </div>
                            <div className="friend_info">
                                <a className="friend_name">{item.name}</a>
                                <div className="friend_status">{item.status}</div>
                                <a className="message_to_friend">Написать сообщение</a>
                            </div>
                            <div className="drop_friend">
                                <img className="points3" src="img/3point.png" alt=""/>
                                <div className="friend_content">
                                    <a href="" className="top">Просмотреть друзей</a>
                                    <a href="" className="top">Предложить друзей</a>
                                    <div className="friend_split"/>
                                    <a href="" className="top">Убрать из друзей</a>
                                    <div className="friend_split"/>
                                    <a href="" className="bottom" id="change_list">Настроить списки
                                        <i className="down"/></a>
                                    <ul className="hidden_settings">
                                        <li>Лучшие друзья</li>
                                        <li>Родственники</li>
                                        <li>Коллеги</li>
                                        <li>Друзья по вузу</li>
                                        <li className="bottom">Друзья по школе</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        });
        return(
            <div className="friends_list">
                {friendTemplate}
            </div>
        )
    }
}
function photo_off() {
    var s = document.getElementsByClassName('big');
    for(let i = 0; i<s.length; i++){
        s.item(i).style.display = "none";
    }
}
class Big_avatar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var data = friends;
        var name = this.props.avatar;
        var bigTemplate = data.map(function(item, index)
        {
            if(item.name == name){
                return(
                    <div key={index} id="big_avatar" onClick={photo_off}>
                        <div className="overlay_text">
                            <img className="big_avatar" src={item.avatar} alt=""/>
                        </div>
                    </div>
                )
            }
        });
        return(
            <div className="big" onClick={photo_off}>
            {bigTemplate}
            </div>
        );
    }
}

class Friends extends React.Component{
    constructor(props){
            super(props);
            var friends = this.props.data.filter(function(item){
                        return (item.online)});
            this.state = { 
                name: this.props.data.map(function(item){
                return item.name;}),
                online: friends.map(function(item){
                        return item.name; 
                }),
                all: true
            };
            this.filterList = this.filterList.bind(this);
            this.friends_online = this.friends_online.bind(this);
            this.all_friends = this.all_friends.bind(this);
            this.friends_hover = this.friends_hover.bind(this);
            this.friends_out = this.friends_out.bind(this);
        }
        friends_online(){
            this.setState({all: false});
            document.getElementsByClassName('no_friends')[0].style.display = "";
            document.getElementsByClassName('search_friend')[0].value = "";
            document.getElementsByClassName("online_friends")[0].style.borderBottom = "2px solid #6387AC";
            document.getElementsByClassName("all_friends")[0].style.borderBottom = "2px solid #FAFBFC";
            this.setState({name: this.state.online});
        }
        all_friends(){
            this.setState({all: true});
            document.getElementsByClassName('no_friends')[0].style.display = "";
            document.getElementsByClassName('search_friend')[0].value = "";
            document.getElementsByClassName("online_friends")[0].style.borderBottom = "";
            document.getElementsByClassName("all_friends")[0].style.borderBottom = "";
            this.setState({name: this.props.data.map(function(item){
                return item.name;})})
        }
        friends_hover(){
            if(!this.state.all)
             document.getElementsByClassName("all_friends")[0].style.borderBottom = "2px solid #CAD2DB";

        }
        friends_out(){
            if(!this.state.all)
             document.getElementsByClassName("all_friends")[0].style.borderBottom = "none";
        }

        filterList(e){
            var data = [];
            if(!this.state.all)
            {
                var friends = this.props.data.filter(function(item){
                        return (item.online)});
                data = friends.map(function(item){
                    return item.name;
                })
            }
            else{
                data = this.props.data.map(function(item){
                    return item.name;
                })
            }
            document.getElementsByClassName("search_friend")[0].style.color = "#000000";
            var filteredList = data.filter(function(item){
                try{
                    return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
                }
                catch(err){}
            });
            this.setState({name: filteredList});
            if(filteredList.length == 0){
                var s = document.getElementsByClassName('no_friends');
                for(let i = 0; i<s.length; i++){
                    s.item(i).style.display = "flex";
                }
            }
            else if (filteredList.length == data.length){
                document.getElementsByClassName("search_friend")[0].style.color = "";
                var s = document.getElementsByClassName('no_friends');
                for(let i = 0; i<s.length; i++){
                    s.item(i).style.display = "";
                }
            }
            else{ 
                var s = document.getElementsByClassName('no_friends');
                for(let i = 0; i<s.length; i++){
                    s.item(i).style.display = "";
                }
            }
        }
    render(){
        return(
            <div className="friends_list">
                <div className="friends_header">
                    <div className="all_friends" onClick={this.all_friends} onMouseOver={this.friends_hover} onMouseLeave={this.friends_out} >
                        Все друзья
                        <span className="number_of_friends"> {this.state.name.length}</span>
                    </div>
                    <div className="online_friends" onClick={this.friends_online} >
                        Друзья онлайн
                        <span className="number_of_friends"> {this.state.online.length}</span>
                    </div>
                    <div className="find_friends" >Найти друзей</div>
                </div>
                <div className="friends_search" >
                    <img className="search_img_friend" src="img/search.png" alt=""/>
                    <label for="search_input"/>
                    <input className="search_friend" type="text" size="50"
                           placeholder="Начните вводить имя друга" onChange={this.filterList}/>
                    <a className="friends_settings">Параметры<i className="down"/></a>
                </div>
                {
                    this.state.name.map(function(item){
                            return <Friend key={item} name={item} data={friends}/>
                    })
                }
                <NoFriends/>
            </div>
        )
    }
}
class WhatsNew extends React.Component{
  render(){
    return(
          <div className="whats_new">
            <img className="fanta_logo_new" src="img/Fanta.jpg" alt=""/>
            <label for="what_input"></label><input
              className="what_input" type="text" size="60" placeholder="Что у Вас нового?"/>
            <img className="what_img" id="mus_img" src="img/musique.png" alt=""/>
            <img className="what_img" src="img/movies.png" alt=""/>
            <img className="what_img" src="img/photo.png" alt=""/>
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
        this.state = {likes: this.props.likes, repost: this.props.reposts};
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
            <div className="ilike">
              <img className="like_img" onClick={this.like} src="img/like.png" alt=""/>
              <span className="feed_info" onClick={this.like}>Нравится {this.state.likes}</span>
            </div>
            <div className="ilike">
              <img className="like_img" onClick={this.repost} src="img/repost.png" alt=""/>
              <span className="feed_info" onClick={this.repost}>{this.state.repost}</span>
            </div>
            <span className="view_info">{this.props.views}</span>
            <img className="view_img" src="img/view.png" alt=""/>
          </div>
    );
  }
}
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {post: this.props.data};
        this.press = this.press.bind(this);
    }
    press(){
        this.setState({post: "img/Pure_magic.jpg"});
    }
  render(){
    return(
          <div className="post">
              <div className="posts_text">{this.props.text}</div>
            <img className="post_img" onClick={this.press} src={this.state.post} alt=""/>
          </div>
    );
  }
}
// Post.defaultProps = {post: "img/Magic_leaf.jpg"};
class GroupMessage extends React.Component{
  render(){
      var data = this.props.data;
      var postTemplate = data.map(function(item, index)
      {
          return (
              <div key={index} className="group_message">
                  <img className="group_logo" src={item.logo} alt=""/>
                  <p className="author">
                      <b>{item.groupname}</b><br/>
                      <span className="publication_date">{item.date}</span>
                  </p>
                  <div className="drop_reply">
                      <img className="point3" src="img/3point.png" alt=""/>
                      <div className="drop_content">
                          <a href="" className="top">Это не интересно</a>
                          <a href="" className="bottom">Пожаловаться</a>
                      </div>
                  </div>
                  <Post data={item.img} text={item.text}/>
                  <Feedback likes={item.likes} reposts={item.reposts} views={item.views} />
              </div>
          )
      })
    return(
        <div id="posts">{postTemplate}</div>
    );
  }
}
// GroupMessage.defaultProps = {groupname:"Группа", date: "вчера в 12:02"};
class Posts extends React.Component{
  render(){
    return(
          <div className="posts">
            <WhatsNew />
            <Stories data={friends_stories}/>
            <GroupMessage data={posts} />
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
    constructor(){
        super();
        this.recs = this.recs.bind(this);
        this.search = this.search.bind(this);
        this.publications = this.publications.bind(this);
        this.updates = this.updates.bind(this);
        this.comments = this.comments.bind(this);
        this.news = this.news.bind(this);
    }
    news(){
        document.getElementsByClassName("sub_news")[0].style.display = "";
        document.getElementsByClassName("news")[0].style.borderLeft = "";
        document.getElementsByClassName("news")[0].style.color = "";
        document.getElementsByClassName("news")[0].style.fontWeight = "";
        document.getElementsByClassName("news")[0].style.backgroundColor = "";
        document.getElementsByClassName("sort")[0].style.display = "";
        document.getElementsByClassName("sort")[1].style.display = "";
        document.getElementsByClassName("hot")[0].style.display = "";
        document.getElementById("photo").style.borderLeft = "none";
        document.getElementById("photo").style.backgroundColor = "";
        document.getElementById("photo").style.color = "";
        document.getElementById("photo").style.fontWeight = "";
        document.getElementById("video").style.borderLeft = "none";
        document.getElementById("video").style.backgroundColor = "";
        document.getElementById("video").style.color = "";
        document.getElementById("video").style.fontWeight = "";
        document.getElementById("recs").style.borderLeft = "none";
        document.getElementById("recs").style.backgroundColor = "";
        document.getElementById("recs").style.color = "";
        document.getElementById("recs").style.fontWeight = "";
        document.getElementById("publications").style.borderLeft = "none";
        document.getElementById("publications").style.backgroundColor = "";
        document.getElementById("publications").style.color = "";
        document.getElementById("publications").style.fontWeight = "";
        document.getElementById("search").style.borderLeft = "none";
        document.getElementById("search").style.backgroundColor = "";
        document.getElementById("search").style.color = "";
        document.getElementById("search").style.fontWeight = "";
        document.getElementById("updates").style.borderLeft = "none";
        document.getElementById("updates").style.backgroundColor = "";
        document.getElementById("updates").style.color = "";
        document.getElementById("updates").style.fontWeight = "";
        document.getElementById("comments").style.borderLeft = "none";
        document.getElementById("comments").style.backgroundColor = "";
        document.getElementById("comments").style.color = "";
        document.getElementById("comments").style.fontWeight = "";
    }
    photo(){
        document.getElementsByClassName("news")[0].style.borderLeft = "none";
        document.getElementsByClassName("news")[0].style.color = "#2a5885";
        document.getElementsByClassName("news")[0].style.fontWeight = "500";
        document.getElementsByClassName("news")[0].style.backgroundColor = "#FFFFFF";
        document.getElementById("photo").style.borderLeftWidth = "2px";
        document.getElementById("photo").style.borderLeftColor = "#6285AF";
        document.getElementById("photo").style.borderLeftStyle = "solid";
        document.getElementById("photo").style.backgroundColor = "#F0F2F5";
        document.getElementById("photo").style.color = "#000000";
        document.getElementById("photo").style.fontWeight = "600";
        document.getElementById("video").style.borderLeft = "none";
        document.getElementById("video").style.backgroundColor = "";
        document.getElementById("video").style.color = "";
        document.getElementById("video").style.fontWeight = "";
        document.getElementsByClassName("hot")[0].style.display = "none";
    }
    video(){
        document.getElementsByClassName("news")[0].style.borderLeft = "none";
        document.getElementsByClassName("news")[0].style.color = "#2a5885";
        document.getElementsByClassName("news")[0].style.fontWeight = "500";
        document.getElementsByClassName("news")[0].style.backgroundColor = "#FFFFFF";
        document.getElementById("video").style.borderLeftWidth = "2px";
        document.getElementById("video").style.borderLeftColor = "#6285AF";
        document.getElementById("video").style.borderLeftStyle = "solid";
        document.getElementById("video").style.backgroundColor = "#F0F2F5";
        document.getElementById("video").style.color = "#000000";
        document.getElementById("video").style.fontWeight = "600";
        document.getElementById("photo").style.borderLeft = "none";
        document.getElementById("photo").style.backgroundColor = "";
        document.getElementById("photo").style.color = "";
        document.getElementById("photo").style.fontWeight = "";
        document.getElementsByClassName("hot")[0].style.display = "none";
    }
    recs(){
        document.getElementById("recs").style.borderLeftWidth = "2px";
        document.getElementById("recs").style.borderLeftColor = "#6285AF";
        document.getElementById("recs").style.borderLeftStyle = "solid";
        document.getElementById("recs").style.backgroundColor = "#F0F2F5";
        document.getElementById("recs").style.color = "#000000";
        document.getElementById("recs").style.fontWeight = "bold";
        document.getElementsByClassName("sub_news")[0].style.display = "none";
        document.getElementsByClassName("news")[0].style.borderLeft = "none";
        document.getElementsByClassName("news")[0].style.color = "#2a5885";
        document.getElementsByClassName("news")[0].style.fontWeight = "500";
        document.getElementsByClassName("news")[0].style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("sort")[0].style.display = "none";
        document.getElementsByClassName("sort")[1].style.display = "none";
        document.getElementsByClassName("hot")[0].style.display = "none";
        document.getElementById("blue_line_block").style.transform = "translateY(30px)";
        document.getElementById("blue_line_block").style.transition = "width";
        document.getElementById("blue_line_block").style.transitionDuration = "3s";
        document.getElementById("blue_line_block").style.transitionTimingFunction = "ease-in-out";
        document.getElementById("publications").style.borderLeft = "none";
        document.getElementById("publications").style.backgroundColor = "";
        document.getElementById("publications").style.color = "";
        document.getElementById("publications").style.fontWeight = "";
        document.getElementById("search").style.borderLeft = "none";
        document.getElementById("search").style.backgroundColor = "";
        document.getElementById("search").style.color = "";
        document.getElementById("search").style.fontWeight = "";
        document.getElementById("updates").style.borderLeft = "none";
        document.getElementById("updates").style.backgroundColor = "";
        document.getElementById("updates").style.color = "";
        document.getElementById("updates").style.fontWeight = "";
        document.getElementById("comments").style.borderLeft = "none";
        document.getElementById("comments").style.backgroundColor = "";
        document.getElementById("comments").style.color = "";
        document.getElementById("comments").style.fontWeight = "";

    }
    search(){
        document.getElementById("search").style.borderLeftWidth = "2px";
        document.getElementById("search").style.borderLeftColor = "#6285AF";
        document.getElementById("search").style.borderLeftStyle = "solid";
        document.getElementById("search").style.backgroundColor = "#F0F2F5";
        document.getElementById("search").style.color = "#000000";
        document.getElementById("search").style.fontWeight = "bold";
        document.getElementsByClassName("sub_news")[0].style.display = "none";
        document.getElementsByClassName("news")[0].style.borderLeft = "none";
        document.getElementsByClassName("news")[0].style.color = "#2a5885";
        document.getElementsByClassName("news")[0].style.fontWeight = "500";
        document.getElementsByClassName("news")[0].style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("sort")[0].style.display = "none";
        document.getElementsByClassName("sort")[1].style.display = "none";
        document.getElementsByClassName("hot")[0].style.display = "none";
        // document.getElementById("blue_line_block").style.transform = "translateY(60px)";
        // document.getElementById("blue_line_block").style.transition = "width";
        // document.getElementById("blue_line_block").style.transitionDuration = "3s";
        // document.getElementById("blue_line_block").style.transitionTimingFunction = "ease-in-out";
        document.getElementById("recs").style.borderLeft = "none";
        document.getElementById("recs").style.backgroundColor = "";
        document.getElementById("recs").style.color = "";
        document.getElementById("recs").style.fontWeight = "";
        document.getElementById("publications").style.borderLeft = "none";
        document.getElementById("publications").style.backgroundColor = "";
        document.getElementById("publications").style.color = "";
        document.getElementById("publications").style.fontWeight = "";
        document.getElementById("updates").style.borderLeft = "none";
        document.getElementById("updates").style.backgroundColor = "";
        document.getElementById("updates").style.color = "";
        document.getElementById("updates").style.fontWeight = "";
        document.getElementById("comments").style.borderLeft = "none";
        document.getElementById("comments").style.backgroundColor = "";
        document.getElementById("comments").style.color = "";
        document.getElementById("comments").style.fontWeight = "";
    }
    publications(){
        document.getElementById("publications").style.borderLeftWidth = "2px";
        document.getElementById("publications").style.borderLeftColor = "#6285AF";
        document.getElementById("publications").style.borderLeftStyle = "solid";
        document.getElementById("publications").style.backgroundColor = "#F0F2F5";
        document.getElementById("publications").style.color = "#000000";
        document.getElementById("publications").style.fontWeight = "bold";
        document.getElementsByClassName("sub_news")[0].style.display = "none";
        document.getElementsByClassName("news")[0].style.borderLeft = "none";
        document.getElementsByClassName("news")[0].style.color = "#2a5885";
        document.getElementsByClassName("news")[0].style.fontWeight = "500";
        document.getElementsByClassName("news")[0].style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("sort")[0].style.display = "none";
        document.getElementsByClassName("sort")[1].style.display = "none";
        document.getElementsByClassName("hot")[0].style.display = "none";
        document.getElementById("recs").style.borderLeft = "none";
        document.getElementById("recs").style.backgroundColor = "";
        document.getElementById("recs").style.color = "";
        document.getElementById("recs").style.fontWeight = "";
        document.getElementById("search").style.borderLeft = "none";
        document.getElementById("search").style.backgroundColor = "";
        document.getElementById("search").style.color = "";
        document.getElementById("search").style.fontWeight = "";
        document.getElementById("updates").style.borderLeft = "none";
        document.getElementById("updates").style.backgroundColor = "";
        document.getElementById("updates").style.color = "";
        document.getElementById("updates").style.fontWeight = "";
        document.getElementById("comments").style.borderLeft = "none";
        document.getElementById("comments").style.backgroundColor = "";
        document.getElementById("comments").style.color = "";
        document.getElementById("comments").style.fontWeight = "";
    }
    updates(){
        document.getElementById("updates").style.borderLeftWidth = "2px";
        document.getElementById("updates").style.borderLeftColor = "#6285AF";
        document.getElementById("updates").style.borderLeftStyle = "solid";
        document.getElementById("updates").style.backgroundColor = "#F0F2F5";
        document.getElementById("updates").style.color = "#000000";
        document.getElementById("updates").style.fontWeight = "bold";
        document.getElementsByClassName("sub_news")[0].style.display = "none";
        document.getElementsByClassName("news")[0].style.borderLeft = "none";
        document.getElementsByClassName("news")[0].style.color = "#2a5885";
        document.getElementsByClassName("news")[0].style.fontWeight = "500";
        document.getElementsByClassName("news")[0].style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("sort")[0].style.display = "none";
        document.getElementsByClassName("sort")[1].style.display = "none";
        document.getElementsByClassName("hot")[0].style.display = "none";
        document.getElementById("recs").style.borderLeft = "none";
        document.getElementById("recs").style.backgroundColor = "";
        document.getElementById("recs").style.color = "";
        document.getElementById("recs").style.fontWeight = "";
        document.getElementById("search").style.borderLeft = "none";
        document.getElementById("search").style.backgroundColor = "";
        document.getElementById("search").style.color = "";
        document.getElementById("search").style.fontWeight = "";
        document.getElementById("publications").style.borderLeft = "none";
        document.getElementById("publications").style.backgroundColor = "";
        document.getElementById("publications").style.color = "";
        document.getElementById("publications").style.fontWeight = "";
        document.getElementById("comments").style.borderLeft = "none";
        document.getElementById("comments").style.backgroundColor = "";
        document.getElementById("comments").style.color = "";
        document.getElementById("comments").style.fontWeight = "";
    }
    comments(){
        document.getElementById("comments").style.borderLeftWidth = "2px";
        document.getElementById("comments").style.borderLeftColor = "#6285AF";
        document.getElementById("comments").style.borderLeftStyle = "solid";
        document.getElementById("comments").style.backgroundColor = "#F0F2F5";
        document.getElementById("comments").style.color = "#000000";
        document.getElementById("comments").style.fontWeight = "bold";
        document.getElementsByClassName("sub_news")[0].style.display = "none";
        document.getElementsByClassName("news")[0].style.borderLeft = "none";
        document.getElementsByClassName("news")[0].style.color = "#2a5885";
        document.getElementsByClassName("news")[0].style.fontWeight = "500";
        document.getElementsByClassName("news")[0].style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("sort")[0].style.display = "none";
        document.getElementsByClassName("sort")[1].style.display = "none";
        document.getElementsByClassName("hot")[0].style.display = "none";
        document.getElementById("recs").style.borderLeft = "none";
        document.getElementById("recs").style.backgroundColor = "";
        document.getElementById("recs").style.color = "";
        document.getElementById("recs").style.fontWeight = "";
        document.getElementById("search").style.borderLeft = "none";
        document.getElementById("search").style.backgroundColor = "";
        document.getElementById("search").style.color = "";
        document.getElementById("search").style.fontWeight = "";
        document.getElementById("publications").style.borderLeft = "none";
        document.getElementById("publications").style.backgroundColor = "";
        document.getElementById("publications").style.color = "";
        document.getElementById("publications").style.fontWeight = "";
        document.getElementById("updates").style.borderLeft = "none";
        document.getElementById("updates").style.backgroundColor = "";
        document.getElementById("updates").style.color = "";
        document.getElementById("updates").style.fontWeight = "";
    }
  render(){
    return(
          <div className="activity_feed">
            <ul className="act_list">
              <div id="blue_line_block"></div><li className="news" onClick={this.news}>Новости
                <img className="sort" src="img/add.png" alt=""/>
                <img className="sort" src="img/sort.png" alt=""/>
              </li>
              <ul className="sub_news">
                <li id="photo" onClick={this.photo}>Фотографии</li>
                <li id="video" onClick={this.video}>Видеозаписи</li>
              </ul>
              <li id="recs" onClick={this.recs}>Рекомендации</li>
              <li id="search" onClick={this.search}>Поиск</li>
              <li id="publications" onClick={this.publications}>Статьи</li>
              <div className="list_split"></div>
              <li id="updates" onClick={this.updates}>Обновления</li>
              <li id="comments" onClick={this.comments}>Комментарии</li>
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
class FriendOnline extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var data = this.props.data;
        var name = this.props.name;
        var allFriendsTemplate = data.map(function(item, index)
        { 
          if(item.name == name){
            if(item.online){
                return (
                    <div key={index} className="friend_stick">
                        <img className="fr_online" src={item.avatar} alt="Friend"/>
                        <span className="he_is_online"/>
                        <div className="all_name">{item.name}</div>
                    </div>
            )
            }
            else {
                return (
                    <div key={index} className="friend_stick">
                        <img className="fr_online" src={item.avatar} alt="Friend"/>
                        <span className="he_is_offline"/>
                        <div className="all_name">{item.name}</div>
                    </div>
            )
            }
          }
        });
        return(
            <div className="my_online_friends">
                {allFriendsTemplate}
            </div>
        )
    }
}
class NoNewFriends extends React.Component{
    render(){
        return(
            <div className="no_new_friends">
                <div>Не найдено друзей с таким именем.</div>
            </div>
        )
    }
}

class FriendsOnline extends React.Component{
    constructor(props){
        super(props);
        var friends = this.props.data.filter(function(item){
            return (item.online)});
        this.state = {name: this.props.data.map(function(item){
                return item.name;}),
            online: friends.map(function(item){
                return item.name;
            }),
            show_all: true,
            data: this.props.data,
            show: false,
            scroll: false,
        };
        this.online_click = this.online_click.bind(this);
        this.filterList = this.filterList.bind(this);
        this.close_frineds = this.close_frineds.bind(this);
        this.show_all_friends_menu = this.show_all_friends_menu.bind(this);
        this.scroll = this.scroll.bind(this);
        this.drag = this.drag.bind(this);

    }
    online_click(){
        var s = document.getElementsByClassName('no_new_friends');
        for(let i = 0; i<s.length; i++){
            s.item(i).style.display = "";
        }
        document.getElementsByClassName('search_friend')[1].value = "";
        if(this.state.show_all){
            document.getElementsByClassName('indicator')[0].style.backgroundColor = "#8AC176";
            this.setState({show_all: false});
            this.setState({name: this.state.online});
        }
        else{
            document.getElementsByClassName('indicator')[0].style.backgroundColor = "";
            this.setState({show_all: true});
            this.setState({name: this.props.data.map(function(item){
                return item.name;})});
        }

    }
    show_all_friends_menu(){
        document.getElementsByClassName('search_friend')[1].value = "";
        document.getElementById('scroll').style.transition = "";
        if(this.state.show){
            this.setState({show:false});
            var k = document.getElementsByClassName('all_friends_menu');
            for(let i = 0; i < k.length; i++)
                k.item(i).style.visibility = "visible";             

        }
        else{
            this.setState({show:true});
            var k = document.getElementsByClassName('all_friends_menu');
            for(let i = 0; i < k.length; i++)
                k.item(i).style.visibility = "";             
        }
    }

    close_frineds(){
        this.setState({show:false});
        document.getElementById('scroll').style.transition = "";
        var k = document.getElementsByClassName('all_friends_menu');
        for(let i = 0; i < k.length; i++)
            k.item(i).style.visibility = "";             
    }
    scroll(){
        var scrolled =  document.getElementsByClassName('all_friends_menu')[0].scrollTop;
        var scrolle = document.getElementsByClassName('all_friends_menu')[0].scrollHeight;

        document.getElementById('scroll').style.transition = "2s ease";
        if(!this.state.scroll){
            document.getElementById('scroll').style.bottom = scrolled + 50 + 'px';
            this.setState({scroll: true});
        }
        else if(this.state.scroll){
            document.getElementById('scroll').style.bottom = scrolle - 25 + 'px';
            this.setState({scroll: false});
        }
    }
    drag(ev) {
    ev.dataTransfer.setData("draggable", ev.target.id);
    }
    filterList(e){
        var data = this.props.data.map(function(item){
                return item.name;
            })
        document.getElementsByClassName("search_friend")[0].style.color = "#000000";
        var filteredList = data.filter(function(item){
        try{
            return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        }
        catch(err){}
        });
        this.setState({name: filteredList});
        if(filteredList.length == 0){
            var s = document.getElementsByClassName('no_new_friends');
            for(let i = 0; i<s.length; i++){
                s.item(i).style.display = "flex";
            }
        }
        else if (filteredList.length == data.length){
            document.getElementsByClassName("search_friend")[0].style.color = "";
            var s = document.getElementsByClassName('no_new_friends');
            for(let i = 0; i<s.length; i++){
                s.item(i).style.display = "";
            }
        }
        else{ 
            var s = document.getElementsByClassName('no_new_friends');
            for(let i = 0; i<s.length; i++){
                s.item(i).style.display = "";
            }
        }
    }
  render(){
      var friendsTemplate = this.state.data.map(function(item, index)
      {
          if(index < 3 && item.online)
         {
          return (
                <div key={index} class="img_block">
                    <img className="friend_online" src={item.avatar} alt="Friend"/>
                </div>
          )
         }
      });

    return(
        <div onScroll={this.scroll} id="fr_online_menu" >
          <div className="all_friends_menu">
              <div className="all_menu" draggable="true" onDragStart={this.drag}>
                  <div className="online_counter"  id="draggable" draggable="true" onDragStart={this.drag}>
                      <span>{this.state.online.length} человек онлайн</span>
                      <img className="stick_this" src="img/close.png" alt="" onClick={this.close_frineds}/>
                      <img className="stick_this" src="img/stick.png" alt=""/>
                  </div>
                  <div className="my_online_friends" >
                  {
                    this.state.name.map(function(item){
                        return <FriendOnline key={item} name={item} data={friends}/>
                    })
                  }
                  </div>
                  <span id="scroll"/>
                  <NoNewFriends />
                  <div className="search_online">
                      <img className="search_img_friend" src="img/search.png" alt=""/>
                      <label for="search_input"/>
                      <input className="search_friend" type="text" size="35" style={{color: "#828282"}}
                             placeholder="Начните вводить имя..." onChange={this.filterList}/>
                      <span className="indicator" onClick={this.online_click}/>
                  </div>
              </div>
          </div>
          <div className="friends-online" data-title="Показать друзей онлайн" onClick={this.show_all_friends_menu} >
              {friendsTemplate}
            <div className="counter_result">
            <span className="amount">
                {this.state.online.length}
            </span>
            <img className="online_img" src="img/homies.png"  alt="Friends"/>
            </div>
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
            <Friends data={friends} />
            <Posts />
            <SubMenu />
            <FriendsOnline data={friends}/>
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
function main_focus(){
    document.getElementById('drag').focus;
}

OverlayNew.defaultProps = {playlist: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/293221837&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"};
class Page extends React.Component{
    constructor(props){
        super(props);
        this.allowDrop = this.allowDrop.bind(this);
        this.drop = this.drop.bind(this);
        this.open_on_key = this.open_on_key.bind(this);
    }
    allowDrop(ev) {
    ev.preventDefault();
    }
    drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("drag");
    document.getElementById('drag').appendChild(document.getElementById('draggable'));
    document.getElementById('draggable').style.position = "static";
    document.getElementById('draggable').style.width = "280px";
    }
    open_on_key(e){
    if(e.keyCode == '17' || e.keyCode == '191'){
        var k = document.getElementsByClassName('all_friends_menu');
            for(let i = 0; i < k.length; i++)
                k.item(i).style.visibility = "visible";             
        }
    } 
    render(){
        return(
            <div id="drag" tabIndex="0" className="page" onDrop={this.drop} onDragOver={this.allowDrop} onKeyDown={this.open_on_key}>
              <HeaderContent />
              <Content />
                <Overlay />
                <OverlayNew />
              <FriendsOnline data={friends}/>
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
  <Page data-tip="Показать друзей онлайн (Tab+Ctrl)"/>,
  document.getElementById('root')
);