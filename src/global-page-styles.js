import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/65c4e3ab0072400020e9c82c/images/Untitled%20design.png?v=2024-02-09T22:04:29.814Z) 0% 0% /contain repeat fixed padding-box"
    },
    "index": {
        "background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/65c4e3ab0072400020e9c82c/images/Untitled%20design.png?v=2024-02-09T22:04:29.814Z) 0% 0% /contain repeat fixed padding-box"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
