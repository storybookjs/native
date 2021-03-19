import React from "react";
import rgbHex from "rgb-hex";
import { EmulatorRenderer } from "@storybook/native-components";
import { showIframe } from "@storybook/appetize-utils";

const AndroidRenderer = ({ knobs, component }) => {
    React.useEffect(() => {
        showIframe();
    }, []);

    return (
        <EmulatorRenderer
            apiKey="zv034bdme9je7c9d43chzmc2yg"
            platform="android"
            storyParams={{ component }}
            deepLinkBaseUrl="sb-native://deep.link"
            knobs={knobs}
        />
    );
};

export default {
    title: "Android"
};

export const Button = (props) => {
    return <AndroidRenderer knobs={props} component="button" />;
};

Button.args = {
    label: "Default button label"
};

export const FAB = (props) => {
    const rippleColor = rgbHex(props.rippleColor);

    return (
        <AndroidRenderer
            component="floatingButton"
            knobs={{
                rippleColor
            }}
        />
    );
};

FAB.args = {
    rippleColor: "rgb(0,255,255)"
};
FAB.argTypes = {
    rippleColor: {
        control: "color"
    }
};

export const Chip = (props) => {
    return <AndroidRenderer component="chips" knobs={props} />;
};

Chip.args = {
    chip1: "Chip 1",
    chip2: "Chip 2",
    chip3: "Chip 3",
    chip4: "Chip 4"
};
