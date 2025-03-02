"use client"

export default function Button(props : { bg: string; color: string; children: any; onClick?: () => void; }) {
    return (
        <button 
            className={`
                text-${props.color} 
                bg-${props.bg}-500 
                w-fit h-fit rounded-lg m-2 p-1.5`
            } onClick={props.onClick}>
                { props.children }
        </button>
    )
}