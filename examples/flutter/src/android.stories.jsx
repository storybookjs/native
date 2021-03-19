import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import rgbHex from "rgb-hex";

const AndroidRenderer = ({ knobs, component }) => {
    return (
        <EmulatorRenderer
            apiKey="a46a48pe86ceyuurevybt12qb0"
            platform="android"
            storyParams={{ page: component }}
            deepLinkBaseUrl="sb-native://deeplink"
            knobs={knobs}
        />
    );
};

export default {
    title: "Android"
};

export const Banner = ({ message, ribbon }) => {
    return (
        <AndroidRenderer
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
        <AndroidRenderer
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
        <AndroidRenderer
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
        <AndroidRenderer
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
        <AndroidRenderer
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
        <AndroidRenderer
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
