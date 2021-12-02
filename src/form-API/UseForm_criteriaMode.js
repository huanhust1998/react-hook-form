import React from "react";
import { useForm } from "react-hook-form";

function UseForm_criteriaMode(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    mode: "onChange",
  });

  /* 
  criteriaMode : firstError | all
  When set to firstError (default), only the first error from each field will be gathered.
  When set to all, all errors from each field will be gathered.
  */
  const onSubmit = (data) => console.log(data);

  console.log("errors", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="password"
        {...register("password", {
          required: true,
          minLength: 10,
          pattern: /\d+/gi,
        })}
      />
      {/* without enter data for the password input will result both messages to appear */}
      {errors?.password?.types?.required && <p>password required</p>}
      {errors?.password?.types?.minLength && <p>password minLength 10</p>}
      {errors?.password?.types?.pattern && <p>password number only</p>}

      <input type="submit" />
    </form>
  );
}

export default UseForm_criteriaMode;
