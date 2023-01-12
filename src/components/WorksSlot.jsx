export default function WorksSlot({link,fade,title,header,text}) {
    return(
        <a href={link} target={"_blank"} rel="noreferrer" data-aos={fade}>
                    <div className="works__gallery--item">
                        <h3 className="works__gallery--title">{title}</h3>
                        <h1 className="works__gallery--header">{header}</h1>
                        <p className="works__gallery--description subtitle">{text}</p>
                    </div>
        </a>
    )
}