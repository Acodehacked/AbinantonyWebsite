import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextReveal } from "@/components/magicui/text-reveal";
import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";
import { EVENTS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Projects from "./Project";
import { useRouter } from "next/router";
import { HomeNavbar } from "@/components/home/homenav";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    console.log(id)
    const i = EVENTS.findIndex((event) => event.title === id.replaceAll("-", " "));
    //if not found, set id to undefined 
    const project = i !== undefined ? EVENTS[i] : null;

    if (!project) {
        return <div className="text-center p-10">Project not found</div>;
    }

    return (
        <div className="max-w-[1700px] overflow-hidden w-full mx-auto flex flex-col text-white min-h-screen">
            <HomeNavbar />
            <Projects project={project} />
        </div>
    );
}
