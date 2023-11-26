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

// review the messages, understand the problems and go over his suggestions 
// whiteboard out plan, 
// begin tackling one section at a time, 

// The problem is how my components are being used, 
// I was using components twice, 

// NEW PLAN ***************** 


// the structure of my site will need to change 

// STATE CHANGES *** 
// within app state variables for each, personal, edu, experience
// example const [personalDetails, setPersonalDetails] = useState();
// So within app, all the form state will be set within there, 

// each form will have its own state updater function 
// handleSubmitPersonal 
// handleSubmitEducation 
// handleSubmitExperience 

// updates the object 

// then in the return statement, 
// we will pass the updated state data to the respected components, 


// COMPONENTS ***


// *** 
// fixed the app component so that it has all the handleSubmit functions inside 
// but now what will go inside the personal, education and experience? 
// I will need to review the messages again 

// am I going to need to use an onChange event, or just a submit btn within each section, 
// then pass all the values to the appropriate handle submit functions 

// getting the state within app.jsx but what will I do inside the individual components? Personal, education? 

// what am I using those components for, when it seems like Im grabbing the state in app.jsx? 

// am I passing anything to them. 

// ***
// errors are gone, now try to print the data that was passed into the cv components
// goal is to try to print the form data to the cv portion, 
// however why are my handleSubmit functions returning undefined? 
// that seems to be the lone error not causing the content to render 
// try to figure out why the handleSubmit functions are returning the error 
// 

// you have to find a way to access the handleSubmit functions within app.jsx, 
// and use that data within personal, education, and experience
// is that hoisting state? 
// review messages and see if you can get a clue, 
// then ask  



// *** 10/30 plan 
// will begin basic styling so the site comes together a little more, 
// see also if you can put the rendered cv content below the respected section, 
// render data within its own prop 

// goal is basic styling, taking one section at a time, 
// may want to clean up names, and variables, look over everything jsx, css,
// make sure its more or less on the right path,
// see if you can form data to render below its respected section, 
// commit and save before you begin, check working tree, 
// 

// *** saved, first see if you can render the submited content
// below the form sections,  

// *** dropdown and basic styling for personal details rough draft complete 
// next do the same thing for education and experience, 
// then we can start to implement the add on features, edit and delete option. 

// could also start implementing the save option, which would clear the form/input fields, and allow the user to add more content, 
// pressing save would clear the inputs, 
// should I wrap the inputs and container in a form, can it be done without a form? 

// once save btn is pressed, clear the form input fields, 
// save the object that was entered into the array 

// get dropdown for each section, make sure to prevent default on each form as well 


// feeling pretty lost on how to implement this add on feature, 
// yes it will clear inputs but its just replacing the old with the new, 
// how can I get it so it still shows all the entries that the user typed in. 
// will that use conditional rendering? If so won't I need to init an array? 
// It feels like I need to do something with my components, 


// I need to update the state of the education array, 
// then once the state is updated within the component I will need to map over the all the items in the array, 
// and then render them, 

// how will I update the state or add new items to the array? 
// where would I set the new state, where would I update the state? 
// 


// the add on feature for education and experience, 
// try to use the syntax that were using, 
// use the spread operator, make a copy of the new array then add the new item, 
// then pass the variable to the cv componenet, map through the properties and render them, 
// commit and save work before implementing new feature, 
// basically just implemented the clear function, 

// begin to implement map method within the cv component, 
// iterate over all the properties, and render them use the list items example, 



// ADD ON FEATURE WORKING 
// DON'T FORGET THE FORM CLEARING FEATURE IN ALL THE SECTIONS, 
// IMPLEMENT FOR PERSONAL AND EXPERIENCE, 

// clear feature implemented, 
// now begin more styling on the cv component side to make sure things to start to line up, 
// start with the personal details section, then move onto the next section,   
// basic styling, making sure things are more or less in the right place 

// What I want to do next is to just experiment with different sizes for the cv component on the ui

// then I will begin to try to implement edit and delete functions, 
// First I will begin with edit, 

// I will first add a button in the component when rendered

// trying to dynamically create the button to edit the specific form component, 
// WHAT I'VE TRIED
// adding a button on render, 
// returning a button from a function and trying to call it 
 

// how to edit form data, 
// click on edit button and it will return to the form with those particular inputs listed for that card/data 

// add the same base styling for experience section content under the form

// how to access the particular info for that specific section of content, 
// when I click on the edit btn for a particular piece of section 
// it should re-popular the input fields with the data from the form, 
// determine what piece of content was clicked, 
// re-popular input fields with the content was submitted for that section 

// how do I access that particular state with the btn click? 

// I dont know how to access the particular content that was clicked on when user presses edit btn for that section, 
// ID's a loop? 
// its not clear 

// edit btn logic, 
// should edit the same data, and once submit is pressed it should update/save the data instead of creating a new one, 


// very confused on edit and delete functionality, 
// for now just clean up styles, 
// go thru the page and see what you can spot to work on 


//  *** 11/13 

// work on edit btn functionality, 
// I want it so when an entry is made, and the btn ic clicked on, 
// it will bring back the details of the selected entry 
// it will edit and change the state of the entry, without creating a new entry, 
// the problem right now, is that it is creating a brand new entry instead of editing the selected entry, 
// // *** if we found the item we clicked on, replace the state but remove the old one. 

// I will spend 15 minutes forming a gameplan, understanding the code, 
// then I will ask for help. 

// If I remove the index, and the splice line, it will bring back entry details, when edit btn is clicked, 
// if I keep the index, and the splice line, I Will receive the object is not a function error, 
//  
// 

