interface TextHighlighterOptions {
        color?: string,
		highlightedClass?: string,
		contextClass?: string,
		onRemoveHighlight?: any, // function
		onBeforeHighlight?: any, // function
		onAfterHighlight?: any // function
    }

interface ITextHighlighter {
    sprock(): void;
}

interface TextHighlighterFactory {
    new(element: Node, options?: any): ITextHighlighter;
}

declare var TextHighlighter: TextHighlighterFactory;