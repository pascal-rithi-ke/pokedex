function Info(){
    return(
        <>
        <div className="card__content">
            <h1>FeedBack</h1>
            <form>
                <p>Email:</p><input type="email" id="email"pattern=".+@globex\.com" size="30" required></input>
                <p>Message:</p><input className="msg" type="text" size="40" required></input>
                <br />
                <button className="valid_msg">Send</button>
            </form>
        </div>  
        </>
    )
}
export default Info;