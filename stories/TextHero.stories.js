import TextHero from "../client/src/components/TextHero.js";

export default {
    title: "Components/TextHero",
    component: TextHero,
    // argTypes: {
    //     title: { control: "string" },
    //     subtitle: { control: "string", defaultValue: "20" },
    //     link: { control: "string" },
    //     buttonText:{ control: "string" },
    //     variant:{ control: "string" },

    // },
};


 const Template = (args) => (<TextHero {...args}/>)

 export const Default = Template.bind({})
 Default.args = {
    title: "This is a text Hero",
    subtitle: "In this subtitle you can write a longer text",
    link: "https://google.com",
    buttonText:"Open Google",
    variant:"red",

 }
 
 export const YellowVariant = Template.bind({})
 YellowVariant.args = {
    title: "This is a text Hero",
    subtitle: "In this subtitle you can write a longer text",
    link: "https://google.com",
    buttonText:"Open Google",
    variant:"yellow",

 }
 export const BlueVarient = Template.bind({})
 BlueVarient.args = {
    title: "This is a text Hero",
    subtitle: "In this subtitle you can write a longer text",
    link: "https://google.com",
    buttonText:"Open Google",
    variant:"blue",

 }
 export const TitleOnly = Template.bind({})
 TitleOnly.args = {
    title: "This is a text Hero",

 }

