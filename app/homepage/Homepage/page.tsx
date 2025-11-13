import Navbar from "@/app/components/Navbar/Navbar";
import Herosection from "../Herosection/Herosection";
import Howitworks from "../Howitworks/Howitworks";
import Clienttestimonials from "../Clienttestimonials/Clienttestimonials";
import Whyus from "../Whyus/Whyus";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Workwithus from "../Workwithus/Workwithus";
import Footer from "@/app/components/Footer/Footer";

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <Herosection />
            <Services />
            <Clienttestimonials />
            <Howitworks />
            <Testimonials />
            <Whyus />
            <Workwithus />
            <Footer />
        </div>
    );
}