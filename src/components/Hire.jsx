export default function Hire() {
    return(
        <section className="section hire">
            <div className="hire__banner">
                <div className="hire__banner--container">
                    <div className="hire__banner--bg"></div>
                </div>
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
                <form className="hire__form">
                    <h1 className="hire__form--title title">Hire me</h1>
                    <h3 className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium delectus expedita magnam.</h3>
                    <h3 className="subtitle">Name</h3>
                    <input type="text" name="text" autoComplete="off" required/>
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