import { FcApproval } from "react-icons/fc";

export default function SkillsSlot({title}) {
    return(
        <div className="skills__gallery--item" data-aos="flip-up">
            <div className="skills__gallery--logo"><FcApproval/></div>
            <div className="skills__gallery--title">{title}</div>
        </div>
    )
}   