export declare function fail(message: string): void;
export declare function assert(value: unknown, message: string): asserts value;
export declare function assertAndReturn<T>(value: T, message: string): Exclude<T, false | null | undefined>;
export declare function assertIsString(value: unknown, message: string): asserts value is string;
