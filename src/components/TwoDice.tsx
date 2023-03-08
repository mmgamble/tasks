import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, roll1] = useState<number>(5);
    const [die2, roll2] = useState<number>(6);

    function lose(): boolean {
        if (die1 === 1 && die2 === 1) {
            return false;
        } else {
            return true;
        }
    }

    function win(): boolean {
        if (die1 === die2 && die1 != 1) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div>
            <div>
                <span data-testid="left-die">
                    <Button onClick={() => roll1(d6())}>Roll Left</Button>
                    to
                    {die1}.
                </span>
                <span data-testid="right-die">
                    <Button onClick={() => roll2(d6())}>Roll Right</Button>{" "}
                    {win() === true && <div>Win!</div>}
                    {lose() === false && <div>Lose!</div>}
                    to
                    {die2}.
                </span>
            </div>
        </div>
    );
}
