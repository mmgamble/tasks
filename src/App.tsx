import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./App.css";

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

            <h1>This is super cool!</h1>

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
        </div>
    );
}

export default App;
