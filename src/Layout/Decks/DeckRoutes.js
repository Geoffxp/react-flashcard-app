import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import DisplayDeck from "./DisplayDeck";
import Breadcrumb from "../Tools/Breadcrumb";
import CardList from "../Cards/CardList";
import DeckEdit from "./DeckEdit";
import CardRoutes from "../Cards/CardRoutes";
import Study from "../Cards/Study";

export default function DeckRoutes({ getDecks }){
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const abortController = new AbortController();

  
  async function getDeck(){
    const response = await readDeck(deckId)
    setDeck(response)
    setCards(response.cards)
  }
  useEffect(() => {
    getDeck();
    
    return () => {
      abortController.abort();
    }
  }, [])
  return (
    <div>
      <Switch>
        <Route path="/decks/:deckId/study">
          <Study deck={deck} cards={cards} />
        </Route>
        <Route path="/decks/:deckId/edit">
            <Breadcrumb deck={deck} page="edit" />
          <DeckEdit deck={deck} getDeck={getDeck} />
        </Route>
        <Route path="/decks/:deckId/cards">
          <CardRoutes deck={deck} getDeck={getDeck} getDecks={getDecks}/>
        </Route>
        <Route path="/decks/:deckId">
          <Breadcrumb deck={deck}/>
          <DisplayDeck deck={deck} deckPage={true} getDecks={getDecks}/>
          <CardList cards={cards} getDeck={getDeck} getDecks={getDecks} />
        </Route>
      </Switch>
    </div>
  )
}