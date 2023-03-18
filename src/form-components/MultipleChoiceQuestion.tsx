import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    function correct(): string {
        if (choice === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Choose an answer</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((answer: string) => (
                        <option key={answer} value={answer}>
                            {answer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            Your choice is {choice}. {correct()}
        </div>
    );
}
