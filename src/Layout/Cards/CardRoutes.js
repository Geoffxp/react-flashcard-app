import React from "react";
import { Switch, Route } from "react-router-dom";
import CardCreateForm from "./CardCreateForm"
import CardEdit from "./CardEdit";
import Breadcrumb from "../Tools/Breadcrumb";

export default function CardRoutes({ deck, getDeck, getDecks }){
  return (
    <div>
      <Switch>
        <Route path="/decks/:deckId/cards/new">
            <Breadcrumb page="Add Card" deck={deck}/>
          <CardCreateForm deck={deck} getDeck={getDeck} getDecks={getDecks} />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <Breadcrumb page="Edit Card" deck={deck}/>
          <CardEdit page="Edit Card" getDeck={getDeck} />
        </Route>
      </Switch>
    </div>
  )
}