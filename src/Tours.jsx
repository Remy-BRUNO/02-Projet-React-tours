/* eslint-disable react/prop-types */
import Tour from "./Tour"

const Tours = ({ visites, handleDelete }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {visites.map((visite) => (
          <Tour visite={visite} key={visite.id} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  )
}
export default Tours
