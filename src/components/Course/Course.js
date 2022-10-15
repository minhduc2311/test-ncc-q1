import React from 'react'
import "./Course.css"

function Course({imgUrl}) {
  return (
    <div className='course'>
      <p className='course-title'>Lorem ipsum dolor sit amet</p>
      <div className='course-content'>
      <img className='course-img' src={imgUrl} alt="course-img" /> 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.

      </div>

    </div>
  )
}

export default Course;