/// <reference types="node" />
import IncomingMessage from './incoming-message';
import ServerResponse from './server-response';
import http from 'http';
import { Context, Event, Next, Options } from './types';
export declare class LambdaHttp {
    _e: Event;
    _ctx: Context;
    _next: Next;
    _options: Options;
    _connection: {
        destroy: (err?: Error) => void;
    };
    _req: IncomingMessage;
    _res: ServerResponse;
    METHODS: typeof http.METHODS;
    STATUS_CODES: typeof http.STATUS_CODES;
    onUncaughtException: NodeJS.UncaughtExceptionListener;
    onUnhandledRejection: NodeJS.UnhandledRejectionListener;
    onInternalServerError: () => void;
    constructor(e: Event, ctx: Context, next?: Next, options?: Options);
    createServer(requestListener: (req: IncomingMessage, res: ServerResponse) => void): void;
    _onUncaughtException(err: Error): void;
    _onUnhandledRejection(reason: Error, p: Promise<unknown>): void;
    _onInternalServerError(): void;
}
export default LambdaHttp;
