import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import { readCard, updateCard } from "../../utils/api/index"

export default function CardEdit({ getDeck }){
  const { deckId, cardId } = useParams();
  const [card, setCard] = useState({})
    
  const history = useHistory();
  async function submitHandler(event) {
    event.preventDefault();
    const tempCard = {
      front: event.target.front.value,
      back: event.target.back.value,
      deckId: card.deckId,
      id: card.id
    };
    await updateCard(tempCard);
    getDeck();
    history.push(`/decks/${deckId}`)
  }

  async function getCard(){
      setCard(await readCard(cardId));
  }
  useEffect(() => {
      getCard()
  }, []);
  
    return (
      <div>
        <h2>Edit Card</h2>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    name="front"
                    id="front"
                    rows="3"
                    defaultValue={card.front}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    name="back"
                    id="back"
                    rows="3"
                    defaultValue={card.back}></textarea>
            </div>
            <button type="cancel" className="btn btn-secondary mr-2">Cancel</button>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
}