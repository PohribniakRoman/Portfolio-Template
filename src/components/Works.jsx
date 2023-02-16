import {HiCode} from "react-icons/hi";
import WorksSlot from "./WorksSlot";

export default function Works() {
    return(
        <section className="section works">
            <div className="works__container" data-aos="fade-up">
                <div className="works__logo">
                    <HiCode/>
                </div>
                <h1 className="title">Apps I've Built</h1>
                <p className="subtitle">A few layouts I created a year ago, I'm currently working on projects that require more writing logic than styles.</p>
            </div>
            <div className="works__gallery">
                <WorksSlot url={0} link={"https://pohribniakroman.github.io/Portfolio_webpack"} fade="fade-right" title={"Webpack"} header={"Portfolio Layout"} text={"Portfolio "}/>
                <WorksSlot url={1} link={"https://pohribniakroman.github.io/Travel-Agancy"} fade="fade-left" title={"React.js"} header={"Landing Page"} text={"HTML / SCSS / JS | React"}/>
                <WorksSlot url={2} link={"https://pohribniakroman.github.io/Nature"} fade="fade-up-right" title={"React.js"} header={"Landing Page"} text={"HTML / SCSS / JS | React"}/>
                <WorksSlot url={3} link={"https://pohribniakroman.github.io/Blog"} fade="fade-up-left" title={"React.js"} header={"Blog"} text={"HTML / SCSS / JS | React"}/>
            </div>
        </section>
    )
}