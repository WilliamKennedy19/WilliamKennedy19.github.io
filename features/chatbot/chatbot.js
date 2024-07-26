/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

/*Gemini Object Creation */

import { ChatVertexAI } from "@langchain/google-vertexai";

import { HumanMessage } from "@langchain/core/messages";

const model = new ChatVertexAI({
  model: "gemini-1.5-flash",
  temperature: 0
});

const result = await model.invoke([new HumanMessage({ content: "Hi! I'm Bob" })]);

console.log(result["content"])