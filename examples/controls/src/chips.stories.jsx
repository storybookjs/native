import React from 'react';
import { EmulatorRenderer } from '@storybook/native-components';

export default { 
    title: 'Chips'
};

export const Example = (props) => {
    return <EmulatorRenderer
        apiKey="zv034bdme9je7c9d43chzmc2yg"
        platform="android"
        storyParams={{"component":"chips"}}
        deepLinkBaseUrl={"sb-native://deep.link"}
        knobs={props}
    />;
};
