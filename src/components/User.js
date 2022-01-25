import styled from '@emotion/styled'
function User({props}) {
    return (
      <Wrapper>
          <p>Username: {props.login}</p>
          <p>ID: {props.id}</p>
      </Wrapper>  
    )
}
const Wrapper = styled.div`
    margin: 1rem;
    -webkit-box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.17); 
    box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.17);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    max-width: 50%;
    p{
        all: unset;
    }
`
export default User