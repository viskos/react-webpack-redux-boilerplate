import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/countReducer'
import './app.less'

const App = () => {
    const count = useSelector((state) => state.count.count)
    const dispatch = useDispatch()

    const onCountClick = () => {
        dispatch(setCount(5))
    }

    return (
        <div className={'app'}>
            <button onClick={() => onCountClick()}>COUNT</button>
            <div>{count}</div>
        </div>
    )
}

export default App
