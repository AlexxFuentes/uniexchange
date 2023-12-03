'use client'
import Sidebar from '@/components/home/sidebar'
import Widgets from '@/components/home/widgets'
import Notifications from '@/components/home/Notifications/notifications';

export default function Notificationes() {

    return (
        <main className='flex min-h-screen mx-auto'>
            {/* <Sidebar /> */}

            <Notifications />

            <Widgets />
        </main>
    );
}