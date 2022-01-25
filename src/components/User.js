import styled from '@emotion/styled'
import Button from './Button'
function User(props) {
    return (
    <MainWrapper>
        <ImageWrapper>
            <Image src={props.data.avatar_url} alt='avatar' />
        </ImageWrapper>
        <InformationWrapper>
            <p>Username: {props.data.login}</p>
            <p>ID: {props.data.id}</p>
        </InformationWrapper>
        <ButtonWrapper>
            <Button label="Favorize" onClick={props.onClick}/>
        </ButtonWrapper>
    </MainWrapper>
    )
}
const MainWrapper = styled.div`
    margin: 1rem;
    -webkit-box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.17); 
    box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.17);
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
const Image = styled.img`
    object-fit: cover;
    max-width: 128px;
`
const ImageWrapper = styled.div`
    overflow: hidden;
    max-height: 128px;
    border-radius: 1rem 0rem 0rem 1rem;
`
const ButtonWrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export default User