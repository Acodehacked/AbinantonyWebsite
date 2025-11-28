import ArtworksGallery from "@/components/ui/ArtworksGallery";
import Docker from "@/components/ui/Docker";
import Footer from "@/components/ui/Footer";
import LiquidMenu from "@/components/ui/LiquidMenu";
import MouseIndicator from "@/components/ui/MouseIndicator";

export default function Artworks() {
    return (
        <main className="min-h-screen bg-white text-black selection:bg-black/10">
            <MouseIndicator />
            <LiquidMenu />
            <Docker />

            <ArtworksGallery />

            <Footer />
        </main>
    );
}