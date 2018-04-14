interface TextAnalyticsPropsType {
    text: string;
    results: (text: any) => void;
}

interface TextAnalyticsStateType {
    topics: string[];
    places: string[];
}

export {
    TextAnalyticsPropsType,
    TextAnalyticsStateType,
};
