import type { TestCase } from "../../../interfaces/interfaces";
import { createButtonTestCases, createCheckBoxTestCases, createDropDownTestCases, createFormTestCases, createIFrameTestCases, createRadioTestCases } from "./TestCasesFactory";


export function getTestCasesById(id: string): TestCase[] | null {
    const testcases: Record<string, TestCase[]> = {
        "checkbox" : createCheckBoxTestCases(),
    "button": createButtonTestCases(),
    "form": createFormTestCases(),
    "radio": createRadioTestCases(),
    "dropdown": createDropDownTestCases(),
    "iframe": createIFrameTestCases()
    }

    return testcases[id] || null
}