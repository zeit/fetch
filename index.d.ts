import * as http from 'http';
import * as https from 'http';
import { Options as RetryOptions } from 'async-retry';
import { Headers, Request, RequestInit, Response } from 'node-fetch';

export type FetchOptions = RequestInit & {
	agent?: https.Agent | http.Agent
	retry?: RetryOptions
}

export type Fetch = (
	url: string | Request,
	options?: FetchOptions
) => Promise<Response>;

export type FetchModule = {
	default: Fetch;
	Headers: Headers;
}

export default function SetupFetch(
	fetchModule?: FetchModule,
	agentOptions?: http.AgentOptions | https.AgentOptions
): Fetch;

export * from 'node-fetch';
