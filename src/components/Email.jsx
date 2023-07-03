import React from 'react';
import { Modal } from 'antd';
import { useForm } from "react-hook-form";

const Email = ({handleOk,handleCancel,isModalOpen}) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
      } = useForm();

      const onSubmit = (data) => {
       if(data){
        handleOk(true)
        reset()
       }
        console.log(data);
      };
   
    return (
        <>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        >
        <form onSubmit={handleSubmit(onSubmit)} className='py-4'>
            <h4 className="text-center font-semibold text-xl">Send me mail</h4>
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
      </Modal>
        </>
    );
};

export default Email;