import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inedit, changeedit] = useState<boolean>(false);
    const [name, setname] = useState<string>("Your Name");
    const [student, setstudent] = useState<boolean>(true);

    //checkbox student
    function isStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setstudent(event.target.checked);
    }

    function edit(event: React.ChangeEvent<HTMLInputElement>) {
        changeedit(event.target.checked);
    }

    function changename(event: React.ChangeEvent<HTMLInputElement>) {
        setname(event.target.value);
    }

    function isornot(): string {
        if (student === true) {
            return "is";
        } else {
            return "is not";
        }
    }

    function usedisabled(): JSX.Element {
        if (inedit === true) {
            return (
                <div>
                    <div>
                        <Form.Group controlId="name-text">
                            <Form.Label>Enter Name:</Form.Label>
                            <Form.Control value={name} onChange={changename} />
                        </Form.Group>
                    </div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={student}
                        onChange={isStudent}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <Form.Label></Form.Label>
                </div>
            );
        }
    }

    return (
        <div>
            <div>
                Edit Mode
                {name} {isornot()} a student.
            </div>
            <Form.Check
                type="switch"
                id="in-edit-check"
                label="Edit?"
                checked={inedit}
                onChange={edit}
            />
            {usedisabled()}
        </div>
    );
}
