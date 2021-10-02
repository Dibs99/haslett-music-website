import dynamic from 'next/dynamic'
import { Spinner } from '@chakra-ui/spinner'

const AudioPlayer = dynamic(
    () => import('./AudioPlayer'),
    { loading: () => <Spinner/>}
)

export default AudioPlayer