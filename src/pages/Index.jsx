import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="2xl">
          Todo App
        </Heading>
        <Flex width="100%" maxW="md">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
          />
          <Button ml={2} onClick={addTask}>
            Add
          </Button>
        </Flex>
        <List spacing={3} width="100%" maxW="md">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              p={2}
              borderWidth={1}
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bg={task.completed ? "green.100" : "white"}
            >
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              >
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                size="sm"
                onClick={() => deleteTask(index)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;