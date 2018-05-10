export let state;

//The managePets reducer function needs to have a sensible default state

export function managePets(state={pets: []},action){
  console.log("**********************");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'ADD_PET':
      let pet = null;
      if(action.pet && action.pet.name && action.pet.species && action.pet.id){pet = action.pet}
      if(pet){
        let newpets = Object.assign({},...state,{pets: [...state.pets,pet]} )
        // console.log("***************newpets");
        // console.log(newpets);
        return newpets
      }
      break;
    case 'REMOVE_PET':
      let remove = action.id
      let pets = state.pets.filter((pet)=>{return pet.id != remove})
      // console.log("**********************AFTERREMOVE");
      // console.log(pets);
      let newstate=Object.assign({},...state,{pets: pets})
      // console.log(newstate);
      return newstate
      break;
    default:
      return state;
      break;
  }
}
//dispatch should pass an action to the reducer and use that return value to update the state,
// a globally accessible variable

export function dispatch(action){
  state = managePets(state,action)
  render()
  // 1) dispatch declares the state variable in the global scope
  // and exports the state, and calls the reducer:

}
// Since our users want to see their pets on a webpage we want to have a render method that inserts a <ul>
// to the DOM with each pet's name wrapped in an <li>.
// The <ul> should be a child of an element with the id of container.
// There's no need to load jQuery into our app for such a small task.
// We can make use of built-in JavaScript methods like document.getElementById.

export function render(){
  let container = document.getElementById('container');

  let names = state.pets.map((pet)=>`<li>${pet.name}</li>` )
  console.log("************************names");
  console.log("state:"+state);
  console.log(state);
  console.log("names:"+names);
  container.innerHTML=`<ul>${names}</ul>`
}

// By dispatching actions such as "ADD_PET" and "REMOVE_PET" to your reducer,
// you will track your current pets and display them in a beautiful <ul> in the browser.
