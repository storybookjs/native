import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import rgbHex from "rgb-hex";

const IosRenderer = ({ extraParams, component }) => {
    return (
        <EmulatorRenderer
            apiKey="tjtnucwkf4vaddqv9g8he74z9r"
            platform="ios"
            storyParams={{ page: component }}
            deepLinkBaseUrl="native-flutter://deep.link"
            extraParams={extraParams}
        />
    );
};

export default {
    title: "iOS"
};

export const Banner = ({ message, ribbon }) => {
    return (
        <IosRenderer
            extraParams={{
                message,
                ribbon
            }}
            component="banner"
        />
    );
};

Banner.args = {
    message: "Hello there",
    ribbon: "Ribbon"
};

export const Button = ({ label }) => {
    return (
        <IosRenderer
            extraParams={{
                label
            }}
            component="button"
        />
    );
};

Button.args = {
    label: "Flutter button"
};

export const Checkbox = ({ label }) => {
    return (
        <IosRenderer
            extraParams={{
                label
            }}
            component="checkbox"
        />
    );
};

Checkbox.args = {
    label: "Flutter checkbox"
};

export const Chip = ({ label }) => {
    return (
        <IosRenderer
            extraParams={{
                label
            }}
            component="chip"
        />
    );
};

Chip.args = {
    label: "Flutter chip"
};

export const FAB = (props) => {
    return (
        <IosRenderer
            extraParams={{
                backgroundColor: rgbHex(props.backgroundColor).substr(0, 6)
            }}
            component="fab"
        />
    );
};

FAB.args = {
    backgroundColor: "rgb(0,255,255)"
};
FAB.argTypes = {
    backgroundColor: {
        control: "color"
    }
};

export const Text = ({ text }) => {
    return (
        <IosRenderer
            extraParams={{
                text
            }}
            component="text"
        />
    );
};

Text.args = {
    text: "Flutter text"
};
