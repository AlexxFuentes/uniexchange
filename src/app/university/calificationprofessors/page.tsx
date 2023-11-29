'use client'
import Sidebar from '@/components/home/sidebar'
import Califications from '@/components/Calification/Califications'
import Widgets from '@/components/home/widgets'

export default function Calificationprofessors() {

    return (
        <main className='flex min-h-screen mx-auto'>
            {/* <Sidebar /> */}

            <Califications />

            <Widgets />
        </main>
    );
}