import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const LogIn = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center mt-5'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-2 lh-70 mt-0'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className="h-5 w-9" placeholder="https://www.web-huudas.mn" disabled />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary">Богиносгохgui medvu</Button>
                </div>
            </div>
        </Layout>
    )
}