# 🧠 Data Structures

### ⏱ Agenda

1. [🏆 Learning Objectives](#%f0%9f%8f%86-learning-objectives)
1. [📖 Understanding Comparison and Logic]()
1. [🍵 Programing](#%f0%9f%8d%b5-programing)
1. [📚 Resources & Credits](#%f0%9f%93%9a-resources-amp-credits)

## 🏆 Learning Objectives

**By the end of this, you'll be able to...**

1. understand how to use advance logic operators
1. understand how to make if and else statements
1. Benifits of if and else statements

## 📖 Understanding Comparison and Logic
Simply put we are just comparing data to each other. If its equal greater than and etc then we execute a command. In python we do this with `if` and `else` statements. 

> tl;dr : if a condtion is true _do something_ else _say something_
### Comparisions
Here are all the comparison and logic operators(all are extremmly sensitive):

| Operator | English             | Example              | Result |
|----------|---------------------|----------------------|--------|
| >        | Greater Than        | 4 > 3                | True   |
| <        | Less Than           | 4 < 3                | False  |
| >=       | Greater or Equal to | 10 >= 10             | True   |
| <=       | Less or Equal to    | 9 <= 10              | True   |
| ==       | Equal to            | 9 == 10              | False  |
| and      | n/a                 | `True and False`     | False  |
| or       | n/a                 | `False or True`      | True   |
| not      | n/a                 | `True and not False` | True   |

### Syntax
```python
x = 2
if x > 3: # Semicolon
    print("Thats greater than 3") # Indentation is important!
else:
    print("Thats less than 3")
```

```python
name = input("What's your name?")
if name == "Admin":
    print(f"Welcome {name}")
# The first if statemnet didn't pass so it checks again with another elif statment
elif name == "Alfonso":
    print(f'It is a pleasure {name}')
else:
    print(f'What is: {name}')
```

## 🍵 Programing
Write a script that will ask the user what the weather is like and return specific results:
```python
# Sunny: Have a run!
# Rainy: Play A board game!
# Snowy: Make a snowing
# anything else : It's always a good time to read
```
Write a script that will add 20 if its greate than or equal to 10  and subtract 20 if its greater than
```python
# x > 20: x -10
# x <= 10: x + 20

result = int(input('Please enter a number: ')) # This is concatenation

```
## 📚 Resources & Credits