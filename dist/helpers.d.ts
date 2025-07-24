import { Paragraph, TextRun, Table } from "docx";
import { Style, TableData, HeadingConfig, ListItemConfig } from "./types";
/**
 * Processes a heading line and returns appropriate paragraph formatting and a bookmark ID
 * @param line - The heading line to process
 * @param config - The heading configuration
 * @param style - The style configuration
 * @param documentType - The document type
 * @returns An object containing the processed paragraph and its bookmark ID
 */
export declare function processHeading(line: string, config: HeadingConfig, style: Style, documentType: "document" | "report"): {
    paragraph: Paragraph;
    bookmarkId: string;
};
/**
 * Processes a table and returns table formatting
 * @param tableData - The table data
 * @param documentType - The document type
 * @returns The processed table
 */
export declare function processTable(tableData: TableData, documentType: "document" | "report"): Table;
/**
 * Processes a list item and returns appropriate paragraph formatting
 * @param config - The list item configuration
 * @param style - The style configuration
 * @returns The processed paragraph
 */
export declare function processListItem(config: ListItemConfig, style: Style): Paragraph;
/**
 * Processes a blockquote and returns appropriate paragraph formatting
 * @param text - The blockquote text
 * @param style - The style configuration
 * @returns The processed paragraph
 */
export declare function processBlockquote(text: string, style: Style): Paragraph;
/**
 * Processes a comment and returns appropriate paragraph formatting
 * @param text - The comment text
 * @param style - The style configuration
 * @returns The processed paragraph
 */
export declare function processComment(text: string, style: Style): Paragraph;
/**
 * Processes formatted text (bold/italic/inline-code) and returns an array of TextRun objects
 * @param line - The line to process
 * @param style - The style configuration
 * @returns An array of TextRun objects
 */
export declare function processFormattedText(line: string, style?: Style): TextRun[];
/**
 * Collects tables from markdown lines
 * @param lines - The markdown lines
 * @returns An array of table data
 */
export declare function collectTables(lines: string[]): TableData[];
/**
 * Processes inline code and returns a TextRun object
 * @param code - The inline code text
 * @param style - The style configuration
 * @returns A TextRun object
 */
export declare function processInlineCode(code: string, style?: Style): TextRun;
/**
 * Processes a code block and returns appropriate paragraph formatting
 * @param code - The code block text
 * @param language - The programming language (optional)
 * @param style - The style configuration
 * @returns The processed paragraph
 */
export declare function processCodeBlock(code: string, language: string | undefined, style: Style): Paragraph;
/**
 * Processes a link and returns appropriate text run
 */
export declare function processLink(text: string, url: string): TextRun;
/**
 * Processes a link and returns a paragraph with hyperlink
 * @param text - The link text
 * @param url - The link URL
 * @param style - The style configuration
 * @returns The processed paragraph with hyperlink
 */
export declare function processLinkParagraph(text: string, url: string, style: Style): Paragraph;
/**
 * Creates a simple link paragraph
 * @param text - The link text
 * @param url - The URL to link to
 * @returns A paragraph with a hyperlink
 */
export declare function createLinkParagraph(text: string, url: string): Paragraph;
/**
 * Processes an image and returns appropriate paragraph
 * @param altText - The alt text
 * @param imageUrl - The image URL
 * @param style - The style configuration
 * @returns The processed paragraph
 */
export declare function processImage(altText: string, imageUrl: string, style: Style): Promise<Paragraph[]>;
/**
 * Processes a paragraph and returns appropriate paragraph formatting
 * @param text - The paragraph text
 * @param style - The style configuration
 * @returns The processed paragraph
 */
export declare function processParagraph(text: string, style: Style): Paragraph;
