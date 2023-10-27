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

// break each cv section into components as well, header, education, and experience, 
// make sure its content starts at its specific rows, 
// get all the content down, and apply basic styling to make sure content is going in the right place 



// wrap items in form, button has onSubmit 
// it will call a function which will display the data, 
// try to make that work but also keep onChange so user can see live update
// onSubmit within add btn, saves text to screen, clears inputs, 
// allows user to add content each time add btn is pressed, 

// today I will figure out, how to add the functionality for add btn within education and experience, 

// 

// when the add btn is pressed it will save the content to the correct location, and clear the data, 

// you will have to wrap items in a form, 

// ok one section at a time, 
// start with header, once form is submitted pass the data to the CVHeaderComponent, 
// dont forget to add a key to each prop
// get the submit function working, once you understand how to do it, for one section
// the same process for the rest of the sections, 

// DO NOT FORGET TO ADD A KEY FOR EACH PROP, USE UUID RANDOM

// what would happen when the form is submitted? 
// a function is called which will pass the values to a function which will print the values 
// 
// look into the docs of passing data between components, 

// that is what we are doing, form is sudmitted in one component, 
// now that data will need to be displayed within another component, 
// how can I properly pass that data to the component that renders? 


// submit functionality now working, 
// check the names of the containers in the personal details file 
// edit the names to make it more understandable, 
// save and commit, then finish the rest of the inputs and submit updates 
// use the same logic for next 2 sections, 


// KEYS FOR EACH PROP 
// CHANGE THE NAME OF THE FORM WRAPPER AND EDUCATION CONTAINER TO SOMETHING BETTER 
// HEADER DOES NOT NEED TO BE A COMPONENT, IT IS JUST AN H1

// now use the same process for email and phone number, 
// allow submit btn functionality for each section, 

// repeat the same process for education section, 
// get all the content on the page after the submit btn is pressed, 

// figure out a way to add onto the education and experience sections, 

// goal stands, I will figure out a way to add more content onto education and experience, 
// am I dynamically rendering a component? 

// finish the professional experience section, 
// create the handle submit function then test again 

// once form is submitted, the details will be displayed in the education or experience section, 
// while also displaying on the cv 
// user has the ability to click edit btn, to edit or delete item, 
// once dropdown btn is pressed, the input form will popup allowing user to enter more info
// 
// allow the user to add more content for experience and education, like the example listed 
// confused on where to start, 


// lets first see if the content also renders below the section on btn click, 

// if you get stuck just begin to style, 
// its probably about time to begin adding some styles to see everthing come together, 

// either start basic styling, 
// figure out how to get content to go below section, after submit 

// create another function which will render the data after submit, 

// can I use the handle submit function to render the data below the form onSubmit? 

// dropdown menu or the new content getting added to the cv or the dropmenu 
// 
// I would first like to figure out how to render the new data onto the component  




// const App = () => {
//   const [personalInfo, setPersonalInfo] = useState({
//     fullName: '',
//     birthday: '',
//     email: '',
//     address: '',
//     phoneNumber: '',
//   });
//   const [fullName, setFullName] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   function handleSubmitPersonal(e) {
//     e.preventDefault();
//     const updatedInfo = {
//       fullName: fullName,
//       birthday: birthday,
//       email: email,
//       address: address,
//       phoneNumber: phoneNumber,
//     };
//     setPersonalInfo(updatedInfo);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmitPersonal}>
//         <input
//           type="text"
//           placeholder="Full name"
//           onChange={e => setFullName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="D.O.B"
//           onChange={e => setBirthday(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Email"
//           onChange={e => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           onChange={e => setAddress(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           onChange={e => setPhoneNumber(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <CVChildComponent personalInfo={personalInfo} />
//     </>
//   );
// };

// 10/27 plan 

// implement the new code for personal details, look over the code again 
// it looks like it will use one state object, 
// instead of state for each input value, 
// save and commit first, then implement, 
// try the same process for education and experience, 
// 

// I notice that the description content for experience is not rendering, 
// figure out why before commiting and moving on, 
// lets check his messages also
