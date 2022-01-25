import styled from '@emotion/styled'
import Button from './Button'
function User(props) {
    return (
    <MainWrapper>
        <InformationWrapper>
            <p>Username: {props.data.login}</p>
            <p>ID: {props.data.id}</p>
        </InformationWrapper>
        <Button label="Favorize" onClick={props.onClick}/>
    </MainWrapper>
    )
}
const MainWrapper = styled.div`
    margin: 1rem;
    -webkit-box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.17); 
    box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.17);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 50%;
    p{
        all: unset;
    }
`
const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export default User