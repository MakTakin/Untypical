import styled from 'styled-components'
import Main from './components/main/main'
import Container from '@material-ui/core/Container';
import Modal from './components/modal/modal';

const Wrapper = styled(Container)`
    && {
        height: 95vh;
        display: flex;
        flex-direction: column;
        background: #f9f9f9;
        margin: 10px auto;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid grey;
        box-shadow: 0px 0px 13px 3px #696868;
    }
`
function App() {
  return (
    <Wrapper maxWidth="lg">
      <Main/>
      <Modal/>
    </Wrapper>
  );
}

export default App;
