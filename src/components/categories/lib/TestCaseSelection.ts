import type { TestCase } from "../../../interfaces/interfaces";
import { createAlertTestCases, createButtonTestCases, createCheckBoxTestCases, createDateTestCases, createDragAndDropTestCases, createDropDownTestCases2, createFileUploadTestcases, createFormTestCases, createIFrameTestCases, createKeyboardTestcases, createLinksTestCases, createModalWindowTestCases, createMultiWindowTestCases, createNotificationTestCases, createRadioTestCases, createScrollTestcases, createSliderTestCases, createTableTestCases, createTimeTestCases, createTooltipTestCases, createWaitTestCases } from "./TestCasesFactory";


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
    "scroll": createScrollTestcases(),
    "tooltip": createTooltipTestCases(),
    "alert": createAlertTestCases(),
    "slider": createSliderTestCases(),
    "link": createLinksTestCases(),
    "fileupload": createFileUploadTestcases(),
    "multiwindow": createMultiWindowTestCases(),
    "wait": createWaitTestCases()
    }

    return testcases[id] || null
}