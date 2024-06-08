import "./Badges.css"
import BadgesTails from "./BadgesTails"

export default function Badges(){
    return (
        <main className='main-badges'>
            <div>
                <h3 className='title'>SQUARE</h3>
                <h3 className='title'>PILL</h3>
            </div>
            <BadgesTails className="gray">Badges</BadgesTails>
            <BadgesTails className="red">Badges</BadgesTails>
            <BadgesTails className="yellow">Badges</BadgesTails>
            <BadgesTails className="green">Badges</BadgesTails>
            <BadgesTails className="blue">Badges</BadgesTails>
            <BadgesTails className="indigo">Badges</BadgesTails>
            <BadgesTails className="purple">Badges</BadgesTails>
            <BadgesTails className="pink">Badges</BadgesTails>
        </main>

    )
}