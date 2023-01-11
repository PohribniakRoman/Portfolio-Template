import {HiCode} from "react-icons/hi";

export default function Works() {
    return(
        <section className="section works">
            <div className="works__container">
                <div className="works__logo">
                    <HiCode/>
                </div>
                <h1 className="title">Apps I've Built</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ipsa voluptatem tenetur quia natus omnis mollitia, dolorem iure impedit consequatur veniam aliquam at animi eos perspiciatis! Quidem repudiandae labore debitis?</p>
            </div>
            <div className="works__gallery">
                <a href="https://github.com/PohribniakRoman" target={"_blank"} rel="noreferrer">
                    <div className="works__gallery--item">
                        <h3 className="works__gallery--title">MERN.js</h3>
                        <h1 className="works__gallery--header">Chat App</h1>
                        <p className="works__gallery--description subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime quasi in eveniet, ea quos consectetur ducimus? Natus, officia at?</p>
                    </div>
                </a>
                <div className="works__gallery--item">
                    <h3 className="works__gallery--title">MERN.js</h3>
                    <h1 className="works__gallery--header">Chat App</h1>
                    <p className="works__gallery--description subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime quasi in eveniet, ea quos consectetur ducimus? Natus, officia at?</p>
                </div>
                <div className="works__gallery--item">
                    <h3 className="works__gallery--title">MERN.js</h3>
                    <h1 className="works__gallery--header">Chat App</h1>
                    <p className="works__gallery--description subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime quasi in eveniet, ea quos consectetur ducimus? Natus, officia at?</p>
                </div>
                <div className="works__gallery--item">
                    <h3 className="works__gallery--title">MERN.js</h3>
                    <h1 className="works__gallery--header">Chat App</h1>
                    <p className="works__gallery--description subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime quasi in eveniet, ea quos consectetur ducimus? Natus, officia at?</p>
                </div>
            </div>
        </section>
    )
}