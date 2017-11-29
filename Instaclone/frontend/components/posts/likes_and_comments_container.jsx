import { connect } from 'react-redux';
import {
  createLike,
  deleteLike,
} from '../../actions/posts_actions';
import {
  fetchPostComments,
  createComment,
  deleteComment
} from '../../actions/comments_actions';
import LikesAndComments  from './likes_and_comments';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  // const currentUserId = state.session.currentUser.id;
  const currentUser = state.session.currentUser;
  return {
    numLikes: ownProps.post.likes,
    liked: ownProps.post.liked_by_current_user,
    postId: ownProps.post.id,
    allComments: ownProps.post.comments,

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createLike: (postId) => dispatch(createLike(postId)),
    deleteLike: (postId) => dispatch(deleteLike(postId)),
    fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
    createComment: (postId, comment) => dispatch(createComment(postId, comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesAndComments);
