import { useState } from 'react'
import axios from 'axios'
import './App.css'
import User from './components/User'
import styled from '@emotion/styled'

function App() {
  const [users, setUsers] = useState([])
  function handleChange(searchText) {
    if(searchText.length >= 3) {
      axios.get(`https://api.github.com/search/users?q=defunkt`)
      .then(res => {
        setUsers(res.data.items)
      })
    } else {
      console.log('heya')
    }
  }
  return (
    <Page>
      <p>Search for a git user</p>
      <Input onChange={event => handleChange(event.target.value)} />
      {users.map(user => (
        <User data={user}/>
      ))}
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
