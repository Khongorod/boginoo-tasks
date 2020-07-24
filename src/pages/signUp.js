import React, { useState, useContext } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase';

export const SignUp = () => {
    const { auth, db } = useFirebase();
    const history = useHistory();
    const [state, setState] = useState({ email: '', password: '', name: '', repassword: '' });
    const [user, setUser] = useState(null);


    const createUser = async (name, email, password, repassword) => {
        if (password === repassword) {
            let cred = await auth.createUserWithEmailAndPassword(email, password);
            await db.collection('users').doc(cred.user.uid).set({ name, email, history: []})
            history.push('/');
        } else {
            alert('password incorrect')
        }
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

                <div className='font-noubuntu c-primary fs-20 lh-23 mt-4'> Бүртгүүлэх </div>
                <div className="mt-4">
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Нэр</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder="Name" onChange={(e) => setState({ ...state, name: e.target.value })}/>
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Цахим хаяг</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder="name@gmail.com" type="email" onChange={(e) => setState({ ...state, email: e.target.value })}/>
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Нууц үг</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder='......' type='password'  onChange={(e) => setState({ ...state, password: e.target.value })}/>
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Нууц үгээ давтана уу</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder='......' type='password'  onChange={(e) => setState({ ...state, repassword: e.target.value })}/>
                </div>
                <div className='w-8 flex justify-between mt-4'>
                    <div className='front-ubuntu fs-12 c-primary '>Намайг сана</div>
                </div>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 mt-4 b-primary' onClick={() => createUser(state.name, state.email, state.password, state.repassword)}> Бүртгүүлэх </Button>
            </div>
        </Layout>
    )
}