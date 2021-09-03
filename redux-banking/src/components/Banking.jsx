import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deposit, withdraw,collectInterest,deleteAccount, toggleAccount } from '../actions/bankingActions'
function Banking() {
const [amount, setAmount] = useState("")
const dispatch = useDispatch()
const handleDeposit = () => {
dispatch(deposit(amount))
};
const handleWithdraw = () => {
dispatch(withdraw(amount))
}
const handleCollectInterest = () => {
dispatch(collectInterest())
}
const handleDelete = () => {
dispatch(deleteAccount())
}
const handleAccountChange
 = () => {
dispatch(toggleAccount())
}



    return (
        <div className="form-group">
            <input type="
            text" value = {amount} onChange ={(e)=>setAmount(e.target.value)}className="form-control" />
            <button className=" btn btn-success" onClick={handleDeposit}>Deposit</button>
            <button className="btn btn-primary" onClick={handleWithdraw}>Withdraw</button>
            <button className="btn btn-warning" onClick={handleCollectInterest}>Collect Interest</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete Account</button>
            <button className="btn btn-secondary" onClick={handleAccountChange}>Change Account Type</button>
        </div>
    )
}

export default Banking
