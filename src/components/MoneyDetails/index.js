// Write your code here

import './index.css'

const MoneyDetails = e => {
  const {changes} = e
  //   const {optionId} = d

  const {
    balance = parseInt(0),
    expenses = parseInt(0),
    income = parseInt(0),
  } = changes[changes.length - 1]
  //   console.log(balance, expenses, income)

  //   console.log(changes)

  //   const a = y.slice(0, 1).toLowerCase() + y.slice(1)
  //   console.log(a)
  return (
    <>
      <div className="Money-Details-card-container balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-image"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>

      <div className="Money-Details-card-container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-image"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">RS {income}</p>
        </div>
      </div>

      <div className="Money-Details-card-container expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-image"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">RS {expenses}</p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
