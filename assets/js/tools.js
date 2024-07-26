import { promises as fsp } from "fs";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { ChatVertexAI } from "@langchain/google-vertexai";
import { HumanMessage } from "@langchain/core/messages";
import { MongoDBAtlasVectorSearch} from "@langchain/mongodb";
import { MongoClient } from "mongodb";
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';
import {
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const { messages } = await req.json();
        const message = messages.at(-1).content;

        const prompt = PromptTemplate.fromTemplate("{message}");

        const model = new ChatVertexAI({
            model: 'gemini-1.5-flash',
            temperature: 0.5
        });

        const parser = new HttpResponseOutputParser();
        const chain = prompt.pipe(model).pipe(parser);

        const stream = await chain.stream({message})
        
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e) {
        return Response.json({error: e.message}, {status:e.status})
    }
}



