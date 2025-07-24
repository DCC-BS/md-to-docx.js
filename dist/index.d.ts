import { Options } from "./types";
export { Options, TableData } from "./types";
/**
 * Custom error class for markdown conversion errors
 * @extends Error
 * @param message - The error message
 * @param context - The context of the error
 */
export declare class MarkdownConversionError extends Error {
    context?: any | undefined;
    constructor(message: string, context?: any | undefined);
}
/**
 * Convert Markdown to Docx
 * @param markdown - The Markdown string to convert
 * @param options - The options for the conversion
 * @returns A Promise that resolves to a Blob containing the Docx file
 * @throws {MarkdownConversionError} If conversion fails
 */
export declare function convertMarkdownToDocx(markdown: string, options?: Options): Promise<Blob>;
/**
 * Downloads a DOCX file in the browser environment
 * @param blob - The Blob containing the DOCX file data
 * @param filename - The name to save the file as (defaults to "document.docx")
 * @throws {Error} If the function is called outside browser environment
 * @throws {Error} If invalid blob or filename is provided
 * @throws {Error} If file save fails
 */
export declare function downloadDocx(blob: Blob, filename?: string): void;
