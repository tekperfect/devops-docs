# ➰ Math & Looping

### ⏱ Agenda

1. [🏆 Learning Objectives](#%f0%9f%8f%86-learning-objectives)
1. [📖 Understanding Python Math and Looping](#%f0%9f%93%96-understanding-python-math-and-looping)
1. [🐍 REPL - Try It Yourself!](#%f0%9f%90%8d-repl-try-it-yourself)
1. [🍵 Programing](#%f0%9f%8d%b5-programing)
1. [📚 Resources & Credits](#%f0%9f%93%9a-resources-amp-credits)

## 🏆 Learning Objectives

**By the end of this, you'll be able to...**

1. Understand conditionals
1. Understand how to apply basic operators
1. Cases to repeat a code

## 📖 Understanding Python Math and Looping
### Math
python basic operators and sytax as follows:
#### Basic Arithmatic
```python
print((1 * 2 + 3)/5) # 1 multiplied by 2 plus 2 all divided by 5
```
#### Exponets
```python
print(2**5) # 2^5: 2 to the 5th power
```
#### Modulus
```python
print(20 % 3) # Returns the remainder
```
And just like in `Day 2: Variables & Data Types` some math operators can be applied to Data Types:
```python
# Strings
hello_10 = "hello" * 10
helloworld = "hello" + "" + "world"

# list 
list_list = [1,2,3] + [4,5,6]
list_10 = [1,2,4] * 10
```
> _Always play around with the code!_
#### Short hands
There is short hand for arithmatic instead of `number = number+1` you can do `number +=1`
and more:

```python
x = 20
x += 1
print(f"Added 1: {x}") # 21
x /= 3
print(f"divided by 3: {x}") # 7 
x **= 2
print(f"raised by 2: {x}") # 49
x %= 3
print(f"modulus of 3: {x}") # 1
```

### Looping
Looping is exactly what it sounds like! The act of repeating, in programing we are talking about repeating the same bit of code ounce a condition is completed _otherwise it will repeat forever_.

Python uses two key words `while` and `for` to create a loop.

Here are the basic conditions: 

| Operator | English             | Example              | Result |
|----------|---------------------|----------------------|--------|
| >        | Greater Than        | 4 > 3                | True   |
| <        | Less Than           | 4 < 3                | False  |
| >=       | Greater or Equal to | 10 >= 10             | True   |
| <=       | Less or Equal to    | 9 <= 10              | True   |
| ==       | Equal to            | 9 == 10              | False  |

#### Syntax
While loop are repeated in till a condition is completed or whent he condition is `false`
```python
x = 0
while (x > 3):  # You can drop the (), but the : is important
    print(x) # Notice the indentation
    x += 1 # Add one to x every time
```
if a while loop condition is never `false` it will repeat forever:

```python
# Be prepared to run this code
while True:
    print(x)
    x += 1
# crtl-C to exit
```

For loops have a similar structure but are repeated till the end of a sequence or a range
```python
dog = [1,2,3]
for index in dog:
    print(x) # Guess what x will be

# Another common one is
for index in range(0,3): # starts and 0 and ends a number-1 
    print(index) # try dog[index]
```

## 🐍 REPL - Try It Yourself!
the operators aren't limited to numbers, they can compare strings as well, try these in the REPL:
```python
"Dog" == "God"
```

```python
"God" > "Dog" # G is greater in the alphabet
```

```python
"asdasdadsadsad" == "asdasdasdasdadasd"
```
## 🍵 Programing
Create a new list that has +5 from an old list
```python
list_num = [1,2,3,4]
new_list = []
for None in None:
    # hint new_list.
```
Create a while loop that wait for the user to say the correct answer for whats 2 + 5

```python
while None:
    # hint use input
```

## 📚 Resources & Credits