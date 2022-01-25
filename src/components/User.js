import styled from '@emotion/styled'
import Button from './Button'
function User({props}) {
    function handleClick() {
        console.log('favorite')
    }
    return (
    <>
        <InformationWrapper>
            <p>Username: {props.login}</p>
            <p>ID: {props.id}</p>
        </InformationWrapper>
        <Button label="Hello World" onClick={handleClick}/>
    </>
    )
}
const InformationWrapper = styled.div`
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