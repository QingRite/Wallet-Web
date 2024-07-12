import Totalbalance from "./totalbalance";

function Homepage() {
    const homePageStyle = {
        padding: '10px'
    }

    return (
        <div style={homePageStyle}>
            <Totalbalance text="$100" income="$100" spending="$100"/>
        </div>
    )
}

export default Homepage;