import './index.css'

const VisitedCountry = props => {
  const {countryDetails, onClickRemoveCountry} = props
  const {name, imageUrl, id} = countryDetails

  const onRemoveVisitedCountry = () => {
    onClickRemoveCountry(id)
  }

  return (
    <li className="country-item">
      <img className="country-image" src={imageUrl} alt="thumbnail" />
      <div className="country-details">
        <p>{name}</p>
        <button
          className="remove-button"
          type="button"
          onClick={onRemoveVisitedCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
