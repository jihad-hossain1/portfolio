import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      toast.success("successfull");
      reset();
    }
    console.log(data);
  };
  return (
    <div>
      <h4 className="text-center font-semibold text-3xl text-gray-600">
        Contact Us
      </h4>
      <Toaster></Toaster>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-xl font-extralight">Write a message:</p>
        <input
          type="text"
          placeholder="Your Name"
          className="border border-neutral-300 w-full py-4 rounded px-4 my-4 focus:outline-none focus:shadow-outline focus:border-rose-300"
          id=""
          {...register("name", { required: true })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-neutral-300 w-full py-4 rounded px-4 my-4 focus:outline-none focus:shadow-outline focus:border-rose-300"
          id=""
          {...register("email", { required: true })}
        />
        <input
          type="text"
          placeholder="Subject"
          className="border border-neutral-300 w-full py-4 rounded px-4 my-4 focus:outline-none focus:shadow-outline focus:border-rose-300"
          id=""
          {...register("mailSubject", { required: true })}
        />
        <textarea
          type=""
          placeholder="leave a feedback"
          className="border border-neutral-300 w-full py-4 rounded px-4 my-4 focus:outline-none focus:shadow-outline focus:border-rose-300"
          id=""
          {...register("description", { required: true })}
        />

        <div>
          <input
            type="submit"
            value="Submit"
            className="rounded w-full py-4 px-10 bg-gray-300 cursor-pointer hover:bg-blue-600 hover:text-white font-semibold shadow"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
