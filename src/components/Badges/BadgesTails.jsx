
export default function BannersTails({children, className}){
    return (
      <div className="badges">
        <div className="square-div"> 
            <button className={`square inter-font ${className}`}>{children}</button>
        </div>
        <div className="pill-div">
            <button className={`pill inter-font ${className}`}>{children}</button>
        </div>
    </div>
    )
}