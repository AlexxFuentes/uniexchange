import { SparklesIcon } from '@heroicons/react/outline'
import Post from './post'
import Input from './input'

export default function Feed() {

    const posts = [
        {
            id: "1",
            name: "John Doe",
            username: "johndoe",
            userImg: "./avatar.svg",
            img: "/img_prueba.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eu nisl. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eu nisl.",
            timestamp: "1 hour ago",
        },
        {
            id: "2",
            name: "John Doe",
            username: "johndoe",
            userImg: "./avatar.svg",
            img: "/img_prueba.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eu nisl. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eu nisl.",
            timestamp: "1 hour ago",
        }
    ]

    return (
        <div className='xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
            <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
                <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <SparklesIcon className='h-5 w-5 text-blue-500 cursor-pointer' />
                </div>
            </div>

            <Input />

            {
                posts.map((post) => (<Post key={post.id} post={post} />))
            }
        </div>
    )
}
