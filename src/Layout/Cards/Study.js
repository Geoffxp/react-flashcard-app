import React, { useState } from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import Breadcrumb from "../Tools/Breadcrumb"

export default function StudyCards({ deck, cards }) {
    const [flip, setFlip] = useState(false)
    const handleFlip = () => setFlip((val) => val = !flip)
    const { url } = useRouteMatch();

    let [currentIndex, setCurrentIndex] = useState(0)
    const history = useHistory();
    const next = () => {
        const newVal = currentIndex + 1;
        if (cards[newVal]) {
            handleFlip();
            return setCurrentIndex(newVal);
        }
        else {
            if (window.confirm("Wanna start again? Pressing cancel will return you to the home screen.")) {
                handleFlip();
                return setCurrentIndex(0);
            }
            else {
                history.push("/");
                handleFlip();
                return setCurrentIndex(0);
            }
        }
    }

    if (cards.length <= 2) {
        return (
            <div>
                <Breadcrumb page={url} deck={deck} />
                <div>
                    <h1>Not enough cards.</h1>
                    <p>You need at least 3 cards to study. There are {cards.length}</p>
                    <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary mr-2">
                        <button className="btn text-light" style={{ fontSize: "15pt" }}>
                            <i className="fa fa-plus mr-2"></i>Add Cards
                        </button>
                    </Link>
                </div>
            </div>

        )
    }
    if (flip === false) {
        return (
            <div>
                <Breadcrumb page={url} deck={deck} />
                <h1>Study: {deck.name}</h1>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card {currentIndex + 1} of {cards.length}</h5>
                        <p className="card-text">{cards[currentIndex].front}</p>
                        <div>
                            <button className="btn btn-secondary" onClick={handleFlip} style={{ fontSize: "15pt" }}>
                                <p style={{ paddingLeft: "10px", paddingRight: "10px", margin: "5px" }}>Flip</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Breadcrumb page={url} deck={deck} />
            <h1>Study: {deck.name}</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {currentIndex + 1} of {cards.length}</h5>
                    <p className="card-text">{cards[currentIndex].back}</p>
                    <div>
                        <button className="btn btn-secondary mr-2" onClick={handleFlip} style={{ fontSize: "15pt" }}>
                            <p style={{ paddingLeft: "10px", paddingRight: "10px", margin: "5px" }}>Flip</p>
                        </button>
                        <button className="btn btn-primary" onClick={next} style={{ fontSize: "15pt" }}>
                            <p style={{ paddingLeft: "10px", paddingRight: "10px", margin: "5px" }}>Next</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}