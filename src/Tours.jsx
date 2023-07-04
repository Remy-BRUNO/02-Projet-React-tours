/* eslint-disable react/prop-types */
import { useState } from "react"
import Tour from "./Tour"

const Tours = ({ visites }) => {
  const [restVisites, setRestVisites] = useState(visites)

  const handleDelete = (id) => {
    setRestVisites(restVisites.filter((el) => el.id !== id))
  }

  return (
    <section>
      {!restVisites[0] ? (
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            onClick={() => setRestVisites(visites)}
            className="btn"
            style={{ marginTop: "2rem" }}
          >
            Refrech
          </button>
        </div>
      ) : (
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>
      )}

      <div className="tours">
        {restVisites.map((visite) => (
          <Tour visite={visite} key={visite.id} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  )
}
export default Tours
