- Copy a repo locally

`git clone https://github.com/username/repo_name`

- Add a file that you have created or made changes to git add name_of_file.py

- Commit your changes with a comment before they are pushed`

`git commit -m "this is a new file added to the repo"`

- Push your code to your repo

`git push`

- To view your current git configuration

`git config --list`


1. Create a local git repository
   When creating a new project on your local machine using git, you'll first create a new repository (or often, 'repo', for short).

To use git we'll be using the terminal. To begin, open up a terminal and move to where you want to place the project on your local machine using the cd (change directory) command. For example, if you have a 'projects' folder on your desktop, you'd do something like:

$ cd ~/Desktop
$ mkdir myproject
\$ cd myproject/

To initialize a git repository in the root of the folder, run the git init command:

\$ git init

2. Add a new file to the repo
   Go ahead and add a new file to the project, using any text editor you like or running a touch command or using any other text editor

Once you've added or modified files in a folder containing a git repo, git will notice that changes have been made inside the repo. But, git won't officially keep track of the file (that is, put it in a commit.

$ touch myproject.py or use a text editor to create the file and save it to the location
$ ls or dir (depending on the OS you are using)

After creating the new file, you can use the git status command to see which files git knows exist.

\$ git status
On branch master
Initial commit
Untracked files:
(use "git add <file>..." to include in what will be committed)

myproject.py

What this basically says is, "Hey, we noticed you created a new file called myproject.py, but unless you use the 'git add' command we aren't going to do anything with it."

The staging environment, the commit, are one of the most confusing parts when you're first learning git is the concept of the staging environment and how it relates to a commit.

A commit is a record of what files you have changed since the last time you made a commit. Essentially, you make changes to your repo (for example, adding a file or modifying one) and then tell git to put those files into a commit.

Commits make up the essence of your project and allow you to go back to the state of a project at any point.

So, how do you tell git which files to put into a commit? This is where the staging environment or index come in. As seen in Step 2, when you make changes to your repo, git notices that a file has changed but won't do anything with it (like adding it in a commit).

To add a file to a commit, you first need to add it to the staging environment. To do this, you can use the git add <filename> command (see Step 3 below).

Once you've used the git add command to add all the files you want to the staging environment, you can then tell git to package them into a commit using the git commit command.

Note: The staging environment, also called 'staging', is the new preferred term for this, but you can also see it referred to as the 'index'.

3. Add a file to the staging environment
   Add a file to the staging environment using the git add command.

If you rerun the git status command, you'll see that git has added the file to the staging environment (notice the "Changes to be committed" line).

\$ git status
On branch master

Initial commit

Changes to be committed:
(use "git rm --cached <file>..." to unstage)

    new file:   myproject.py

To reiterate, the file has not yet been added to a commit, but it's about to be.

4. Create a commit
   It's time to create your first commit!

Run the command git commit -m "Your message about the commit"

\$ git commit -m "This is my first commit!"
[master (root-commit) a694n2c] This is my first commit!
1 file changed, 1 insertion(+)
create mode 39904 myproject.py

The message at the end of the commit should be something related to what the commit contains - maybe it's a new feature, maybe it's a bug fix, maybe it's just fixing a typo. Don't put a message like "dumb code" or "blah blah blah". That makes the other people who see your angry.

Adding files and committing them to your branch. This is a brief list of command to add a file to your branch and push it to Github

git clone https://github.com/username/branch_name (Clone your branch to a directory on your system)
git add filename.py (add a file to your branch.. Please make sure you are in the directory or you specify the path to your directory when using the git add command)
git commit -m "Good description of commit" (command to commit to files to your local repo)
git push (push the files from your local repo to Github so they are committed to your branch)

Git Continued
Here are some more advanced concepts once you master the process of adding, deleting, and changing files

5. Create a new branch
   Now that you've made a new commit, let's try something a little more advanced.

Say you want to make a new feature but are worried about making changes to the main project while developing the feature. This is where git branches come in.
Branches allow you to move back and forth between 'states' of a project. For instance, if you want to add a new page to your website you can create a new branch just for that page without affecting the main part of the project. Once you're done with the page, you can merge your changes from your branch into the master branch. When you create a new branch, Git keeps track of which commit your branch 'branched' off of, so it knows the history behind all the files.

Let's say you are on the master branch and want to create a new branch to develop your web page. Here's what you'll do: Run git checkout -b <my branch name>. This command will automatically create a new branch and then 'check you out' on it, meaning git will move you to that branch, off of the master branch.

After running the above command, you can use the git branch command to confirm that your branch was created:

\$ git branch
master

- my-website-branch

The branch name with the asterisk next to it indicates which branch you're pointed to at that given time.

Now, if you switch back to the master branch and make some more commits, your new branch won't see any of those changes until you merge those changes onto your new branch.

6. Create a new repository on GitHub

If you only want to keep track of your code locally, you don't need to use GitHub. But if you want to work with a team, you can use GitHub to collaboratively modify the project's code.

To create a new repo on GitHub, log in and go to the GitHub home page. You should see a green '+ New repository' button:

GitHub will ask if you want to create a new repo from scratch or if you want to add a repo you have created locally. In this case, since we've already created a new repo locally, we want to push that onto GitHub so follow the '....or push an existing repository from the command line' section:

(You'll want to change the URL in the first command line to what GitHub lists in this section since your GitHub username and repo name are different.)

7. Push a branch to GitHub
   Now we'll push the commit in your branch to your new GitHub repo. This allows other people to see the changes you've made. If they're approved by the repository's owner, the changes can then can be merged into the master branch.

To push changes onto a new branch on GitHub, you'll want to run git push origin yourbranchname. GitHub will automatically create the branch for you on the remote repository:

\$ git push origin my-website-branch
Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 313 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/yourname/mynewrepository.git

- [new branch] my-website-branch -> my-website-branch

You might be wondering what that "origin" word means in the command above. What happens is that when you clone a remote repository to your local machine, git creates an alias for you. In nearly all cases this alias is called "origin." It's essentially shorthand for the remote repository's URL. So, to push your changes to the remote repository, you could've used either the command: git push git@github.com:git/git.git yourbranchname or git push origin yourbranchname

(If this is your first time using GitHub locally, it might prompt you to log in with your GitHub username and password.)

If you refresh the GitHub page, you'll see note saying a branch with your name has just been pushed into the repository. You can also click the 'branches' link to see your branch listed there.

Now click the green button in the screenshot above. We're going to make a pull request!

