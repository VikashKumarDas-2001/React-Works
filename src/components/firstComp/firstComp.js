import SecondComp from "./secondComp/second"; // Assuming correct path to SecondComp

function FirstComp() {
    console.log("Show comp");
    const showComponents = true; // Corrected typo in 'false'
    return (
        <div>
            <h2>This is first Component</h2> {/* Corrected typo in 'Component' */}
            {
                showComponents ? (
                    <div>
                        <SecondComp/>

                    </div>
                ) :
                (<p>You cannot see components</p>)
            }
        </div>
    );
}

export default FirstComp;
