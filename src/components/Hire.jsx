import emailjs from '@emailjs/browser';

export default function Hire() {
    return(
        <section className="section hire">
            <div className="hire__banner">
                <a href="https://goo.gl/maps/sdaaz6qS1r4iChFB6" rel="noreferrer" target={"_blank"}>
                <div className="hire__banner--container">
                    <div className="hire__banner--bg"></div>
                </div>
                </a>
                <div className="hire__banner--info">
                    <div className="hire__banner--info-container">
                        <h1 className="hire__banner--info-title">Adress</h1>
                        <h3 className="hire__banner--info-subtitle">St. Sechenova, 7A, Kyiv, 02000</h3>
                    </div>
                    <div className="hire__banner--info-container">
                        <h1 className="hire__banner--info-title">Phone</h1>
                        <h3 className="hire__banner--info-subtitle">+380 989 215 203</h3>
                    </div>
                    <div className="hire__banner--info-container">
                        <h1 className="hire__banner--info-title">email</h1>
                        <h3 className="hire__banner--info-email">roman.pohribniak@gmail.com</h3>
                    </div>
                </div>
            </div>
            <div className="hire__content">
                <form className="hire__form" onSubmit={(e)=>{
                    e.preventDefault();
                    emailjs.sendForm('service_c6mlb0k', 'template_jm6vvlk', e.target, 'Z2k90g_BxOY9_S_ts')
                    .then((result) => {
                        console.log(result.text);
                        alert("Message has been sended");
                    }, (error) => {
                        console.log(error.text);
                        alert("Error happend try later");
                    });
                    e.target.name.value = "";
                    e.target.email.value = "";
                    e.target.message.value = "";
                }}>
                    <h1 className="hire__form--title title">Hire me</h1>
                    <h3 className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium delectus expedita magnam.</h3>
                    <h3 className="subtitle">Name</h3>
                    <input type="text" name="name" autoComplete="off" required/>
                    <h3 className="subtitle">Email</h3>
                    <input type="email" name="email" autoComplete="off" required/>
                    <h3 className="subtitle">Message</h3>
                    <textarea rows={5} name="message" autoComplete="off" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}