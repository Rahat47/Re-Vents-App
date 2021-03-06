import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label pointing basic color="red">
                    {" "}
                    {meta.error}{" "}
                </Label>
            ) : null}
        </FormField>
    );
};

export default TextInput;
