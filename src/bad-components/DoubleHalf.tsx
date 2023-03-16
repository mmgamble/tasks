import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface numprops {
    setdhvalue: (newval: number) => void;
    dhValue: number;
}

function Doubler({ setdhvalue, dhValue }: numprops): JSX.Element {
    return <Button onClick={() => setdhvalue(2 * dhValue)}>Double</Button>;
}

function Halver({ setdhvalue, dhValue }: numprops): JSX.Element {
    return <Button onClick={() => setdhvalue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setdhvalue] = useState<number>(10);

    return (
        <div>
            Double Half
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setdhvalue={setdhvalue} dhValue={dhValue}></Doubler>
            <Halver setdhvalue={setdhvalue} dhValue={dhValue}></Halver>
        </div>
    );
}
