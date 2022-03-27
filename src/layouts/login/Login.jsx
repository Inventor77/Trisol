import React, { useState } from 'react'
import './Login.scss'
import Logo from '../../assets/svgs/logo.svg'
import EyeOpen from '../../assets/svgs/eyeOpen.svg'
import EyeClosed from '../../assets/svgs/eyeClosed.svg'
import InfoHeader from '../../components/Info/InfoHeader'
import InfoPara from '../../components/Info/InfoPara'
import InfoCheckStyle from '../../components/Info/InfoCheckStyle'
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import {
    FormControl,
    IconButton,
    Button,
} from '@mui/material';


const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 372px;
    font-size: 0.875rem;
    font-family: "Roboto", serif;
    font-weight: 400;
    line-height: 1.5;
    color:  #1A2027;
    background: #F3F6F9;
    border: 1px solid #CDD2D7;
    border-radius: 5px;
    padding: 12px;

    &:hover {
        background: #E7EBF0;
        border-color: #B2BAC2;
    }

    &:focus {
        outline: 3px solid #0288d1;
    }
`,
);


const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});

const StyledButton = styled(Button)(() => `
    height: 49px;
    width: 372px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    background: #777777;
    border-radius: 4px;
    text-align: left;
    margin-top: 42px;
`)


function Login() {
    const [visible, setVisible] = useState(false);

    return (
        <section className='login_layout'>
            <div className='login_container'>
                <div className='login_container_left'>
                    <div className='login_container_logo'>
                        <img src={Logo} alt='trisol-logo'></img>
                    </div>
                    <InfoHeader />
                    <InfoPara />
                    <InfoCheckStyle />
                </div>
                <div className='login_container_right'>
                    <div className='login_container_right_title'>
                        <h1 className='title_text'>
                            Welcome back to Trisol
                        </h1>
                    </div>
                    <div className='login_container_right_para'>
                        <p className='para_text'>
                            Continue with Logging in with your Name and Password.
                        </p>
                    </div>
                    <FormControl>
                        <label htmlFor="name" className='form_label'>NAME</label>
                        <CustomInput id="name" aria-label="Name" placeholder="Please Insert your full legal name" />
                        <label htmlFor="password" className='form_label'>PASSWORD</label>
                        <div className='password_container'>
                            <CustomInput
                                id="password"
                                aria-label="Password"
                                placeholder="Password"
                                type={visible ? "" : "password"}
                            />
                            <IconButton className='password_eye' onClick={() => setVisible(!visible)}>
                                <img src={visible ? EyeOpen : EyeClosed} alt='eye'></img>
                            </IconButton>
                        </div>
                        <StyledButton variant="contained">Log in</StyledButton>
                    </FormControl>
                    <div className='login_container_right_footer'>
                        <h1 className='footer_text'>
                            Create an Account?
                        </h1>
                        <span className='footer_link'>Sign Up</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login