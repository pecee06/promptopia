"use client"

import { useState, useEffect } from "react"
import Link from "next/link"  // use inplace of <a>
import Image from "next/image"  // use inplace of <img>
import {signIn, signOut, useSession, getProviders} from "next-auth/react"

const Nav = () => {
  const { data: session } = useSession()  // "data" field renamed to "session"

  const [providers, setProviders] = useState(null)
  useEffect(()=>{
    (async ()=>{
      const res = await getProviders()
      setProviders(res)
    })()
  }, [])

  const [toggleDropDown, setToggleDropDown] = useState(false)

  return (
    <nav className="flex justify-between p-2">
      <Link href="/">
        <Image src="/assets/images/logo.svg" alt="Promtopia Logo" width={25} height={25}/>
      </Link>

      <div className="flex relative">
        {(session)?
          <Image src={session?.user.image} width={37} height={37} className="rounded-full cursor-pointer" alt="Profile Picture" onClick={()=>{
            setToggleDropDown(prev => !prev)
          }}/>
          :
          <>
            {providers &&
              Object.values(providers).map(provider => (
                <button key={provider.name} type="button" className="btn_mobile" onClick={()=>{
                  signIn(provider.id)
                }}>Sign In</button>
              ))
            }
          </>
        }
        {toggleDropDown &&
          <div className="dropdown">
            <Link className="dropdown_link" href="/profile" onClick={() => setToggleDropDown(false)}>My Profile</Link>
            <Link className="dropdown_link" href="/create-prompt" onClick={() => setToggleDropDown(false)}>Create Prompt</Link>
            <button className="btn_mobile" type="button" onClick={()=>{
              setToggleDropDown(false)
              signOut()
            }}>Sign Out</button>
          </div>
        }
      </div>
    </nav>
  )
}

export default Nav