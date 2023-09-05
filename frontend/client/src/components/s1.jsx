import "../App.css"


// Text Components
export function H1({children,styles}){
    return (
        <>
        <h1 className="text-6xl" >{children}</h1>
        </>
    )
}
export function H2({children,styles}){
    return (
        <>
        <h1 className=" text-4xl">{children}</h1>
        </>
    )
}
export function H3({children,styles}){
    return (
        <>
        <h1 className=" text-2xl">{children}</h1>
        </>
    )
}
export function H4({children,styles}){
    return (
        <>
        <h1 className=" text-xl">{children}</h1>
        </>
    )
}
export function H5({children,styles}){
    return (
        <>
        <h1 className=" text-md">{children}</h1>
        </>
    )
}
export function H6({children,styles}){
    return (
        <>
        <h1 className=" text-sm">{children}</h1>
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
export function Card({children}){
    return(
        <div className="p-4 m-4 bg-slate-200 hover:shadow-sm shadow-slate-400  inline-block rounded-lg">
            {children}
        </div>
    )
}





