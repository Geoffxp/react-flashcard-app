import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import Header from "./Header";
import DeckCreateButton from "./Tools/DeckCreateButton";
import DeckList from "./Decks/DeckList"
import DeckRoutes from "./Decks/DeckRoutes"
import NotFound from "./NotFound";
import DeckCreateForm from "./Decks/DeckCreateForm"
import Breadcrumb from "./Tools/Breadcrumb";

function Layout() {
  const [decks, setDecks] = useState([]);
  const abortController = new AbortController();
  const signal = abortController.signal;
  
  async function getDecks(){
    try{
      const response = await listDecks(signal);
      setDecks(response)
    } catch (error) {
      if (error.name !== "AbortError"){
        throw error;
      }
    }
  }
  
  useEffect(() => {
    getDecks();
    
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path="/">
            <DeckCreateButton />
            <DeckList decks={decks} getDecks={getDecks} />
          </Route>
          <Route exact={true} path="/decks/new">
            <Breadcrumb page="Create Deck"/>
            <DeckCreateForm getDecks={getDecks} />
          </Route>
          <Route path="/decks/:deckId">
            <DeckRoutes getDecks={getDecks}/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
