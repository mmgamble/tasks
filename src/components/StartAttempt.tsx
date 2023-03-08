import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //start quiz button - puts quiz in progress and decreases attempts by 1
    //stop quiz button - stops quiz & disabled when quiz not in progress
    //mulligan (inc by 1) - not visible when quiz in prog
    const [inprogress, startstop] = useState<boolean>(false);
    const [attempts, setattempts] = useState<number>(4);

    function progress(): void {
        startstop(true);
        setattempts(attempts - 1);

        if (attempts === 0) {
            startstop(false);
        }
    }

    function stopdisabled(): boolean {
        if (!inprogress) {
            return true;
        } else {
            return false;
        }
    }

    function startdisabled(): boolean {
        if (!inprogress && attempts === 0) {
            return true;
        } else if (!inprogress && attempts === 4) {
            return false;
        } else if (inprogress) {
            return true;
        } else {
            return false;
        }
    }

    function mulldisabled(): boolean {
        if (attempts === 4 && !inprogress) {
            return false;
        } else if (inprogress) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <div>
                <Button
                    onClick={() => setattempts(1 + attempts)}
                    disabled={mulldisabled()}
                >
                    Mulligan
                </Button>
                to {attempts}.
            </div>
            <div>
                <Button onClick={progress} disabled={startdisabled()}>
                    Start Quiz
                </Button>
                <Button
                    onClick={() => startstop(false)}
                    disabled={stopdisabled()}
                >
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
