
export default function BannersTails ({children, className, title, icon}) {
  return (
      <div className="banners general inter-font">
          <div className={`multi-line ${className}`}>
              {children}
          </div>

          <div className={`single-line flex ${className}`}>
           {icon}   
          <h3 className="title-banner">{title}</h3>
          </div>
      </div>
  )
}