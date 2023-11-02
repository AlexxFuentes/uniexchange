'use client'
import Image from 'next/image'

export default function Footer() {

    return (
        <footer className="bg-malibu dark:bg-arsenic h-[250px] absolute bottom-0 w-full">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* <div
                        className="flex justify-center text-teal-600 dark:text-teal-300 sm:justify-start"
                    >
                        <Image
                            src={"/logo_sidebar.png"}
                            className='w-40  hover:brightness-95' width={900} height={20} alt={'logo img'}
                        />
                    </div>

                    <p
                        className="mt-4 text-center text-sm text-arsenic dark:text-white lg:mt-0 lg:text-right"
                    >
                        Copyright &copy; 2022. All rights reserved.
                    </p> */}
                </div>
            </div>
        </footer>
    )
}