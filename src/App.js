import React from "react";
import { useState } from "react";
import "./App.css";
import FlashCardList from "./FlashCardList";
import song1 from "./audio/afraid.mp3";
import song2 from "./audio/agree.mp3";
import song3 from "./audio/angry.mp3";
function App() {
  const [flashcards] = useState(SAMPLE_FLASHCARDS);

  return <FlashCardList flashcards={flashcards} />;
}
const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    title: "afraid",
    meaning: "korkmak",
    ex1: "When somessone is afraid, they feel fear.",
    ex2: "The woman was afraid of what she saw.",
    ex1mng: "Biri Korktuğunda korku duygusu hisseder.",
    ex2mng: "Kadın onu gördüğünde korktu.",
    sound: song1,
    img: require("./img/afraidkids.png"),
  },
  {
    id: 2,
    title: "agree",
    meaning: "katılmak",
    ex1: "To agree is to say “yes” or to think the same way.",
    ex2: "A: The food is very good in that restaurant. B: I agree with you.",
    ex1mng: " Kabul etmek,evet demek veya aynı şekilde düşünmektir.",
    ex2mng: "A:O restoranda yemek çok iyi. B: Sana katılıyorum.",
    sound: song2,
    img: require("./img/agree.png"),
  },
  {
    id: 3,
    title: "angry",
    meaning: "sinirlenmek",
    ex1: "When someone is angry, they may want to speak loudly or fight.",
    ex2: "She didn’t do her homework, so her father is angry.",
    ex1mng: " Kabul etmek,evet demek veya aynı şekilde düşünmektir.",
    ex2mng: "Ödevini yapmadı, bu yüzden babası kızdı.",
    sound: song3,
    img: require("./img/angry.png"),
  },
];

export default App;
