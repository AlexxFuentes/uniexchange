'use client'
import { IconUserRegister } from '@/components/svg/icons'
import { useRef, useState, useEffect } from 'react'

interface FormProps {
    type: boolean, // true = register, false = login
    textButton: string,
    setEmail: (e: string) => void,
    setPassword: (e: string) => void,
    setPassConfirm?: (e: string) => void,
    setNameInstitution?: (e: string) => void,
    setCountry?: (e: string) => void,
    setAddress?: (e: string) => void,
    setDescriotion?: (e: string) => void,
    setIsUniversity?: (e: boolean) => void,
    setIsTeacher?: (e: boolean) => void,
    setIsStudent?: (e: boolean) => void,
    is_university?: boolean,
    is_teacher?: boolean,
    is_student?: boolean,
    handleButton: (e: React.MouseEvent) => void,
}

export function Form({
    type,
    textButton,
    setEmail,
    setPassword,
    setPassConfirm,
    handleButton,
    setNameInstitution,
    setCountry,
    setAddress,
    setDescriotion,
    setIsUniversity,
    setIsTeacher,
    setIsStudent,
    is_university,
    is_teacher,
    is_student,
}: FormProps) {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passConfirmRef = useRef<HTMLInputElement>(null);
    const descriotionRef = useRef<HTMLInputElement>(null);
    const nameInstitutionRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);

    // const [is_university, setIsUniversity] = useState<boolean>(false);
    // const [is_teacher, setIsTeacher] = useState<boolean>(false);
    // const [is_student, setIsStudent] = useState<boolean>(false);

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


    useEffect(() => {
        if (is_university) {
            setIsTeacher && setIsTeacher(false);
            setIsStudent && setIsStudent(false);
        }
        if (is_teacher) {
            setIsUniversity && setIsUniversity(false);
            setIsStudent && setIsStudent(false);
        }
        if (is_student) {
            setIsUniversity && setIsUniversity(false);
            setIsTeacher && setIsTeacher(false);
        }
    }, [is_university, is_teacher, is_student, setIsTeacher, setIsStudent, setIsUniversity]);

    return (
        <form className="mx-auto max-w-xs">

            {
                type && (
                    <>
                        <div className="flex flex-col gap-2 py-3 justify-center items-center">
                            <label className="text-arsenic">
                                ¿Qué tipo de cuenta registraras?
                            </label>
                            <div className="flex items-center">
                                <input
                                    onChange={(e) => setIsUniversity && setIsUniversity(e.target.checked)}
                                    checked={is_university}
                                    id="default-radio-1" type="radio" value="" name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Universidad</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    onChange={(e) => setIsTeacher && setIsTeacher(e.target.checked)}
                                    checked={is_teacher}
                                    id="default-radio-2" type="radio" value="" name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Docente</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    onChange={(e) => setIsStudent && setIsStudent(e.target.checked)}
                                    checked={is_student}
                                    id="default-radio-3" type="radio" value="" name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estudiante</label>
                            </div>
                        </div>

                        {
                            is_university && (
                                <>
                                    <input
                                        className="w-full px-8 py-4 mb-3 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                                        type="text"
                                        placeholder="Nombre de la institución"
                                        onChange={(e) => setNameInstitution && setNameInstitution(e.target.value)}
                                        ref={nameInstitutionRef}
                                        required
                                    />
                                    <input
                                        className="w-full px-8 py-4 mb-3 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                                        type="text"
                                        placeholder="País"
                                        onChange={(e) => setCountry && setCountry(e.target.value)}
                                        ref={countryRef}
                                        required
                                    />
                                    <input
                                        className="w-full px-8 py-4 mb-3 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                                        type="text"
                                        placeholder="Dirección"
                                        onChange={(e) => setAddress && setAddress(e.target.value)}
                                        ref={addressRef}
                                        required
                                    />

                                    <input
                                        className="w-full px-8 py-4 mb-3 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                                        type="text"
                                        placeholder="Descripción"
                                        onChange={(e) => setDescriotion && setDescriotion(e.target.value)}
                                        ref={descriotionRef}
                                        required
                                    />
                                </>
                            )
                        }
                    </>
                )
            }

            <input
                className="w-full px-8 py-4 mb-3 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                required
            />
            <input
                className="w-full px-8 py-4 mb-3 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                required
            />

            {
                type && (
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
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