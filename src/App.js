import Container from './components/layout/Container';
import Header from './pages/Header';
import Tasks from './pages/Tasks';

function App() {
  return (
      <Container>
          <Header />

          <Tasks />
      </Container>       
  );
}

export default App;
