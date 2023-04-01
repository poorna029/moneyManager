import {Component} from 'react'

import {v4 as Id} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    Tlist: [],
    title: '',
    amount: '',
    Type: '',
  }

  onChangeOfAmount = e => {
    // console.log(e.target.value)
    this.setState({
      amount: parseInt(e.target.value),
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const {title, income, expenses, amount} = this.state
    let {Type} = this.state
    console.log(title, income, expenses, amount)

    if (Type === '') {
      Type = 'Income'
    }
    console.log(Type)

    if (Type === 'Income' && amount !== '') {
      const {balance} = this.state
      console.log(balance)
      this.setState(p => ({
        income: parseInt(p.income) + parseInt(amount),
        balance: parseInt(p.balance) + parseInt(amount),
        Tlist: [
          ...p.Tlist,
          {
            income: parseInt(p.income) + parseInt(amount),
            balance: parseInt(p.balance) + parseInt(amount),
            expenses: parseInt(expenses),
            id: Id(),
            Type,
            title,
            amount: parseInt(amount),
          },
        ],
        Type: '',
        amount: '',
        title: '',
      }))
    } else if (Type === 'EXPENSES' && amount !== '') {
      console.log('Expenses')
      this.setState(p => ({
        expenses: parseInt(p.expenses) + parseInt(amount),
        balance: parseInt(p.balance) - parseInt(amount),

        Tlist: [
          ...p.Tlist,
          {
            income: parseInt(income),
            balance: parseInt(p.balance) - parseInt(amount),
            expenses: parseInt(p.expenses) + parseInt(amount),
            id: Id(),
            Type: 'Expenses',
            title,
            amount: parseInt(amount),
          },
        ],
        Type: '',
        amount: '',
        title: '',
      }))
      //   this.setState({})
    }
  }

  onChangeOfTitle = e => {
    // console.log(e.target.value)
    this.setState({title: e.target.value})
  }

  onChangeOfType = e => {
    // console.log(e.target.value)
    // const t = e.target.value.slice(0, 1).toLowerCase() + e.target.value.slice(1)
    this.setState({Type: e.target.value})
  }

  onDelete = u => {
    // console.log(u)
    const {Tlist} = this.state
    const s = Tlist.filter(x => x.id === u)
    const {balance, income, expenses, amount} = s

    this.setState({
      balance: parseInt(balance) + parseInt(amount),
      income: parseInt(income) + parseInt(amount),
      expenses: parseInt(expenses) + parseInt(amount),
    })

    this.setState(pl => ({
      Tlist: pl.Tlist.filter(x => x.id !== u),
    }))
  }

  render() {
    const {balance, expenses, income, Tlist, title, amount} = this.state
    // const {Tlist} = this.state
    // const [income, expenses, balance, Type, title, amount] = Tlist[0]
    console.log(income, expenses, balance)

    return (
      <div className="main">
        <div className="c12-main">
          <h1>Hi,Richard</h1>
          <p>Welcome back to your MoneyManager</p>
        </div>
        <div className="r13-main-Money-Details-cards-container">
          {Tlist.length > 0 ? (
            <MoneyDetails changes={Tlist} />
          ) : (
            <MoneyDetails
              changes={[
                {
                  balance: parseInt(0),
                  income: parseInt(0),
                  expenses: parseInt(0),
                },
              ]}
            />
          )}
        </div>

        <div className="r22-main">
          <div className="Add-Transaction-form">
            <h1>Add Transaction</h1>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="titleInput">TITLE</label>
              <br />
              <input
                id="titleInput"
                type="search"
                placeholder="TITLE"
                className="input"
                onChange={this.onChangeOfTitle}
                value={title}
                required
              />
              <br />
              <label htmlFor="amountInput">AMOUNT</label>
              <br />
              <input
                id="amountInput"
                type="number"
                placeholder="AMOUNT"
                className="input"
                onChange={this.onChangeOfAmount}
                value={parseInt(amount)}
              />
              <br />
              <label htmlFor="type">TYPE</label>
              <br />
              <select
                className="select"
                onChange={this.onChangeOfType}
                // value={Type}
              >
                {transactionTypeOptions.map(item => (
                  <option key={item.optionId} value={item.optionId}>
                    {item.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit" className="add">
                Add
              </button>
            </form>
          </div>
          <div className="History">
            <h1>History</h1>
            <div className="History-headings">
              <p className="history-type1">Title</p>
              <hr className="hr1" />
              <p className="history-type2">Amount</p>
              <hr className="hr1" />
              <p className="history-type3">Type</p>
            </div>
            <ul>
              {Tlist.length > 0
                ? Tlist.map(i => (
                    <TransactionItem key={i.id} val={i} fun={this.onDelete} />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
