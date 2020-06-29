import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className="h-5 w-9" placeholder="https://www.web-huudas.mn" disabled />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary">Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}