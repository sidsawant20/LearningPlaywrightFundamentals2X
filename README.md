# Learning Playwright Fundamentals 2X

A project for learning and practicing Playwright, the end-to-end testing framework by Microsoft. This repository covers the fundamentals of writing, running, and debugging Playwright tests across multiple browsers.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## Setup

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run a specific test file
npx playwright test tests/01_Basics/229_Basic_Test.spec.ts

# Run tests with UI mode
npx playwright test --ui
```

> **Note:** CLI arguments are treated as regex patterns. On Windows, use forward slashes:  
> `npx playwright test "tests/01_Basics/229_Basic_Test.spec.ts"`

## Test Annotations

Playwright provides annotations to control test execution:

| Annotation     | Description                                               |
|----------------|-----------------------------------------------------------|
| `test.skip`    | Always skip this test                                     |
| `test.only`    | Run only this test (skip all others)                      |
| `test.fail`    | Mark test as expected to fail                             |
| `test.fixme`   | Skip with intention to fix later                          |
| `test.slow`    | Triple the timeout for this test                          |

> **Tip:** Set `forbidOnly: true` in config (already configured for CI) to prevent accidentally committing `test.only`.

## Project Structure

```
├── tests/                           # Test files organized by topic
│   ├── 01_Basics/                   # Basic tests (page title verification, annotations)
│   │   ├── 229_Basic_Test.spec.ts   # Basic page title test
│   │   └── 230_Test_Annotations.spec.ts # Test annotations (skip, only, etc.)
│   ├── 02_first_tests/              # First test examples
│   │   ├── 231_First_Running_Verify.spec.ts # Running & verifying tests
│   │   └── 231_First_Running_Verify_1.spec.ts # VWO home page logo & title verification
│   ├── 03_Locators_Commands/        # Locators and commands
│   │   ├── 238_LS.spec.ts           # Basic page navigation & pause
│   │   ├── 239_Project_VWO_login.spec.ts # VWO login with locators & error message extraction
│   │   ├── 241_Project_3_Singup_VWO.spec.ts # VWO signup form validation test
│   │   ├── 242_Project_3_Singup_VWO_PW_Locator.spec.ts # VWO signup with Playwright locator strategies
│   │   └── 243_PW_Command.spec.ts          # page.goto() with waitUntil options (commit, domcontentloaded, load, networkidle)
│   ├── 04_Session_Storage/          # Session storage handling
│   ├── 05_Allure_Reporting/         # Allure reporting integration
│   ├── 06_Multiple_Element_/        # Multiple element handling
│   │   └── 250_Multi_Element.spec.ts # Collect & log all inner texts from a list group
│   ├── 07_WebTables/                # Web table interactions
│   ├── 08_Web_Select_Frames_Iframe/ # Select, frames, iframes
│   ├── 09_Frame_Iframe/             # Frame and iframe handling
│   ├── 10_Keyboard_Hover_Drag_Drop/ # Keyboard, hover, drag & drop
│   ├── 11_JS_Alerts/                # JavaScript alerts
│   ├── 12_Handle_SVG/               # SVG element handling
│   ├── 13_Shadow_DOM/               # Shadow DOM interactions
│   ├── 14_FileUpload/               # File upload handling
│   ├── 15_File_Download/            # File download handling
│   ├── 16_Scroll_toElement/         # Scrolling to elements
│   ├── 17_Expect_Assertions/        # Expect assertions
│   ├── 18_Test_hooks/               # Test hooks (before/after)
│   ├── 19_Data_Driven_Testing/      # Data-driven testing
│   ├── 20_Page_Object_Model/        # Page Object Model pattern
│   ├── 21_Fixture/                  # Custom fixtures
│   ├── 22_Misc_Concepts/            # Miscellaneous concepts
│   ├── 23_Advance_Framework/        # Advanced framework setup
│   └── Projects/                    # Project-level tests
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Dependencies and scripts
└── .gitignore                       # Git ignore rules
```

## Configuration

The project is currently configured to run tests on **Chromium** (Desktop Chrome) only, with Firefox and WebKit commented out.

Key settings:
- **Traces**, **screenshots**, and **video** are captured on every run for debugging
- **Headed mode** by default (`headless: false`)
- **Viewport**: 1920x1080
- Tests run in parallel by default. On CI, retries are set to 2 and parallel workers are limited to 1 for stability.

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright Test Runner](https://playwright.dev/docs/test-runners)
