import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    label: string;
    isActive?: boolean;
};

export function Button(props: ButtonProps) {
    const activeClass = props.isActive ? 'bg-purple-500 text-white-500' : 'bg-transparent text-purple-500';

    return (
        <button className={`${activeClass} py-[6px] px-4 flex items-center rounded justify-center uppercase transition-all hover:brightness-90 font-bold`}>{props.label}</button>
    );
};