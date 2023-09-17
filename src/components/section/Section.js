import { forwardRef } from "react";
import './Section.css';
import ScrollArea from '../scrollArea/ScrollArea'

function Section(props, ref){


    return (<>
        <section className="mainSection" ref={ref}>
            <div className="sectionMain">
                <ScrollArea scroll={props.up} dir="up"/>

                <div className="sectionContent">
                <h1 className='sectionTitle'>{props.title}</h1>
                    {props.content}
                </div>

                <ScrollArea scroll={props.down} dir="down"/>
            </div>
        </section>
    </>)
}
export default forwardRef(Section);