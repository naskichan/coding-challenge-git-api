import { useState } from 'react'
import styled from '@emotion/styled'
import Button from './Button'
import Image from './Image'
function User(props) {
    const [opened, setOpened] = useState(false)
    const toggleOpen = () => setOpened(value => !value)
    return (
    <MainWrapper>
        <OverviewWrapper>
            <ClickWrapper onClick={toggleOpen}>
                <ImageWrapper>
                    <Image src={props.data.avatar_url} alt='avatar' />
                </ImageWrapper>
                <InformationWrapper>
                    <p>Username: {props.data.login}</p>
                    <p>ID: {props.data.id}</p>
                </InformationWrapper>
            </ClickWrapper>
            <ButtonWrapper>
                <Button label="Favorize" fav={props.fav} onClick={props.onClick}/>
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
    flex-grow: 1;
    justify-content: center;
    margin-left: 1rem;
    p{
        padding: 1rem;
    }
`
const ClickWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    cursor: pointer;
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
    margin: 1rem 1rem 1rem 1rem;
    -webkit-box-shadow: 2px 10px 8px 5px rgba(0,0,0,0.17); 
    box-shadow: 2px 10px 8px 5px rgba(0,0,0,0.17);
    border-radius: 1rem;

`
const Link = styled.a`
    margin: 1.5rem;
`
export default User