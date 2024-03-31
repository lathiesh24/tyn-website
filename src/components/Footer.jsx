import React from 'react'

const Footer = () => {
    return (
        <div className='h-screenflex'>
            {/* Footer part 1 */}
           <div className='flex'>
           <div className='mx-20 w-2/6 '>
               <img src="/tynfooterimg.png" alt="tyn-footer-image" className='w-40 h-40' />
           </div>

           <div className='w-4/6 flex gap-10'>
                <div className='font-light text-sm'>
                    <h3 className='font-semibold text-lg mb-2'>Services</h3>
                    <p>Alliance as a service</p>
                    <p>Co Innovation as a service</p>
                </div>

                <div className='font-light text-sm'>
                    <h3 className='font-semibold text-lg mb-2'>Company</h3>
                    <p>About us</p>
                    <p>Our Team</p>
                    <p>Difference</p>
                </div>

                <div className='font-light text-sm'>
                    <h3 className='font-semibold text-lg mb-2'>Contact</h3>
                    <p>info@theyellownetwork.com</p>
                </div>
           </div>
         
           </div>

           {/* Footer part 2 */}
           <div className='mb-10'>
            <div className='border-b border-gray-200 border-solid mx-20 my-4'>
                
            </div>
            <div className='flex w-full mx-20 gap-10'>
                <div className='w-2/6 font-light'>
                Copyright © 2024 TYN Ecosystem Private Ltd
                </div>
                <div className='w-4/6 flex gap-10 font-light'>
                  <div>
                    Terms of Service
                  </div>
                  <div>Privacy Policy</div>
                  <div>Cookie Policy</div>
                </div> 
            </div>
           </div>
        </div>
    )
}

export default Footer