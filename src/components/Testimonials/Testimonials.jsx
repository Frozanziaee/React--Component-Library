import TestimonialsTails from "./TestimonialsTails"
import { RiDoubleQuotesL } from "react-icons/ri";
import "./Testimonials.css"

export default function Testimonials(){
    return (
        <TestimonialsTails>
            <div className="testimonial flex">
                <div>
                    <img 
                        src="../image.png" 
                        alt="testimonial photo" 
                        className="testimonial-img"
                     />
                </div>

                <div className="desc inter-font">
                    <RiDoubleQuotesL className="icon-testimonial" /> 
                    <p className="text-testimonial">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                    </p>
                    <h6 className="date">May Andersons</h6>
                    <address>Workcation, CTO</address>
                </div>
            </div>
        </TestimonialsTails>
        
    )
}