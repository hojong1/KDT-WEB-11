import React from "react";
import { useForm } from "react-hook-form";
export default function Ex1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };

  const onInValid = (err) => {
    console.log("onInVaild", err);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 항목입니다..",
            minLength: {
              message: "이름은 최소 2글자 이상 작성해주세요",
              value: 2,
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            required: "나이를 입력해주세요.",
            min: {
              message: "0이상의 숫자만 입력 가능합니다",
              value: 0,
            },
          })}
        />
        {errors.age?.message}
        <br />

        <button type="submit">제출</button>
      </form>
    </div>
  );
}
