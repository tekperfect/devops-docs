# Building Agents with OpenAI

OpenAI provides powerful models like `gpt-4o` that can be used to build sophisticated AI agents. An "agent" is a system where an LLM is used as the reasoning engine to determine which actions to take and in what order.

## API Setup

1. **Obtain an API Key**: Sign up at [platform.openai.com](https://platform.openai.com/) and generate an API key.
2. **Environment Variable**: Securely store your API key.
   ```bash
   export OPENAI_API_KEY="sk-proj-xxxxxxxxxxxxxxxxxxxx"
   ```
3. **Install the SDK**: For Python, use `pip install openai`.

## Basic Agentic Loop (Function Calling)

Function calling allows the model to output a JSON object containing arguments to call specific functions in your code. This is the core mechanism of action for an OpenAI agent.

### Example in Python

Here is a basic example of an agent that can interact with the weather:

```python
import os
import json
from openai import OpenAI

client = OpenAI()

# 1. Define your tool (the function your agent can call)
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA"
                    }
                },
                "required": ["location"]
            }
        }
    }
]

# 2. System Prompt and User Request
messages = [
    {"role": "system", "content": "You are a helpful assistant capable of checking the weather."},
    {"role": "user", "content": "What is the weather like in Seattle?"}
]

# 3. Call the API
response = client.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=tools,
    tool_choice="auto"
)

# 4. Handle the Tool Call
response_message = response.choices[0].message
tool_calls = response_message.tool_calls

if tool_calls:
    for tool_call in tool_calls:
        if tool_call.function.name == "get_weather":
            args = json.loads(tool_call.function.arguments)
            location = args.get("location")
            # Here you would actually call a weather API.
            print(f"Agent wants to look up the weather for: {location}")
```

### Expanding Capabilities

To create robust applications:
- **Looping**: Append the tool call and the tool's actual output back to your `messages` array, and call `chat.completions.create` again so the model can read the result and answer the user.
- **Multiple Tools**: Add more items to your `tools` definition. Agents can query databases, call internal APIs, run system commands, and more!
