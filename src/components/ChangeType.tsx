/* eslint-disable indent */
//disabled indent, prettier was fighting with error messages for needing 16/20 spaces
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qtype, setqtype] = useState<string>("short_answer_question");

    function changeqtype(): void {
        setqtype(
            qtype === "multiple_choice_question"
                ? "short_answer_question"
                : qtype === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <div>
                <Button onClick={changeqtype}>Change Type</Button>
                {qtype === "short_answer_question" && <div>Short Answer</div>}
                {qtype === "multiple_choice_question" && (
                    <div>Multiple Choice</div>
                )}
            </div>
        </div>
    );
}
