import styled from '@emotion/styled'

function Image(props) {
    return(
        <InsetImage src={props.src} alt={props.alt}></InsetImage>
    )
}

const InsetImage = styled.img`
    object-fit: cover;
    max-width: 128px;
`

export default Image