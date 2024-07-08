import { TbHome, TbBusinessplan, TbSettings , TbGraph } from "react-icons/tb";
function Sidebar(props) {
    //style
    const mainIcon = {
        height: '5vw',
        width: '5vw',                                                                               
        display: 'block ',
        margin: 'auto auto 1vh auto',
        paddingTop: '3vh'
    }
    const homebuttonStyle = {
        width: '2vw',
        height: '2vw',
        color: 'black'
    }
    const sideBarStyle = {
        display: 'block',
        justifyContent: 'space-between',
        backgroundColor: '#e6e6e6',
        height: '100vh',
        width: '6.5vw',
    }

    const sideContainerStyle = {
        listStyle: 'none',
        textAlign: 'center',
        padding: '2.5vh 0',
        margin: '1vh 0'
    }

    const elementStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3vh auto',
        height: '3.5vw',
        width: '3.5vw',
        borderRadius: '1.5vw',
        backgroundColor: '#d9d9d9'
    }



    return (
        <nav style={sideBarStyle}>
            <img src="resources/main-icon.png" style={mainIcon}/>
            <ul style={sideContainerStyle}>
                <li style={elementStyle}><a href="#"><TbHome style={homebuttonStyle}/></a></li>
                <li style={elementStyle}><a href="#"><TbBusinessplan style={homebuttonStyle}/></a></li>
                <li style={elementStyle}><a href="#"><TbGraph style={homebuttonStyle}/></a></li>
                <li style={elementStyle}><a href="#"><TbSettings  style={homebuttonStyle}/></a></li>
            </ul>
        </nav>
    );
}

export default Sidebar;