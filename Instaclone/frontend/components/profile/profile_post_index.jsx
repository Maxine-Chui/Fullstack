import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfilePostIndexItem from './profile_post_index_item';

class ProfilePostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.match.params.userId);
  }

  render() {
    return(
      <ul className="profile-grid">
        {
          this.props.posts.map(post => (
            <ProfilePostIndexItem
              key={post.id}
              post={ post }/>
          ))
        }
      </ul>
    );
  }

}
export default ProfilePostIndex;