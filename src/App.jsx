import Taskform from "./Taskform";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Task from "./Task";

function App(props) {
    const [tasks, setTasks] = useState([]);

    const taskHandler = (value) => {
        setTasks((oldValues) => [...oldValues, value]);
    };

    const taskDeleteHandler = (id) => {
        setTasks((prevState) => prevState.filter((task) => task.id !== id));
    };

    const getNewTaskState = (state) => {
        if (state.toLowerCase() === "to-do") return "Doing";
        if (state.toLowerCase() === "doing") return "Done";
    };

    const taskStateHandler = (id) => {
        let copy = tasks.slice();
        for (const i of copy) {
            if (i.id === id) {
                i.state = getNewTaskState(i.state);
            }
        }
        setTasks(copy);
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Taskform
                            tasks={tasks}
                            taskHandler={taskHandler}
                        ></Taskform>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {tasks.map((task) =>
                            task.state.toLowerCase() === "to-do" ? (
                                <Task
                                    title={task.title}
                                    description={task.description}
                                    key={task.id}
                                    id={task.id}
                                    taskDeleteHandler={taskDeleteHandler}
                                    datetime={task.datetime}
                                    state={task.state}
                                    taskStateHandler={taskStateHandler}
                                />
                            ) : (
                                ""
                            )
                        )}
                    </Col>
                    <Col>
                        {tasks.map((task) =>
                            task.state.toLowerCase() === "doing" ? (
                                <Task
                                    title={task.title}
                                    description={task.description}
                                    key={task.id}
                                    id={task.id}
                                    taskDeleteHandler={taskDeleteHandler}
                                    datetime={task.datetime}
                                    state={task.state}
                                    taskStateHandler={taskStateHandler}
                                />
                            ) : (
                                ""
                            )
                        )}
                    </Col>
                    <Col>
                        {tasks.map((task) =>
                            task.state.toLowerCase() === "done" ? (
                                <Task
                                    title={task.title}
                                    description={task.description}
                                    key={task.id}
                                    id={task.id}
                                    taskDeleteHandler={taskDeleteHandler}
                                    datetime={task.datetime}
                                    state={task.state}
                                    taskStateHandler={taskStateHandler}
                                />
                            ) : (
                                ""
                            )
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
