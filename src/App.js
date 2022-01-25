import { useState } from "react"
import './App.css'
import styled from '@emotion/styled'

function App() {
  let [searchText, setSearchText] = useState('');
  return (
    <Page>
      <p>Hello World</p>
      <Input onChange={event => setSearchText(event.target.value)} />
      {searchText}
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
