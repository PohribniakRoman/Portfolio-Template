import {HiArrowRight} from "react-icons/hi";

function ScrollToElement(tag) {
    document.querySelector(`.${tag}`).scrollIntoView({behavior:"smooth",block:"center"})
}

export default function Navigation() {
    return(
        <nav className="navigation">
            <nav className="navigation__container" data-aos="flip-up">
                <nav className="navigation__menu">
                    <nav className="navigation__logo">portfolio</nav>
                    <nav className="navigation__separator"></nav>
                    <nav className="navigation__menu--item" onClick={()=>ScrollToElement("banner")}>Bio</nav>
                    <nav className="navigation__menu--item" onClick={()=>ScrollToElement("skills")}>Skills</nav>
                    <nav className="navigation__menu--item" onClick={()=>ScrollToElement("works")}>Past Work</nav>
                </nav>
                <nav className="navigation__scroller"  onClick={()=>ScrollToElement("hire")}>
                    <b>Hire me</b>
                    <HiArrowRight/>
                </nav>
            </nav>
        </nav>
    )
}