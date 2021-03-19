import React from "react";
import MaterialButton from "@material-ui/core/Button";
import MaterialCheckbox from "@material-ui/core/Checkbox";
import MaterialChip from "@material-ui/core/Chip";
import MaterialFAB from "@material-ui/core/Fab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { hideIframe } from "@storybook/appetize-utils";

export default {
    title: "Web"
};

export const Button = ({ label }) => {
    React.useEffect(() => {
        hideIframe();
    }, []);

    return (
        <MaterialButton variant="outlined" color="primary">
            {label}
        </MaterialButton>
    );
};

Button.args = {
    label: "Material button"
};

export const Checkbox = ({ label }) => {
    React.useEffect(() => {
        hideIframe();
    }, []);

    return (
        <FormControlLabel
            value="top"
            control={<MaterialCheckbox color="primary" />}
            label={label}
        />
    );
};

Checkbox.args = {
    label: "Material checkbox"
};

export const Chip = ({ chip1, chip2, chip3, chip4 }) => {
    React.useEffect(() => {
        hideIframe();
    }, []);

    return (
        <div>
            <MaterialChip label={chip1} />

            <MaterialChip label={chip2} />

            <MaterialChip label={chip3} />

            <MaterialChip label={chip4} />
        </div>
    );
};

Chip.args = {
    chip1: "Material chip 1",
    chip2: "Material chip 2",
    chip3: "Material chip 3",
    chip4: "Material chip 4"
};

export const FAB = (props) => {
    React.useEffect(() => {
        hideIframe();
    }, []);

    return (
        <MaterialFAB
            style={{
                backgroundColor: props.backgroundColor
            }}
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
