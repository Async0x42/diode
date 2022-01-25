// https://stackoverflow.com/questions/5999792/new-line-in-textarea-to-be-converted-to-br
export const replaceLinebreakWithHtml = (text?: string) => text?.replace(/\r\n|\r|\n/g, "<br />")