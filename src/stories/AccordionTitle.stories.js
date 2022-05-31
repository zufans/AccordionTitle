import React from "react";
import AccordionTitle from "../components/AccordionTitle";


export default {
    title: "AccordionTitle",
    component: AccordionTitle,
}

const Accordion_Title = (args) => <AccordionTitle {...args} />;
export const Accordion_T = Accordion_Title.bind({})
Accordion_T.args={
    left : "Left", 
    center: "Center", 
    right: "right",
}