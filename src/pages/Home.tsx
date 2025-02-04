import React from 'react'
import Counter from '../components/Counter'
import UserForm from '../components/UserForm'
import RichTextEditor from '../components/RichTextEditor'

const Home = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 py-3 sm:py-4 lg:py-8 px-4 sm:px-8 lg:px-12'>
      <Counter/>
      <UserForm/>
      <RichTextEditor/>
    </div>
  )
}

export default Home
