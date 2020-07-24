import React, { useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase';

export const LogIn = () => {
    const {auth} = useFirebase();
    const history = useHistory();

    const [state, setState] = useState({ email: '', password: '' });

    const toReset = () => {
        history.push('/resetpass')
    }
    const toSignUp = () => {
        history.push('/signUp')
    }

    const loginUser = () => {
        const email = state.email
        const password = state.password
        auth.signInWithEmailAndPassword(email, password)
            .then(() => { alert('logged in !') })
            .catch((error) => {
                const err = (error.code).split('/')[1];
                if(err === 'invalid-email') {
                    alert('email bichsen esehee shalgana uu :)')
                }
                if(err === 'wrong-password') {
                    alert('wrong password')
                }
                if(err === 'user-not-found') {
                    alert('u need to sign UP')
                }
            })
    }

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

                <div className='font-noubuntu c-primary fs-20 lh-23 mt-4'>Нэвтрэх</div>
                <div className="mt-4">
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Цахим хаяг</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder="name@mail.domain"
                        onChange={(e) => setState({ ...state, email: e.target.value })} />
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Нууц үг</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder='......' type='password'
                        onChange={(e) => setState({ ...state, password: e.target.value })} />
                </div>
                <div className='w-8 flex justify-between mt-4'>
                    {/* <div className='checkbox'></div> */}
                    <div className='front-ubuntu fs-12 c-primary '>Намайг сана</div>
                    <div className='front-ubuntu fs-12 underline' onClick={toReset}>Нууц үгээ мартсан</div>
                </div>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 mt-4 b-primary' onClick={() => loginUser()}>Нэвтрэх</Button>
                <div className='front-ubuntu fs-12 mt-4 c-primary underline' onClick={toSignUp}>Шинэ хэрэглэгч бол энд дарна уу?</div>
            </div>
        </Layout>
    )
}