const assistant = await openai.beta.assistants.create({
    name: "Web Assistant",
    instructions: "You are a personal math tutor. Write and run code to answer math questions.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-1106-preview"
  });


  const thread = await openai.beta.threads.create(
    {
    role: "user",
    content: "I need to solve the equation `3x + 11 = 14`. Can you help me?"
    }
  );

  const run = await openai.beta.threads.runs.create(
    thread.id,
    { 
      assistant_id: assistant.id,
      instructions: "Please address the user as Jane Doe. The user has a premium account."
    }
  );


  const messages = await openai.beta.threads.messages.list(
    thread.id
  );