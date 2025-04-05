import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Container from './components/layout/Container';
import Header from './pages/Header';
import Tasks from './pages/Tasks';
import Task from '../src/pages/Task'

function App() {
  return (
    <Router>
      

      <Container>
      <Header />

      <Tasks />
        <Routes>
            <Route path="/tasks/:id" element={<Task />}></Route>
        </Routes>
      </Container>  
    </Router>
           
  );
}

export default App;
