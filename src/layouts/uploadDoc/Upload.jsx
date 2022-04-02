import React, { useState } from 'react'
import './Upload.scss'
import Nav from '../../components/Navbar/Nav'
import { styled } from '@mui/system';
import {
    FormControl,
    Select,
    OutlinedInput,
    MenuItem,
    Button,
    TextField,
} from '@mui/material';
import {
    LocalizationProvider,
    DatePicker,
    TimePicker
} from '@mui/lab';
import AdapterDateFns from '@date-io/date-fns';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DropzoneArea } from 'material-ui-dropzone';


const StyledSelect = styled(Select)(
    ({ theme }) => `
    font-family: "Roboto", serif;
    width: 636px;
    height: 54px;
    font-weight: 700;
    font-size: 18px;
    color:  #555;
    background: #999;
    border: none;
    border-radius: 4px;
`,
);

const StyledTextField = styled(TextField)(
    ({ theme }) => `
    font-family: "Roboto", serif;
    width: 300px;
    height: 54px;
    font-weight: 700;
    font-size: 18px;
    color:  #555;
    background: #999;
    border: none;
    border-radius: 4px;
`,
);

const StyledButton = styled(Button)(() => `
    height: 64px;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    background: #888888;
    color: #fff;
    border-radius: 4px;
    text-align: left;
    margin-top: 42px;
`)

function Upload() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const handleNameSelect = (event) => {
        const {
            target: { value },
        } = event;
        setName(value);
    }
    const handleTypeSelect = (event) => {
        const {
            target: { value },
        } = event;
        setType(value);
    }
    return (
        <div className='upload_layout'>
            <Nav />
            <div className="upload_container">
                <div className="upload_title">
                    <div className="upload_title_text">
                        Report/Prescription
                    </div>
                    <div className="upload_title_para">
                        Mandatory Information
                    </div>
                </div>
                <FormControl>
                    <label htmlFor="name" className='form_label'>Name of Care Seeker</label>
                    <StyledSelect
                        id="name"
                        displayEmpty
                        className='nameSelect'
                        value={name}
                        onChange={handleNameSelect}
                        input={<OutlinedInput />}
                        IconComponent={() =>
                            <KeyboardArrowDownIcon sx={{ cursor: "pointer", marginRight: '8px' }} />
                        }
                        renderValue={(selected) => {
                            if (name === "" || name === undefined) {
                                return <em><b>Select Care Seeker</b></em>;
                            }
                            return selected;
                        }}
                    >
                        <MenuItem disabled value="">
                            <em>Select Care Seeker</em>
                        </MenuItem>
                        <MenuItem className='styledOption' value="Care-Seeker-1">
                            Care-Seeker-1
                        </MenuItem>
                        <MenuItem className='styledOption' value="Care-Seeker-2">
                            Care-Seeker-2
                        </MenuItem>
                    </StyledSelect>
                    <label htmlFor="type" className='form_label'>Type of Document</label>
                    <StyledSelect
                        id="type"
                        displayEmpty
                        className='typeSelect'
                        value={type}
                        onChange={handleTypeSelect}
                        input={<OutlinedInput />}
                        IconComponent={() =>
                            <KeyboardArrowDownIcon sx={{ cursor: "pointer", marginRight: '8px' }} />
                        }
                        renderValue={(selected) => {
                            if (type === "" || type === undefined) {
                                return <em><b>Select Document Type</b></em>;
                            }
                            return selected;
                        }}
                    >
                        <MenuItem disabled value="">
                            <em>Select Document Type</em>
                        </MenuItem>
                        <MenuItem className='styledOption' value="Prescription">
                            Prescription
                        </MenuItem>
                        <MenuItem className='styledOption' value="Report">
                            Report
                        </MenuItem>
                    </StyledSelect>
                    <div className='date_time'>
                        <div className='date'>
                            <label htmlFor="date_input" className='form_label'>Date</label>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    placeholder="Date"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <StyledTextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='time'>
                            <label htmlFor="time_input" className='form_label'>Time</label>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    placeholder="Time"
                                    value={time}
                                    onChange={(newValue) => {
                                        setTime(newValue);
                                    }}
                                    renderInput={(params) => <StyledTextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <label htmlFor="upload" className='form_label'>Upload Report/Prescription</label>
                    <DropzoneArea id="apk" />
                    <StyledButton variant="contained">Sign up</StyledButton>
                </FormControl>
            </div>
        </div>
    )
}

export default Upload