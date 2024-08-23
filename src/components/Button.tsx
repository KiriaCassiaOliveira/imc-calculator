import { ButtonHTMLAttributes } from "react";


function Button({children, ...props} : ButtonHTMLAttributes<HTMLButtonElement> & {children: React.ReactNode}) {
    return (
        <button className="mt-6 w-full font-bold bg-rose-400 text-white p-3 rounded" {...props}>{children}</button>
    )
}

export default Button;