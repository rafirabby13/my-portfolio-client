
import Banner from "../../components/banner/Banner";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* <Navbar /> */}
      <div className="flex-1 container mx-auto">
        <Banner />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
