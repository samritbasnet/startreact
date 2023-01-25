import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import siriImage from "./images/siri.png";

function App() {
  return (
    <div>
    <section className="hero is-primary">
    <div className="hero-body">
        <p className="title">Personal Digital Assitants</p>
    </div>
    </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard title="Alex"
               handle="@alex99" 
               image={AlexaImage}
               description="Alexa was created by amazon and helps you buy things" 
               />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortonaImage}
                description="Cortona was made by microsoft.Whoo knows what it does"
              />
            </div>
            <div className="column is-3">
              <ProfileCard title="Siri" 
              handle="@sir01"
               image={siriImage}
               description="Siri was made by apple and has some cool features in using voice command"
                />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