// ** question Why am I getting this error and how can I fix it, duplicate keys error 

// trying to get the edit btn working, content is rendered below the input form as well as the cv portion. I have created a seperate key for the both of them
// but when I create two or more entries in the education form, and click the different edit btns on the data, an error pops up saying I have dupicate keys 

// I Know this could be an issue of mapping on the same list twice or a duplicate entry getting added to the educationForm array, 
// however, I am using two different keys when mapping, I'm not sure where the duplication is happening. 
// WHen I make multiple entries and click any edit btn it deletes the last entry, and replaces it with the latest one 
// 
// 

// edit btn working, 
// I create two or more entries click on an edit btn on the form content, it will delete the previous entry and replace it with the content associated with that edit btn that was pressed \
// I have tried creating two sets of unique keys for each section education and cv, 
// 
// 
// when I create two or more entries then click the edit btn on the latest entry it will delete the first entry 
// and replace the first entry with whatever was clicked on, 



// I want it so when user pressed edit, it will re-populate the fields with the data, 
// the user can make their edits, then press submit and it modifys the existing entry instead of creating a brand new one, 

// currently it will create a brand new entry, instead of modiying the selected entry, 
// I also notice that when I create two or more entries and press the edit button on any of them
// that it will remove the first entry and replace it with the second entry, 
// I am not sure why that behavior is occuring. 

// I've tried using seperate keys for each section both form and cv, following the stack trace, 
// but following the trace I cannot see where the problem could lie, 
// my guess is that items are being added to the educationForm array twice. 
// 
// looks like keys are being duplicated twice, I can create different entries, 

// Attach repo, so currently working in Eduction.jsx file, 
// the handleEdit function, give line # 
// the handleEdit is called within a button, 
// also content is also rendered in the cv portion, so the educationCV file 
// 

// I notice when I remove the splice line, and the setEducationForm line, 
// the error will go away, 
// My thinking for using splice is that if the entry from the array matches the entry that was clicked on, 
// remove that item, then we re-update the state, making a new array and adding the new item, 


// What I want: When content is generated is below form, user can click an edit btn which will allow user to modify the input fields and update the selected entry 

// The problem: Right now it will create a brand new entry instead of modifying the selected entry 

// What I've tried: Previously I was trying to use splice, to remove the old entry and make way for the new,

// but that lead to some errors which inclded duplication of keys, 

// I am using two different keys for content render, keyForm and keyCV 

// Now when I remove this line, splice, and remove the re-updating state line 

// the key error is gone and now the only problem is the making new entry ijnstead of modifying the entry 

// I am thinking I need to somehow remove the old entry from the educationForm array 

// I also tried using filter, 


// 11/18

// 

// 11/19 

// take notes on the article that cake linked, 

// how to determine the entry that was clicked on, 

// work with cake on the edit btn using computer properties, some method tomorrow, 

// tonight try to get the delete btn properly working 

// how to figure out which event btn was clicked on, 


// evening session, 
// *** 
// review cakes messages, try to see what you can figure out and learn 
// review that one example from the docs, 
// start with that, 
// if still confused, form a question and post it 

// try the save btn approach, 
// edit btn will re-populate the fields, 
// when save is pressed it saves the updated value into state, 

// take a step back and understand what is going on within the app, 
// walk through the entire process,  



// Background/Desired Behavior: User will fill out the education form, and click submit so an entry is created. User can then click the edit btn to begin the editing process, they will make their changes and once save btn is pressed the content will be updated on the same entry. 

// The Problem: When save btn is pressed, it still creates a new entry instead of modifying the selected entry. :confused: 

// What I've tried: Been following an example on the react docs about updating objects in an array, I was told I was on the right track with this approach but I am still so lost on why my current code is not working. I've reviewed the code several times and compared my example to the docs example and it appears I am doing the same process. Setting the state to a copy of the updated array, along with the updated object as well. 

// Here is my current code block, I am also attaching repo as well as I think that would be the easiest way to receive help on this, I will have to make this two posts, so I can post the code block and repo. 



// *** 11/25 

// Form Input Sections:
// 1. Make the inputs longer so all information can be seen when typing (Large enough to match the Description in Professional Experience input length)  

// A slightly larger font for readability on the inputs


// Little less space between the header and the drop down arrow.


// Make the drop down arrow white so it's more visible and matches the other text.


// Style the submit button with a hover and make it a little larger, maybe some padding.
// **** 

// look at the working tree and apply the same changes to the education section 

// *** 

// I would change the CV page section back to being the default column instead of a row and move the location. I would also rearrange it to have the location and degree moved. I would probably not have any of this bold, or only have the most important thing bold. (These suggestions also apply to the professional experience section too)

// Formatted like this:
// Software Development Training School, (Location Here)
// (OR Location Here)
// 09/11/2023-10/11/2023 (Or however your country likes doing dates) (I use moment for date formatting a lot, it's pretty simple)
// Google Certificates/Degree Here 



// *** tomorrow agenda, 11/26

// word wrapping of inputs and cv too? 

// increasing size of cv to make sure all content fits, 
// fonts 
// reducing space between inputs and cv page. 

// review the commits, and commit and push changes, then begin word wrapping, 
// ask for clarififcation if stuck, 

// *** inc size of cv, inc font size in header, and centered it with position 
// changed education and experience section in cv to column instead of row, 

// changed start date/end data to one row for education and experience, 
// changed description content to p tag instead of h3, so it is smaller, 


// 