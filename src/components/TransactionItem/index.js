import './index.css'

const TransactionItem = e => {
  const {val, fun} = e
  const {Type, amount, title, id} = val
  console.log(Type, amount, title, id)

  const onDeleteClick = () => {
    // console.log('deleted')
    fun(id)
  }

  return (
    <li className="Transactionid-heading">
      <p className="history-type1">{title}</p>
      <hr className="hr1" />
      <p className="history-type2">Rs {amount}</p>
      <hr className="hr1" />
      <p className="history-type3">{Type}</p>
      <button type="submit" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
          onClick={onDeleteClick}
        />
      </button>
    </li>
  )
}

export default TransactionItem
