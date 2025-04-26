/* eslint-disable @typescript-eslint/no-explicit-any */
const apiUrl: string =
    (import.meta as any).env.DEV ? "http://localhost:5050/api/v1" :
        "http://localhost:5050/api/v1";

export {
    apiUrl
};