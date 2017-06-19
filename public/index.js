import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
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
  render(){
    return(
        <div className="notifications_music">
          <img className="blue_bell" src="img/not_bell.png" alt=""/>
          <img className="blue_note" src="img/blue_note.png" alt=""/>
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
          <span className="item_name">Музыка</span>
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
class WhatsNew extends React.Component{
  render(){
    return(
          <div className="whats_new">
            <img className="fanta_logo_new" src="img/Fanta.jpg" alt=""/>
            <label for="what_input"></label><input
              className="what_input" type="text" size="60" value="Что у Вас нового?"/>
            <img className="what_img" id="mus_img" src="img/musique.png" alt=""/>
            <img className="what_img" src="img/movies.png" alt=""/>
            <img className="what_img" src="img/photo.png" alt=""/>
          </div>
    );
  }
}
class Stories extends React.Component{
  render(){
    return(
          <div className="stories">
            <p className="story">Истории</p>
            <img className="fanta_story" src="img/Fanta.jpg" alt=""/>
            <img className="fanta_story" src="img/Fanta.jpg" alt=""/><br/>
            <span className="smb">{this.props.smname}</span>
            <span className="smb">{this.props.smbname}</span>
          </div>
    );
  }
}
Stories.defaultProps = {smname: "Someone", smbname: "Someone"};
class Feedback extends React.Component{
  render(){
    return(
          <div className="feedback">
            <img className="like_img" src="img/like.png" alt=""/>
            <span className="feed_info">Нравится 3 120</span>
            <img className="like_img" src="img/repost.png" alt=""/>
            <span className="feed_info">420</span>
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
            <img className="post_img" src={this.state.post} alt=""/>
              <div onClick={this.press} className="press">Press</div>
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
            <Stories />
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
    return(
          <div className="friends-online" data-title="Показать друзей онлайн">
            <img className="friend_online" src="img/Fanta.jpg" alt="Friend"/>
            <img className="friend_online" src="img/Fanta.jpg" alt="Friend"/>
            <img className="friend_online" src="img/Fanta.jpg" alt="Friend"/>
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
  render(){
    return(
          <div className="content">
            <Menu />
            <Posts />
            <SubMenu />
            <FriendsOnline />
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
              <FriendsOnline />
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
class NF extends React.Component{
    render(){
        return(
            <div className="page">
              Not Found!
          </div>  
        );
    }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Page} />
    <Route path="content" component={Content} />
    <Route path="*" component={NF} />
  </Router>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Page data-tip="Показать друзей онлайн"/>,
//   document.getElementById('root')
// );