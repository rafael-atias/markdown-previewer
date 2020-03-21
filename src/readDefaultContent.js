export default function readDefaultContent() {
    return "This is a Markdown previewer\n" +
        "----------------------------\n" +
        "\n" +
        "A Markdown previewer can help you to produce HTML code in a fast and easy way: \n" +
        "\n" +
        "## Let me show you how it works: \n" +
        "\n" +
        "### Headings\n" +
        "\n" +
        "Use a # or underline a phrase with some dashes -\n" +
        "\n" +
        "### Subheadings\n" +
        "The level of a subheading can be set with the same number of hashes: if you want a heading 2, insert 2 hashes; a heading 3, insert 3 hashes, etc.\n" +
        "\n" +
        "### Bold text\n" +
        "To bold a word or phrase, just surround it with a pair of stars **in this way **.\n" +
        "\n" +
        "### Italics\n" +
        "Very similar to the bold font, surround a word or phrase with just one star *in exactly this way *.\n" +
        "\n" +
        "### Blockquote\n" +
        "To style a text as a blockquote, just introduce the paragraph with a > symbol: \n" +
        "\n" +
        "> One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.\n" +
        "\n" +
        "### Lists\n" +
        "There are 2 kinds of lists, orderered and unordered.\n" +
        "\n" +
        "#### Ordered lists\n" +
        "1. This\n" +
        "1. is\n" +
        "1. an\n" +
        "1. ordered\n" +
        "1. lists\n" +
        "\n" +
        "An item in an ordered list only requires of a number(any number, really) followed by a period.\n" +
        "\n" +
        "#### Unordered lists\n" +
        "- This\n" +
        "- is \n" +
        "- an\n" +
        "* unordered \n" +
        "* list\n" +
        "\n" +
        "An item in an unordered list needs to begin with a dash or star.\n" +
        "\n" +
        "### Links\n" +
        "In Markdown, links have two parts: \n" +
        "1. The anchor text, that goes between brackets\n" +
        "1. The url, that goes in parenthesis\n" +
        "\n" +
        "This is an instance of a[link in Markdown](https://www.google.com) \n" +
        "\n" +
        "### Images\n" +
        "Images are very similar to links, but instead of two, they have three parts: \n" +
        "1. A !\n" +
        "1. The alternative text, between brackets\n" +
        "1. The url, in parenthesis\n" +
        "\n" +
        "![kitty, kitty](https://alexandriaanimals.org/wp-content/uploads/2017/09/Mya-271x300.png )\n" +
        "\n" +
        "### Code blocks\n" +
        "\n" +
        "To introduce a code block, just mark the beginning and then end of the code snippet with 3 backticks\n" +
        "\n" +
        "```\n" +
        "function add(m, n) {\n" +
        "return m + n;\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "### Inline code\n" +
        "When you don't need a block of code, insert just a chunk of code using just a backtick to mark the beginning and the end of the code. \n" +
        "\n" +
        "For example, `I am some inline code`.\n";
}