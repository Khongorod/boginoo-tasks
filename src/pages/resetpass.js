import React, { useState } from 'react';
import { Layout, IconDash, IconEndBracket, IconStartBracket, Input, Button } from '../components/';

export const ResetPass = () => {

    const [state, setState] = useState({ email: '' });


    return (
        <Layout>
            <div className='h100 flex flex-col items-center'>
                <div className='flex justify-center items-center mt-5'>

                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-nolobster c-primary fs-2 lh-70 mt-1'>
                    Boginoo
                </div>
                <div className='font-noubuntu c-primary fs-30 lh-23 mt-6'>Нууц үг сэргээх</div>
                <div className='font-ubuntu fs-10 lh-23 mt-5'>Бид таны цахим хаяг руу нууц үг</div>
                <div className='font-ubuntu fs-10 lh-23 mt-1'>сэргээх хаяг явуулах болно.</div>
                <div className="mt-5">
                    <div className='font-ubuntu fs-10 lh-18 ph-4'>Цахим хаяг</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder="name@gmail.com" type="email" onChange={(e) => setState({ ...state, email: e.target.value })}/>
                </div>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 mt-4 b-primary'>Илгээх</Button>
            </div>
        </Layout>
    )
}