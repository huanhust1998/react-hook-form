import React from "react";
import { useForm } from "react-hook-form";

function Register(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(typeof register);
  };

  /**
   * One of the key concepts in React Hook Form is to register
   * register là một hàm dùng để đăng ký các field vào trong RHF
   * register nhận vào name của field đó và trả về một Object={name, onChange, onBlur, ref}
   *  */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default Register;
