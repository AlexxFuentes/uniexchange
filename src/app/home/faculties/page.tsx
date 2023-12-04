import ListFaculties from '@/components/home/faculties/list-faculties'
import Widgets from '@/components/home/widgets'

export default function Facultad() {
    return (
        <main className='flex min-h-screen'>
            <ListFaculties />

            <Widgets />
        </main>
    );
}