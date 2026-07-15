# t-pi-continue

A Pi extension that sends the user message `continue` with a keyboard shortcut.

## Usage

- **Windows/Linux:** Alt+C
- **macOS:** Option+C
- Command fallback: `/continue`

If Pi is busy, the message is queued as a follow-up. If Pi is idle, it is sent immediately.

## Install

```bash
pi install git:github.com/thomas-sievering/t-pi-continue
```

For local development:

```bash
pi -e D:/pi/t-pi-continue
```

## Why this shortcut?

Alt+Enter is already Pi's built-in follow-up-message shortcut, while Shift+Enter inserts a newline. Alt+C is easy to remember: C for “continue”.
