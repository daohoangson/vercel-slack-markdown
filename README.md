# Slack markdown API endpoints

A simple API service for converting between Markdown and Slack formatting, deployed on Vercel.

## Overview

This project provides two API endpoints:

- **`/api/md2slack`** - Convert Markdown to Slack formatting
- **`/api/slack2md`** - Convert Slack formatting to Markdown

## Usage Examples

### Using curl

Convert Markdown to Slack:

```bash
curl -X POST https://slack-markdown.vercel.app/api/md2slack \
  -H "Content-Type: text/plain" \
  -d "Check out this [awesome link](https://example.com)!"
```

Convert Slack to Markdown:

```bash
curl -X POST https://slack-markdown.vercel.app/api/slack2md \
  -H "Content-Type: text/plain" \
  -d "Check out this <https://example.com|awesome link>!"
```

## Development

### Prerequisites

- Node.js

### Setup

1. Clone the repository:

```bash
git clone https://github.com/daohoangson/vercel-slack-markdown.git
cd vercel-slack-markdown
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## Deployment

This project is designed to be deployed on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy on every push to the main branch.
