"use client"
import { useForm } from "react-hook-form";

const Form = () => { 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        window.location.reload();
        console.log('Email sent successfully');
      } else {
        // Handle failure (e.g., show an error message)
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-20 bg-[#000] ">
          <input
            {...register("name", { required: "This field is required" })}
            type="text"
            placeholder="Your Name*"
            className="pb-4 bg-[#000] text-center text-[#fff] placeholder:text-[#fff] font-normal border-b-2 outline-none"/>
          {errors.name && <span>{errors.name.message}</span>}
  
          <input
            {...register("email", { required: "This field is required" })}
            type="email"
            placeholder="Your Email*"
            className="pb-4 bg-[#000] text-center text-[#fff] placeholder:text-[#fff] font-normal border-b-2 outline-none"/>
          {errors.email && <span>{errors.email.message}</span>}

          <input
            {...register("number", { required: "This field is required" })}
            type="text"
            placeholder="Contact Number"
            className="pb-4 bg-[#000] text-center text-[#fff] placeholder:text-[#fff] font-normal border-b-2 outline-none"/>
          {errors.name && <span>{errors.name.message}</span>}
  
          <input
            {...register("subject", { required: "This field is required" })}
            type="text"
            placeholder="Subject"
            className="pb-4 bg-[#000] text-center text-[#fff] placeholder:text-[#fff] font-normal border-b-2 outline-none"/>
          {errors.email && <span>{errors.email.message}</span>}  
      </div>
      <div className="w-[100%] mt-10">
        
          <textarea
            {...register("message", { required: "This field is required" })}
            placeholder="Project Summary"
            className="w-full pb-6 bg-[#000] text-center text-[#fff] placeholder:text-[#fff] font-normal border-b-2 outline-none"/>
          {errors.message && <span>{errors.message.message}</span>}
        
      </div>
      <button
        type="submit"
        className='w-[120px] h-[120px] mt-8 p-10 uppercase text-xs font-semibold  rounded-full border-2 border-dashed hover:rotate-360 text-[#fff]'>
          Submit
      </button>
    </form>
  );
};

Form.displayName = "Form";

export default Form;

