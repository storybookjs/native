import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialButton from "@material-ui/core/Button";
import MaterialCheckbox from "@material-ui/core/Checkbox";
import MaterialChip from "@material-ui/core/Chip";
import MaterialFAB from "@material-ui/core/Fab";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default {
    title: "Web"
};

export const Button = ({ label }) => {
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
    return (
        <FormControlLabel
            value="top"
            control={<MaterialCheckbox color="primary" />}
            label={label}
        />
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5)
        }
    }
}));

Checkbox.args = {
    label: "Material checkbox"
};

export const Chip = ({ chip1, chip2, chip3, chip4 }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
    return (
        <MaterialFAB
            style={{
                backgroundColor: props.backgroundColor
            }}
        >
            FAB
        </MaterialFAB>
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
