import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Taskform(props) {
    const [inputs, setInputs] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.taskHandler({
            title: inputs.title,
            description: inputs.description,
            datetime: inputs.datetime,
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            state: "To-Do"
        });
    };

    return (
        <Form onSubmit={handleSubmit} className="mt-2">
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    onChange={handleChange}
                    name="title"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Due date</Form.Label>
                <Form.Control
                    className="mb-3"
                    type="datetime-local"
                    name="datetime"
                    onChange={handleChange}
                />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Taskform;
