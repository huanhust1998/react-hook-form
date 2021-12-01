import React from "react";
import { useForm } from "react-hook-form";

function UseForm(props) {
  /* *
    - useForm is custom hook for managing forms with ease
    - It takes optional arguments
    */
  const { control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  /* 

  1. mode : onChange | onBlur | onSubmit | onTouched | all = 'onSubmit';
        this option allows you to configure the validation strategy before user submit the form
        (xác định cách configure validation trước khi submit form)
        - onSubmit: validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
        - onBlur : validation will trigger on the blur event
        
  */
  return <div></div>;
}

export default UseForm;
