interface TextAnalyticsPropsType {
    text: string;
    results: (res: TextAnalyticsStateType) => void;
}

interface TextAnalyticsStateType {
    topics: string[];
    memberState: string[];
}

export {
    TextAnalyticsPropsType,
    TextAnalyticsStateType,
};
