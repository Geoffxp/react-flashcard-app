import React from "react";
import { Link } from "react-router-dom"

export default function DeckCreateButton(){
  return (
    <div className="mb-2">
      <Link to="/decks/new">
        <div className="btn btn-secondary">
          <i className="fas fa-plus mr-2"></i>
          <span className="lead">Create Deck</span>
        </div>
      </Link>
    </div>
  )
}