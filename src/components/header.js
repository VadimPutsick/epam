import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import '../index.css';
import {notify} from './data.js';



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
export default HeaderContent;