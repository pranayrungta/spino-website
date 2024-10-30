import React from "react"
import { prodpage } from "./prod-data"



export default function Products({pageContext}) {
  return prodpage(pageContext.slug)
}
