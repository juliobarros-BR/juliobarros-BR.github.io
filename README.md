# Local website preview

From this repository, run:

```bash
bash preview.sh
```

In VS Code, run **Simple Browser: Show** from the Command Palette and enter
**http://localhost:4001**. If using Remote SSH, forward port 4001 in the Ports panel.

## Edit the website copy

Edit the Markdown files in [`_includes/copy/`](_includes/copy/). Jekyll renders
them into the existing page layouts.

| Copy | Markdown files |
| --- | --- |
| Homepage | `home-intro.md` |
| Web CV | `web-cv.md` |
| Publications | `publications.md` |
| Ongoing wood mechanics research | `wood-mechanics-analysis.md` |
| Personal projects | `sambagasse.md`, `sambagasse-studio.md`, `job-view.md`, `estrasse.md` |

Use Markdown for headings, paragraphs, emphasis, and links. Keep a blank line
between paragraphs. Project lists and their metadata live in
`_data/research.yml`, `_data/additional_research.yml`, and `personal.md`. Page structure
lives in the top-level pages and `_layouts/default.html`. Styles live in
`assets/css/custom.css`.

Jekyll rebuilds when these files change. Refresh your browser to see the update.
Restart the server after editing `_config.yml`. Press Ctrl+C in the server
terminal to stop it.

The generated HTML is in `_site/`. Edit the source files rather than this output.
Generated output and installed dependencies are ignored by Git.

## Dependencies

This workstation's temporary Ruby environment is `/tmp/julio-website-preview-env`;
`preview.sh` uses it automatically when present. It may need to be recreated
after a reboot. Alternatively, with Ruby and Bundler installed:

```bash
bundle config set --local path vendor/bundle
bundle install
bash preview.sh
```

Set `WEBSITE_RUBY_PREFIX` to use a different Ruby environment directory.
