export function getEnvironmentVariableOrFail(keyString) {
    const value = process.env[keyString];
    if (value === undefined || value === null || value === "") {
        throw new Error("missing environment variable: " + keyString);
    }
    return value;
}
