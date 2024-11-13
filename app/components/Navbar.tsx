import Link from "next/link"

export default function Navbar() {
    return (
        <div className="bg-black ">
            <h1>Home</h1>
            <div className="px-8 font-bold space-x-7 text-end text-2xl text-white" >
                <Link href='/about'>About
                </Link>
                <Link href='/players'>Players
                </Link>
                <Link href='/tournament'>Tournaments
                </Link>
                <Link href='/payment'>Payments
                </Link>
                <Link href='/contact'>Contact
                </Link>
            </div>


        </div>
    )
}