import React from "react";
import { useHistory } from "react-router-dom"
import { createDeck } from "../../utils/api/index"

export default function DeckCreateForm({ getDecks }){
  const history = useHistory();
  async function submitHandler(event){
    event.preventDefault();
    const deck = {
      name: event.target.deckName.value,
      description: event.target.description.value
    }
    const newDeck = await createDeck(deck)
    getDecks();
    history.push(`/decks/${newDeck.id}`)
  }
  async function cancelHandler(){
    history.push("/")
  }
  return (
    <div>
      <h1>Create Deck</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="deckName">Name</label>
          <input
              type="text"
              name="deckName"
              id="deckName"
              className="form-control"
              placeholder="Deck Name" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
              className="form-control"
              name="description"
              id="description"
              rows="3"
              placeholder="Brief description of the deck"></textarea>
        </div>
        <button type="cancel" className="btn btn-secondary mr-2" onClick={cancelHandler}>Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}