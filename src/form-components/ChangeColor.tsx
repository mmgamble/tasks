import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "purple"
];
const DEFAULT = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            Change Color
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    style={{ backgroundColor: color }}
                    onChange={updateColor}
                    id="color-check"
                    key={color}
                    label={color}
                    value={color}
                    checked={color === "color"}
                />
            ))}
            <div>
                {" "}
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </div>
            </div>
        </div>
    );
}
