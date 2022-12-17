import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class SpecialDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white dark:border-slate-600">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default SpecialDocument;