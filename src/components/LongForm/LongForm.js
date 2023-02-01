import React from 'react';

const LongForm = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[700px] bg-gray-500'>
            <form className='border flex justify-between space-x-3'>
                <div className=''>
                    <div className='flex flex-col text-left space-y-3'>
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" name='firstName' id='firstName' />
                    </div>
                    {/* lastName */}
                    <div className='flex flex-col text-left space-y-3'>
                        <label htmlFor="lastName">lastName</label>
                        <input type="text" name='lastName' id='lastName' />
                    </div>
                    {/* email */}
                    <div className='flex flex-col text-left space-y-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' />
                    </div>
                    {/* password */}
                    <div className='flex flex-col text-left space-y-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    {/* password */}
                    <div className='flex flex-col text-left space-y-3'>
                        <label htmlFor="feedback">Feedback</label>
                        <textarea name="feedback" id="feedback" cols="30" rows="10"></textarea>
                    </div>
                </div>
                {/* col 2 */}
                <div className=' border border-red-200'>
                    {/* password */}
                    <div className='flex flex-col text-left space-y-3'>
                        <label htmlFor="feedback">Feedback</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    {/* password */}
                    <div className=''>
                        <label htmlFor="feedback" className='text-black'>Gender</label>
                        <input type="checkbox" id="Male" name="Male" value="Male"></input>
                        <label htmlFor="feedback" className='text-black'>Female</label>
                        <input type="checkbox" id="female" name="female" value="female"></input>
                        <label htmlFor="feedback" className='text-black'>Female</label>
                        <input type="checkbox" id="female" name="female" value="female"></input>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default LongForm;