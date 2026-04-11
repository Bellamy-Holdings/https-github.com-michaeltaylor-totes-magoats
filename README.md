# Totes Ma'Goats — Site Owner Guide

This is the source code for the **Totes Ma'Goats** website, hosted on GitHub Pages.

**Repository:** `Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats`  
**Main branch:** `main` (this is the live site)

---

## 🙋 How Copilot Makes Changes to Your Site

When Copilot (or any developer) makes a change to your website, GitHub uses a two-step safety process: a **branch** and a **pull request**. Here's what those mean in plain language.

---

### 🌿 What Is a Branch?

Think of your website like a published book. The `main` branch is the final, printed copy that everyone reads when they visit your site.

A **branch** is like a photocopy of that book that someone can safely mark up, edit, and test — without touching the real published copy. If the edits look good, you can stamp them "approved" and apply them to the real book. If something goes wrong, you simply throw away the photocopy and nothing on the live site was ever affected.

**In practice:** When Copilot starts working on a change (e.g., adding a ZIP code tooltip), it creates a new branch — a safe working copy of your site — and makes all its edits there. Your live site stays exactly as it is until you approve the change.

---

### 📋 What Is a Pull Request (PR)?

A **pull request** is Copilot's way of saying: *"Hey, I made some changes on that safe copy. Here they are — want to review and approve them before they go live?"*

It's like a tracked-changes document in Google Docs or Microsoft Word. You can:
- See exactly what was added, changed, or removed (line by line)
- Leave comments or ask questions
- Approve it so it goes live
- Or close it without applying it, if you change your mind

**A pull request does not change your live site until you merge it.**

---

### 🔐 Why Does Copilot Ask for Confirmations?

When you see a prompt like *"Confirm agent session"* or an approval dialog, that's GitHub asking: **"Do you give Copilot permission to create a branch and start making edits right now?"**

This exists to protect you. Copilot can only push commits and open pull requests when you explicitly authorize it. Without that approval:
- Copilot can explain what it *would* do, but can't actually touch the code
- No branches are created, no files are changed

**Think of it like a contractor calling to confirm before entering your home.** Once you say yes, they can get to work. You can still review everything before it's finalized.

---

### ✅ Step-by-Step: Getting a Change Made and Published

Here's the full process from request to live site:

#### Step 1 — Tell Copilot what you want
In the Copilot chat, describe the change in plain language. For example:
> "Add a message that tells visitors their ZIP code is outside the delivery area."

#### Step 2 — Accept the confirmation prompt
GitHub will show an approval dialog. Click **Accept** (or "Confirm agent session"). This gives Copilot permission to create a branch and start editing.

#### Step 3 — Wait for Copilot to open a Pull Request
Copilot will:
1. Create a new branch (a safe copy of your site)
2. Make the requested changes
3. Open a **pull request** for you to review

You'll get a link to the PR in the chat, and also a notification in GitHub.

#### Step 4 — Review the Pull Request
Click the PR link. You'll land on a page that looks like this:

- **"Files changed" tab** — Click this to see exactly what Copilot edited. Green lines were added; red lines were removed.
- **Description** — Copilot usually explains what it changed and why.
- **Conversation tab** — Where you can leave comments or questions.

#### Step 5 — Approve and Merge
When you're happy with the changes:
1. Scroll to the bottom of the PR page
2. Click the green **"Merge pull request"** button
3. Click **"Confirm merge"**

That's it — your changes are now live on the website within a minute or two (GitHub Pages rebuilds automatically).

#### Step 6 — Optional: Delete the Branch
After merging, GitHub will offer to delete the working branch. It's safe to click **"Delete branch"** — the changes are already saved in `main`.

---

### 📍 Where to Click in the GitHub UI

| What you want to do | Where to click |
|---|---|
| See all open PRs | Go to `https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats` → click **"Pull requests"** tab |
| See what files changed | Inside a PR → click the **"Files changed"** tab |
| Approve and publish changes | Inside a PR → scroll to bottom → click green **"Merge pull request"** → **"Confirm merge"** |
| Close a PR without applying it | Inside a PR → scroll to bottom → click **"Close pull request"** |
| Check if your site is live | Visit your site URL — changes usually appear within 1–2 minutes of merging |

---

### 💡 Quick Summary

| Term | Plain English |
|---|---|
| **Branch** | A safe copy of your site to edit, without touching the live version |
| **Pull Request (PR)** | A proposed change — shows you exactly what's different before you approve it |
| **Merge** | Applying the approved change so it goes live on your site |
| **Confirmation prompt** | GitHub asking your permission before Copilot starts making edits |

---

*This guide is specific to the `Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats` repository and GitHub Pages workflow.*
