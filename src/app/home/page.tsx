'use client'
import Sidebar from '@/components/home/sidebar'
import Feed from '@/components/home/feed'
import Widgets from '@/components/home/widgets'
import CommentModal from '@/components/home/comment-modal'

export default function Home() {

    return (
        <main className='flex min-h-screen mx-auto'>
            <Sidebar />

            <Feed />

            <Widgets />

            <CommentModal />
        </main>
    );
}