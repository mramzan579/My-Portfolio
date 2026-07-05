# Blog Publishing Guidelines for Muhammad Ramzan

When Muhammad Ramzan requests to publish a new blog post or provides a raw draft, YOU MUST follow these strict professional formatting and structural rules:

## 1. Professional SEO & Metadata
- Calculate the exact **reading time** based on word count (approx. 200 words/min).
- Add the **current upload date** in the format: "Month DD, YYYY".
- Generate a highly optimized 160-character SEO description.
- Inject proper **JSON-LD Schema** (TechArticle) for viral indexing.
- Include Open Graph / Twitter Card meta tags with a relevant high-quality Unsplash placeholder image.

## 2. Article Structure & UX Features
- Use the standard `blog/template.html` as the baseline.
- **Table of Contents (ToC):** Add a clickable ToC at the top of the article so users can scroll to specific topics (use `#ids` on `<h2>` and `<h3>` tags).
- **Term Explanations (Tooltips):** If the article is long or contains complex engineering jargon, wrap the term in a tooltip span (e.g., `<span class="term" data-tooltip="Definition here">Word</span>`) OR hyperlink it to a separate dedicated article.
- **Interactive Code Playgrounds:** For important Python code examples, use the `.code-playground` structure (found in the template) which includes a static `<pre><code>` block and a hidden Trinket `<iframe>` toggled via the `.btn-try-it` button. Always set the Trinket iframe source to: `https://trinket.io/embed/python3?runOption=run`.
- **Scroll to Top Button:** Ensure the fixed "Go to Top" button is active on the page.

## 3. Footer Navigation
- **Next / Previous Chapters:** Add navigation buttons at the bottom of the article pointing to adjacent chapters in the playlist.
- **Suggested Articles:** Recommend 2-3 related chapters/playlists before the comment section.
- **Giscus Comments:** Ensure the Giscus `<script>` tag block is always present at the absolute bottom of the article for community discussion. Comments MUST be displayed directly under the post (not just on GitHub).

## 4. Execution Workflow & strict Content Rules
- **DO NOT alter the user's provided content text.** You are formatting his drafts, NOT rewriting them. Keep his exact wording and explanations. Your job is ONLY to add formatting (HTML tags, bold/italic, lists), tooltips for jargon, and interactive code playgrounds.
- When he provides a draft, YOU must format it completely into the final HTML file using these guidelines, ensuring images, code blocks (using `<pre><code>`), and alerts are beautifully styled.
- **SITEMAP UPDATE (CRITICAL):** Every single time you create a new blog HTML file, you MUST immediately edit `sitemap.xml` in the root directory and append a new `<url>` block for the new blog post so Google crawls it.
- Provide him with the final HTML, or create the file directly in the `blog/` folder and push to GitHub if instructed.
