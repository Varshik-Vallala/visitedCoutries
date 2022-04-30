const CountryName = props => {
  const {details, onClickVisit} = props

  const {name, isVisited, id} = details

  //   console.log(isVisited)

  const onClickVisitButton = () => {
    onClickVisit(id)
  }

  return (
    <li className="list-item">
      <p>{name}</p>
      {isVisited ? (
        <p className="visited-country-text">Visited</p>
      ) : (
        <button
          className="visit-button"
          type="button"
          onClick={onClickVisitButton}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryName
