module.exports = {
    arrowParens: "always",
    bracketSpacing: true,
    jsxSingleQuote: false,
    printWidth: 140,
    quoteProps: "preserve",
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    useTabs: false,
    overrides: [
        {
            files: "*.jsx",
            options: {
                printWidth: 120,
            },
        },
        {
            files: "*.tsx",
            options: {
                printWidth: 120,
            },
        },
    ],
};
