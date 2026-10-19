# Contributing Guide

Thank you for your interest in contributing to the Event Coordination System!

Contributions of all kinds are welcome, including bug fixes, feature suggestions, documentation improvements, and code refactoring.

## Getting Started

1. Fork the repository.
2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/event-coordination-system.git
   cd event-coordination-system
   ```

3. Create a branch for your changes:

   ```bash
   git switch -c feat/your-feature-name
   ```

4. Install the project dependencies by following the instructions in the README.
5. Make your changes and test them locally.

## Branch Naming

Use descriptive branch names with lowercase words separated by hyphens.

| Prefix | Purpose | Example |
|---|---|---|
| `feat/` | New features | `feat/mission-management` |
| `fix/` | Bug fixes | `fix/task-status-update` |
| `docs/` | Documentation | `docs/update-readme` |
| `refactor/` | Code improvements | `refactor/workflow-logic` |
| `test/` | Tests | `test/mission-validation` |

## Commit Messages

Follow the Conventional Commits format:

```text
type: short description
```

Common types:

- `feat`: Add a new feature.
- `fix`: Fix a bug.
- `docs`: Update documentation.
- `refactor`: Improve code structure without changing intended behavior.
- `test`: Add or update tests.
- `chore`: Perform maintenance tasks.

Examples:

```text
feat: add mission dependency management
fix: prevent completion of blocked tasks
docs: update project setup instructions
refactor: simplify workflow logic
```

Keep commit messages concise and focused on a single change.

## Development Guidelines

Please follow these guidelines when contributing:

- Follow the existing project structure and coding conventions.
- Keep changes focused and avoid unrelated modifications.
- Use clear, descriptive names for variables, functions, components, and files.
- Handle errors and edge cases appropriately.
- Add or update tests when relevant.
- Update documentation when behavior or setup instructions change.
- Avoid adding unnecessary dependencies.
- Never commit secrets, API keys, passwords, or access tokens.

## Pull Requests

Before submitting a pull request:

1. Review your changes.
2. Run available tests and linting commands.
3. Ensure the application builds successfully, when applicable.
4. Update relevant documentation.
5. Verify that no unrelated files or debugging code are included.

When opening a pull request, provide:

- A clear title.
- A summary of the changes.
- The reason for the changes.
- Testing performed.
- Screenshots for UI changes, when useful.

Keep pull requests focused on one logical improvement.

## Reporting Bugs

When reporting a bug, include:

- A clear description of the issue.
- Steps to reproduce it.
- Expected and actual behavior.
- Relevant error messages or screenshots.
- Environment details, when relevant.

## Suggesting Features

Feature suggestions are welcome. Please explain the problem the feature would solve, its expected behavior, and how it fits the project's goals.

For significant changes, open an issue for discussion before starting implementation.

## Code of Conduct

Be respectful, constructive, and considerate of other contributors. Keep discussions focused on improving the project.

## License

By contributing to this project, you agree that your contributions will be distributed under the project's [MIT License](./LICENSE).

Thank you for helping make event coordination more structured and collaborative!