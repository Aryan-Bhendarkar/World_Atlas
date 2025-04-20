export const Contact = () => {
    return(
        
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <form action="">
                <input type="text" required autoComplete="off" placeholder="Enter your name" name="username"/>
                <input type="email" className="form-control" placeholder="Enter your email" name="email" required autoComplete="off"/>
                <textarea className="form-control" rows="10" placeholder="Enter your message" name="message" required autoComplete="off"></textarea>
                <button type="submit" value="send">Send</button>
            </form>
        </section>
    )
};