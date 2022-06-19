/*
 * @Author: Sirius-kk
 * @Date: 2022-05-31 23:21:13
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-06-01 23:13:36
 * @FilePath: \React\React_basic\non-application\demo1\like_button.js
 */
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked) {
      return '我出来了，打我呀，笨蛋'
    }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // )
    return <button onClick={() => this.setState({ liked: true })}>Like</button>
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);