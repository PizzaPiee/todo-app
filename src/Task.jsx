import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Countdown from "react-countdown";

function Task(props) {
    let bgColor;
    if (props.state.toLowerCase() === "to-do") {
        bgColor = "secondary";
    } else if (props.state.toLowerCase() === "doing") {
        bgColor = "primary";
    } else if (props.state.toLowerCase() === "done") {
        bgColor = "success";
    }

    return (
        <Container className="m-2">
            <Card className={`card text-white bg-${bgColor}`}>
                <Card.Header>{props.state}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="text-muted">
                        <Countdown
                            className="text-white"
                            date={props.datetime}
                        />
                    </Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Link
                        as="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => props.taskDeleteHandler(props.id)}
                    >
                        Delete
                    </Card.Link>
                    {props.state.toLowerCase() === "to-do" ||
                    props.state.toLowerCase() === "doing" ? (
                        <Card.Link
                            as="button"
                            className="btn btn-light btn-sm"
                            onClick={() => props.taskStateHandler(props.id)}
                        >
                            Next
                        </Card.Link>
                    ) : (
                        ""
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Task;
