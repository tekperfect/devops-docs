# 📈 Variables & Data Structures

### ⏱ Agenda

1. [🏆 Learning Objectives](#%f0%9f%8f%86-learning-objectives)
1. [📖 Understanding Data Types](#%f0%9f%93%96-what-are-data-types)
1. [📊 Data Types](#%f0%9f%93%8a-data-types)
1. [🐍 REPL - Try It Yourself!](#%f0%9f%90%8d-repl-try-it-yourself)
1. [🍵 Programing](#%f0%9f%8d%b5-programing)
1. [📚 Resources & Credits](#%f0%9f%93%9a-resources-amp-credits)

## 🏆 Learning Objectives

**By the end of this, you'll be able to...**

1. Understand how to create and use variables
2. Undestand what different Data Types there are
3. What data type is best for what
4. Best pratise for data types

## 📖 Understanding Data Types

Data types are the classification or categorization of data items. Data types represent a kind of value which determines what operations can be performed on that data. The most basic types can be classifed under as Numeric, Sequence, Boolean and Dictionary

> tl;dr : Data types classify and represent what something is and what you can do with them

> Remember try it yourself in the REPL


## 📊 Data Types
All of these data types will be assigned to a variable: variables are refrence to the data. The name is always on the left side equal to the data
```python
name_of_variable = "Data"
```
### Numeric
A Numeric value is any data represented as a Numeral:

**Intiger:** Positive or negative _whole numbers_.
```python
int = 123
```

**Float:** Any real number denoted with a _decimal or scientific notation_.
```python
float = 123.001
```

### Sequence

A sequence is a collection of the same or different data types: 

**List:** A string value is a collection of one or more characters, put in _s_quare brackets_.
```python
list = [1,2,3,4,5]
list2 = ["Ninja", "Alfonso", "Holy Grail", 21] 
```

**Tuple:** A Tuple object is an ordered collection of one or more data items, put in _parentheses_. 
```python
tuple = (1,2,3,4,5)
tuple2 = ("Ninja", "Alfonso", "Holy Grail", 21)
``` 

**String:**  A Tuple object is an ordered collection of one or more data items, _single, double or triple quotes_.
```python
Dog = "Ninja's German Shephard" 
Person = 'Ninja\' German Shephard'
# The difference between the two is that using double quotes makes it easy to include apostrophes (whereas these would terminate the string if using single quotes)
Alfonso = """
Ninja
Alfonso
Dog
"""
```

### Boolean
A data type of either value `True` or `False`. _note the capitilization_
```python
True
False
true
false
```

### Dictionary
Collection of data in a key:value pair form, put in _curly brackets_
```python
seus = {'fish': 3, 'red': 1, 'blue': 1, 'green': 1}
```


## 🐍 REPL - Try It Yourself!
Python has a built-in function called type() to find out what type of data it is. Try it yourself with these:

```python
question1 = "True"
```

```python
question2 = False
```

```python
question3 = """
1234
"""
```

```python
question4 = "{"Dog": 3}"
```

```python
question5 = ["Alfonso", 123, 'ninja', True]
```

```python
question6 = 123.04
```

```python
question7 = {"Dog": 200}
```

### Take 10 min breather

## 🍵 Programing
### Variables and Adding
Now let's play with some of the data types. Just like in math we can try adding variables together of the same data type, lets assign two variables to two different number:

```python
int1 = 5
int2 = 6
print(in1 + int2)
```
```python
str1 = "hey"
str2 = "User"
print(str1 + str2) 
```
If we run it we will get 11, try this with other data types. What if we try adding two different data types?

```python
int1 = 5
str1 = "Hello world"
print(in1 + str1)
```
That's right you can't add different data type.

How does adding strings and numbers can benifit us? Well we can make strings a lot more flexible:

```python
print("Michael is running to the park")
print("Michael is sad")
print("People love Michael")
```
How can we apply this with what we learned? Whats the most common word in each sentence? That's right `Michael`. So why not assign a variable to michael and add it to the strings? Try it yourself

```python
name = "Michael"
print(name + "is running to the park")
print(name + "is sad")
print("People love" + name)
```
This can also be done with string fromating with either f-strings are `.format()`:

```python
name = "Michael"
affection = "love"
# Play with this More!
print(f"{name} {affection} f-strings")
print("Actually {} {} .format".format(name,affection))
```

Try adding variables inside each other, and look up what else you can do!


> _you can get even more creative with name = input("What's your name? ")_

### Lists
List just like like strings are sequences and they have something unique about them: Indexing.
In programing this means that every part is assigned to a number starting from **0**. Example

```python
name = "Michael"
# A varaible can be indexed with brackets at it's index: data[index]
# print(name[0]) # Guess
```
When you run it, you'll recieve a `M`, so what about `lists`?

```python
names = ["Michael", "Nyein Chan", "Alfonso"]
# print(names[1]) # Guess what will be printed
```
"Nyein Chan" is printed!

What if we try indexing past the size of thea array? Try it yourself
```python
names = ["Michael", "Nyein Chan", "Alfonso"]
print(names[3])
```


just like strings list can be edited as well with `.remove()`, `.pop()` and `.append()`

Try them yourself:

```python
names = ["Michael", "Nyein Chan", "Alfonso"]
names.append("Kobe")
names.append("Damon")
names.remove('Michael')
names.pop()
# print(names) # Guess
```
As you can tell, `append` adds to the list, `pop` removes the last item in the list and `remove`, well removes that item.

let's test your knowledge:

```python
dogs = ["German Shepherd", "Golden REtriever", "Human's Best Friend"]
# What is the secound word in the list
dogs_secound = None
print(dogs_secound == dogs[None])

print("dogs are {None}" == "dogs are Human's Best Friend") # Use F-String
print("dogs are {}" == "dogs are Human's Best Friend") # Use Format

# Delete "Human's Best Friend"
# Add "Rottweiler"
# dogs.
# dogs.
print(dogs == ["German Shepherd", "Golden REtriever", "Rottweile"])
```

```python
answer_str = None # Change
answer_float = None # Change
answer_int = None # Change



if mystring == "hello":
    print("String: %s" % answer_str ) # Str test

if isinstance(answer_float, float) and answer_float == 10.0:
    print("Float: %f" % answer_float) # Float test

if isinstance(answer_int, int) and answer_int == 20:
    print("Integer: %d" % answer_int) # int test
```




## 📚 Resources & Credits
- [W3Schools](https://www.w3schools.com/python/python_datatypes.asp)