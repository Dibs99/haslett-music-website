import Section from "../layouts/section"
import ContentBlock from "../components/ContentBlock"
import image from '../public/david-hero.jpeg'
import Img from 'react-optimized-image';
import AudioPlayer from "../components/AudioPlayer";
import VideoPlayer from "../components/VideoPlayer";


const firstContent = "One of the most important parts of the day I feel is the processional, or the aisle walk. This is the moment that all eyes are on the bride (or groom) as they enter the ceremony. If you're not used to being the centre of attention this can be a bit overwhelming, but having a song that gives you courage, that reaffirms why you're doing what you're doing, and sets the mood can alleviate some of the nerves."
const secondContent = "In the playlist you'll hear some of my favourite aisle songs sung live (some of them during weddings). I'm always happy to learn songs, but have a listen and see what sounds good to you!"
const songs = [{src: "/Silly-Love-Songs.mp3", title: "Silly love songs"}, {src: "/How-Deep-Is-Your-Love.mp3", title: "How Deep is Your Love"}]
const Ceremonies = () => {
    return(
        <>
            <Section>
                <ContentBlock title="Ceremonies" content={firstContent}>
                <Img 
                    src={image} 
                    webp 
                    sizes={[400, 800]} 
                    breakpoints={[600, 1000]}
                    loading="lazy"
                    style={{objectFit: "cover", objectPosition: "center"}}/>
                </ContentBlock>
            </Section>
            <Section dark>
                <ContentBlock title="Live Recordings" content={secondContent} reverse>
                    <AudioPlayer songs={songs}/>
                </ContentBlock>
            </Section>
            <Section>
                <VideoPlayer/>  
            </Section>
        </>
    )
}

export default Ceremonies