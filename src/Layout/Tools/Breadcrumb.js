import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom"

export default function Breadcrumb({ page = "", deck = {} }) {
  const url = useRouteMatch();
  const { deckId } = useParams();

  if (page.includes("study")) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page"><Link to="/">Home</Link></li>
          {(deck) && <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>}
          <li className="breadcrumb-item active" aria-current="page">Study</li>
        </ol>
      </nav>
    )
  }
  if (page.includes("edit")) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page"><Link to="/">Home</Link></li>
          {(deck) && <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>}
          <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
        </ol>
      </nav>
    )
  }
  if (page.includes("Add Card")) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page"><Link to="/">Home</Link></li>
          {(deck) && <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>}
          <li className="breadcrumb-item active" aria-current="page">Add Card</li>
        </ol>
      </nav>
    )
  }
  if (page.includes("Edit Card")) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page"><Link to="/">Home</Link></li>
          {(deck) && <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>}
          <li className="breadcrumb-item active" aria-current="page">Edit Card</li>
        </ol>
      </nav>
    )
  }
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item" aria-current="page"><Link to="/">Home</Link></li>
        {(page) && <li className="breadcrumb-item active" aria-current="page">{page}</li>}
        {(deck.name) && <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>}
      </ol>
    </nav>
  )
}