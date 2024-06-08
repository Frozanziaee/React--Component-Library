import "./Banners.css"
import BannersTails from "./BannersTails"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TiWarning } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";



export default function Banners(){
    return (
        <section className='banners-section'>
      <div className="title column">
        <h2 className="title-section">success</h2>
        <h2 className="title-section">warning</h2>
        <h2 className="title-section">error</h2>
        <h2 className="title-section">neutral</h2>
      </div>
      
      <div>
      <BannersTails
        className="success"
        title="Congratulations"
        icon={<IoIosCheckmarkCircle className="icon-success" />}>
        <div className="flex">
          <IoIosCheckmarkCircle className="icon-success" />
          <h3 className="title-banner">Congratulations!</h3>
        </div>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
      </BannersTails>

      <BannersTails
        className="warning"
        title="Attention"
        icon={<TiWarning className="icon-warning" />}>
        <div className="flex">
          <TiWarning className="icon-warning" />
          <h3 className="title-banner">Attention</h3>
        </div>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
      </BannersTails>

      <BannersTails
        className="error"
        title="There is a problem with your application"
        icon={<IoIosCloseCircle className="icon-error" />}>
        <div className="flex">
        <IoIosCloseCircle className="icon-error" />
        <h3 className="title-banner">There is a problem with your application</h3>
        </div>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
      </BannersTails>

      <BannersTails
       className="neutral" 
       title="Update available"
       icon={<BsFillInfoCircleFill className="icon-neutral" />}>
        <div className="flex">
          <BsFillInfoCircleFill className="icon-neutral" />
          <h3 className="title-banner">Update available</h3>
        </div>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
      </BannersTails>
      </div>
    </section>
    )
}
