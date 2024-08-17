import React from "react";
import "./Header.css";
import "./Footer.css";
import seriesData from "../Api/seriesData.json";

// Define NetFlixSeries before App
export const NetFlixSeries = () => {
  const name = "Queen of Tears...!";
  const rating = 8.5;
  const summary = (
    <p>
      Many queens have left significant marks on their nations and the world.
      Notable examples include Queen Elizabeth I of England, renowned for her
      role during the Elizabethan Era and the defeat of the Spanish Armada;
      Catherine the Great of Russia, who expanded the Russian Empire and
      revitalized its cultural life; and Queen Victoria of the United Kingdom,
      whose reign marked the height of the British Empire. Other influential
      queens include Cleopatra VII of Egypt, known for her political acumen and
      alliances with Rome, and Marie Antoinette of France, whose life and death
      became symbolic of the French Revolution. Each of these queens played a
      pivotal role in shaping their respective eras and left a lasting legacy
      in history.
    </p>
  );

  const returnGenre = () => {
    const Genre = "RomCom";
    return Genre;
  };

  let age = 19;

  const canWatch = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available....!";
  };

  return (
    <div>
      <div>
        <img src="princes.jpg" alt="queen1.jpg" height="150%" width="100%" />
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {summary}</p>
        <p>Genre: {returnGenre()}</p>
        <button>{canWatch()}</button>
      </div>

      <div>
        <ul>
          {seriesData.map((currentElem) => {
            return (
              <li key={currentElem.id}>
                <div>
                  <img src={currentElem.img_url} alt={currentElem.name} height="150%" width="100%"  />
                  <h2>Name: {currentElem.name}</h2>
                  <h3>Rating: {currentElem.rating}</h3>
                  <p>Summary: {currentElem.description}</p>
                  <p>Genre: {currentElem.genre}</p>
                  <p>Cast: {currentElem.cast}</p>
                  <a href={currentElem.watch_url} target="_blank" rel="noopener noreferrer">
                    <button>Watch Now</button>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const App = () => {
  console.log('Rendering the App component');

  return (
    <>
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="#"><img src="/facebooks.png" alt="Facebook" height="70%" width="40%" /></a>
        <a href="#"><img src="/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="/insta1.png" alt="Instagram" /></a>
        <a href="#"><img src="/youtube.png" alt="YouTube" height="70%" width="40%" /></a>
      </div>
      <div className="legal-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
      </div>
      <div className="copyright">
        &copy; 2024 Netflix Series WebApp. All rights reserved.
      </div>
    </footer>
  );
};

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/netflix.jpg" alt="Netflix Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">TV Shows</li>
          <li className="nav-item">Movies</li>
          <li className="nav-item">New & Popular</li>
          <li className="nav-item">My List</li>
        </ul>
      </nav>
      <div className="user-profile">
        <img src="/avatar-1.png" alt="User Profile" />
      </div>
    </header>
  );
};
