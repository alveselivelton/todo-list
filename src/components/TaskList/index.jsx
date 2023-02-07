import useTaskStore from "../../app/taskStore";
import { Container, Content, OptionsConteiner, Button } from "./styles";
import { BsFillBookmarkCheckFill, BsTrashFill } from "react-icons/bs";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const removeTask = useTaskStore((state) => state.removeTask);
  const toggleTaskStatus = useTaskStore((state) => state.toggleTaskStatus);

  return (
    <Container>
      {tasks &&
        tasks.map((task) => (
          <Content key={task.id} completed={task.completed}>
            <p>{task.name}</p>
            <OptionsConteiner>
              <Button
                completed={task.completed}
                onClick={() => toggleTaskStatus(task.id)}
              >
                <BsFillBookmarkCheckFill />
              </Button>
              <Button onClick={() => removeTask(task.id)}>
                <BsTrashFill />
              </Button>
            </OptionsConteiner>
          </Content>
        ))}
    </Container>
  );
};

export default TaskList;
