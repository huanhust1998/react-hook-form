import React from "react";
import { useForm } from "react-hook-form";

function ApplyValidation() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  /* *
  * chúng ta có thể validate một field bất kỳ với RHF bằng việc truyền tham số thứ 2 vào register,
  tham số này là một object chứa các rules để kiểm tra field đó.
  Form chỉ có thể submit khi tất cả các field không vi phạm rules nào đã áp dụng
  */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
export default ApplyValidation;
