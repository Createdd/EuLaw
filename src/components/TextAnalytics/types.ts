interface TextAnalyticsPropsType {
    text: string;
    results: (res: TextAnalyticsStateType) => void;
}

interface TextAnalyticsStateType {
    euTopic: string[];
    memberState: string[];
}

export {
    TextAnalyticsPropsType,
    TextAnalyticsStateType,
};
