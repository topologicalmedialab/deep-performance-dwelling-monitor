# Contributing Guidelines

- [Development Flow](#development-flow)
    - [Branch Naming Convention](#branch-naming)
    - [Commit Messages Convention](#commit-messages)
- [Submitting Pull Requests](#pull-requests)


<br/>
<a name="development-flow"></a>
## Development Flow

0. Always branch off of the `develop` branch. Make sure that you have checked out the latest version beforehand.

0. Create a feature branch for the task to accomplish. See the [Branch Naming Convention](#branch-naming). This step is ideal, but not mandatory.

0. Update the code according and create a commit. See the [Commit Messages Convention](#commit-messages).

0. Once the work is completed, submit a pull request towards the `develop` branch. See [Submitting Pull Requests](#pull-requests).


<br/>
<a name="branch-naming"></a>
### Branch Naming Convention

Branch names should be a few descriptive words to help distinguish the branch by area of focus. Branch names must be in lowercase with dashes.

Ideally, all branches should be related to a Github issue.

```
// DO:
name-of-feature
```

```
// DON'T (wrong case, too long):
The_Entire_Summary_Of_Issue_Which_Happens_To_Be_Like_Twenty_Words
```


<br/>
<a name="commit-messages"></a>
### Commit Messages Convention

A commit message's intial line should provide a summary in the past tense, and should be 50 characters or less. If the work is related to a Github issue (which is ideal), ensure to append the line with the issue number.

Further description is encouraged, and may take place in subsequent lines below the summary.

```
// DO:
Added new component

Very brief information about this commit - what it does, if it breaks things,
anything that would be truly beneficial for future reference. We're not
documenting code here - keep it extremely high level. Short and sweet.
```

```
// DON'T (wrong case, wrong tense, too long):
add this component and format some weird looking code that looked weird
```


<br/>
<a name="pull-requests"></a>
### Submitting Pull Requests (PR)

Once the work on your branch is complete, make sure to pull from the latest `develop` branch and fix any conflict if necessary.

0. Open the PR against `develop`. All pull requests should target `develop`, unless otherwise requested.  
_Important:_ do not commit the compiled files, only the changed source files.

0. The PR will be reviewed by a collaborator.

0. If changes are needed, comments will be made in the PR.

0. Make the changes and push to the PR.

0. The PR will be merged onto `develop`.