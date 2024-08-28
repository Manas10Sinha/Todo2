import WelcomeImage from "../static/WelcomeImage.jpg";
const WelcomeMessage = () => {
  return (
    <div className="WelcomeMessage">
      <center>
        <img src={WelcomeImage} />
        <h1>
          Catch up on our latest posts and join the conversation. 🗨️
          #StayEngaged #JoinUs
        </h1>
      </center>
    </div>
  );
};

export default WelcomeMessage;
