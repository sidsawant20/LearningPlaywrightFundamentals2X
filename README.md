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
npx playwright test tests/example.spec.ts

# Run tests with UI mode
npx playwright test --ui
```

## Project Structure

```
├── tests/                 # Test files
│   └── example.spec.ts    # Sample Playwright tests
├── playwright.config.ts   # Playwright configuration
├── package.json           # Dependencies and scripts
└── .gitignore             # Git ignore rules
```

## Configuration

The project is configured to run tests across three browsers:

- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)
- **WebKit** (Desktop Safari)

Tests run in parallel by default. On CI, retries are set to 2 and parallel workers are limited to 1 for stability.

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright Test Runner](https://playwright.dev/docs/test-runners)
