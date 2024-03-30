"use client"

import { playAudio } from "@/lib/graphcms"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import { io } from "socket.io-client"
import ReactAudioPlayer from 'react-audio-player'

const AdminLeftbar = ({ previledge, music }: { previledge: string, music: string }) => {

    const path = usePathname()
    const router = useRouter();
    const [ played, setPlayed ] = useState<boolean>(false)
    const [ notifications, setNotifications ] = useState<Array<number>>([])
    // const [ socket, setSocket ] = useState<any>()
    // const socket = io("http://localhost:8000")
    const handleLogout = async(e: FormEvent) => {
        e.preventDefault();
        await signOut()
        router.push("/login")
        return;
    }

    const handlePlaySound = () => {
        const audio = new Audio('/livechat.mp3');
        audio.play().catch(error => {
          console.error('Autoplay was prevented:', error);
        });
        setPlayed(true)
    }

    useEffect(() => {

        // Listen for incoming orders
    }, [])

    useEffect(() => {
        const socket = io(process.env.NEXT_PUBLIC_API_ROOT as string)
        // Listen for incoming orders
        socket.on("neworder", (message: number) => {
            if (message == 0) {
                setNotifications([])
                setPlayed(false);
            } else {
                setNotifications(prevorders => [message, ...prevorders]);
                // setNotifications(prevorders => prevorders.push(message));
                setPlayed(true);
            }
            return () => {
                socket.disconnect();
            }
        });
    }, [])

    return (
      <aside className='hidden lg:block w-full lg:w-72 fixed left-0 top-0 h-full'>
          <nav className='flex flex-col justify-between w-full bg-gray-950 pt-7 pb-16 h-full'>
              <div className='w-full flex justify-between items-center px-5'>
                  <Link href="/admin" className='text-2xl font-bold text-accent'>Admin Panel</Link>
                  <button type="button" className='lg:hidden h-10 w-10 rounded-full mb-2 bg-primary/10 hover:bg-primary/30 flex justify-center items-center text-primary'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
              </button>
              </div>
              <div>
                  <span className='block text-gray-500 uppercase mb-3 px-5' style={{fontSize: '10px'}}>main</span>
                  <ul className='text-white'>
                      <li><Link href={previledge == "board" ? "/admin" : previledge == "manager" ? "/admin/orders" : "/admin/orders"} className={path == "/admin" ? "text-base flex items-center py-3 px-5 bg-primary/10 border-l-4 border-accent" : "text-base flex items-center py-3 px-5 hover:bg-primary/10 border-l-4 border-transparent"}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                          </svg>
                          Overview
                          {previledge != "board" ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-4 h-4 mb-1 ml-1 text-gray-500">
                              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                          </svg> : null}
                          </Link>
                      </li>
                  </ul>
                  <span className='block text-gray-500 uppercase my-4 px-5' style={{fontSize: '10px'}}>Datatables</span>
                  <ul className='text-white space-y-3'>
                      <li><Link href="/admin/orders" className={path == "/admin/orders" ? "text-base flex items-center py-3 px-5 bg-primary/10 border-l-4 border-accent" : "text-base flex items-center py-3 px-5 hover:bg-primary/10 border-l-4 border-transparent"}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                          </svg>
                          Orders
                          {played ? <span className='bg-green-500 pl-[5px] pr-[6px] ml-1 text-xs rounded-full text-center text-black'>{notifications.length/2}</span> : null}
                          </Link>
                      </li>
                      <li><Link href={previledge == "board" ? "/admin/customers" : previledge == "manager" ? "/admin/customers" : "/admin/orders"} className={path == "/admin/customers" ? "text-base flex items-center py-3 px-5 bg-primary/10 border-l-4 border-accent" : "text-base flex items-center py-3 px-5 hover:bg-primary/10 border-l-4 border-transparent"}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                          </svg>
                          Customers
                          {previledge == "agent" ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-4 h-4 mb-1 ml-1 text-gray-500">
                              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                          </svg> : null}
                          </Link>
                      </li>
                      <li><Link href={previledge == "board" ? "/admin/staffs" : previledge == "manager" ? "/admin/staffs" : "/admin/orders"} className={path == "/admin/staffs" ? "text-base flex items-center py-3 px-5 bg-primary/10 border-l-4 border-accent" : "text-base flex items-center py-3 px-5 hover:bg-primary/10 border-l-4 border-transparent"}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pb-1 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                          </svg>
                          Staffs
                          {previledge == "agent" ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-4 h-4 mb-1 ml-1 text-gray-500">
                              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                          </svg> : null}
                          </Link>
                      </li>
                  </ul>
              </div>
              <button type="button" className='flex items-center text-xl text-red-600 hover:text-red-500 px-5 bottom-12 left-0 font-light cursor-pointer' onClick={handleLogout}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                  </svg> signout
              </button>
              {/* <button className="text-white" onClick={handlePlaySound} >
                Play Sound
            </button> */}
              {/* <ReactAudioPlayer src="/livechat.mp3" autoPlay loop controls  /> */}
          </nav>
      </aside>
    )
}

export default AdminLeftbar