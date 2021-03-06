import styled from '@emotion/styled'
import Image from './Image'

function Button(props) {
    return (
        <ButtonWrapper onClick={props.onClick}>
            {props.fav ? <ButtonImage src='/images/star-filled.png' alt='star' /> :
            <ButtonImage src='/images/star.png' alt='star' /> }
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
height: 2rem;
cursor: pointer;
`
const ButtonImage = styled.img`
height: 100%;
`

export default Button