import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";

const AndroidRenderer = ({ knobs, component }) => {
    return (
        <EmulatorRenderer
            apiKey="a46a48pe86ceyuurevybt12qb0"
            platform="android"
            storyParams={{ component }}
            deepLinkBaseUrl="sb-native://deeplink"
            knobs={knobs}
        />
    );
};

export default {
    title: "Android"
};

export const Banner = (props) => {
    return <AndroidRenderer knobs={props} component="banner" />;
};

export const Button = (props) => {
    return <AndroidRenderer knobs={props} component="button" />;
};

export const Checkbox = (props) => {
    return <AndroidRenderer knobs={props} component="checkbox" />;
};

export const Chip = (props) => {
    return <AndroidRenderer knobs={props} component="chip" />;
};

export const FAB = (props) => {
    return <AndroidRenderer knobs={props} component="fab" />;
};

export const Radio = (props) => {
    return <AndroidRenderer knobs={props} component="radio" />;
};

export const Text = (props) => {
    return <AndroidRenderer knobs={props} component="text" />;
};
