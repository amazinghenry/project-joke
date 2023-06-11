function Joke({setup, punchline}) {

        return (
            <div className="joke-item">
                <p className="joke-setup"> { setup } </p>
                <p className="joke-punchline"> { punchline }</p>
            </div>
        )
    
}

export default Joke