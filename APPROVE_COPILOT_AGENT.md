# How to Approve Copilot to Work in This Repository

This guide walks you through every click needed to get Copilot working in a chat session — from making sure you're in the right account all the way to verifying the agent is actively running.

---

## Step 1 — Make Sure You Are Signed Into the Right GitHub Account

1. Open a new browser tab and go to [github.com](https://github.com).
2. Look at the **top-right corner** of the page.
   - You should see a small **profile picture** (your avatar).
   - Click it. A small menu drops down.
3. At the very top of that menu you will see the account name (e.g. `Bellamy-Holdings` or your personal username).
4. Confirm it matches the account that **owns this repository**.
   - If it does not match, click **Sign out**, then sign back in with the correct account.

> **Why this matters:** Copilot must be enabled for the account that owns the repo. If you're signed into the wrong account, the approval button may not appear at all.

---

## Step 2 — Open the Copilot Chat and Find the Task/PR Link

When you ask Copilot to make a change, the very next thing that happens in the chat is:

1. Copilot shows a **gray confirmation box** (sometimes called the "agent session" dialog). It looks similar to this:

   > *Copilot wants to create a branch and make changes to your repository.*  
   > **[Accept]**   **[Dismiss]**

2. This box appears **directly in the chat window** — you do not need to leave the page.

3. **Click "Accept"** (or "Confirm agent session" — the exact wording may vary, but it is always the affirmative button in that box).

4. After you click Accept, Copilot will post a **task link** in the chat. It looks like:

   ```
   https://github.com/copilot/tasks/...
   ```

   Click that link to follow along in real time.

> **If you never see the gray box:** Scroll up in the chat — it may have appeared above your most recent message. If it is still not there, Copilot may have already timed out. Just re-send your request and the box will appear again.

---

## Step 3 — Verify the Agent Is Actively Running

After clicking Accept, use these checkpoints to confirm the agent is working:

### A — The task link shows a status badge

Click the task link Copilot posted. You will see a page with a badge that says one of:

| Badge text | What it means |
|---|---|
| **Queued** | Agent is about to start — normal, wait a moment |
| **In progress** | Agent is actively making changes — everything is working |
| **Completed** | Agent finished — go review the PR |
| **Failed** | Something went wrong — see Troubleshooting below |

### B — A Pull Request appears in the repository

1. Go to your repository: [github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats)
2. Click the **Pull requests** tab.
3. You should see a new PR created by `copilot` (or `github-actions`). Its title will describe the change you requested.
4. Open that PR. Near the top you will see one of:
   - **"Open"** (green label) — ready for your review
   - **"Draft"** (gray label) — agent is still working, or the PR needs to be marked "Ready for review" before you can merge

### C — Checks are running on the PR

Inside the open PR, scroll down to the section that shows **"Checks"** (sometimes labeled **"All checks have passed"** or **"Checks pending"**). If you see spinning icons or green checkmarks, the automated tests are running or have passed.

---

## Step 4 — Review and Merge the PR

Once the agent finishes and the PR is **Open** (not Draft):

1. Click **Files changed** and look over what Copilot changed.
2. If everything looks right, scroll to the bottom and click the green **Merge pull request** button.
3. Click **Confirm merge**.

Your changes are now live — GitHub Pages rebuilds automatically (usually within 1–2 minutes).

After merging, GitHub will offer to **Delete branch** — it is safe to click that.

---

## Common Blockers and How to Fix Them

### 🔴 The PR says "Draft" and there is no Merge button

**What happened:** The agent opened a Draft PR (a "work in progress" marker). It cannot be merged while it is a Draft.

**Fix:**
1. Open the PR.
2. Scroll down to the bottom of the Conversation tab.
3. Click the **"Ready for review"** button (gray, near the bottom).
4. The Merge button will now appear.

---

### 🔴 The confirmation prompt in chat never appeared (or disappeared before I clicked it)

**What happened:** The session confirmation timed out, or it appeared above the chat scroll position.

**Fix:**
1. Scroll up in the chat — the gray confirmation box may be above your latest message.
2. If it is gone, simply re-send your request to Copilot. A new confirmation box will appear.

---

### 🔴 Checks are failing (red ✗ on the PR)

**What happened:** GitHub Actions ran an automated check and it did not pass. This can happen if Actions are disabled or have the wrong permissions.

**Fix:**
1. Go to **Settings → Actions → General** in your repository.
2. Under **Actions permissions**, select **Allow all actions and reusable workflows**.
3. Under **Workflow permissions**, select **Read and write permissions**.
4. Click **Save**.
5. Go back to the PR and click **Re-run all jobs** (or ask Copilot in chat to push a new commit, which will re-trigger the checks).

---

### 🔴 "Copilot is not available for this repository"

**What happened:** Copilot is not enabled for this account or organization.

**Fix:**
1. Go to [github.com/settings/copilot](https://github.com/settings/copilot).
2. Make sure you have an active Copilot subscription.
3. If the repository is inside an organization (like `Bellamy-Holdings`), also check **Organization Settings → Copilot → Policies** and confirm Copilot is enabled for members.

---

### 🔴 "You don't have permission to merge" or Merge button is grayed out

**What happened:** Your GitHub account does not have **Write** (or higher) access to this repository.

**Fix:**
1. Go to **Settings → Collaborators and teams** in the repository.
2. Confirm your account is listed with **Write**, **Maintain**, or **Admin** access.
3. If you are the owner (`Bellamy-Holdings`), you already have full access — check that you are signed into the right account (see Step 1).

---

## Quick Reference Checklist

Before starting a Copilot session, run through this list:

- [ ] I am signed into GitHub as the correct account (top-right corner shows the right name).
- [ ] I have an active GitHub Copilot subscription.
- [ ] GitHub Actions are **enabled** with **Read and write** workflow permissions.
- [ ] I know to look for the gray **"Accept / Confirm agent session"** box in the chat.
- [ ] I know that a **Draft PR** needs to be changed to **"Ready for review"** before I can merge.

---

*This guide is specific to the `Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats` repository.*
