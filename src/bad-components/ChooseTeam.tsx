import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);
    const [newMember, setNewMember] = useState<string>("");

    function chooseMember(newMember: string) {
        setNewMember(newMember);
        if (!team.includes(newMember)) {
            const newteam = [...team, newMember];
            setTeam(newteam);
            // team.push(newMember);
        }
    }

    function clearTeam() {
        const emptyteam = team.filter(
            (member: string): boolean => member.length < 1
        );
        setTeam(emptyteam);
    }

    //size = "sm";
    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button onClick={() => chooseMember(option)}>
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
