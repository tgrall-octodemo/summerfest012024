# Project Documentation

## Framework Version

This project uses Next.js version 14.2.3.

## API Call Sequence

```mermaid
sequenceDiagram
    participant User
    participant App
    participant GitHubAPI
    User->>App: Request homepage
    App->>GitHubAPI: Fetch repositories of tgrall
    GitHubAPI-->>App: Return repositories data
    App-->>User: Display repositories and star counts
```
