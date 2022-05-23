import User from "./User.jsx";
import ProfilePic from "./Profilepic.jsx";
import TimeStamp from "./Timestamp.jsx";
import Message from "./Message.jsx"


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfilePic image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User tweet={props.tweet.user} />
          <TimeStamp tweet={props.tweet}/>

        </div>

        <Message tweet={props.tweet}/>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
