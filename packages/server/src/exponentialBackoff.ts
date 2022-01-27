import { OptimisticLockError } from '@mikro-orm/core';
import { registerProvider } from '@tsed/common';
import { RetryStrategy } from '@tsed/mikro-orm';

export interface ExponentialBackoffOptions {
    maxDepth: number;
}

export class ExponentialBackoff implements RetryStrategy {
    private depth = 0;

    constructor(private readonly options: ExponentialBackoffOptions) { }

    public async acquire<T extends (...args: unknown[]) => unknown>(
        task: T
    ): Promise<ReturnType<T>> {
        try {
            return (await task()) as ReturnType<T>;
        } catch (e) {
            if (
                this.shouldRetry(e as Error) &&
                this.depth < this.options.maxDepth
            ) {
                return this.retry(task);
            }

            throw e;
        }
    }

    private shouldRetry(error: Error): boolean {
        return error instanceof OptimisticLockError;
    }

    private async retry<T extends (...args: unknown[]) => unknown>(
        task: T
    ): Promise<ReturnType<T>> {
        await this.sleep(2 ** this.depth * 50);

        this.depth += 1;

        return this.acquire(task);
    }

    private sleep(milliseconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
}

registerProvider({
    provide: RetryStrategy,
    useFactory(): ExponentialBackoff {
        return new ExponentialBackoff({ maxDepth: 3 })
    }
});