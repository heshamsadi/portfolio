import ArrowDown from '../../assets/images/ArrowDown.svg'
import './ScrollArea.css'

function ScrollArea(props){

    const areaDirectionClass = (props.dir === "up") ? "scrollAreaDiv scroll-up" : "scrollAreaDiv scroll-down"


    const handleScroll = ()=>{
        props.scroll();
    }

    return (<>
        <div className={areaDirectionClass} onClick={handleScroll}>
            <div className="scrollAreaContainer">
                <img className="sectionArrow" src={ArrowDown} alt="scroll area arrow"/>
                {/* <h4 className="scrollText">CLICK</h4> */}
            </div>
        </div>
    </>)
}
export default ScrollArea;