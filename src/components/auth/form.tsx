'use client'
import { IconUserRegister } from '@/components/svg/icons'
import { useRef } from 'react'

interface FormProps {
    type: boolean, // true = register, false = login
    textButton: string,
    setEmail: (e: string) => void,
    setPassword: (e: string) => void,
    setPassConfirm?: (e: string) => void,
    handleButton: (e: React.MouseEvent) => void,
}

export function Form({
    type,
    textButton,
    setEmail,
    setPassword,
    setPassConfirm,
    handleButton,
}: FormProps) {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passConfirmRef = useRef<HTMLInputElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleButton(e);

        setTimeout(() => {
            if (emailRef.current) {
                emailRef.current.value = '';
            }
            if (passwordRef.current) {
                passwordRef.current.value = '';
            }
            if (type && passConfirmRef.current) {
                passConfirmRef.current.value = '';
            }
        }, 3000);
    }


    return (
        <form className="mx-auto max-w-xs">
            <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                required
            />
            <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white mt-5"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                required
            />

            {
                type && (
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white mt-5"
                        type="password"
                        placeholder="Password Confirm"
                        onChange={(e) => setPassConfirm && setPassConfirm(e.target.value)}
                        ref={passConfirmRef}
                        required
                    />
                )
            }

            <button
                className="mt-5 tracking-wide font-semibold bg-mySin text-arsenic w-full py-4 rounded-lg hover:bg-electric hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={handleClick}
            >
                <IconUserRegister />
                <span className="ml-3">{textButton}</span>
            </button>
        </form>
    );
}