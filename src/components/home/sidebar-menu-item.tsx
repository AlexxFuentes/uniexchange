

export default function SidebarMenuItem({ text, Icon, active }: { text: string, Icon: any, active?: boolean }) {

    return (
        <div className='hoverEffect flex items-center text-arsenic justify-center xl:justify-start text-lg space-x-3'>
            <Icon className='h-7' />
            <span className={`${active && 'font-bold'} hidden xl:inline`}>{text}</span>
        </div>
    )
}