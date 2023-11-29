import Sidebar from '@/components/home/sidebar'
import ListFaculties from '@/components/home/faculties/list-faculties'
import Widgets from '@/components/home/widgets'


export default function Facultad() {
    return (
        <main className='flex min-h-screen mx-auto'>
            <Sidebar />

            <ListFaculties />

            <Widgets />
        </main>
    );
}