import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAns] = useState<string>("");
    //const [correct, changeAns] = useState<string>("");

    function updateAns(event: React.ChangeEvent<HTMLInputElement>) {
        setAns(event.target.value);
    }

    function checkAns(): string {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }

    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Enter Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAns} />
            </Form.Group>
            Check Answer
            <div>{checkAns()}</div>
        </div>
    );
}
