interface TextAnalyticsPropsType {
    text: string;
    results: (res: TextAnalyticsStateType) => void;
}

interface TextAnalyticsStateType {
    topics: string[];
    places: string[];
}

export {
    TextAnalyticsPropsType,
    TextAnalyticsStateType,
};
