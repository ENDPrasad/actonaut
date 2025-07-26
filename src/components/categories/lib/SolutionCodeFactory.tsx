import type { SolutionCode } from "../../../interfaces/interfaces"

export function createButtonSolutions(): SolutionCode[] {
  return [
    {
      testCaseId: "BTN_001",
      language: "selenium",
      code: `// Test Case: BTN_001 - Click enabled submit button
import { WebDriver, By, until } from 'selenium-webdriver';

async function testEnabledSubmitButton(driver: WebDriver) {
  try {
    // Navigate to the form page
    await driver.get('https://example.com/form');
    
    // Fill in required form fields
    await driver.findElement(By.id('username')).sendKeys('testuser');
    await driver.findElement(By.id('email')).sendKeys('test@example.com');
    
    // Click the Submit button
    const submitButton = await driver.findElement(By.id('submit-button'));
    await submitButton.click();
    
    // Wait for and verify confirmation message
    const confirmationMessage = await driver.wait(
      until.elementLocated(By.className('success-message')), 
      5000
    );
    
    const messageText = await confirmationMessage.getText();
    console.assert(
      messageText.includes('successfully'), 
      'Confirmation message should contain "successfully"'
    );
    
    console.log('✅ Test BTN_001 passed: Submit button works correctly');
  } catch (error) {
    console.error('❌ Test BTN_001 failed:', error);
  }
}`,
      explanation:
        "This solution tests clicking an enabled submit button by filling form data first, then clicking the button and verifying the success message appears.",
    },
    {
      testCaseId: "BTN_002",
      language: "selenium",
      code: `// Test Case: BTN_002 - Click disabled button
import { WebDriver, By } from 'selenium-webdriver';

async function testDisabledButton(driver: WebDriver) {
  try {
    // Navigate to page with disabled button
    await driver.get('https://example.com/disabled-form');
    
    // Find the disabled button
    const disabledButton = await driver.findElement(By.id('submit-button'));
    
    // Verify button is disabled
    const isEnabled = await disabledButton.isEnabled();
    console.assert(!isEnabled, 'Button should be disabled');
    
    // Attempt to click (should have no effect)
    await disabledButton.click();
    
    // Verify no action was triggered (check that we're still on same page)
    const currentUrl = await driver.getCurrentUrl();
    console.assert(
      currentUrl.includes('disabled-form'), 
      'Should remain on same page after clicking disabled button'
    );
    
    console.log('✅ Test BTN_002 passed: Disabled button behaves correctly');
  } catch (error) {
    console.error('❌ Test BTN_002 failed:', error);
  }
}`,
      explanation:
        "This solution verifies that disabled buttons cannot be interacted with by checking the isEnabled() property and confirming no navigation occurs after clicking.",
    },
    {
      testCaseId: "BTN_001",
      language: "playwright",
      code: `// Test Case: BTN_001 - Click enabled submit button (Playwright)
import { test, expect } from '@playwright/test';

test('should submit form when clicking enabled submit button', async ({ page }) => {
  // Navigate to the form page
  await page.goto('https://example.com/form');
  
  // Fill in required form fields
  await page.fill('#username', 'testuser');
  await page.fill('#email', 'test@example.com');
  
  // Click the Submit button
  await page.click('#submit-button');
  
  // Wait for and verify confirmation message
  await expect(page.locator('.success-message')).toBeVisible();
  await expect(page.locator('.success-message')).toContainText('successfully');
  
  console.log('✅ Test BTN_001 passed with Playwright');
});`,
      explanation:
        "Playwright version of the same test, using more modern async/await syntax and built-in assertions for better reliability.",
    },
  ]
}

export function createFormSolutions(): SolutionCode[] {
  return [
    {
      testCaseId: "FORM_001",
      language: "selenium",
      code: `// Test Case: FORM_001 - Submit form with valid data
import { WebDriver, By, until, Select } from 'selenium-webdriver';

async function testValidFormSubmission(driver: WebDriver) {
  try {
    // Navigate to form page
    await driver.get('https://example.com/registration-form');
    
    // Enter valid username
    await driver.findElement(By.id('username')).sendKeys('validuser123');
    
    // Enter valid email address
    await driver.findElement(By.id('email')).sendKeys('user@example.com');
    
    // Select country from dropdown
    const countryDropdown = await driver.findElement(By.id('country-select'));
    const select = new Select(countryDropdown);
    await select.selectByValue('US');
    
    // Check terms and conditions checkbox
    const termsCheckbox = await driver.findElement(By.id('terms-checkbox'));
    if (!(await termsCheckbox.isSelected())) {
      await termsCheckbox.click();
    }
    
    // Click Submit button
    await driver.findElement(By.id('submit-button')).click();
    
    // Verify success message appears
    const successMessage = await driver.wait(
      until.elementLocated(By.className('form-success')), 
      10000
    );
    
    const messageText = await successMessage.getText();
    console.assert(
      messageText.includes('Registration successful'), 
      'Should show registration success message'
    );
    
    console.log('✅ Test FORM_001 passed: Valid form submission works');
  } catch (error) {
    console.error('❌ Test FORM_001 failed:', error);
  }
}`,
      explanation:
        "Complete form automation including text inputs, dropdown selection, checkbox interaction, and success verification.",
    },
    {
      testCaseId: "FORM_002",
      language: "selenium",
      code: `// Test Case: FORM_002 - Submit form with invalid email
import { WebDriver, By } from 'selenium-webdriver';

async function testInvalidEmailValidation(driver: WebDriver) {
  try {
    // Navigate to form page
    await driver.get('https://example.com/registration-form');
    
    // Enter valid username
    await driver.findElement(By.id('username')).sendKeys('validuser123');
    
    // Enter invalid email address
    await driver.findElement(By.id('email')).sendKeys('invalid-email');
    
    // Select country and check terms
    const countryDropdown = await driver.findElement(By.id('country-select'));
    const select = new Select(countryDropdown);
    await select.selectByValue('US');
    
    await driver.findElement(By.id('terms-checkbox')).click();
    
    // Click Submit button
    await driver.findElement(By.id('submit-button')).click();
    
    // Verify email validation error message
    const emailError = await driver.findElement(By.className('email-error'));
    const errorText = await emailError.getText();
    
    console.assert(
      errorText.includes('valid email'), 
      'Should show email validation error'
    );
    
    // Verify form is not submitted (still on same page)
    const currentUrl = await driver.getCurrentUrl();
    console.assert(
      currentUrl.includes('registration-form'), 
      'Should remain on form page when validation fails'
    );
    
    console.log('✅ Test FORM_002 passed: Email validation works correctly');
  } catch (error) {
    console.error('❌ Test FORM_002 failed:', error);
  }
}`,
      explanation:
        "Tests form validation by submitting invalid email and verifying that appropriate error messages appear and form doesn't submit.",
    },
  ]
}
