import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import User from './components/User'
import styled from '@emotion/styled'
import InfiniteScroll from 'react-infinite-scroll-component'

function App() {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const [favoritedUsers, setFavoritedUsers] = useState([])
  
  useEffect(() => {
    const typingTimeout = setTimeout(() => handleChange(query), 500)
    return () => clearTimeout(typingTimeout)
  }, [query])

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
      axios.get('https://api.github.com/rate_limit').then(res => {
        if(res.data.resources.search.remaining > 0) {
          axios.get('https://api.github.com/search/users?q='+searchText+'&page='+page)
          .then(res => {
            setUsers(users => users.concat(res.data.items))
            setPage(previousPage => previousPage + 1)
          })
        } else {
          console.log('client has been rate limited, please try again later')
        }
      })
    } else {
      console.log('heya')
    }
  }
  function moreUsers() {
    handleChange(query)
  }
  return (
    <Page>
      <p>Search for a git user</p>
      <Input value={query} onChange={event => setQuery(event.target.value)} />
      <p>You have {favoritedUsers.length} favorited Users</p>
      {favoritedUsers.map(user => (
        <User data={user} favorize={true} onClick={() => {handleFavorize(user)}}/>
      ))}
      <p>Your search results</p>
      <InfiniteScroll
      dataLength={users.length}
      next={moreUsers}
      hasMore={true}
      >
      {users.map(user => (
        <User data={user} favorize={false} onClick={() => {handleFavorize(user)}}/>
      ))}

      </InfiniteScroll>
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
