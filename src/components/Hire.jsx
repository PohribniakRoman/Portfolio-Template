export default function Hire() {
    return(
        <section className="section hire">
            <div className="hire__banner">
                <div className="hire__banner--container">
                    <div className="hire__banner--bg"></div>
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