import React, { useState } from 'react'
import './Signup.scss'
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
    Select,
    OutlinedInput,
    MenuItem,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField
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

const StyledSelectElement = styled(Select)(
    ({ theme }) => `
    width: 372px;
    height: 48px;
    font-size: 0.875rem;
    font-family: "Roboto", serif;
    font-weight: 500;
    line-height: 1.5;
    color:  #1A2027;
    background: #F3F6F9;
    border: 1px solid #CDD2D7;
    border-radius: 4px;

    &:hover {
        background: #E7EBF0;
        border-color: #B2BAC2;
    }

    &:focus {
        outline: 3px solid #0288d1;
    }
`,
);


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

const DESCRIPTION = [
    "Doctor",
    "Care Seeker",
    'Radiologist'
]

function Signup() {
    const [visible, setVisible] = useState(false);
    const [description, setDescription] = useState("");
    const [open, setOpen] = useState(false);
    const [gender, setGender] = useState("");

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setDescription(value);
        if (value === "Care Seeker") setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDialogueSelect = (event) => {
        const {
            target: { value },
        } = event;
        setGender(value);
    }
    return (
        <div className='signup_layout'>
            <div className='signup_container'>
                <div className='signup_container_left'>
                    <div className='signup_container_logo'>
                        <img src={Logo} alt='trisol-logo'></img>
                    </div>
                    <InfoHeader />
                    <InfoPara />
                    <InfoCheckStyle />
                </div>
                <div className='signup_container_right'>
                    <div className='signup_container_right_title'>
                        <h1 className='title_text'>
                            Start with Trisol
                        </h1>
                    </div>
                    <div className='signup_container_right_para'>
                        <p className='para_text'>
                            Continue with Logging in with your details.
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
                        <label htmlFor="description" className='form_label'>DESCRIPTION</label>
                        <StyledSelectElement
                            displayEmpty
                            value={description}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Please Choose</em>;
                                }
                                return selected;
                            }}
                        >
                            <MenuItem disabled value="">
                                <em>Please Choose</em>
                            </MenuItem>
                            {DESCRIPTION.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </StyledSelectElement>
                        <StyledButton variant="contained">Sign up</StyledButton>
                    </FormControl>
                    <div className='signup_container_right_footer'>
                        <h1 className='footer_text'>
                            Already have an Account?
                        </h1>
                        <span className='footer_link'>Log In</span>
                    </div>
                </div>
            </div>
            {open &&
                (
                    <Dialog className="infoDialog" open={open} onClose={handleClose}>
                        <DialogTitle>Extra Information</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please fill this extra Information for your future reference
                            </DialogContentText>
                        </DialogContent>
                        <FormControl>
                            <label htmlFor="description" className='form_label'>Gender</label>
                            <Select
                                value={gender}
                                displayEmpty
                                sx={{ margin: '0px 42px 12px 24px', width: '480px' }}
                                onChange={handleDialogueSelect}
                                renderValue={(selected) => {
                                    if (gender === undefined || gender === "") {
                                        return <em>Please Choose</em>;
                                    }
                                    return selected;
                                }}
                            >
                                <MenuItem disabled value="">
                                    <em>Please Choose</em>
                                </MenuItem>
                                <MenuItem
                                    value={"Female"}
                                >
                                    Female
                                </MenuItem>
                                <MenuItem
                                    value={"Male"}
                                >
                                    Male
                                </MenuItem>
                                <MenuItem
                                    value={"Prefers not to select"}
                                >
                                    Prefers not to select
                                </MenuItem>
                            </Select>
                            <label htmlFor="description" className='form_label'>Please Enter you Birth Date</label>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="birthDate"
                                label=""
                                type="date"
                                variant="outlined"
                                sx={{ margin: '0px 42px 12px 24px', width: '480px' }}
                            />
                        </FormControl>
                        <DialogActions>
                            <Button onClick={handleClose}>Submit</Button>
                        </DialogActions>
                    </Dialog>
                )
            }
        </div>
    )
}

export default Signup