import "../App.css"
import { useState } from "react"

// Text Components
export function H1({children,addStyles}){
    return (
        <>
        <h1 className={"text-6xl "+ addStyles}  >{children}</h1>
        </>
    )
}
export function H2({children,addStyles}){
    return (
        <>
        <h1 className={" text-4xl " + addStyles}>{children}</h1>
        </>
    )
}
export function H3({children,addStyles}){
    return (
        <>
        <h1 className={" text-2xl " + addStyles}>{children}</h1>
        </>
    )
}
export function H4({children,addStyles}){
    return (
        <>
        <h1 className={" text-xl " +addStyles}>{children}</h1>
        </>
    )
}
export function H5({children,addStyles}){
    return (
        <>
        <h1 className={" text-md " + addStyles}>{children}</h1>
        </>
    )
}
export function H6({children,addStyles}){
    return (
        <>
        <h1 className={" text-sm " + addStyles}>{children}</h1>
        </>
    )
}

//Button component

export function Button({children}){
    return(
        <>
        <button className="bg-purple-500 text-white p-3 rounded-md font-bold text-lg m-4">{children}</button>
        </>
    )
}


//Card component
export function Card({children,addStyles}){
    return(
        <div className={"p-4 m-4  bg-slate-200 hover:shadow-sm shadow-slate-400  inline-block rounded-lg " + addStyles}>
            {children}
        </div>
    )
}


// Input component
export function Input({placeholder}){
    return(
        <input type="text"  placeholder={placeholder} className="bg-slate-300 p-4 focus:outline-none placeholder:text-slate-400 rounded-md tracking-widest font-semibold text-lg" />
    )
}

export function Navbar(){
    return(
    <div className="absolute p-4  text-4xl text-white top-0 left-0 w-screen h-20 bg-transparent">
        rANd0M
    </div>)
}

function ImageSection(){
    const [image,setImage] = useState(1)
   
    return(
        <div className="mb-8">
            <H4 addStyles={' my-4 ml-2 text-slate-500'}>Choose a pfp.</H4>
            <div className="flex flex-row">
            <img src="/images/2.jpg" className="w-20 h-20 object-cover rounded-full" alt="" />
            <div className="flex flex-row flex-wrap w-36 ml-4 gap-2">
            <img src="/images/2.jpg" className="w-10 h-10 object-cover rounded-full" alt="" />
            <img src="/images/2.jpg" className="w-10 h-10 object-cover rounded-full" alt="" />
            <img src="/images/2.jpg" className="w-10 h-10 object-cover rounded-full" alt="" />
            <img src="/images/2.jpg" className="w-10 h-10 object-cover rounded-full" alt="" />
            <img src="/images/2.jpg" className="w-10 h-10 object-cover rounded-full" alt="" />
            <img src="/images/2.jpg" className="w-10 h-10 object-cover rounded-full" alt="" />

            </div>
            </div>
        </div>
    )
}



 export default function App({children}){
     return(
        <div>
            <Navbar />
        <div className="w-screen h-screen flex flex-col items-center bg-slate-800">
            <div className="text-center mb-8 mt-24 ">
            <H1 addStyles={"text-white font-bold tracking-tighter"}>Join a random room</H1>
            <H3 addStyles={"text-slate-300 tracking-wide font-light"}>yes,copied omegle,any probs?</H3>
            </div>
            <Card addStyles={'flex flex-col scale-125 mt-16'}>
                <ImageSection />
                <Input placeholder={"random_username"} />
                <Button>Join</Button>
            </Card>
        </div>
        </div>
     )
 }





