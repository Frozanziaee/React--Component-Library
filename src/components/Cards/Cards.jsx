import CardsTails from "./CardsTails"
import { HiOutlineCloudUpload } from "react-icons/hi";
import "./Cards.css"

export default function Cards(){
    return (
        <section className="cards-section">
            <CardsTails>
                <div className="card flex">
                    <span className="cloud-icon"><HiOutlineCloudUpload className="icon-cards" /></span>
                    <div className="inter-font center">
                        <h3 className="title-cards ">Easy Deployment</h3>
                        <p className="text-cards">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </div>
                </div>
            </CardsTails>
        </section>
    )
}