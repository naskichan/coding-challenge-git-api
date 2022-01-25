import { useState } from 'react'
import axios from 'axios'
import './App.css'
import User from './components/User'
import styled from '@emotion/styled'

function App() {
  const [users, setUsers] = useState([])
  const [favoritedUsers, setFavoritedUsers] = useState([])
  function handleFavorize(user) {
    console.log('favorite', user)
    if(favoritedUsers.includes(user)) {
      const newList = favoritedUsers.filter((item) => item.id !== user.id)
      setFavoritedUsers(newList)
    } else {
      console.log('user', user, 'wants to be favorite')
      setFavoritedUsers(favoritedUsers => [...favoritedUsers, user])
    }
  }
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
      <p>You have {favoritedUsers.length} favorited Users</p>
      {favoritedUsers.map(user => (
        <User data={user} onClick={() => {handleFavorize(user)}}/>
      ))}
      <p>Your search results</p>
      {users.map(user => (
        <User data={user} onClick={() => {handleFavorize(user)}}/>
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
