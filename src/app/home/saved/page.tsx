'use client'
import Sidebar from '@/components/home/sidebar'
import SavedP from '@/components/home/saved/saved';
import Widgets from '@/components/home/widgets'

export default function Saved() {

    return (
        <main className='flex min-h-screen'>
            {/* <Sidebar /> */}

            <SavedP />

            <Widgets />
        </main>
    );
}