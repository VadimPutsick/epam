import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';


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
export default Menu;