import React from "react";
import { useForm } from "react-hook-form";
function UseForm_mode(props) {
  /* *
    - useForm is custom hook for managing forms with ease
    - It takes optional arguments
    */
  const { control } = useForm({
    mode: "onSubmit",
  });
  /* 
  mode : onChange | onBlur | onSubmit | onTouched | all = 'onSubmit';
        this option allows you to configure the validation strategy before user submit the form
        (xác định cách configure validation trước khi submit form)
        - onSubmit: validation sẽ được kích hoạt với sự kiện submit
        và các đầu vào không hợp lệ sẽ đính kèm trình xử lý sự kiện onChange để xác thực lại chúng
        
        - onBlur : validation sẽ được kích hoạt với sự kiện blur

        - onChange: validation sẽ được kich hoạt với sự kiện change cho mỗi input,
         nó sẽ dẫn đến nhiều lần re-reders, làm cho hiệu suất giảm.

         - onTouched: validation sẽ kích hoạt với sự kiện blur đầu tiên. Sau đó nó kích hoạt với mọi sự kiện change.

         - all: validation sẽ kích hoạt với sự kiên blur và change .
  
        
  */
  return <div></div>;
}

export default UseForm_mode;
