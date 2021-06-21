import React, { useState, useEffect } from "react";
import DisplayDeck from "./DisplayDeck"
import { listDecks } from "../../utils/api/index";

export default function DeckList({ decks, getDecks }){
  return (
    <div>
      {decks.map((deck, index) => <DisplayDeck key={index} deck={deck} deckPage={false} getDecks={getDecks} />)}
    </div>
  )
}