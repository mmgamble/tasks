/* eslint-disable indent */
//disable indent, prettier fighting with indent again
import React, { useState } from "react";
import { Button } from "react-bootstrap";
//🐰
//💟
//🎇
//🎃-
//🦃
//🎄

//🎄
//🐰
//🎇
//🎃-
//🦃
//💟

export function CycleHoliday(): JSX.Element {
    const [holiday, changehol] = useState<string>("christmas");

    function nextyear(): void {
        changehol(
            holiday === "easter"
                ? "valentines"
                : holiday === "valentines"
                ? "fourth of july"
                : holiday === "fourth of july"
                ? "thanksgiving"
                : holiday === "thanksgiving"
                ? "christmas"
                : holiday === "christmas"
                ? "easter"
                : "easter"
        );
    }

    function nextalph(): void {
        changehol(
            holiday === "christmas"
                ? "easter"
                : holiday === "easter"
                ? "fourth of july"
                : holiday === "fourth of july"
                ? "thanksgiving"
                : holiday === "thanksgiving"
                ? "valentines"
                : holiday === "valentines"
                ? "christmas"
                : "christmas"
        );
    }
    function emoji(): string {
        if (holiday === "easter") {
            return "🐰";
        } else if (holiday === "christmas") {
            return "🎄";
        } else if (holiday === "fourth of july") {
            return "🎇";
        } else if (holiday === "valentines") {
            return "💟";
        } else if (holiday === "thanksgiving") {
            return "🦃";
        } else {
            return "";
        }
    }

    return (
        <div>
            <div>
                <span>
                    <Button onClick={nextyear}>Change Year</Button>
                </span>
            </div>
            <div>
                <span>
                    <Button onClick={nextalph}>Change Alphabet</Button>
                </span>
                Holiday: {emoji()} to {holiday}.
            </div>
        </div>
    );
}
