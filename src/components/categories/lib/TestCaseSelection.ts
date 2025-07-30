import type { TestCase } from "../../../interfaces/interfaces";
import { createButtonTestCases, createCheckBoxTestCases, createDateTestCases, createDragAndDropTestCases, createDropDownTestCases2, createFormTestCases, createIFrameTestCases, createKeyboardTestcases, createModalWindowTestCases, createNotificationTestCases, createRadioTestCases, createScrollTestcases, createTableTestCases, createTimeTestCases } from "./TestCasesFactory";


export function getTestCasesById(id: string): TestCase[] | null {
    const testcases: Record<string, TestCase[]> = {
        "checkbox" : createCheckBoxTestCases(),
    "button": createButtonTestCases(),
    "form": createFormTestCases(),
    "radio": createRadioTestCases(),
    "dropdown": createDropDownTestCases2(),
    "iframe": createIFrameTestCases(),
    "modal": createModalWindowTestCases(),
    "draganddrop": createDragAndDropTestCases(),
    "datepicker": createDateTestCases(),
    "timepicker": createTimeTestCases(),
    "notificationpermission": createNotificationTestCases(),
    "keyboard": createKeyboardTestcases(),
    "table": createTableTestCases(),
    "scroll": createScrollTestcases()
    }

    return testcases[id] || null
}