import React, { useState } from 'react'
import './Upload.scss'
import Nav from '../../components/Navbar/Nav'
import { styled } from '@mui/system';
import {
    FormControl,
    Select,
    OutlinedInput,
    MenuItem,
    // Button,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledSelect = styled(Select)(
    ({ theme }) => `
    font-family: "Roboto", serif;
    width: 630px;
    height: 54px;
    font-weight: 700;
    font-size: 18px;
    color:  #555;
    background: #999;
    border: none;
    border-radius: 3px 0 0 3px;
`,
);

function Upload() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");

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
                        className='typeSelect'
                        value={name}
                        onChange={handleNameSelect}
                        input={<OutlinedInput />}
                        IconComponent={() =>
                            <KeyboardArrowDownIcon sx={{ cursor: "pointer", marginRight: '8px' }} />
                        }
                        renderValue={(selected) => {
                            if (name === "" || name === undefined) {
                                return <em>Select Care Seeker</em>;
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
                        className='typeSelect'
                        value={type}
                        onChange={handleTypeSelect}
                        input={<OutlinedInput />}
                        IconComponent={() =>
                            <KeyboardArrowDownIcon sx={{ cursor: "pointer", marginRight: '8px' }} />
                        }
                        renderValue={(selected) => {
                            if (type === "" || type === undefined) {
                                return <em>Select Document Type</em>;
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
                </FormControl>
            </div>
        </div>
    )
}

export default Upload