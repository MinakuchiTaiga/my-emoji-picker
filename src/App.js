
import React, { useState } from 'react';
import './App.css';
import { Emoji, Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import Twemoji from 'react-twemoji';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {copiedEmoji: '😀'}
  };



  render() {
    

    





    const onSelect = emoji => {
      //console.log({emoji});
      alert(JSON.stringify(emoji));
      console.log(emoji.native);

      this.setState({copiedEmoji: emoji.native});


      


      
    };

    return (
      <div className="App">
        <div>
          <h1>emoji picker</h1>

          <Picker
            onSelect={emoji => onSelect(emoji)}
            set="twitter"
            i18n={{
              search: '検索',
              categories: {
                search: '検索結果',
                recent: 'よく使う絵文字',
                people: '顔 & 人',
                nature: '動物 & 自然',
                foods: '食べ物 & 飲み物',
                activity: 'アクティビティ',
                places: '旅行 & 場所',
                objects: 'オブジェクト',
                symbols: '記号',
                flags: '旗',
                custom: 'カスタム',
              },
            }}
            
          />
        </div>

        <div>
          <h1>Copied emoji</h1>
          <div class="emojiList">
            <Twemoji tag="span" options={{ className: 'test-twemoji'}}>{ this.state.copiedEmoji }</Twemoji>
          </div>
        </div>

      </div>
    );

    
  }


  componentDidUpdate(prevProps, prevState){
    /* 再描画後に実際のDOMにアクセスするためのメソッド */

    const copyImageByClassName = Class => {

      /*
      var imgs = document.createElement('img');
      imgs.src = document.getElementsByClassName(Class).src;
      
      console.log(imgs.src);

      var bodys = document.body ;
      bodys.appendChild(imgs);

      if (document.createRange)  
      {
        alert ('CreateRange work');
        var myrange = document.createRange();
        myrange.setStartBefore(imgs);
        myrange.setEndAfter(imgs);
        myrange.selectNode(imgs);

      }
      else
      {
        alert ('CreateRange NOT work');
      }

      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(myrange);

      document.execCommand("copy");

      //bodys.removeChild(imgs);
      */

      const copiedEmojiImg = document.getElementsByClassName(Class);
      console.log(copiedEmojiImg[0]);
      var myrange = document.createRange();
      myrange.selectNode(copiedEmojiImg[0]);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(myrange);
      //copiedEmojiImg.select();


      document.execCommand("copy");

      window.getSelection().removeAllRanges();
      
    };


    copyImageByClassName('test-twemoji');
    console.log(this.state.copiedEmoji + "copied now!");
  }
  
}

export default App;
