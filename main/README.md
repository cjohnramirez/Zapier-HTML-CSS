# main
# Zapier HTML/CSS — Landing + Lead Form

A small responsive landing page with a modal lead-capture form that posts directly to a Zapier webhook.

Key files
- `index.html` — landing page and modal wrapper for the form.
- `style.css` — styles for the landing, modal and form (responsive).
- `form.js` — client-side validation, modal open/close, and POST to your Zapier webhook.
- `index.js` — (Zapier project placeholder / server-side integration files).

Quick start
- Open `main/index.html` in a browser or serve the `main/` folder with a static server:
	- PowerShell: `python -m http.server 8000`
	- Node (recommended): `npx http-server -p 8000`
- Click "Get Started" to open the modal form.

Configuration
- Replace the placeholder Zapier URL in `form.js` (search for `YOUR_ZAPIER_HOOK_ID`) with your Zapier Catch Hook URL.

Behavior & notes
- The modal supports overlay click, the × button, and Escape to close. While open, background decorations are suppressed for clarity.
- The form performs minimal client-side validation (name + email) and shows status messages.
- To test submissions without Zapier, open the browser devtools Network tab and watch the outgoing POST.

License
- No license specified.
zapier scaffold create contact
