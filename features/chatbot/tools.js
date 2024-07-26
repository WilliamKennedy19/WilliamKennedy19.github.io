import { promises as fsp } from "fs";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { ChatVertexAI } from "@langchain/google-vertexai";
import { HumanMessage } from "@langchain/core/messages";
import { MongoDBAtlasVectorSearch} from "@langchain/mongodb";
import { MongoClient } from "mongodb";

const research = "research"