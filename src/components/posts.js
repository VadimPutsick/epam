import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import '../css/what_new.css';
import {friends_stories} from './data.js';

class WhatsNew_ADD extends React.Component{
  
  constructor(){
         super();          
   
  };

  over()
  {
          
     
          this.setState({start:<WhatsNew_Prime/>}) ;
        
  };


   render(){
    return(
      <div className="WhatsNew_ADD">

           <div className="WhatsNew_input">
                      <div>
                        <img className="fanta_logo_new" src="img/Fanta.jpg" alt=""/>   
                      </div>       
                      <div className="what_input">
                        <textarea autoFocus  className="message"  placeholder="Что у Вас нового?" ></textarea>
                      </div>
                      <div >            
                        <img className="what_img"  src="img/smile.png" alt=""/>                       
                      </div>
            </div>     
               <div className="exit">
                            sdvdsdfg
              </div>

            <div className="WhatsNew_submit">
            
                  <div >  
                             
                            <img className="what_img_add" src="img/musique.png" alt=""/>
                            
                            <img className="what_img_add" src="img/movies.png" alt=""/>
                            <img className="what_img_add" src="img/photo.png" alt=""/>                                
                           
                            <span  className="add_element">Еще <i className="down_add"></i></span>
                      
                                 
                      
                           
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
export default Posts ;