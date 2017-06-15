import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}


class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for Me {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

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


class FriendOnline extends React.Component{
    render(){
        return(
            <div className="sub_and_friends">
                <div className="sub_menu">
                    <div className="activity_feed">
                        <ul className="act_list">
                            <li className="news">Новости
                                <img className="sort" src="img/add.png"></img>
                                <img className="sort" src="img/sort.png"></img>
                            </li>
                            <ul className="sub_news">
                                <li>Фотографии</li>
                                <li>Видеозаписи</li>
                            </ul>
                            <li>Рекомендации</li>
                            <li>Поиск</li>
                            <li>Статьи</li>
                            <div className="list_split"></div>
                            <li>Обновления</li>
                            <li className="comments">Комментарии</li>
                        </ul>
                    </div>
                    <div className="hot">
                        <img className="hot_img" src="img/interesting.png"></img>
                            <span className="hot_interesting">Сначала интересные</span>
                            <div className="toggle_switch">
                                <label className="switch">
                                    <input type="checkbox"></input>
                                        <div className="slider round"></div>
                                </label>
                            </div>
                    </div>
                </div>
                    <div className="friends-online" >
                        <img className="friend_online" src="img/Fanta.jpg" alt="Friend"></img>
                        <img className="friend_online" src="img/Fanta.jpg"  alt="Friend"></img>
                        <img className="friend_online" src="img/Fanta.jpg" alt="Friend"></img>
                        <div className="counter_result">
                            <span className="amount" id="timer_inp">
                                40
                            </span>
                            <img className="online_img" src="img/homies.png"  alt="Friends"></img>
                        </div>
                </div>
            </div>
        );
    }
}
// ========================================

ReactDOM.render(
  <ShoppingList />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <FriendOnline data-tip="Показать друзей онлайн"/>,
  document.getElementById('root')
);