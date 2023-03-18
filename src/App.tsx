import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Meghan Gamble
            </p>

            <img src={require("./memeCopy.png")} alt="This is a meme" />

            <div>
                <ul>
                    <li>I write the code </li>
                    <li>I run the code</li>
                    <li>I have a bug</li>
                    <li>I have a feature</li>
                </ul>
            </div>

            <Container>
                <Row>
                    <Col>
                        {" "}
                        <div
                            className="col1"
                            style={{ backgroundColor: "red" }}
                        ></div>{" "}
                        It is Saturday
                    </Col>
                    <Col>
                        <div
                            className="col2"
                            style={{ backgroundColor: "red" }}
                        ></div>
                        It is Sunny Outside
                    </Col>
                </Row>
            </Container>

            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>

            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>

            <ChooseTeam></ChooseTeam>
            <ColoredBox></ColoredBox>
            <ShoveBox></ShoveBox>
            <Counter></Counter>
            <RevealAnswer></RevealAnswer>
            <StartAttempt></StartAttempt>
            <TwoDice></TwoDice>
            <ChangeType></ChangeType>
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

//            <h1></h1>
//            <h1 />;

export default App;
