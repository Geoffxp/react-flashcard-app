import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createCard } from "../../utils/api/index";

export default function CardCreateForm({ deck, getDeck, getDecks }) {
  const { deckId } = useParams();
  const initialFormState = {
    front: "",
    back: ""
  }
  const [card, setCard] = useState({...initialFormState});
  
  function handleChange({target}){
    setCard({
      ...card,
      [target.name]: target.value
    })
  }

  async function submitHandler(event) {
    event.preventDefault();
    await createCard(deckId, card);
    setCard({...initialFormState})
    getDeck();
    getDecks();
  }
  const title = `${deck.name}: Add Card`

  return (
    <div>
      <h3>{title}</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="description">Front</label>
          <textarea
              className="form-control"
              name="front"
              id="front"
              rows="3"
              onChange={handleChange}
              value={card.front}
              placeholder="Front side of the card"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="description">Back</label>
          <textarea
              className="form-control"
              name="back"
              id="back"
              rows="3"
              onChange={handleChange}
              value={card.back}
              placeholder="Back side of the card"></textarea>
        </div>
        <Link to={`/decks/${deckId}`} className="btn"><button type="cancel" className="btn btn-secondary">Done</button></Link>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}