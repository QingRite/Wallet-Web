import Goalgraph from "./goalgraph";
import Totalbalance from "./totalbalance";

function Homepage() {
    const homePageStyle = {
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr', //the 0 ensures that the default padding 
        margin: '10px',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        textAlign: 'center'
    }

    return (
        <div style={homePageStyle}>
            <Totalbalance text="$100" income="$100" spending="$100"/>
            <Goalgraph/>
        </div>
    )
}

export default Homepage;