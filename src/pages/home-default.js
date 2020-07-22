import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const HomeDefault = () => {

    const history = useHistory();

    const [url, setUrl] = useState();

    const toShort = () => {
        history.push('/shortener')

    }

    const data = firebase.firestore();

    const generateShortUrl = async() => {

        const random =  Math.random().toString(64).substring(8)
        console.log(random)
        await data.collection('shortener').doc(url).set({
            shorturl: random
        })
    }

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center mt-7'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className="h-5 w-9 mt-3" placeholder="https://www.web-huudas.mn" onChange={(e) => setUrl(e.target.value )} value={url} />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary" onClick={generateShortUrl}>Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}