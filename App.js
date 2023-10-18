import React from "react";
import ReactDOM from "react-dom/client";

//JSX is not HTML in JS
//React Element
const Title = ()=>(
<h1 className="heading" tabIndex="5">
    h1 tag using JSXHeading
    </h1>
);

const SpanComponent = () => (
    <h1 id= "sspancomponent"> SpanComponent</h1>
);
const elem = (<span> span react element</span>)



const number = 1000;
//React components
// Funnctional Components
//HeadingComponents is same as HeadingComponents2
//Component Composition
const HeadingComponents = () => (
   <div id="container">
    {Title()}
    <Title/>
    <Title></Title>
    <h2>{number +100}</h2>
    <SpanComponent/>
     <h1 className="heading">Namaste functional react components</h1>
   </div>
);
const reactElement = (
   
    <h1> {elem}  Hellooo, im react element being used in functional component <HeadingComponents/> </h1>
    )
//const HeadingComponents2 = () => (<h1>Namaste functional react components</h1>)
const root = ReactDOM.createRoot(document.getElementById("root"));
///root.render(JSXHeading);
root.render(<HeadingComponents/>)