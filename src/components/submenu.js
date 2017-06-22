import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';

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
export default SubMenu;