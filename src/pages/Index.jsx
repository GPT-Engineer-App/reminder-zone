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
        <Heading as="h1" size="xl">
          Todo App
        </Heading>
        <Flex width="100%" as="form" onSubmit={(e) => e.preventDefault()}>
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            mr={2}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </Flex>
        <Box width="100%">
          <List spacing={3}>
            {tasks.map((task, index) => (
              <ListItem
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg={task.completed ? "green.100" : "gray.100"}
                p={2}
                borderRadius="md"
              >
                <Checkbox
                  isChecked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                  mr={2}
                >
                  <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
                </Checkbox>
                <IconButton
                  aria-label="Delete task"
                  icon={<FaTrash />}
                  colorScheme="red"
                  onClick={() => deleteTask(index)}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;