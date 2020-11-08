### Github Getting Fancy

8. Create a Pull Request (PR)

A pull request (or PR) is a way to alert a repo's owners that you want to make some changes to their code. It allows them to review the code and make sure it looks good before putting your changes on the master branch.

You might see a big green button at the bottom that says 'Merge pull request'. Clicking this means you'll merge your changes into the master branch.

Note that this button won't always be green. In some cases it'll be grey, which means you're faced with a merge conflict. This is when there is a change in one file that conflicts with a change in another file and git can't figure out which version to use. You'll have to manually go in and tell git which version to use.

Sometimes you'll be a co-owner or the sole owner of a repo, in which case you may not need to create a PR to merge your changes. However, it's still a good idea to make one so you can keep a more complete history of your updates and to make sure you always create a new branch when making changes.

9. Merge a PR
   Go ahead and click the green 'Merge pull request' button. This will merge your changes into the master branch.

> When you're done, I recommend deleting your branch (too many branches can become messy), so hit that grey 'Delete branch' button as well.
> You can double check that your commits were merged by clicking on the 'Commits' link on the first page of your new repo.
> This will show you a list of all the commits in that branch. You can see the one I just merged right up top (Merge pull request #2).

You can also see the hash code of the commit on the right hand side. A hash code is a unique identifier for that specific commit. It's useful for referring to specific commits and when undoing changes (use the git revert <hash code number> command to backtrack).

10. Get changes on GitHub back to your computer
    Right now, the repo on GitHub looks a little different than what you have on your local machine. For example, the commit you made in your branch and merged into the master branch doesn't exist in the master branch on your local machine.

> In order to get the most recent changes that you or others have merged on GitHub, use the git pull origin master command (when working on the master branch).

`\$ git pull origin master

remote: Counting objects: 1, done.

remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0

Unpacking objects: 100% (1/1), done.`
From https://github.com/cubeton/mynewrepository

- branch master -> FETCH_HEAD
  b345d9a..5381b7c master -> origin/master
  Merge made by the 'recursive' strategy.
  myproject.py | 1 +
  1 file changed, 1 insertion(+)

This shows you all the files that have changed and how they've changed.

Now we can use the git log command again to see all new commits.

(You may need to switch branches back to the master branch. You can do that using the git checkout master command.)

\$ git log
commit 6e270786db0e5ffd3e2cfc5edede89b64b83762c
Merge: 4f1cb17 5381b7c
Author: Your Name <your_email@yourdomain.com>
Date: Fri Sep 11 17:48:11 2015 -0400

    Merge branch 'master' of https://github.com/cubeton/mynewrepository

commit 4f1cb1798b6e6890da797f98383e6337df577c2a
Author: Your Name <your_email@yourdomain.com>
Date: Fri Sep 11 17:48:00 2015 -0400

    added a new file

commit 5381b7c53212ca92151c743b4ed7dde07d9be3ce
Merge: b345d9a 1e8dc08
Author: Your Name <your_email@yourdomain.com>
Date: Fri Sep 11 17:43:22 2015 -0400

    Merge pull request #2 from yourname/my-newbranch

    Added some more text to my file

commit 7e8cc0830b4db8c44efd80479ae886782768933d
Author: Your Name <your_email@yourdomain.com>
Date: Fri Sep 11 17:06:05 2015 -0400

Added some more text to my file

commit b345d9a25353037afdeaa9fcaf9f330effd157f1
Author: Your Name <your_email@yourdomain.com>
Date: Thu Jan 10 17:42:15 2019 -0400

This is my first commit!

Step 11: Bask in your git glory
You've successfully made a PR and merged your code to the master branch. Congratulations! If you'd like to dive a little deeper, check out the files in this Git101 folder for even more tips and tricks on using git and GitHub.

I also recommend finding some time to work with your team on simulating a smaller group project like we did here. Have your team make a new folder with your team name, and add some files with text to it. Then, try pushing those changes to this remote repo. That way, your team can start making changes to files they didn't originally create and practice using the PR feature. And, use the git blame and git history tools on GitHub to get familiar with tracking which changes have been made in a file and who made those changes.

The more you use git, the more comfortable you'll... Don’t git got. (I know terrible joke.)
