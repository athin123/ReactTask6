import React from 'react'
import {FaGraduationCap} from "react-icons/fa"

const EducationCard = () => {
  return (
    <div className='education_card_container'>
        <div className='education_icon'>
            <FaGraduationCap/>
        </div>
        <div className='education_card_content'>
            <p>2022-2025</p>
            <h3>B-Tech - Computer Science and Engineering</h3>
            <p>Vellore Institute of Technology, A.P</p>
        </div>
    </div>
  )
}

export default EducationCard