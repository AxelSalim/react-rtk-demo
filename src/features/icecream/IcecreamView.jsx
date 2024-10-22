import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)

    return (
        <div>
            <h2>Number of ice creams - {numOfIcecreams} </h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>     
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} name="number" id=""  />
            <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>     
        </div>
    )
}

export default IcecreamView