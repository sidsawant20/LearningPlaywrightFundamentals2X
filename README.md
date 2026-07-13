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

## Project Structure

```
├── tests/                           # Test files organized by topic
│   ├── 01_Basics/                   # Basic tests (e.g., page title verification)
│   ├── 02_first_tests/              # First test examples
│   ├── 03_Locators_Commands/        # Locators and commands
│   ├── 04_Session_Storage/          # Session storage handling
│   ├── 05_Allure_Reporting/         # Allure reporting integration
│   ├── 06_Multiple_Element_/        # Multiple element handling
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
