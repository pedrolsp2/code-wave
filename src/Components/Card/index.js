import React from "react";
import { Link } from "react-router-dom";
import './card.css';

function Card({ item }) {

  return (
    <div>
      <article className="card">
        <Link to={`/curso/${item.id}`}>
        <div className="card-img">
          <img src={item.url} alt={`Foto da logo do ${item.name}`}/>
        </div>
        <div className="card-info">
          <h2>{item.name}</h2>
          <div className="card-price">
            <span>
              <small><s>R$ {item.price.toFixed(2)}</s></small>
              <h2>R$ {item.newPrice.toFixed(2)}</h2>
            </span>
          </div>
        </div>
        </Link>
      </article> 
    </div>
  );
}

export default Card;
