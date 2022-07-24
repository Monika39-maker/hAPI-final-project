import ImageCardsContainer from "../client/src/components/ImageCardsContainer.js";

export default {
    title: "Components/ImageCardsContainer",
    component: ImageCard,
    argTypes: {
        numberOfChildren: {type: "number", defaultValue: 4}
    }
};


 const Template = ({numberOfChildren, ...args}) => 
 (
    <ImageCardsContainer {...args}>
        {
            [...Array(numberOfChildren).keys].map(n => (
                <div style={{ width:"50px", height:"50px", backgroundColor:"red", display:"flex", justifyContent:"center", alignItems:"center" }}>
                    { n + 1 }
                </div>
            ))
        }
     </ImageCardsContainer>
)

 export const Default = Template.bind({})
 Default.args = {
    direction: "row",
    spacing: 2,
    wrap: false


    
}