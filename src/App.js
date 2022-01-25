
import './App.css';
import styled from '@emotion/styled'

function App() {
  return (
    <Page>
      <p>Hello World</p>
    </Page>
  );
}
const Page = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
`

export default App;
