import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react'
// import "./audio-player.css"

const CustomAudioPlayer = ({ songs }) => {
    const [ index, setIndex ] = useState(0)
    const endOfPlaylist = index + 1 === songs.length
    const handleNext = () => {
        let nextIndex = 0
        if (!endOfPlaylist) {
            nextIndex = index + 1
        }
        setIndex(nextIndex)
    }
    const handlePrevious = () => {
        let previousIndex = index - 1
        if (index === 0) {
            previousIndex = songs.length - 1
        }
        setIndex(previousIndex)
    }
    const header = songs[index + 1] ? `Current song: ${songs[index].title} - Next: ${songs[index + 1].title}` : `Current song: ${songs[index].title}`
    return (
        <>
            <AudioPlayer
                src={songs[index].src}
                header={header}
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}
                showSkipControls/>
        </>
    )
}

export default CustomAudioPlayer