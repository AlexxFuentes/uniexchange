import { NextResponse } from 'next/server'

export async function middleware(req: { json: () => any }) {

    try {
        const {} = await req.json()

        return NextResponse.next()
    } catch (error) {
        console.error(error)
    }
}