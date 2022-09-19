// Code EyesOnMe Component Here

function EyesOnMe() {

    // focusButton = () => console.log("Good!");

    // blurButton = () => console.log("Hey! Eyes on me!");

    return (
        <div>
            <button onFocus={() => console.log("Good!")} onBlur={() => console.log("Hey! Eyes on me!")}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;