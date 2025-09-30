import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import Banner from "../components/banner/Banner";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen space-y-10">
      <Navbar />
      <div className="flex-1 container mx-auto">
        <Banner/>
      </div>
      <Footer />
    </div>
  );
}
