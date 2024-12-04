
const variantSize = {
    "sm": "w-10 h-10",
    "md": "h-48 w-48",
    "lg": "h-60 w-60"
}

const textSize = {
    "sm": "text-2xl  font-medium  mx-3 my-1 inline-block",
    "md": "text-3xl font-semibold  mx-3 my-1 inline-block",
    "lg": "text-4xl font-bold mx-3 my-1 inline-block"
}

export function Logo(props: {
    name: string,
    size: "sm" | "md" | "lg"
}) {

    return <div className="flex  inline-block">
        <img className={`${variantSize[props.size]} `}
            src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-brain-anatomy-vitaliy-gorbachev-blue-vitaly-gorbachev-1.png"
            alt="brain" />
        <div className={`${textSize[props.size]} `}> {props.name}</div>

    </div>
}