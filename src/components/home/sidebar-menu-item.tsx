

import Link from "next/link"
export default function SidebarMenuItem({ text, Icon, active, link }: { text: string, Icon: any, active?: boolean, link:string }) {

    return (
        <Link href={link} className='hover:hoverUniversity  w-full'>
        <div className="flex  relative  items-center text-arsenic justify-center xl:justify-start xl:text-sm 2xl:text-lg space-x-3">
            <Icon className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
            <span className={`${active && 'font-bold'} hidden xl:block`}>{text}</span>
        </div>
        </Link>
    )
}