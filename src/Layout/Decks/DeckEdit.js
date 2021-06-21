import React from "react"
import { useHistory } from "react-router-dom"
import { updateDeck } from "../../utils/api/index"

export default function DeckEdit({ deck, getDeck }){
  const history = useHistory();
  async function submitHandler(event) {
    event.preventDefault();
    const tempDeck = {
      name: event.target.deckName.value,
      description: event.target.description.value,
      id: deck.id
    };
    const newDeck = await updateDeck(tempDeck);
    getDeck();
    history.push(`/decks/${newDeck.id}`);
  }
  return (
    <div>
        <h1>Edit Deck</h1>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="deckName">Name</label>
                <input
                    type="text"
                    name="deckName"
                    id="deckName"
                    className="form-control"
                    defaultValue={deck.name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    name="description"
                    id="description"
                    rows="3"
                    defaultValue={deck.description}>
                </textarea>
            </div>
            <button type="cancel" className="btn btn-secondary mr-2">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
    
  )
}