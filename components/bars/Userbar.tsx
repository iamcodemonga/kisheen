"use client";

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { signOut } from "next-auth/react";
import { FormEvent } from "react";
import {} from "next/router";

const Userbar = () => {
  const path = usePathname();
  const router = useRouter()

  const handleLogout = async(e: FormEvent) => {
    e.preventDefault();
    await signOut()
    router.push("/login")
    return;
}

    return (
      <aside className='hidden lg:block w-full lg:w-72 fixed left-0 top-0 h-full'>
        <nav className='flex flex-col justify-between w-full bg-gray-950 pt-7 pb-16 h-full'>
            <div className='w-full flex justify-between items-center px-5'>
                <Link href="/" className='text-2xl font-bold text-accent opacity-0'>Kisheen</Link>
                <button type="button" className='lg:hidden h-10 w-10 rounded-full mb-2 bg-primary/10 hover:bg-primary/30 flex justify-center items-center text-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
            <div>
                <ul className='text-white space-y-5'>
                    <li><Link href="/dashboard" className={path == "/dashboard" ? "text-base flex items-center py-3 px-5 bg-primary/10 border-l-4 border-accent" : "text-base flex items-center py-3 px-5 hover:bg-primary/10 border-l-4 border-transparent"}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>Dashboard</Link>
                    </li>
                    <li><Link href="/dashboard/settings" className={path == "/dashboard/settings" ? "text-base flex items-center py-3 px-5 bg-primary/10 border-l-4 border-accent" : "text-base flex items-center py-3 px-5 hover:bg-primary/10 border-l-4 border-transparent"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>Settings
                        </Link>
                    </li>
                </ul>
            </div>
            <button type="button" className='flex items-center text-xl text-red-600 hover:text-red-500 px-5 bottom-12 left-0 font-light cursor-pointer' onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                </svg> signout
            </button>
        </nav>
      </aside>
    )
}

export default Userbar