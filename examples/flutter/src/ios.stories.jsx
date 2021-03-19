import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import rgbHex from "rgb-hex";

const IosRenderer = ({ knobs, component }) => {
    return (
        <EmulatorRenderer
            apiKey="tjtnucwkf4vaddqv9g8he74z9r"
            platform="ios"
            storyParams={{ page: component }}
            deepLinkBaseUrl="native-flutter://deep.link"
            knobs={knobs}
        />
    );
};

export default {
    title: "iOS"
};

export const Banner = ({ message, ribbon }) => {
    return (
        <IosRenderer
            knobs={{
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
            knobs={{
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
            knobs={{
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
            knobs={{
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
            knobs={{
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
            knobs={{
                text
            }}
            component="text"
        />
    );
};

Text.args = {
    text: "Flutter text"
};
