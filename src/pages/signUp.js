import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom';

export const SignUp = () => {

    const history = useHistory();

    const toReset = () => {
        history.push('/resetpass')
    }

    // const [state, setState] = useState({ email: '', password: '', name: '' });
    // const [user, seyUser] = useState(null);

    // const effect = useEffect(config);

    // useEffect(() => {
    //     firebase.initializeApp();
    // }, [])

    // const signUp = async () => {
    //     console.log(state.email, state.password, state.name);
    //     let uid = await firebase.auth().createUserWithEmailAndPassword(state.email, state.password, state.name)
    //         .then((auth) => auth.user.uid);
    //     console.log('signed up!');
    // }

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
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Нэр</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder="not john" />
                    {/* value={state.name} onChange={(e) => setState({...state, name: e.target.value})} */}
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Цахим хаяг</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder="name@mail.domain" />
                    {/* value={state.email} onChange={(e) => setState({...state, email: e.target.value})} */}
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu fs-12 lh-18 ph-4'>Нууц үг</div>
                    <Input className='nevtreh input w-8 h-5 mt-3' placeholder='......' type='password' />
                </div>
                <div className='w-8 flex justify-between mt-4'>
                    {/* <div className='checkbox'></div> */}
                    <div className='front-ubuntu fs-12 c-primary '>Намайг сана</div>
                    <div className='front-ubuntu fs-12 underline' onClick={toReset}>Нууц үгээ мартсан</div>
                </div>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 mt-4 b-primary'>Нэвтрэх</Button>
                <div className='front-ubuntu fs-12 mt-4 c-primary underline'>Шинэ хэрэглэгч бол энд дарна уу?</div>
            </div>
        </Layout>
    )
}