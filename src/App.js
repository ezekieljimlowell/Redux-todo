import './App.css';
import { Footer } from './Components/Footer';
import AddTodo from './Containers/AddTodo';
import VisibleTodoList from './Containers/VisibleTodoList';

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
