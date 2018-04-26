import { TextAnalyticsStateType } from '../../TextAnalytics';

interface DecisionResultsStepPropsType {
    results: TextAnalyticsStateType;
    success: boolean;
    type: string;
}

interface DecisionResultsStepStateType {
    //
}

export {
    DecisionResultsStepPropsType,
    DecisionResultsStepStateType,
};
