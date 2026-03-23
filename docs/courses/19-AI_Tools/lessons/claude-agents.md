# Building Agents with Claude

Anthropic's Claude models, such as `claude-3-5-sonnet`, are extremely capable at reasoning tasks and function calling (which Anthropic calls "tool use").

## API Setup

1. **Obtain an API Key**: Sign up at [console.anthropic.com](https://console.anthropic.com/) and generate an API key.
2. **Environment Variable**: Securely store your API key.
   ```bash
   export ANTHROPIC_API_KEY="sk-ant-xxxxxxxxxxxxxxxxxxxx"
   ```
3. **Install the SDK**: For Python, use `pip install anthropic`.

## Tool Use with Claude

Claude can interact with external tools to perform actions and fetch data, making it an excellent brain for autonomous agents.

### Example in Python

```python
import os
from anthropic import Anthropic

client = Anthropic()

# 1. Define your tools in Claude's format
tools = [
    {
        "name": "get_stock_price",
        "description": "Retrieves the current stock price for a given ticker symbol.",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {
                    "type": "string",
                    "description": "The stock ticker symbol, e.g., AAPL, TSLA"
                }
            },
            "required": ["ticker"]
        }
    }
]

# 2. Call the Messages API
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    tools=tools,
    messages=[
        {"role": "user", "content": "How is Apple stock doing today?"}
    ]
)

# 3. Handle the Tool Use block
for block in response.content:
    if block.type == "tool_use":
        tool_name = block.name
        tool_input = block.input
        print(f"Claude wants to use {tool_name} with arguments: {tool_input}")
        
        # In a real agent, you would run your function here and append the result
        # back to the messages list as a "tool_result" block.
```

### The Agent Loop

A true agent operates continuously until a task is solved. If Claude emits a `tool_use` block, you must:
1. Extract the requested `tool_name` and parameters.
2. Execute the corresponding Python code.
3. Append a new message to the conversation history where `role="user"` and `content` includes a `tool_result` block containing your output.
4. Call `client.messages.create` again. Claude reads the result and decides if it needs to use another tool or if it can formulate a final answer!
