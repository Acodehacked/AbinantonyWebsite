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
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0b0906" }}>
                <div className="text-center">
                    <h1 className="font-syne text-4xl font-bold text-white mb-4">Project not found</h1>
                    <Link href="/" className="font-manrope text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return <ProjectDetails project={project} />;
}
