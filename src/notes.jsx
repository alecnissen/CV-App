// start by making components. 
// first component, will be personal details, 
// remove all the css files and the assets 

// Overall Structure of page,
// personal details component, education, and experience components, 
// updated resume/cv on the right side of the page, 
// total of 4 components, each component has their own state, 
// their data and state will be saved into their own components, 
// overall layout I believe can be achieved with flebox, 

// the 3 components for the info will be wrapped in a form tag, they will have a submit btn 
// submit btn when pressed, displays the info in its respected section ,
// edit btn will display latest value and should be editable before being resubmitted, 

// being scaffolding what the personal details component would look like 
// a container will wrap the 3 forms, 


// how can I properly use my container that will wrap person detais, 
// where should the styles folder go? How can I properly use styles in this project? 

// I will spend 15 min, looking at the example, 
// and will form a proper gameplan, 
// most likely will add a header component 
// then go on to build the personal details component. 

// I made a header component that includes a title of app, 

// I am now working on the personal details component, 

// I want it, so when user types, it auto updates and displays on the right hand side of the page. 
// this is where props comes into play. 
// you will need to pass data from one component to another, 

// see if you can do that now, 
// grab the target of the input field and set its state. 

// ok I did a basic test passing data/props from one component to another 

// next I will create all the components with its content inside, 

// create the input components then the CV/Resume on the right hand side 



// try to move the cv component to the right hand side of the page, 
// I think it can be achieved with grid, 
// I will need to review the old messages, 

// seems to be a problem with the children and grid items. 


// maybe this can be achieved with flex??? 
// flex container? 


// I will go through the components, and make sure everything looks good, 

// then commit, save then take a short break 

// the next step will be when the user fills in their info, 
// presses submit, the props will get based to cv component
// and it will display that info the appropriate section, 

// that will be the process for each component,  


// the next step is have user fill out personal details form 
// then once submitted the info will be displayed 
// in the cv-component header section, 
// 

// once submitted append to appropriate cv container, 
// set the state of each value within that function, 

// onSubmit btn is ran once submit btn is clicked, 
// a function will be called which sets the value/state of all the values within the input field, 

// each input field, will have an onChange, it will grab e.target.value 
// the state will be set, 
// then once the form is submitted, a function is called 
// which passes the state values as props to a function which will display them in the CV component. 
// 

// capture each input value with onchange, 
// 

// I Have some experimenting to do, 
// you cannot pass the props once the form is submitted, 

// first call a function, to preventDefault, then maybe call the function is test file 



// pass data to another component on form submit, the component will also render that data, 



