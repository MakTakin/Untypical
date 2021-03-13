import Users from './components/users/users';
import Main from './components/main/main'
import Container from '@material-ui/core/Container';
import Modal from './components/modal/modal';
function App() {
  return (
    <Container maxWidth="lg">
      <Main/>
      <Modal/>
    </Container>
  );
}

export default App;
