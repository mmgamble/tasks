import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const filtered = questions.filter((q1: Question): boolean => q1.published);
    return filtered;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const qcopy = questions.map((q: Question): Question => ({ ...q }));
    const filtered = qcopy.filter(
        (q2: Question): boolean =>
            !(
                q2.body.length === 0 &&
                q2.expected.length === 0 &&
                q2.options.length === 0
            )
    );

    return filtered;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const qcopy = questions.map((q: Question): Question => ({ ...q }));
    const filter = qcopy.filter((q1: Question): boolean => q1.id === id);

    if (filter.length > 0) {
        return filter[0];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const qcopy = questions.map((q: Question): Question => ({ ...q }));
    const filter = qcopy.filter((q1: Question): boolean => q1.id != id);
    return filter;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const qcopy = questions.map((q: Question): Question => ({ ...q }));
    const qnames = qcopy.map((q: Question): string => q.name);
    return qnames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const qcopy = questions.map((q: Question): Question => ({ ...q }));
    const qpoints = qcopy.map((q: Question): number => q.points);
    const sum = qpoints.reduce((total: number, num: number) => total + num, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const qcopy = questions.map((q: Question): Question => ({ ...q }));
    const filter = qcopy.filter(
        (q1: Question): boolean => q1.published === true
    );
    const qpoints = filter.map((q: Question): number => q.points);
    const sum = qpoints.reduce((total: number, num: number) => total + num, 0);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const qcopy = questions.map((q: Question): Question => ({ ...q }));
    const start = "id,name,options,points,published\n";
    const newarr = qcopy.map(
        (q: Question): string =>
            q.id +
            "," +
            q.name +
            "," +
            q.options.length +
            "," +
            q.points +
            "," +
            q.published
    );
    const joined = newarr.join("\n");

    return start + joined;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const qcopy = questions.map(
        (q: Question): Answer => ({
            submitted: false,
            correct: false,
            questionId: q.id,
            text: ""
        })
    );
    return qcopy;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const qcopy = questions.map(
        (q: Question): Question => ({ ...q, published: true })
    );

    return qcopy;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const qcopy = questions.map((q: Question): Question => ({ ...q }));

    const allsame = qcopy.every(
        (q: Question): boolean => q.type === questions[0].type
    );
    return allsame;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newarr = [
        ...questions,
        {
            name: name,
            type: type,
            id: id,
            body: "",
            expected: "",
            options: [],
            points: 1,
            published: false
        }
    ];
    return newarr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const qcopy = questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : { ...q }
    );

    return qcopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    if (newQuestionType === "multiple_choice_question") {
        const qcopy = questions.map(
            (q: Question): Question =>
                q.id === targetId ? { ...q, type: newQuestionType } : { ...q }
        );
        return qcopy;
    } else {
        const qcopy = questions.map(
            (q: Question): Question =>
                q.id === targetId
                    ? { ...q, type: newQuestionType, options: [] }
                    : { ...q }
        );
        return qcopy;
    }
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    if (targetOptionIndex === -1) {
        const qcopy = questions.map(
            (q: Question): Question =>
                q.id === targetId
                    ? { ...q, options: [...q.options, newOption] }
                    : { ...q }
        );
        return qcopy;
    } else {
        const qcopy = questions.map(
            (q: Question): Question => ({ ...q, options: [...q.options] })
        );
        const find = qcopy.findIndex(
            (q: Question): boolean => q.id === targetId
        );

        qcopy[find].options.splice(targetOptionIndex, 1, newOption);

        return qcopy;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const qcopy = questions.map(
        (q: Question): Question => ({ ...q, options: [...q.options] })
    );
    const find = qcopy.findIndex((q: Question): boolean => q.id === targetId);
    const newq = {
        ...qcopy[find],
        name: "Copy of " + qcopy[find].name,
        id: newId,
        published: false
    };
    qcopy.splice(find + 1, 0, newq);

    return qcopy;
}
