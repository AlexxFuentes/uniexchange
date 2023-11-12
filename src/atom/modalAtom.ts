import { atom } from 'recoil'

export const modalAtom = atom({
    key: 'modalState',
    default: false
})

export const postIdState = atom({
    key: 'postIdState',
    default: 'id'
})