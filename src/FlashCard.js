import React from "react";
import { useState } from "react";
import { ArrowRepeat, FileMusic } from "react-bootstrap-icons";

export default function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState();

  return (
    <div className="card">
      <div className="details">
        <div className="image">
          <img src={flashcard.img} alt="" />
        </div>
        <div
          onClick={() => {
            const audio = new Audio(flashcard.sound);
            audio.play();
          }}
          className="buton-1"
        >
          <div className="title-1">{flashcard.title}</div>
          <FileMusic className="icon-1" size={56} />
        </div>
        <div onClick={() => setFlip(!flip)} className="buton-2">
          <div className="title-2">
            {flip ? flashcard.meaning : flashcard.title}
          </div>
          <ArrowRepeat className="icon-2" size={36} />
        </div>
      </div>

      <div className="bottom">
        <div className="first-text">
          <h3>{flashcard.ex1}</h3>
          <h2>{flashcard.ex1mng}</h2>
        </div>
        <div className="second-text">
          <h3>{flashcard.ex2}</h3>
          <h2>{flashcard.ex2mng}</h2>
        </div>
      </div>
    </div>
  );
}
