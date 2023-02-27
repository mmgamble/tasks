/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numsarray = [...numbers];
    if (numsarray.length === 0) {
        return numsarray;
    } else if (numsarray.length === 1) {
        const numsrepeat = [numsarray[0], numsarray[0]];
        return numsrepeat;
    } else {
        const firstandlast = [numsarray[0], numsarray[numsarray.length - 1]];
        return firstandlast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = [...numbers];
    const triplenums = triple.map((num: number): number => num * 3);
    return triplenums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbers1 = [...numbers];
    const integers = numbers1.map((stringconv: string): number =>
        isNaN(parseInt(stringconv)) ? parseInt("0") : parseInt(stringconv)
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amounts1 = [...amounts];

    const nodoll = amounts1.map((word: string): string =>
        word.includes("$", 0) ? word.slice(1) : word
    );

    const nums = nodoll.map((stringconv: string): number =>
        isNaN(parseInt(stringconv)) ? parseInt("0") : parseInt(stringconv)
    );
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messages1 = [...messages];
    const noquestions = messages1.filter(
        (quest: string): boolean => quest[quest.length - 1] != "?"
    );
    const toupper = noquestions.map((mess: string): string =>
        mess[mess.length - 1] === "!" ? mess.toUpperCase() : mess
    );

    return toupper;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const words1 = [...words];
    const lessthan = words1.filter((word: string): boolean => word.length < 4);

    return lessthan.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colors1 = [...colors];
    if (colors1[0] === "") {
        return true;
    } else {
        const rgb = colors1.every(
            (color: string): boolean =>
                color == "red" || color == "blue" || color == "green"
        );
        return rgb;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const addends1 = [...addends];
    const addends2 = [...addends];

    const sumofnums = addends1.reduce(
        (total: number, num: number) => total + num,
        0
    );

    const numstrings = addends2.map((num: number): string => num.toString());
    const joinednums = numstrings.join("+");

    if (addends1.length === 0) {
        const finalstring = sumofnums + "=0";
        return finalstring;
    } else {
        const finalstring = sumofnums + "=" + joinednums;
        return finalstring;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const values1 = [...values];
    const allpos = values1.every((num: number): boolean => num > 0);

    if (allpos) {
        const sumofnums = values1.reduce(
            (total: number, num: number) => total + num,
            0
        );

        values1.splice(values1.length, 0, sumofnums);
        return values1;
    } else {
        const negative = values1.findIndex((num: number): boolean => num < 0);
        const shortenarray = values1.slice(0, negative);

        const sumnums = shortenarray.reduce(
            (total: number, num: number) => total + num,
            0
        );
        values1.splice(negative + 1, 0, sumnums);
        return values1;
    }
}
