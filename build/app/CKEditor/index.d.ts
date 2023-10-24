import { BalloonEditor } from "@ckeditor/ckeditor5-editor-balloon";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Link } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
declare class Editor extends BalloonEditor {
    static builtinPlugins: (typeof Essentials | typeof Bold | typeof Italic | typeof BlockQuote | typeof Heading | typeof Link | typeof List | typeof Paragraph)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
    };
}
export default Editor;
