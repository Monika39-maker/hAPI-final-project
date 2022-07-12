import Nav from '../client/nav.js'

export default {
    title: "Components/Navbar",
    component: Nav,
    argTypes: {
        backgroundColor: {control: 'color'},
        color: {control: 'color'},
        padding: {control: "number", defaultValue: "3"}
    }
};


export const Navbar = (args) => (<Nav {...args}/>)
