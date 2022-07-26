import ImageCard from "../client/src/components/ImageCard.js";

export default {
    title: "Components/ImageCards",
    component: ImageCard,
};


 const Template = (args) => (<ImageCard {...args}/>)

 export const Default = Template.bind({})
 Default.args = {
    src: "https://www.pratibhanakshatra.org/public/storage/events/1595505312pro2.png",
    title: 'The “Star Talent”',
    subtitle: "A fusion of equality, co-existence, respect, Pure Soul and consciousness of origin"
    
}