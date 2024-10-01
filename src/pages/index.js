import * as React from "react"
import Layout from "../components/Layout"
import HomeBanner from "../components/HomeBanner"

export default function Home() {
  return (<Layout>
    <HomeBanner/>
    <div>
      Hello world!
    </div>
  </Layout>)
}
