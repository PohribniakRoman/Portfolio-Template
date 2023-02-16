import img1 from "../images/project1.jpg";
import img2 from "../images/project2.png";
import img3 from "../images/project3.png";
import img4 from "../images/project4.png";


export default function WorksSlot({url,link,fade,title,header,text}) {
    const arr = [img1,img2,img3,img4]
    return(
        <a href={link} target={"_blank"} rel="noreferrer" data-aos={fade}>
            <div className="works__gallery--item" style={{backgroundImage:`url(${arr[url]})`}}>
                <h3 className="works__gallery--title">{title}</h3>
                <h1 className="works__gallery--header">{header}</h1>
                <p className="works__gallery--description subtitle">{text}</p>
            </div>
        </a>
    )
}