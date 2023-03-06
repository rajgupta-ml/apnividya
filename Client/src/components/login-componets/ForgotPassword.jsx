import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../general-componets/Navbar';
import key from '../../images/key.svg';

function ForgotPassword() {
  return (
    <div>
      <Navbar />
      <section className="flex justify-center">
        {' '}
        <div className="flex justify-center mt-[40px] bg-[#0079BC] max-w-[720px] rounded-[20px]">
          <div className="flex flex-col justify-center items-center m-6 ">
            <img className="w-[100px]" src={key} alt="" />
            <p className="text-4xl mt-6 text-[#fff]">FORGOT PASSWORD?</p>
            <p className="text-sm mb-6 text-[#fff]">No worries, We will send you reset instructions</p>
            <input
              type="email"
              placeholder="Enter your email"
              className=" log-input-field | w-full h-[55px]  md:h-[71px] px-8 bg-[#F0F5FB] border-2 md:border-4 border-black placeholder:text-black placeholder: text-[1rem] outline-none md:w-[495px] font-[poppins]"
            />
            <button
              type="submit"
              className="log-cta | w-full h-[4rem] mt-[30px] border-4 border-black outline-none bg-[#FFC100] text-[2rem] text-white md:w-[495px]"
            >
              <h1 className="rotate-[-2.13deg]">REQUEST OTP</h1>
            </button>
            <div className="mt-6 text-[#fff]">
              <NavLink to="/login">◀ Back to login</NavLink>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default ForgotPassword;
