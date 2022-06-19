/*
 * @Author: Sirius-kk
 * @Date: 2022-06-01 22:48:56
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2022-06-01 22:56:51
 * @FilePath: \React_basic\non-application\demo2\like_button.js
 */
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    }
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

document.querySelectorAll('.like_button_container')
  .forEach(element => {
    const commentID = parseInt(element.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      element
    );
  })