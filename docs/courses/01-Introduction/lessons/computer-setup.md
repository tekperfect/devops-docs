# **📋 Dev Ops: Computer Setup**

1. [👋 Welcome](#👋-welcome)
1. [📦 Package Manager](#📦-package-manager)
1. [⬛ Terminal](#⬛-terminal)
1. [📁 Explorer](#📁-explorer)
1. [🚀 Git](#🚀-git)



## 👋 Welcome

Welcome to the Tekperfect: DevOps program. This will be the start of your learning journey to
becoming a fellow DevOps Engineer. However before every great journey we need to prepare, here is a step to step guide to installing packanges, and preparing your computer for the journey ahead.

This setup guide will be along the lines of unix based system. But due to the recent addition of WSL you can follow along too.

## 📦 Package Manager

So first thing first let's install a package manager. Package managers are extremmly useful and allows us to install and appropiate tools and we'll be using [brew](https://brew.sh/)

Paste this in your macOS Terminal or Linux shell prompt.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Now that you have homebrew let's install all the other packages, and no worries we have a script for that!

```bash
curl -s -L https://raw.githubusercontent.com/alfonsoh/scripts/master/bash/devops-setup.sh | bash
```

This will install: `wget`, `caskroom/cask` , `docker`, `python3`, `git`, `kubernates`, and `virtual box` 


## ⬛ Terminal

You will be spending a lot of your time within the terminal so lets make the experince more enjoyable [ it'll make you look like a pro too! ]:

Let's install [`oh-my-zsh`](https://github.com/ohmyzsh/ohmyzsh)


**via curl**
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

More info on the [github page](https://github.com/ohmyzsh/ohmyzsh)

## 📁 Explorer

For MacOs students you can see hidden files and folder you will be working with all you have to do is go into finder and press `⌘ + LShift + .`

For Linunx students you can press `Crtl + H` in your finder

For Windows students you can follow these [instructions](https://support.microsoft.com/en-us/help/4028316/windows-view-hidden-files-and-folders-in-windows-10#:~:text=Open%20File%20Explorer%20from%20the,folders%2C%20and%20drives%20and%20OK.)

## 🚀 Git 

Git and Github are crucial to the development side of DevOps engineers. Here is a short [video](https://www.youtube.com/watch?time_continue=10&v=OqmSzXDrJBk&feature=emb_logo) that explains everything about git!

So if you havent already set up a [github account](https://github.com/join)

Now all we have to do is set up your git in your terminal

Do the folling:
```bash
git config --global user.name "NAME"
git config --global user.email "EMAIL"
```

Double Check your configs
```bash
git config --list
```

After we have that done, let's set up a secure way to update your projects with SSH keys:

Generate your ssh key [Explaination](https://www.appviewx.com/education-center/what-are-ssh-keys/i)

```bash
ssh-keygen -t rsa -C "EMAIL" -b 4096
```
**Use a password that you will remember**

Move into your `.ssh/` folder and type the following

```bash 
cat ~/.ssh/id_rsa.pub
```
Then we copy your key over to github in the [SSH and GPG keys section](https://github.com/settings/keys)

Enter a title and copy paste your **entire** ssh key ending with your email and tof inally check type:

```bash
ssh -T git@github.com
```
### [Return to OS Basics](courses/01-Introduction/home.md)
