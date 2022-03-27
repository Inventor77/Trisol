import React, { useState } from 'react'
import './CareSeeker.scss'
import Nav from '../../components/Navbar/Nav'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import {
    FormControl,
    Select,
    OutlinedInput,
    MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReportCard from '../../components/ReportCard/ReportCard';


const StyledSelect = styled(Select)(
    ({ theme }) => `
    font-family: "Roboto", serif;
    width: 132px;
    height: 42px;
    font-weight: 700;
    font-size: 18px;
    color:  #fff;
    background: #000;
    border: none;
    border-radius: 3px 0 0 3px;
`,
);
const StyledFilterSelect = styled(Select)(
    ({ theme }) => `
    font-family: "Roboto", serif;
    width: 200px;
    height: 42px;
    font-weight: 700;
    font-size: 18px;
    color:  #fff;
    background: #000;
    border: none;
    border-radius: 3px;
`,
);

const StyledSearch = styled('input')(
    ({ theme }) => `
    font-family: "Roboto", serif;
    width: 320px;
    height: 42px;
    padding: 0px 16px;
    font-weight: 500;
    font-size: 16px;
    color:  #fff;
    background: #161616;
    border: none;
    border-radius: 0px 3px 3px 0px;
    &:hover {
    }

    &:focus {
        outline: none;
    }
`,
);

const Search = React.forwardRef(function Search(props, ref) {
    return (
        <InputUnstyled components={{ Input: StyledSearch }} {...props} ref={ref} />
    );
});


function CareSeeker() {
    const [type, setType] = useState("Name");
    const [filter, setFilter] = useState("All");


    const handleTypeSelect = (event) => {
        const {
            target: { value },
        } = event;
        setType(value);
    };
    const handleFilterSelect = (event) => {
        const {
            target: { value },
        } = event;
        setFilter(value);
    };
    return (
        <section className='careSeeker_layout'>
            <Nav />
            <main className='layout_container'>
                <ProfileInfo />
                <div className='action_section'>
                    <FormControl className='action_form'>
                        <div className='search_by_type'>
                            <StyledSelect
                                className='typeSelect'
                                value={type}
                                onChange={handleTypeSelect}
                                input={<OutlinedInput />}
                                IconComponent={() =>
                                    <KeyboardArrowDownIcon sx={{ cursor: "pointer", marginRight: '8px' }} />
                                }
                            >
                                <MenuItem className='styledOption' value="Name">
                                    Name
                                </MenuItem>
                                <MenuItem className='styledOption' value="Type">
                                    Type
                                </MenuItem>
                            </StyledSelect>
                            <Search
                                id="search"
                                aria-label="Search"
                                placeholder="Search"
                            />
                        </div>
                        <StyledFilterSelect
                            className='filter'
                            value={filter}
                            onChange={handleFilterSelect}
                            // input={<OutlinedInput />}
                            IconComponent={() =>
                                <KeyboardArrowDownIcon sx={{ cursor: "pointer", marginRight: '8px' }} />
                            }
                        >
                            <MenuItem className='styledOption' value="All">
                                All
                            </MenuItem>
                            <MenuItem className='styledOption' value="Today">
                                Today
                            </MenuItem>
                            <MenuItem className='styledOption' value="Week">
                                Week
                            </MenuItem>
                            <MenuItem className='styledOption' value="Month">
                                Month
                            </MenuItem>
                        </StyledFilterSelect>
                    </FormControl>
                </div>
                <div className='card_container'>
                    <ReportCard />
                </div>
            </main>
        </section>
    )
}

export default CareSeeker