import { useRef, useState, useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';

function isValidateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}



const Waitlist = () => {
    
    const [email, setEmail] = useState("");
    const emailRef = useRef(null);
    const buttonRef = useRef(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // get id from URL
        const id = window.location.hash.replace('#', '')
        if (id){
            document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })
        }
      
      }, [])


    function submitEmail(email) {
        console.log(email);
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe9h2VSn8eNoxqA9KcHm16r8wvAAfSAkm57ipXBGFE7Lq4sWw/formResponse';

        const postData = new URLSearchParams();
        postData.append('entry.1125349051', email); // Adjust 'entry.1125349051' based on the entry id from your form
        buttonRef.current.disabled = true;

        fetch(googleFormUrl, {
            mode: 'no-cors',
            method: 'POST',
            body: postData
        }).then(response => {
            console.log('log:', response);
            setIsSubmitted(true);
            setEmail("");
        }).catch(error => {
            buttonRef.current.disabled = false;
            console.error('log:', error);
        });
    }

    return (
        <>
            {!isSubmitted ? (
            <div>
                <div className="flex justify-center py-8" id="waitlist">
                    <h2 className="text-2xl lg:text-5xl font-bold"> Join The Waitlist</h2>
                </div>
                <div className="flex justify-center ">
                    <div className="flex justify-center p-2 w-full md:w-1/3">
                        <div className="relative w-full">
                            <input type="email" id="search" value={email} ref={emailRef} onChange={(e) => setEmail(e.target.value)} className="block w-full p-4 text-sm text-white border border-black rounded-lg bg-[#10101A] focus:ring-[#10101A] focus:border-[#10101A]" required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#714EFF] hover:bg-[#5F3BFF] font-medium rounded-lg text-sm px-4 py-2" ref={buttonRef}
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
            </div>
            ):(
                <div className="flex justify-center pt-8" id="waitlist">
                <p className='bg-[#714EFF] text-white font-bold py-2 px-4 rounded-full'><CheckIcon></CheckIcon> &nbsp;&nbsp;Successfully joined on the waitlist</p>
            </div>
            )}
            
        </>
    )
}


export default Waitlist;