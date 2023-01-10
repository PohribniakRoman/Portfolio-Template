import {HiArrowRight} from "react-icons/hi";

export default function Navigation() {
    return(
        <nav className="navigation">
            <nav className="navigation__container">
                <nav className="navigation__menu">
                    <nav className="navigation__logo">portfolio</nav>
                    <nav className="navigation__separator"></nav>
                    <nav className="navigation__menu--item">Bio</nav>
                    <nav className="navigation__menu--item">Skills</nav>
                    <nav className="navigation__menu--item">Past Work</nav>
                </nav>
                <nav className="navigation__scroller">
                    <b>Hire me</b>
                    <HiArrowRight/>
                </nav>
            </nav>
        </nav>
    )
}