import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10' >
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'  >
        {/**----Left Section------ */}

         <div>
            <p className='w-full md:w-2/3 text-gray-600 leading-6' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         </div>

        {/**----Center Section------ */}

         <div>

          <p className='text-xl font-medium mb-5'  >COMPANY</p>
              <ul className='flex flex-col gap-2 text-gray-600'  >
                <li>Home</li> 
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
               </ul>

         </div>

         {/**----Right Section------ */}

         <div>

           <p className='text-xl font-medium mb-5'  >GET IN TOUCH</p>
               <ul className='flex flex-col gap-2 text-gray-600'   >
                  <li>+92-555-555-5555</li>
                  <li>sample@gmail.com</li>
                </ul>
         </div>
          
       </div>


    </div>
  )
}

export default Footer