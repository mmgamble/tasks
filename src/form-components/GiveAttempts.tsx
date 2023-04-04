import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setattempts] = useState<number>(3);
    const [reqattempts, updateattempts] = useState<number>(0);

    function updateAtt(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value === "") {
            console.log("Input is NaN");
            //    } else if (!isNaN(Number(event.target.value))) {
            //      const tonum = Number(event.target.value);
            //    updateattempts(tonum);
        } else {
            const tonum = Number(event.target.value);
            updateattempts(tonum);
        }
    }

    function usedisabled(): boolean {
        if (attempts === 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <div>
                <Form.Group controlId="addAttempts">
                    <Form.Label>Requested Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={reqattempts}
                        onChange={updateAtt}
                    />
                </Form.Group>
            </div>
            <div>Current Attempts: {attempts}</div>
            <div>Give Attempts</div>
            <div>
                <Button
                    onClick={() => setattempts(attempts - 1)}
                    disabled={usedisabled()}
                >
                    use{" "}
                </Button>
            </div>
            <div>
                <Button onClick={() => setattempts(attempts + reqattempts)}>
                    gain{" "}
                </Button>
            </div>
        </div>
    );
}
