export default function ProfilePic(props) {
  console.log("show the profile pic", props);
  return <img src={props.image} className="profile" alt="profile" />
}
