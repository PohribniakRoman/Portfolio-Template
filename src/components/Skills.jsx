import { HiChip } from "react-icons/hi";
import SkillsSlot from "./SkillsSlot";

export default function Skills() {
    return(
        <section className="section skills">
            <div className="skills__container" data-aos="fade-up">
                <div className="skills__logo">
                    <HiChip/>
                </div>
                <h1 className="title">Skills</h1>
                <p className="subtitle">
                Knowledge and technologies that I own or have used before
                </p>
            </div>
            <div className="skills__gallery">
                <SkillsSlot title={"HTML / Pug"}/>
                <SkillsSlot title={"CSS / SCSS / SASS"}/>
                <SkillsSlot title={"JavaScript / ES6"}/>
                <SkillsSlot title={"MongoDB"}/>
                <SkillsSlot title={"React.js / Redux-Saga"}/>
                <SkillsSlot title={"Bootstrap / Material-UI"}/>
                <SkillsSlot title={"Node.js / Express.js"}/>
                <SkillsSlot title={"TypeScript"}/>
                <SkillsSlot title={"Nest.js"}/>
                <SkillsSlot title={"Flex / Grid"}/>
                <SkillsSlot title={"Figma / Photoshop"}/>
                <SkillsSlot title={"C++ / C#"}/>
            </div>
        </section>
    )
}