import React from 'react'
import './ReportCard.scss'

function ReportCard(props) {
    const { name, reportType, date } = props;
    return (
        <div className='card'>
            <div className='card_title'>
                <div className='card_title_text'>
                    {name ? name : "Report Name"}
                </div>
                <div className='report_type'>
                    ({reportType ? reportType : "Report"})
                </div>
            </div>
            <div className='producedDate_container'>
                <div className='producedDate_text'>
                    {date ? date : "27 March 2022"}
                </div>
            </div>
        </div>
    )
}

export default ReportCard