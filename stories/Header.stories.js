import Header from '../client/header.js';
// import Navbar from "../client/nav.js"

export default {
    title: "Components/Header",
    // component: Header,
    argTypes: {
        backgroundColor: {control: 'color'},
        color: {control: 'color'},
        padding: {control: "number", defaultValue: "3"}
    }
};


export const Heading = (args) => (<Header {...args}/>)
// export const Navbar = (args) => (<Nav {...args}/>)
