import Link from "next/link"

export const HomeNavbar = () => {
    return <div className="p-5">
    <nav className="w-full font-light md:text-xl text-md py-6 md:gap-10 gap-2 flex md:flex-row flex-col items-center border-w text-white/80">
        <p className="flex md:w-1/5 w-full capitalize leading-none font-normal pe-3"><span className="md:max-w-[200px]">Freelancer UI-UX Designer Full Stack Dev </span></p>
        <p className="flex md:w-3/5 w-full capitalize leading-none font-normal text-center">Abin Antony </p>
        <p className="flex md:justify-end md:w-1/5 w-full capitalize leading-none font-normal md:text-end">Kerala, India</p>
    </nav>
</div>
}