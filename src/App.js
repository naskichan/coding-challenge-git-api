import { useState } from "react"
import './App.css'
import styled from '@emotion/styled'

function App() {
  function handleChange(searchText) {
    if(searchText.length >= 3) {
      console.log('works')
    } else {
      console.log('heya')
    }
  }
  return (
    <Page>
      <p>Hello World</p>
      <Input onChange={event => handleChange(event.target.value)} />
    </Page>
  );
}
const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  font-size: 1.5rem;
`
const Input = styled.input`
  width: 50%;
`

export default App;
