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
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ipsa voluptatem tenetur quia natus omnis mollitia, dolorem iure impedit consequatur veniam aliquam at animi eos perspiciatis! Quidem repudiandae labore debitis?</p>
            </div>
            <div className="works__gallery">
                <WorksSlot link={"https://github.com/PohribniakRoman"} fade="fade-right" title={"MERN.js"} header={"Chat App"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime quasi in eveniet, ea quos consectetur ducimus? Natus, officia at?"}/>
                <WorksSlot link={"https://github.com/PohribniakRoman"} fade="fade-left" title={"MERN.js"} header={"Chat App"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime quasi in eveniet, ea quos consectetur ducimus? Natus, officia at?"}/>
                <WorksSlot link={"https://github.com/PohribniakRoman"} fade="fade-up-right" title={"MERN.js"} header={"Chat App"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime quasi in eveniet, ea quos consectetur ducimus? Natus, officia at?"}/>
                <WorksSlot link={"https://github.com/PohribniakRoman"} fade="fade-up-left" title={"MERN.js"} header={"Chat App"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime quasi in eveniet, ea quos consectetur ducimus? Natus, officia at?"}/>
            </div>
        </section>
    )
}