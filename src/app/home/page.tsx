'use client'
import Feed from '@/components/home/feed'
import Widgets from '@/components/home/widgets'
import CommentModal from '@/components/home/comment-modal'

export default function Home() {

    return (
        <main className='flex min-h-screen text-sm xl:text-base'>
            <Feed />

            <Widgets />

            <CommentModal />
        </main>
    );
}