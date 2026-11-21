# GreenLeaf Grocers — Checkout Overhaul QA Capstone & Jira Traceability

**QA Engineer:** Romaisa Mukhtiar  
**Linked Jira Epic:** `GG-1` (GreenLeaf Checkout Overhaul) • **User Story:** `GG-2` (Guest Checkout Without Account) • **Test Case:** `GG-T1`

---

## Project Overview
This repository demonstrates **end-to-end Agile QA traceability** connecting a Jira User Story (`GG-2`) and Zephyr test case (`GG-T1`) to a version-controlled feature branch (`feature/checkout-happy-path`) and Pull Request (`#1`).

> **Note:** For the expanded **Multi-Layer QA Automation Framework** (Page Object Model architecture, Mobile Viewport collision checks, REST API contract testing, SQLite relational database validation, and GitHub Actions CI/CD), see my primary framework repository: **[playwrite-tests](https://github.com/romaisamukhtiarqa-prog/playwrite-tests)**.

---

## Traceability Workflow Verified
1. **Requirement (`Jira GG-2`):** Guest shopper completes checkout without creating an account.
2. **Test Design (`Zephyr GG-T1`):** Atomic test steps and expected results authored prior to execution.
3. **UI Automation (`tests/checkout.spec.js`):** Playwright end-to-end script validating catalog selection, guest checkout form submission, and order confirmation ID generation.
4. **Pull Request & Review (`PR #1`):** Feature branch merged via GitHub Pull Request linked directly to Jira issue `GG-2` (`In Review`).

---

## How to Run Locally
```bash
npm install @playwright/test
npx playwright install chromium
npx playwright test tests/checkout.spec.js
