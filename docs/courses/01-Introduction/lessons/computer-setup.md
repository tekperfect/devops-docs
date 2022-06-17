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

If you are running windows we recommend that you install the Chocolatey package manager which can be installed from here [chocolatey](https://chocolatey.org/install)

Now that you have homebrew or chocolatey installed let's install all the other packages, and no worries we have a script for that!

```bash
curl -s -L https://raw.githubusercontent.com/alfonsoh/scripts/master/bash/devops-setup.sh | bash
```

This will install: `wget`, `caskroom/cask` , `docker`, `python3`, `git`, `kubernates`, and `virtual box` 

In the Windows environment you can install most of the packages by running the following command after Chocolatey has been installed 

`choco install wget`
`choco install docker`
`choco install python`
`choco install git`
`choco install kubernetes-cli`


## ⬛ Terminal

You will be spending a lot of your time within the terminal so lets make the experince more enjoyable [ it'll make you look like a pro too! ]:

Let's install [`oh-my-zsh`](https://github.com/ohmyzsh/ohmyzsh)


**via curl**
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

For detailed instructions on setting up OHMYZSH follow steps 1-9 below

Step 1: Install Homebrew

Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple’s macOS.

Before installing Homebrew, we need to install the CLI tools for Xcode. Open your terminal and run the command:

Install Xcode

'xcode-select —-install'

Install Homebrew

'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'


Step 2: Install iTerm2

iTerm2 is a replacement for terminal and the successor to iTerm. Most software engineers prefer iTerm2 over the default terminal that ships with macOS as a result of its cool features. You can integrate zsh into iTerm2 to increase productivity.

'brew cask install iterm2'

Step 3: Install ZSH

Zsh is a shell designed for interactive use, although it is also a powerful scripting language.
By default, macOs ships with zsh located in/bin/zsh.
Let’s install zsh using brew and make iTerm2 use it.

'brew install zsh'

Step 4: Install Oh My Zsh

It runs on Zsh to provide cool features configurable within the ~/.zhrc config file. Install Oh My Zsh by running the command

'sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"'

Check the installed version

'zsh --version'

You can upgrade it to get the latest features it offers.

'upgrade_oh_my_zsh'

Step 5: Change the Default Theme

Oh My Zsh comes bundled with a lot of themes. The default theme is robbyrussell, but you can change it to any theme of your choice. In this scenario, I changed it to agnoster, an already pre-installed theme.

You then need to select this theme in your ~/.zshrc. To open the config file (.zshrc), run the command:

'nano ~/.zshrc'

Set the zsh theme and update your changes

'source ~/.zhrc'

Using a Custom Theme

To install another theme not pre-installed, clone the repository into custom/themesdirectory. In this scenario, we’ll install agnoster,

'$ git clone https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/agnoster.zsh-theme'

Then, select this theme in your ~/.zshrc

'ZSH_THEME="powerlevel9k/agnoster"'

Update your changes by running the command source ~/.zshrc

Navigate to iTerm2 > Preferences > Profiles > Colors if you wish to change the background color of the terminal.


Step 6: Install Fonts

'git clone https://github.com/powerline/fonts.git'

'cd fonts'

'./install.sh'

To change the font, navigate to iTerm2 > Preferences > Profiles > Text > Change Font.

Step 7: Install Color Scheme
Let’s change the color scheme to bring out the beauty of our terminal. Navigate to iTerm2-Color-Schemes and download the ZIP folder. Then, extract the downloaded folder cos what we need resides in the schemes folder.

Navigate to iTerm2 > Preferences > Profile > Colors > Color Presets > Import

Navigate to the schemes folder and select your preferred color schemes to import them.
Click on a specific color scheme to activate it. In this scenario.

You're done get back to work :-)


## 📁 Explorer

For MacOs students you can see hidden files and folder you will be working with all you have to do is go into finder and press `⌘ + LShift + .`

For Linunx students you can press `Crtl + H` in your finder

For Windows students you can follow these [instructions](https://support.microsoft.com/en-us/help/4028316/windows-view-hidden-files-and-folders-in-windows-10#:~:text=Open%20File%20Explorer%20from%20the,folders%2C%20and%20drives%20and%20OK.)

## 🚀 Git 

Git and Github are crucial to the development side of DevOps engineers. Here is a short [video](https://www.youtube.com/watch?time_continue=10&v=OqmSzXDrJBk&feature=emb_logo) that explains everything about git!

So if you havent already set up a [github account](https://github.com/join)

Now all we have to do is set up your git in your terminal

Do the following:
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
