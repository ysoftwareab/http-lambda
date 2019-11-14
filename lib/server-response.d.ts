/// <reference types="node" />
import IncomingMessage from './incoming-message';
import http from 'http';
import { Context, Next } from './types';
declare type WriteRawCallback = (err?: Error) => void;
export declare class ServerResponse extends http.ServerResponse {
    _next: Next;
    _body: Buffer;
    _isBinary: boolean;
    ctx: Context;
    constructor(req: IncomingMessage, ctx: Context, next: Next);
    _writeRaw(data: Buffer, _callback?: WriteRawCallback): void;
    _writeRaw(data: Buffer, encoding: string, _callback?: WriteRawCallback): void;
    addTrailers(_headers: any): void;
    end(data?: any, encoding?: any, _cb?: () => void): void;
    writeHead(statusCode: number, headers?: http.OutgoingHttpHeaders): this;
}
export default ServerResponse;
