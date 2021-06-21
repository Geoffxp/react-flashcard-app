import React from "react";
import DisplayCard from "./DisplayCard"

export default function CardList({ cards, getDeck, getDecks }){
  return (
    <div>
      <h1>Cards</h1>
      {cards.map((card, index) => <DisplayCard key={index} card={card} getDeck={getDeck} getDecks={getDecks} />)}
    </div>
  )
}