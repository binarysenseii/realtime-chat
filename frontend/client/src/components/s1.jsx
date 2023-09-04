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
        <button className="bg-green-500 text-white p-4 font-bold text-lg">{children}</button>
        </>
    )
}





