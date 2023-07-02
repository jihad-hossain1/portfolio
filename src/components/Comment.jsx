import React from "react";
import img from "../assets/an.svg";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Comment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      toast.success("Message Send Successfull");
      reset();
    }

    console.log(data);
  };
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="rounded-md flex flex-col justify-center items-center py-8"
    >
      <Toaster></Toaster>
      <h2 className="text-white text-3xl text-center font-semibold pb-4">
        Leave a Comments
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          id=""
          className="w-full py-4 px-2 bg-transparent border border-neutral-100 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-rose-300 placeholder:text-white"
          {...register("name", { required: true })}
        />
        <br />
        <textarea
          name="comment"
          placeholder="write something"
          className="my-2 bg-transparent border border-neutral-100 p-2 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-rose-300 placeholder:text-white"
          id=""
          cols="40"
          rows="5"
          {...register("comment", { required: true })}
        ></textarea>
        <br />
        <div className="flex flex-col ">
          <input
            type="submit"
            value="Send"
            className="rounded text-white bg-blue-700 px-6 py-4 cursor-pointer hover:shadow-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Comment;
