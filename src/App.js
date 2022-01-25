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
    const typingTimeout = setTimeout(() => handleChange(query, false), 500)
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
  function handleChange(searchText, refresh) {
    if(searchText.length >= 3) {
      axios.get('https://api.github.com/rate_limit').then(res => {
        if(res.data.resources.search.remaining > 0) {
          if(refresh) {
           setUsers([])
           setPage(1) 
          }
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
    handleChange(query, false)
  }
  function refresh() {
    handleChange(query, true)
  }
  return (
    <HorizontalWrapper>
      <Page>
        <h1>Coding challenge git repo</h1>
        <Input placeholder="Search for a github name" value={query} onChange={event => setQuery(event.target.value)} />
        <p>You have {favoritedUsers.length} favorited Users</p>
        {favoritedUsers.map(user => (
          <User data={user} fav={true} onClick={() => {handleFavorize(user)}}/>
          ))}
        <p>Your search results</p>
        <InfiniteScroll
        dataLength={users.length}
        next={moreUsers}
        hasMore={true}
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        >
        {users.map(user => (
          <User data={user} fav={false} onClick={() => {handleFavorize(user)}}/>
          ))}

        </InfiniteScroll>
      </Page>
    </HorizontalWrapper>
  );
}
const Page = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  >p{
    margin: 1rem;
  }
`
const Input = styled.input`
  all: unset;
  width: 48rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  align-self: center;
  -webkit-box-shadow: 2px 10px 8px 5px rgba(0,0,0,0.17); 
    box-shadow: 2px 10px 8px 5px rgba(0,0,0,0.17);
`
const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export default App;
