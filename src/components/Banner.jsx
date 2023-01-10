import Navigation from "./Navigation";

export default function Banner(){
    return(
    <section className="section">
        <Navigation/>
        <div className="banner__container">
            <div className="title">Welcome to my page!</div>
            <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ipsa voluptatem tenetur quia natus omnis mollitia, dolorem iure impedit consequatur veniam aliquam at animi eos perspiciatis! Quidem repudiandae labore debitis?</div>
        </div>
    </section>
    )
}