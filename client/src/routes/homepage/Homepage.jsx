import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>Lele AI</h1>
        <h2>Tingkatkan kreativitas dan produktivitas Anda</h2>
        <h3>
          Temukan cara baru untuk menyelesaikan pekerjaan Anda dengan cepat dan
          efisien. Lele AI siap membantu Anda.
        </h3>
        <Link to="/dashboard">Mulai Sekarang</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Manusia: Apa manfaat AI untuk kehidupan sehari-hari?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: AI membantu Anda bekerja lebih efisien dengan otomatisasi.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Manusia2: Bagaimana AI dapat membantu saya belajar?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: AI menyediakan materi belajar yang dipersonalisasi dan interaktif.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
                "Manusia: Apa masa depan AI?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Masa depan AI adalah kolaborasi antara manusia dan mesin untuk menciptakan inovasi.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Syarat dan Ketentuan</Link>
          <span>|</span>
          <Link to="/">Kebijakan Privasi</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
