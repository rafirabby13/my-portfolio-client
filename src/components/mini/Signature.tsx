
import { Great_Vibes } from 'next/font/google';
import React from 'react'

const signature = Great_Vibes({
    variable: "--font-signature",
    subsets: ["latin"],
    weight: "400", // Great Vibes has only 400
});
const Signature = () => {
    return (

        <span className={` border-[#E80F88] md:text-3xl  px-1 md:px-5 py-2 rounded-lg hover:bg-[#E80F88] border-l-[#E80F88] border-l-[5px] hover:text-white transition duration-200 shadow shadow-[#E80F88] hidden font-bold text-3xl border-x-2 bg-slate-50 p-3 sm:inline-block ${signature.className}`}>{'--<Rafi/>--'}</span>


    )
}

export default Signature
