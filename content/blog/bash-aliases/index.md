---
title: "How to create bash aliases"
date: "2020-08-15"
description: "Let's simplify our life with bash aliases."
---

## What is an alias?

---

An alias is a custom shortcut for a long or complicated command.

Aliases are a lot like cheating becasue instead of typing `sudo apt-get install foo` every time you want to install something, you can just type `install foo`.

## How to create an alias?

---

To get a taste of aliases, you can open up your terminal and just type `alias dl='cd ~/Downloads'` and hit enter, now every time you wanna go to your Downloads folder, you can just type `dl` and you will be in your Downloads folder within no time.

The syntax to set an alias is as follows:

```shell
alias alias_name='long_command_you_wanna_execute'
```

So if you're bored of typing `sudo apt-get update && sudo apt-get upgrade --yes` every week, you can set an alias like this - `alias u='sudo apt-get update && sudo apt-get upgrade --yes'` and now whevever you want to upgrade your computer just type `u`, and you're done. 💥

**To make your aliases permanent, you have two choices.** (Although there are many ways, but I'm only describing the two most used methods):

### First method

Add all aliases directly in your `.bashrc` file like this:

```shell
alias dl='cd ~/Downloads'
alias c='clear'
# more aliases
```

Restart your terminal and that's it.

### Second method

Make a separate file named `.bash_aliases` in your home directory and include the file in your `.bashrc` file like this:

```shell
# previous code
if [ -f ~/.bash_aliases ]; then
	source ~/.bash_aliases
fi
```

Then add all your aliases in the `.bash_aliases` file like this:

```shell
#!/bin/bash

alias dl='cd ~/Downloads'
alias c='clear'
# more aliases
```

Restart your terminal and that's it.

**Note**, whenever you make a change in your `.bashrc` or `.bash_aliases` file, you should restart your terminal (if it's open) by either typing `source ~/.bashrc` in your terminal or closing and reopening your terminal.

## How I use aliases?

---

I'm adding my `.bash_aliases` file below:

```shell
#!/bin/bash

# Directory
alias ~='cd ~'
alias ..='cd ..'
alias ...='cd ../..'

# Most visited directories
alias p='cd ~/projects'
alias temp='cd ~/projects/temp'
alias dev='cd ~/projects/dev'
alias prod='cd ~/projects/prod'

alias dl='cd ~/Downloads'

# Competitive programming directories
alias ac='cd ~/cp/atcoder'
alias cf='cd ~/cp/codeforces'
alias cc='cd ~/cp/codechef'

# Config files
alias al='vim ~/.aliases'
alias b='vim ~/.bashrc'
alias v='vim ~/.vimrc'
alias z='vim ~/.zshrc'

# Package related
alias u='sudo apt update && sudo apt upgrade --yes && sudo apt autoremove --yes'
alias update='sudo apt update'
alias upgrade='sudo apt upgrade --yes'
alias install='sudo apt install'

# tmux
alias t='tmux'
alias ts='tmux new-session -s'

# git
alias ga='git add .'
alias gc='git commit -m'
alias gs='git status'

#npm
alias ns='npm start'
alias nt='npm test'
alias ni='npm install'
alias nu='npm uninstall'

# gatsby
alias gd='gatsby develop'
alias gb='gatsby build'

# Misc
alias c='clear'
alias mkdir='mkdir -p'
alias rm='rm -rf'
alias l='ls -lah'
```

## Conclusion

---

I must say, aliases made my life a lot easier and more productive.

I hope this guide has given you some inspiration for creating your own aliases and to use them effectively during daunting tasks (or any tasks).
