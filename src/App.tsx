import "./App.css";
import Button from "./components/Button/button";
import SociaCards from "./components/SocialCards/SocialCards";
import Footer from "./components/Header&Footer/Footer";
import Header from "./components/Header&Footer/Header";
import VideoCards from "./components/videoCards/VideoCards";

function App() {
  return (
    <>
      <Header />
      <hr className="hr" />
      <section className="section2">
        <div className="trailerContainer">
          <div>
            <img src="https://lumiere-a.akamaihd.net/v1/images/acolyte-logo-single-104-800_b832c350.png?region=0,0,800,307" />
          </div>
          <div>
            <p>
              Racing to the next target, the Jedi head to a new world as they
              close in on the clever assassin.
            </p>
          </div>
          <div className="buttonContainer">
            <Button bgColor="yellow" text="Stream on Dinsey +" color="" />
            <Button bgColor="black" text="Episodes " color="white" />
          </div>
        </div>
      </section>
      <section className="sectionCards">
        <div className="cardContainer">
          <p className="cardParagraf">Lastes News + Features</p>
          <div className="gridBox">
            <VideoCards
              url="https://lumiere-a.akamaihd.net/v1/images/quiz-which-high-republic-job-is-right-for-you_article-f_edbdebd6.jpeg?region=0%2C0%2C1600%2C900"
              text="Quiz: Which High Republic Job Is Right for You? "
            />
            <VideoCards
              url="https://lumiere-a.akamaihd.net/v1/images/the-acolyte-104-highlights_article-feature_c2671ca5.jpeg?region=0%2C0%2C1600%2C900"
              text="The Acolyte Explained | Highlights from “Day”"
            />
            <VideoCards
              url="https://lumiere-a.akamaihd.net/v1/images/the-acolyte-victoria-monet-single-power-of-two_article-_0bfef676.jpeg?region=0%2C0%2C1600%2C900"
              text="Grammy Award-Winner Victoria Monét Lends Her Voice to The Acolyte"
            />
            <VideoCards
              url="https://lumiere-a.akamaihd.net/v1/images/premium-collectibles-studio-darth-maul-article-feature_d09e0340.jpeg?region=5%2C0%2C1280%2C720"
              text="Darth Maul Rises in Premium Collectibles Studio's New Star Wars Line "
            />

            <VideoCards
              url="https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-gameplay_article-feature_01bb1e67.jpeg?region=0%2C0%2C1600%2C900"
              text="Star Wars Outlaws' Julian Gerighty  Journey: “This Is a Survival Story”"
            />
            <VideoCards
              url="https://lumiere-a.akamaihd.net/v1/images/the-acolyte-is-here-article-feature_ebcb8225.jpeg?region=0%2C0%2C1600%2C900"
              text="Star Wars: The Acolyte Is Here!"
            />
          </div>
        </div>
      </section>

      <section className="sectionSocialCrads">
        <div className="socialCradsContainer">
          <p className="cardParagraf">Star Wars on social media</p>
          <div className="socialGridBox">
            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/lightsabers-social-share-portrait_c377a922.jpeg?region=0,0,500,649&width=320"
              text=" I feel seen. "
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/mj-social-share-portrait_640181b3.jpeg?region=0,0,500,649&width=320"
              text=" I understood that reference. "
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/a-b-social-share-portrait_b2924750.jpeg?region=0,0,500,649&width=320"
              text="Baddie szn."
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/red-carpet-social-share-portrait_b96ee699.jpeg?region=0,0,500,649&width=320"
              text="  The cast and crew of The Acolyte gathered at the Launch Event.    "
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/acolyte-trailer-social-share_73479e49.jpeg?region=0,0,500,649&width=320"
              text=" In an age of light, a darkness rises. "
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/acolyte-cast-social-share_d8d529a0.jpeg?region=0,0,500,649&width=320"
              text=" Happy May the Fourth from the cast of #TheAcolyte. "
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/amandla-social-share_9207940c.jpeg?region=0,0,500,649&width=320"
              text=" “It's a once in a lifetime experience, and it's something I'll hold forever.” "
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/kelnacca-social-share_8492c2fe.jpeg?region=0,0,500,649&width=320"
              text=" Kelnacca never misses. "
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/red-carpet-social-share-portrait_46e75867.jpeg?region=0,0,500,649&width=320"
              text="Two legend."
            />

            <SociaCards
              url="https://lumiere-a.akamaihd.net/v1/images/hc_social-share-portrait_a8cf041d.jpeg?region=0,0,500,649&width=320"
              text=" Amandla and Hayden on repeat forever."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
