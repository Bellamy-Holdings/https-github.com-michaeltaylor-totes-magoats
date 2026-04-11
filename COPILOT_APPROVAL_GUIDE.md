# 🤖 How to Approve Copilot to Work on Your Site

This guide walks you through everything you need to do — step by step, no technical knowledge required — to let Copilot make changes to your **Totes Ma'Goats** website.

---

## Part 1 — How to Approve the Confirmation Prompt

Every time you ask Copilot to make a change, GitHub shows you an approval dialog before anything happens. **This is the most important step.**

### What it looks like
You'll see a message in the Copilot chat that says something like:

> *"Confirm agent session"*  
> or  
> *"@Copilot Accepted Confirmation"*

### What to do
1. **Read the prompt** (it's usually just one or two lines).
2. Click the **"Accept"** button (sometimes labelled **"Confirm"** or shown as a green check).
3. That's it. Copilot now has permission to create a branch and start making your requested changes.

> ⚠️ **If you don't click Accept**, Copilot can only *describe* what it would do — it can't actually touch any files.

---

## Part 2 — Where to Find Your Copilot Tasks and Pull Requests

After you accept the confirmation, Copilot starts working. Here's where to check on it.

### Option A — Follow the task link in chat
Copilot will post a link in the chat window that looks like:

```
https://github.com/copilot/tasks/...
```

Click that link to see a live progress view. You can watch Copilot making edits in real time.

### Option B — Go directly to the Pull Requests tab
1. Open your browser and go to:  
   **[https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/pulls](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/pulls)**
2. You'll see a list of open Pull Requests (PRs). Each one represents a set of proposed changes.
3. Click any PR title to open it and see what Copilot changed.

> 💡 **Tip:** The PR list shows only changes that haven't been merged yet. If you recently merged something, you won't see it here (it's in the "Closed" tab instead).

---

## Part 3 — How to Verify the Agent Is Running

### Check the task page
After clicking the task link, look for one of these status messages near the top:

| Status you see | What it means |
|---|---|
| ⏳ **"In progress"** or spinning wheel | Copilot is actively making changes — just wait |
| ✅ **"Completed"** | Copilot finished — a Pull Request is ready for you to review |
| ❌ **"Failed"** or red dot | Something went wrong — see Part 5 below |

### Check the Pull Requests tab
1. Go to the **Pull requests** tab (link in Part 2, Option B above).
2. If you see a PR with Copilot's name on it, the agent ran successfully.
3. Open the PR and click **"Files changed"** to see exactly what was edited.

---

## Part 4 — How to Grant Required Permissions

If you see a message saying Copilot can't make changes, or if the approval prompt never appears, one of the following settings may need to be adjusted.

### 4a — Check your Copilot subscription
1. Go to: **[https://github.com/settings/copilot](https://github.com/settings/copilot)**
2. Confirm that Copilot is **active** (it should show your plan — Individual, Business, or Enterprise).
3. If not active, follow the prompts to subscribe or re-enable it.

### 4b — Check Copilot is enabled for the Bellamy-Holdings organization
1. Go to: **[https://github.com/organizations/Bellamy-Holdings/settings/copilot/policies](https://github.com/organizations/Bellamy-Holdings/settings/copilot/policies)**
2. Make sure **"GitHub Copilot"** is set to **Enabled** (not "Disabled").
3. Also confirm the **"Copilot coding agent"** toggle is **on**.
4. Click **Save** if you made any changes.

### 4c — Check repository Actions permissions
1. Go to: **[https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/settings/actions](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/settings/actions)**
2. Under **"Actions permissions"**, select **"Allow all actions and reusable workflows"**.
3. Under **"Workflow permissions"**, select **"Read and write permissions"**.
4. Click **Save**.

### 4d — Make sure the repo is not archived (read-only)
1. Go to: **[https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/settings](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/settings)**
2. Scroll to the very bottom (**"Danger Zone"** section).
3. If you see a button that says **"Unarchive this repository"**, click it — an archived repo can't be edited by anyone, including Copilot.

---

## Part 5 — What to Do If Approvals Aren't Appearing or Actions Are Blocked

### If you never see an approval prompt
| Symptom | What to try |
|---|---|
| Copilot only explains changes but never starts working | Type your request again and watch for a new prompt — it may have been missed |
| Chat shows "Copilot is not available for this repository" | Check your Copilot subscription (Part 4a) and org settings (Part 4b) |
| No task link appears after you accept | Wait 30 seconds, then refresh the page — it sometimes takes a moment |

### If the PR is blocked from merging
Branch protection rules on `main` may require extra steps before you can merge. Here's what each one means:

| Message you see on the PR | What it means | What to do |
|---|---|---|
| **"Review required"** | Someone needs to approve the PR | Click **"Add your review"** → select **"Approve"** → click **"Submit review"** |
| **"Checks haven't passed"** or **"Some checks were not successful"** | Automated tests are failing | Click **"Details"** next to the failing check to see the error, or ask Copilot in chat |
| **"This branch is out-of-date with the base branch"** | Newer changes exist on `main` that this PR doesn't have | Click **"Update branch"** button on the PR page |
| **"Merging is blocked"** | A required check or review is pending | Complete the step shown — usually a review approval or passing a check |

### If a task link leads to a blank or error page
The agent session may have expired. Simply:
1. Go back to the Copilot chat.
2. Type your request again (e.g., "Please make the same changes as before").
3. Accept the new confirmation prompt.

---

## Quick Reference Checklist

Before starting an agent session, confirm all of these:

- [ ] You have an active GitHub Copilot subscription ([check here](https://github.com/settings/copilot))
- [ ] Copilot is enabled for the **Bellamy-Holdings** organization ([check here](https://github.com/organizations/Bellamy-Holdings/settings/copilot/policies))
- [ ] GitHub Actions are enabled with **Read and write** permissions ([check here](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/settings/actions))
- [ ] The repository is **not archived** ([check here](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/settings))
- [ ] You are ready to click **"Accept"** on the confirmation prompt when it appears

---

## Useful Links (Bookmark These!)

| What | Link |
|---|---|
| Your repository | [github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats) |
| Open Pull Requests | [.../pulls](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/pulls) |
| Repository Settings | [.../settings](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/settings) |
| Copilot subscription settings | [github.com/settings/copilot](https://github.com/settings/copilot) |
| Org Copilot settings | [Bellamy-Holdings org Copilot policies](https://github.com/organizations/Bellamy-Holdings/settings/copilot/policies) |
| Actions settings | [.../settings/actions](https://github.com/Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats/settings/actions) |

---

*This guide is specific to the **Bellamy-Holdings/https-github.com-michaeltaylor-totes-magoats** repository.*
