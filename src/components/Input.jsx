import React, { useState } from "react"

export const Input = () => {
  const dispatch = useDispatch()
  const [label, setLabel] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(add({ payload: label }))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
