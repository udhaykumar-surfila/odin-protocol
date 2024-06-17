import { useRef, useState } from 'react';

function isValidateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitEmail(email) {
    console.log(email);
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe9h2VSn8eNoxqA9KcHm16r8wvAAfSAkm57ipXBGFE7Lq4sWw/formResponse';

    const postData = new URLSearchParams();
    postData.append('entry.1125349051', email); // Adjust 'entry.1125349051' based on the entry id from your form

    fetch(googleFormUrl, {
        method: 'POST',
        body: postData
    }).then(response => {
        if (response.ok) {
            console.log('Form submitted successfully');
        } else {
            console.error('Error submitting form');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}

const Waitlist = () => {
    const [email, setEmail] = useState("");
    const emailRef = useRef(null);
    return (
        <>
            <div className="flex justify-center pt-8" id="waitlist">
                <h2 className="text-2xl lg:text-5xl font-bold"> Join The Waitlist</h2>
            </div>
            <div className="flex justify-center ">
                <div className="flex justify-center p-2 w-full md:w-1/3">
                    <div className="relative w-full">
                        {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div> */}
                        <input type="email" id="search" value={email} ref={emailRef} onChange={(e) => setEmail(e.target.value)} className="block w-full p-4 text-sm text-white border border-black rounded-lg bg-[#10101A] focus:ring-[#10101A] focus:border-[#10101A]" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#714EFF] hover:bg-[#5F3BFF] font-medium rounded-lg text-sm px-4 py-2"
                            onClick={
                                () => {
                                    if (isValidateEmail(email)) {
                                        emailRef.current.className = "block w-full p-4 text-sm text-white border border-black rounded-lg bg-[#10101A] focus:ring-[#10101A] focus:border-[#10101A]";
                                        submitEmail(email);
                                    } else {
                                        emailRef.current.className = "block w-full p-4 text-sm text-white border border-red-500 rounded-lg bg-[#10101A] focus:ring-red-500 focus:border-red-500";
                                    }
                                }
                            }>Submit</button>
                    </div>
                </div>
            </div>
            <div />
        </>
    )
}


export default Waitlist;