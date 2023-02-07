import { Container, Form, Input, Button } from "./styles";
import useTaskStore from "../../app/taskStore";
import { useState } from "react";

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) return;

    addTask({
      id: Math.ceil(Math.random() * 1000000),
      name: task,
      completed: false,
    });
    setTask("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></Input>
        <Button type="submit">Adicionar</Button>
      </Form>
    </Container>
  );
};

export default TaskForm;
