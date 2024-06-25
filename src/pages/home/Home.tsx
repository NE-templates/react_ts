import Sidebar from '@/components/Sidebar'
import { CommonContext } from '@/context'
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

const Home: React.FC = () => {

    const { user } = useContext(CommonContext)

    return (
        <div className='w-full flex min-h-screen'>
            <Sidebar />
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='w-10/12 flex flex-col px-14 pt-8'>
                <span className='text-lg font-semibold'>Welcome {user.names}</span>
                <div className="my-14"></div>
            </div>
        </div>
    )
}

export default Home