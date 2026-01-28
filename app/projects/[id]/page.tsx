import { EVENTS } from "@/lib";
import ProjectDetails from "@/components/ui/ProjectDetails";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const project = EVENTS.find((event) => slugify(event.title) === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-black">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project not found</h1>
                    <Link href="/" className="text-neutral-500 hover:text-black underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return <ProjectDetails project={project} />;
}
