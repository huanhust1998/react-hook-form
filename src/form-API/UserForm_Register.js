import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function UserForm_Register(props) {
  const { register, handleSubmit } = useForm();

  /* 
    - register:(name: string, RegisterOptions?)=>({onChange, onBlur, name, ref}})
    - Đây là method cho phép bạn đăng ký một input hoặc một select element và áp dụng quy tắc validation
    cho React Hook Form. Tất cả các quy tắc xác thực đều dựa trên các quy tắc của HTML và cho phép các quy tắt tùy chỉnh
    - Input name => Submit Result
    register("firstName")=> {firstName:'value'};
    register("name.firstName")=>{name:{firstName:'value'}};
    register("name.firstName.0")=>{name:{firstName:['value']}}

    */

  function onSubmitValidation(model) {
    console.log(model);
  }

  const handleGetValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      {/* register with validation and error message */}
      <form onSubmit={handleSubmit(onSubmitValidation)}>
        <input
          type="text"
          {...register("test", {
            required: true,
            maxLength: {
              value: 2,
              message: "...",
            },
            minLength: {
              value: 10,
              message: "....",
            },
          })}
        />

        <input
          type="number"
          {...register("number", {
            max: 3,
            min: 1,
            valueAsNumber: true,
            setValueAs: (v) => parseInt(v),
            onChange: (e) => console.log(e.target.value),
            onBlur: (e) => console.log(e.target.value),
          })}
        />

        <input
          type="date"
          {...register("test", {
            valueAsDate: true,
          })}
        />

        {/* validate: bạn có thể truyền vào một callback fuction giống như một đối số của validate, 
hoặc bạn có thể truyền vào một object của callback function để validate tất cả chúng */}
        <input
          {...register("validate", { validate: (value) => value === 1 })}
        />

        <input
          {...register("validateObject", {
            validate: {
              positive: (v) => parseInt(v) > 0,
              lessThanTen: (v) => parseInt(v) < 10,
              checkUrl: async () => await fetch(),
            },
          })}
        />

        <TextField
          {...register("name", {
            onChange: (e) => handleGetValue(e),
          })}
          variant="outlined"
          size="small"
        />
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}

export default UserForm_Register;
