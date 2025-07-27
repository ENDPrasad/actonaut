import type { TestCase } from "../../../interfaces/interfaces";
import { createButtonTestCases, createCheckBoxTestCases, createDateTestCases, createDragAndDropTestCases, createDropDownTestCases, createFormTestCases, createIFrameTestCases, createModalWindowTestCases, createNotificationTestCases, createRadioTestCases, createTimeTestCases } from "./TestCasesFactory";


export function getTestCasesById(id: string): TestCase[] | null {
    const testcases: Record<string, TestCase[]> = {
        "checkbox" : createCheckBoxTestCases(),
    "button": createButtonTestCases(),
    "form": createFormTestCases(),
    "radio": createRadioTestCases(),
    "dropdown": createDropDownTestCases(),
    "iframe": createIFrameTestCases(),
    "modal": createModalWindowTestCases(),
    "draganddrop": createDragAndDropTestCases(),
    "datepicker": createDateTestCases(),
    "timepicker": createTimeTestCases(),
    "notificationpermission": createNotificationTestCases()
    }

    return testcases[id] || null
}