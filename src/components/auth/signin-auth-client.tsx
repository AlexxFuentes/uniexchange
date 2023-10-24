'use client'
import Image from 'next/image'

interface SigninProps {
    providers: {
        [key: string]: {
            id: string
            name: string
            type: string
            signinUrl: string
            callbackUrl: string
        }
    }
}

export default function SigninAuthClient({ providers }: SigninProps) {

    return (
        <>
            {providers && Object?.values(providers)?.map((provider) => (
                <div key={provider.name} className='flex flex-col items-center'>
                    <Image
                        className='w-36 object-cover'
                        src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
                        alt='twitter logo'
                        width={50}
                        height={50}
                    />
                    <p className='text-center text-sm italic my-10'>
                        This app is created for learning purposes
                    </p>
                    <button
                        //onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                        className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'
                    >
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    );
}

