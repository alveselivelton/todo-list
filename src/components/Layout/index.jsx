import { Container } from "./styles";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";

const Layout = () => {
  return (
    <Container>
      <h1>Adicione suas tarefas</h1>
      <TaskForm />
      <TaskList />
    </Container>
  );
};

export default Layout;
