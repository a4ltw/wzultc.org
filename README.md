# WZULTC Website

This repository contains the source code for the official WZULTC website, hosted at [https://wzultc.org](https://wzultc.org).

## ✨ Features

- **News Section**: Dynamic news/blog section powered by MkDocs Material, showcasing project activities with titles, dates, text, photos, and YouTube videos
- **Enrollment Page**: A detailed page for recruiting Vietnamese study buddies, available at [wzultc.org/enroll/](https://wzultc.org/enroll/)
- **Responsive Design**: Beautiful, mobile-friendly interface powered by Material for MkDocs
- **Easy Content Management**: Write content in Markdown with YAML frontmatter

## 🛠️ Tech Stack

- **[MkDocs](https://www.mkdocs.org/)**: Static site generator
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)**: Beautiful theme with blog plugin
- **GitHub Pages**: Hosting and automatic deployment
- **GitHub Actions**: CI/CD pipeline

## 🚀 Local Development

### Prerequisites

- Python 3.x
- pip

### Setup

1. Clone the repository:
```bash
git clone https://github.com/a4ltw/wzultc.org.git
cd wzultc.org
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Start the development server:
```bash
mkdocs serve
```

4. Open your browser and visit: http://127.0.0.1:8000

## 📝 Adding News Posts

To add a new news post, create a new Markdown file in `docs/news/posts/` with the following format:

```markdown
---
date: YYYY-MM-DD
authors:
  - admin
categories:
  - Category Name
description: Brief description of the post
---

# Post Title

Brief introduction...

<!-- more -->

Full content here...
```

### Example with Images

```markdown
![Alt text](../../images/your-image.png)
```

### Example with YouTube Videos

```markdown
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```

## 🚀 Deployment

This site is automatically deployed via GitHub Actions to GitHub Pages.

- **Source**: The site is built from the `master` branch using MkDocs
- **Trigger**: Any `git push` to the `master` branch will automatically trigger a new build and deployment
- **Output**: The built site is served from GitHub Pages

The workflow builds the MkDocs site and deploys it to the `gh-pages` branch automatically.

## 📁 Project Structure

```
wzultc.org/
├── docs/                  # Documentation source files
│   ├── index.md          # Homepage
│   ├── news/             # News section
│   │   ├── .authors.yml  # Blog authors configuration
│   │   ├── index.md      # News section homepage
│   │   └── posts/        # Blog posts
│   ├── enroll/           # Enrollment page
│   └── images/           # Image assets
├── mkdocs.yml            # MkDocs configuration
├── requirements.txt      # Python dependencies
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions workflow
```

## 📄 License

This project is open source and available under the MIT License.
