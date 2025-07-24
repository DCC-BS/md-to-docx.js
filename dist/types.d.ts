export interface Style {
    titleSize: number;
    headingSpacing: number;
    paragraphSpacing: number;
    lineSpacing: number;
    heading1Size?: number;
    heading2Size?: number;
    heading3Size?: number;
    heading4Size?: number;
    heading5Size?: number;
    paragraphSize?: number;
    listItemSize?: number;
    codeBlockSize?: number;
    blockquoteSize?: number;
    tocFontSize?: number;
    tocHeading1FontSize?: number;
    tocHeading2FontSize?: number;
    tocHeading3FontSize?: number;
    tocHeading4FontSize?: number;
    tocHeading5FontSize?: number;
    tocHeading1Bold?: boolean;
    tocHeading2Bold?: boolean;
    tocHeading3Bold?: boolean;
    tocHeading4Bold?: boolean;
    tocHeading5Bold?: boolean;
    tocHeading1Italic?: boolean;
    tocHeading2Italic?: boolean;
    tocHeading3Italic?: boolean;
    tocHeading4Italic?: boolean;
    tocHeading5Italic?: boolean;
    paragraphAlignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    headingAlignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    heading1Alignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    heading2Alignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    heading3Alignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    heading4Alignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    heading5Alignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    blockquoteAlignment?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
}
export interface Options {
    documentType?: "document" | "report";
    style?: Style;
}
export interface TableData {
    headers: string[];
    rows: string[][];
}
export interface ProcessedContent {
    children: any[];
    skipLines: number;
}
export interface HeadingConfig {
    level: number;
    size: number;
    style?: string;
    alignment?: any;
}
export interface ListItemConfig {
    text: string;
    boldText?: string;
    isNumbered?: boolean;
    listNumber?: number;
    sequenceId?: number;
}
export declare const defaultStyle: Style;
export declare const headingConfigs: Record<number, HeadingConfig>;
