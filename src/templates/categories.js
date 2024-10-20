import React from "react"

export default function Booking({pageContext}) {
  const item = pageContext.item;
  return (<div>
    item selected is #{item}
  </div>)
}

