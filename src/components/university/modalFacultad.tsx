import { db, storage } from "@/config/firebase.config"
import { useAuth } from "@/context/auth-context"
import { EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import { DocumentData, QueryDocumentSnapshot, addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { useEffect, useRef, useState } from "react"
import Image from 'next/image'
import { FaPlus } from "react-icons/fa"

interface Professor {
    id: number;
    image: any;
    nombre: string;
    descripcion: string;
    calificacion: number;
    cantidadCalificaciones: number;
}

const professors: Professor[] = [
    {
        id: 1,
        image: "../avatar.svg",
        nombre: "Erick Vladimir",
        descripcion: "Docente de ingenieria.",
        calificacion: 4.5,
        cantidadCalificaciones: 5,
    },
    {
        id: 2,
        image: "../avatar.svg",
        nombre: "Alex Alfredo",
        descripcion: "Docente de ingenieria.",
        calificacion: 3.2,
        cantidadCalificaciones: 5,
    },
    {
        id: 3,
        image: "../avatar.svg",
        nombre: "Erick Vladimir",
        descripcion: "Docente de ingenieria.",
        calificacion: 2.5,
        cantidadCalificaciones: 5,
    },
    {
        id: 4,
        image: "../avatar.svg",
        nombre: "Erick Vladimir",
        descripcion: "Docente de ingenieria.",
        calificacion: 4.5,
        cantidadCalificaciones: 5,
    },
];

export default function ModalFacultad({
    university,
    text,
    handleCloseModalFacultad,
}: {
    university: string;
    text: string;
    handleCloseModalFacultad: () => void;
}) {
    const { user } = useAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const [input, setInput] = useState<string>('')
    const [selectedFile, setSelectedFile] = useState<string | null>(null)
    const filePickerRef = useRef<HTMLInputElement>(null)
    const [docentes, setDocentes] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>()

    useEffect(() => {
        return onSnapshot(
            query(collection(db, 'teachers'), orderBy('timestamp', 'desc')),
            (snapshot) => {
                setDocentes(snapshot.docs)
            }
        )
    }, [])

    const sendPost = async () => {
        if (loading) return;
        setLoading(true);

        const docRef = await addDoc(collection(db, 'posts'), {
            id: user?.uid,
            text: input,
            userImg: user?.photoURL,
            timestamp: serverTimestamp(),
            email: user?.email,
            username: user?.email?.split('@')[0],
        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        if (selectedFile) {
            await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, 'posts', docRef.id), {
                    image: downloadURL,
                });
            });
        }

        setInput('');
        setSelectedFile(null);
        setLoading(false);
    };

    const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
            setSelectedFile(readerEvent.target && readerEvent.target.result as string);
        };
    };

    const [professorSelection, setProfessorSelection] = useState(
        professors.map(() => false)
    );

    const handleSeleccionado = (index: number) => {
        const newSelection = [...professorSelection];
        newSelection[index] = !newSelection[index];

        if (!newSelection[index]) {
            setProfessorSelection(newSelection);
        } else {
            /* else if (newSelection[index]) {
              setProfessorSelection(newSelection);
            } */
            const updatedSelection = newSelection.map((_, i) =>
                i === index ? true : false
            );
            setProfessorSelection(updatedSelection);
        }
    };

    return (
        <div className={`fixed inset-0 z-30 w-screen overflow-y-auto bg-arsenic/40 transition-opacity max-h-screen`}>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center">
                        <div className="relative rounded-lg bg-white text-center shadow-xl  sm:my-4 w-full sm:max-w-3xl ">
                            <div className="bg-white rounded-lg">
                                <div className="sm:flex sm:items-center p-2  text-center">
                                    <div className="w-full px-3 p-3 flex justify-center items-center flex-col gap-2">
                                        <h1 className="font-bold text-base md:text-lg xl:text-xl">
                                            Nueva facultad de {university}
                                        </h1>
                                        <div className="">
                                            <p className="">{text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 text-left w-full h-auto">
                                <section className="boxBig flex flex-col items-center justify-center  overflow-y-auto pb-3">{/* overflow-y-auto */}
                                    <form className="w-full h-full max-w-xl m-3 flex flex-col justify-center gap-5">

                                        <div className='flex items-center justify-center pt-2.5'>
                                            {
                                                (!loading && !selectedFile) && (
                                                    <div className='flex'>
                                                        <div className='' onClick={() => filePickerRef?.current?.click()}>
                                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-64 h-64 border-2 border-arsenic border-dashed rounded-lg cursor-pointer bg-blackWhite dark:hover:bg-silverSand dark:bg-blackWhite hover:bg-silverSand dark:border-arsenic dark:hover:border-arsenic">

                                                                <FaPlus className="w-12 h-12 text-mySin" />
                                                                <input
                                                                    id="dropzone-file"
                                                                    type='file'
                                                                    hidden
                                                                    ref={filePickerRef}
                                                                    onChange={addImageToPost}
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            {
                                                selectedFile && (
                                                    <div className='relative'>
                                                        <XIcon
                                                            onClick={() => setSelectedFile(null)}
                                                            className='border h-7 text-mySin absolute cursor-pointer shadow-md border-mySin m-1 rounded-full'
                                                        />
                                                        <Image
                                                            src={selectedFile}
                                                            className={`w-64  ${loading && 'animate-pulse'}`}
                                                            width={900} height={100}
                                                            alt='img'
                                                        />
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <input
                                            className="w-full px-8 py-4 rounded-xl font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                                            type="text"
                                            placeholder="Nombre de la facultad"
                                            required
                                        />

                                        <select
                                            name="jefe"
                                            id="jefe"
                                            className="w-full px-8 py-4 rounded-xl font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white "
                                        >
                                            <option value="">Jefe de la facultad</option>
                                            <option value="">asdasdasdas</option>
                                        </select>

                                        <textarea
                                            className="w-full px-8 py-4 rounded-xl font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white "
                                            placeholder="Descripcion"
                                            rows={5}
                                            required
                                        />

                                        <button
                                            onClick={sendPost}
                                            disabled={!input.trim()}
                                            type="submit" className=" buttonBlack"
                                        >
                                            Crear facultad
                                        </button>
                                    </form>
                                </section>
                            </div>
                            <div className="border-t-[1px] border-t-silverSand px-4 py-3 sm:flex justify-center gap-2 sm:px-6">
                                <button
                                    onClick={() => handleCloseModalFacultad()}
                                    type="button"
                                    className="w-full buttonOrange sm:w-auto"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
