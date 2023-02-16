import {BsArrowDown} from "react-icons/bs"

export default function Banner(){
    return(
        <section className="section banner">
            <div className="banner__container" data-aos="flip-up">
                <div className="banner__content">
                    <div className="title">Welcome to my page!</div>
                    <div className="subtitle">I am an eighteen-year-old student of Taras Shevchenko Kyiv National University in process searching job as a Frontend developer. I think my skills and knowledge can be useful in real projects.</div>
                    <button className="banner__hire"  onClick={()=>{document.querySelector(".hire").scrollIntoView({behavior:"smooth",block:"center"})}}>Work With Me</button>
                    <button className="banner__works" onClick={()=>{document.querySelector(".works").scrollIntoView({behavior:"smooth",block:"center"})}}>See my past works</button>
                </div>
                <div className="banner__bg">
                    <div className="banner__bg--img"></div>
                </div>
            </div>
            <div className="banner__works--scroll" onClick={()=>{document.querySelector(".works").scrollIntoView({behavior:"smooth",block:"start"})}}><BsArrowDown/></div>
        </section>
    )
}