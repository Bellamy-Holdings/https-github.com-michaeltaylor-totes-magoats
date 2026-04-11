# Enabling GitHub Copilot Coding Agent for This Repository

This guide explains how to allow the **GitHub Copilot coding agent** to make changes to this repository through pull requests (PRs).

---

## How the Copilot Coding Agent Works

The Copilot coding agent never pushes code directly to your `main` branch. Its workflow is always:

1. You request a change in the Copilot chat (e.g., "add a ZIP code tooltip").
2. You **accept the confirmation prompt** that appears in the chat (the "Confirm agent session" dialog).
3. The agent creates a **new branch** in this repository, commits the changes, and opens a **pull request** targeting `main`.
4. A task link appears in the chat (e.g., `https://github.com/copilot/tasks/pull/...`). Click it to watch progress in real time.
5. Once the agent finishes, you **review the PR** on GitHub and merge it when you are satisfied.

The agent cannot merge PRs on its own — **you always have the final say**.

---

## Step-by-Step: Reviewing and Merging a Copilot PR

1. **Open the task link** shown in the chat.  
   It looks like: `https://github.com/copilot/tasks/pull/PR_kwD…`  
   This brings you to a live progress view. When the agent finishes, it turns into a normal GitHub pull request.

2. **Click "View pull request"** (or navigate directly to the **Pull requests** tab of this repository).

3. Review the **Files changed** tab to see exactly what the agent modified.

4. If everything looks good, click **Merge pull request → Confirm merge**.

5. If you want changes, leave a comment on the PR or ask the agent in chat — it can push additional commits to the same branch.

---

## Required Permissions and Settings

### 1 — Repository access

| Requirement | Where to check |
|---|---|
| You must be the repository **owner** or have **Write** (or higher) access | **Settings → Collaborators and teams** |
| The repository must **not be archived** (read-only) | **Settings → General → Danger Zone → Archive this repository** |

### 2 — GitHub Copilot subscription

| Requirement | Where to check |
|---|---|
| You need an active **GitHub Copilot** subscription (Individual, Business, or Enterprise) | [github.com/settings/copilot](https://github.com/settings/copilot) |
| If this repository belongs to an organization, Copilot must be **enabled for the org** | **Organization Settings → Copilot → Policies** |
| The **"Copilot coding agent"** (formerly "Copilot Workspace") feature must be enabled for your account or org | Same Copilot settings page |

### 3 — GitHub Actions permissions

The agent uses GitHub Actions to run any automated checks on PRs. Confirm Actions are enabled:

1. Go to **Settings → Actions → General**.
2. Under **Actions permissions**, select **Allow all actions and reusable workflows** (or at minimum allow actions from GitHub).
3. Under **Workflow permissions**, set **Read and write permissions** so the agent can create branch refs and PRs.

### 4 — Branch protection rules (optional but common)

Branch protection rules on `main` are fine — they do **not** prevent the agent from opening a PR. They may require:

- A required pull request review before merging → you just approve the PR yourself.
- Required status checks (CI) → Actions must be enabled and the checks must pass.
- "Restrict who can push to matching branches" → the agent pushes to a *new* branch, not `main`, so this is not an issue.

To review your rules: **Settings → Branches → Branch protection rules**.

---

## Quick Checklist Before Starting an Agent Session

- [ ] You have an active GitHub Copilot subscription.
- [ ] You are the repo owner or have Write access.
- [ ] The repository is **not archived**.
- [ ] GitHub Actions are **enabled** with **Read and write** workflow permissions.
- [ ] You are ready to **click "Accept"** on the Copilot confirmation prompt in chat.

Once all boxes are checked, start a Copilot chat session, describe the change you want, accept the confirmation, and follow the task link to watch the agent work.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Agent describes changes but never opens a PR | Session confirmation was not accepted | Look for the "Confirm agent session" prompt and click **Accept** |
| Task link leads to a blank or error page | PR was closed or the session expired | Start a new session in chat |
| PR is opened but checks are failing | GitHub Actions not enabled or permissions too restrictive | Enable Actions + set Read/write permissions (see above) |
| "Copilot is not available for this repository" | Copilot not enabled for your account or org | Enable Copilot in [account/org settings](https://github.com/settings/copilot) |
| Branch protection blocks the merge | Required reviews or status checks pending | Approve the PR and/or wait for CI checks to pass |
