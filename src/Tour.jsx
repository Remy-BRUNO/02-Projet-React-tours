/* eslint-disable react/prop-types */
import { useState } from "react"

const Tour = ({ visite, handleDelete }) => {
  const [strInfo, setstrInfo] = useState(false)
  const { image, info, name, price, id } = visite

  return (
    <article className="single-tour" id={id}>
      <img className="img" src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h5>{name}</h5>
          <h5 className="tour-price">${price} </h5>
          <p>
            {!strInfo ? info.substring(1, 200) + "... " : info + " "}
            <button onClick={() => setstrInfo(!strInfo)} className="info-btn">
              {!strInfo ? " Read More" : "Read Less"}
            </button>
          </p>

          <button
            onClick={() => handleDelete(id)}
            className="delete-btn btn-block btn"
          >
            Supprimer le tour
          </button>
        </div>
      </footer>
    </article>
  )
}
export default Tour
