import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api/index"

export default function DisplayCard({ card, getDeck, getDecks }) {
  const history = useHistory();
  async function deleteHandler(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteCard(id);
      getDeck();
      getDecks();
    }
    history.push(`/decks/${card.deckId}/`)
  }
  return (
    <div>
      <div className="card d-flex flex-row">
        <div className="col">
          <p className="lead mt-2">{card.front}</p>
        </div>
        <div className="col">
          <div className=" d-flex flex-col">
            <p className="lead mt-2">{card.back}</p>
          </div>
          <button className="btn btn-danger pull-right mb-2" onClick={() => deleteHandler(card.id)}>
            <div className="btn text-light" style={{ fontSize: "15pt" }} >
              <i className="fa fa-trash"></i>
            </div>
          </button>
          <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`} className="btn btn-secondary pull-right mr-2 mb-2">
            <div className="btn text-light" style={{ fontSize: "15pt" }}>
              <i className="fas fa-pen mr-2"></i>Edit
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}