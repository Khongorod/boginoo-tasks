import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useFirebase } from '../firebase';

export const HomeDefault = () => {
    const [show, setShow] = useState(false);
    const { db, firebase } = useFirebase();

    const history = useHistory();

    const [url, setUrl] = useState();

    const [short, setShort] = useState(' ');
    const [long, setLong] = useState(' ');

    const generateShortUrl = async () => {

        const random = Math.random().toString(36).substring(7)
        const snl = await db.collection('shortener').doc(random).set({
            short: window.location.origin + '/' + random,
            long: url,
            // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setShort(window.location.origin + '/' + random)
        setLong(url)
        setShow(true);
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
                    <Input className="h-5 w-9 mt-3" placeholder="https://www.web-huudas.mn" onChange={(e) => setUrl(e.target.value)} value={url} />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary" onClick={generateShortUrl}>Богиносгох</Button>
                </div>
                {show &&
                    <div>
                        <div>
                            <div className="font-ubuntud mt-5">Өгөгдсөн холбоос:</div>
                            <div className="font-ubuntul">{url}</div>
                        </div>
                        <div>
                            <div className="font-ubuntud mt-5">Богино холбоос: </div>
                            <div className="font-ubuntul">{short}</div><div className='font-ubuntus c-primary underline'>Хуулж авах</div>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}