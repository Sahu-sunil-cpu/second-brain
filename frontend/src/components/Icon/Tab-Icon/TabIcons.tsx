import { IconProps, sizeVariants } from "../index"


export function DocIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${sizeVariants[props.size]} fill-none stroke-slate-900`}>
        <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
    </svg>

}


export function LinkIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${sizeVariants[props.size]} fill-none stroke-slate-900`}>
        <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clip-rule="evenodd" />
    </svg>

}


export function TweetIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 50 50"  className={`${sizeVariants[props.size]} stroke-slate-900 `}>
    <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
    </svg>}


export function VideoIcon(props: IconProps) {
    return<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 60 60" className={`${sizeVariants[props.size]} stroke-slate-900`}>
    <path d="M 30.783203 13.107422 C 24.444512 13.106322 18.113057 13.282552 11.787109 13.640625 A 1.0001 1.0001 0 0 0 11.787109 13.642578 C 8.0704 13.853325 4.9622621 16.683059 4.5566406 20.40625 C 3.7069273 28.208712 3.6788423 34.266826 4.5605469 42.498047 C 4.8117882 44.844371 5.9997112 46.926327 8.0078125 48.216797 C 10.015914 49.507267 12.773376 50.004949 16.134766 49.501953 C 22.857545 48.495962 32.111784 43.550377 43.699219 32.214844 A 1.0001 1.0001 0 0 0 43.419922 30.591797 L 23.419922 21.333984 A 1.0001 1.0001 0 0 0 22 22.242188 L 22 39.8125 A 1.0001 1.0001 0 0 0 23.535156 40.65625 L 31.556641 35.568359 A 1.0005006 1.0005006 0 0 0 30.484375 33.878906 L 24 37.992188 L 24 23.808594 L 41.195312 31.767578 C 30.330285 42.126478 21.660486 46.654394 15.839844 47.525391 C 12.826733 47.97627 10.592742 47.500967 9.0898438 46.535156 C 7.5869449 45.569345 6.7445868 44.113332 6.5488281 42.285156 C 5.678529 34.160377 5.7066352 28.320585 6.5449219 20.623047 C 6.8433004 17.884238 9.1271 15.795925 11.900391 15.638672 C 24.476495 14.926817 37.077096 14.931668 49.705078 15.642578 C 52.507634 15.800601 54.764712 17.93439 55.078125 20.722656 C 55.960336 28.570639 56.398459 33.132165 55.287109 41.03125 C 54.782614 44.615363 51.680745 46.719273 48.810547 47.273438 C 44.446423 48.11562 34.664772 48.400616 28.185547 47.949219 A 1.000452 1.000452 0 1 0 28.046875 49.945312 C 34.71565 50.409915 44.381577 50.166099 49.189453 49.238281 C 52.731255 48.554446 56.622074 45.896434 57.267578 41.310547 C 58.404229 33.231632 57.950195 28.360064 57.066406 20.498047 C 56.645819 16.756319 53.577804 13.858462 49.818359 13.646484 C 43.46735 13.288942 37.121894 13.10855 30.783203 13.107422 z"></path>
    </svg>}

export function DeleteIcon(props: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`${sizeVariants[props.size]} cursor-pointer fill-none stroke-black`}>
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
}



