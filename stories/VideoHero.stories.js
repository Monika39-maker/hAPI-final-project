
import VideoHero from "../client/src/components/VideoHero.js";

export default {
    title: "Components/VideoHero",
    component: VideoHero,
    // argTypes: {
    //     height: { control: "number", defaultValue: "100"},
    //     width: { control: "number", defaultValue: "100" },
    //     link: { control: "string" },
    //     buttonText:{ control: "string" },
    //     variant:{ control: "string" },

    // },
};


 const Template = (args) => (<VideoHero {...args}/>)

 export const TextOverlay = Template.bind({})
 TextOverlay.args = {
    height: "100",
    width: "100",
    src: "https://player.vimeo.com/progressive_redirect/playback/694704491/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=6f4425e6cbc3e6c9dfe7a01f60ab993bcf297393152794a8aa9f409173b78244",
    textOverlay: "Text that goes over the video",
    subtitle: "Optional subtitle"
    
}

 export const Default = Template.bind({})
 Default.args = {
    height: "100",
    width: "100",
    src: "https://player.vimeo.com/progressive_redirect/playback/636709154/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=b546df23356fbd974e6091302fdb99e4b5d55f9bc6b9e49f9056f5aa7e76b17e",
    subtitle: "Optional subtitle"
}
