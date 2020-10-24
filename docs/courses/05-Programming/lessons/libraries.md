# 📚 Day 4: Libraries

### ⏱ Agenda

1. [🏆 Learning Objectives](#%f0%9f%8f%86-learning-objectives)
1. [📖 Understanding libraries](#%f0%9f%93%96-understanding-libraries)
1. [🍵 Programing](#%f0%9f%8d%b5-programing)
1. [📚 Resources & Credits](#%f0%9f%93%9a-resources-amp-credits)

## 🏆 Learning Objectives

**By the end of this, you'll be able to...**

1. How to import libraries
1. How to use certain function
1. Read documentation
1. Download any library available to python

## 📖 Understanding libraries
This is the final lesson for this class. Now we arrive to libraries.

Libraries are a collection of class, that allow you to use modules not available to the python base

### Syntax
There are two ways to import a library
```python
import string # Importing the entire library
print(string.ascii_letters)
```
or

```python
from string import ascii_letters, digits  # Importing a single or multiple modules from a library
print(digits)
print(ascii_letters)
```
So its `from` _name of libray_ `import`_module_ **or** `import` _name of library_

### Importing outside libraries
If you want to install a foreign library, it's super easy! all you have to do is:

```bash
pip3 install #name_of_library
```
### Documentaion
You can always google the libray name with the language to look up the documentation. But if you want to explore new ways, or don't know how to use them look through them!

## 🍵 Programing
Let's try using a real world library, colorama:

```bash
pip3 install colorama
```
Make a script that will ask for a color and return a specific color and only import the modules you **need**

```python
'''
script will asks for a color and the text is returned with the appropiate Fore color 
and will repeat in till teh User crtl-s or enters exit
'''
from colorama import None
```

## 📚 Resources & Credits
### Notes:
this lesson should get you prepared for a deep dive into OS and SYS libraires

[Colorama](https://pypi.org/project/colorama/)