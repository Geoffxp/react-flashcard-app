import React from "react";
import { Link, useHistory } from "react-router-dom"
import { deleteDeck } from "../../utils/api/index"

export default function DisplayDeck({ deck, deckPage, getDecks }){
  const cards = deck.cards;
  const history = useHistory();
  
  async function deleteHandler(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDeck(id);
      getDecks();
      history.push("/")
    }
  }
  
  if (deckPage) {
    return (
      <div className="mb-2">
        <h3 className="card-title">{deck.name}</h3>
        <p className="card-text">{deck.description}</p>
        <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mr-2">
          <div className="btn text-light" style={{ fontSize: "15pt" }}>
            <i className="fas fa-pen mr-2"></i>Edit
          </div>
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
          <div className="btn text-light" style={{ fontSize: "15pt" }}>
            <i className="fas fa-book mr-2"></i>
            <span className="text-white" style={{ textDecoration: "none" }}>
                  Study
            </span>
          </div>
        </Link>
        <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary mr-2">
          <div className="btn text-light" style={{ fontSize: "15pt" }}>
            <i className="fas fa-plus mr-2"></i>Add Cards
          </div>
        </Link>
        <button className="btn btn-danger float-right">
          <div className="btn text-light" style={{ fontSize: "15pt" }} onClick={() => deleteHandler(deck.id)}>
            <i className="fas fa-trash"></i>
          </div>
        </button>
      </div>
    )
  }
  return (
    <div className="card">
      <div className="card-body">
        <row className="d-flex justify-content-between">
          <h5 className="card-title">{deck.name}</h5>
          <p>{cards.length} cards</p>
        </row>
        <p className="card-text">{deck.description}</p>
        <div>
          <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
            <div className="btn text-light" style={{ fontSize: "15pt" }}>
              <i className="fas fa-eye mr-2"></i>View
            </div>
          </Link>
          <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
            <div className="btn text-light" style={{ fontSize: "15pt" }}>
              <i className="fas fa-book mr-2"></i>
              <span className="text-white" style={{ textDecoration: "none" }}>
                  Study
              </span>
            </div>
          </Link>
          <button href="#" className="btn btn-danger float-right">
            <div className="btn text-light" style={{ fontSize: "15pt" }} onClick={() => deleteHandler(deck.id)}>
              <i className="fas fa-trash"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}