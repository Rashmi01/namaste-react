const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement(
        "div", 
        {id:"child1"}, 
        [React.createElement("h1", {}, "h1 tag"),React.createElement("h2", {}, "h2 tag")]
    ),
    React.createElement(
        "div", 
        {id:"child2"}, 
        [React.createElement("h1", {}, "h1 tag"),React.createElement("h2", {}, "h2 tag")]
    )]
);

const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Hello World from React"
);
console.log("parent ", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);