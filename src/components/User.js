import { useState } from 'react'
import styled from '@emotion/styled'
import Button from './Button'
function User(props) {
    const [opened, setOpened] = useState(false)
    const toggleOpen = () => setOpened(value => !value)
    return (
    <MainWrapper>
        <OverviewWrapper onClick={toggleOpen}>
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
        </OverviewWrapper>
        {opened ? 
        <DetailWrapper>
            <Link href={props.data.html_url}>Github page</Link>
            <Link href={props.data.repos_url}>Repositories</Link>
            <p>This {props.data.type} is {props.data.site_admin ? "a" : "not a" } site admin</p>
        </DetailWrapper>
        : null}
    </MainWrapper> 
    )
}
const OverviewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
const DetailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
`
const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    -webkit-box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.17); 
    box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.17);
    border-radius: 1rem;
    max-width: 50%;

`
const Link = styled.a`
    margin: 1.5rem;
`
export default User