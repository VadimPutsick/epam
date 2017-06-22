import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
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

export {OverlayNew,Overlay};

