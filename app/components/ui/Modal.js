// Modal.js
import React from 'react';
import Image from 'next/image';
import crossIcon from '../../../public/icon/cross.png';
import { useForm } from 'react-hook-form';
import "./modal.css"
  
const Modal = ({ isOpen, closeModal }) => {
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
        // Handle success (e.g., show a success message)
        console.log('Email sent successfully');
        reset();
        window.location.reload();
      } else {
        // Handle failure (e.g., show an error message)
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-box modalBackdrop" id="modal-box1">
          <div className="modal-form">
            <button className="cross-btn" onClick={closeModal}>
              <Image src={crossIcon} width={30} height={30} alt="Close" />
            </button>
            <h2 className="modal-heading">
              GET YOUR COUPON & AVAIL 50% DISCOUNT
            </h2>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="form-content">
                <input
                  {...register('name', { required: 'This field is required' })}
                  type="text"
                  placeholder="Name"
                  className="form-entry"
                />
                {errors.name && <span>{errors.name.message}</span>}

                <input
                  {...register('email', { required: 'This field is required' })}
                  type="email"
                  placeholder="Email"
                  className="form-entry"
                />
                {errors.email && <span>{errors.email.message}</span>}

                <input
                  {...register('subject', { required: 'This field is required' })}
                  type="text"
                  placeholder="Subject"
                  className="form-entry"
                />
                {errors.email && <span>{errors.email.message}</span>}

                <input
                  {...register('phone', { required: 'This field is required' })}
                  type="text"
                  placeholder="Phone No:"
                  className="form-entry"  
                />
                {errors.email && <span>{errors.email.message}</span>}

                <textarea
                  {...register('message', { required: 'This field is required' })}
                  placeholder="Tell us about the project"
                  className="comment-box"
                />
                {errors.message && <span>{errors.message.message}</span>}

                <button type="submit" className="form-btn" id='form-button'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
