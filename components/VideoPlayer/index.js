import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { AspectRatio, Box, Container } from "@chakra-ui/layout";
import { FaRegPlayCircle } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { useBreakpointValue } from "@chakra-ui/react";

const youtubeIds = [
    "M4hOnvOJlWg",
    "tBzyp-2kNhg",
];

const featureContainerStyles = {
  position: "absolute",
  width: "100%",
  ratio: 16/9,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const Video = React.forwardRef(({ index }, ref) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
    return (
      <AspectRatio ref={ref} {...featureContainerStyles}>
        {
          !open ? 
            <>
              <img src={`https://img.youtube.com/vi/${youtubeIds[index]}/hqdefault.jpg`} />
              <Box>
                <Icon as={FaRegPlayCircle} className="play-icon" onClick={handleClick}/>
              </Box>
              
            </> :
            <Box
              as="iframe"
              src={`https://www.youtube.com/embed/${youtubeIds[index]}?autoplay=1`} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen/>
        } 
      </AspectRatio>
    )
})


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};



const VidTest = motion(Video)

const containerStyles = {
  height: "100%",
  width: "75vw",
  margin: "0 auto",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}


const VideoPlayer = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, youtubeIds.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const minHeight = useBreakpointValue({base: "10rem", md: "40rem"})
  

  return (
    <Box overflow="hidden">
      <Box {...containerStyles} minHeight={minHeight}>
        <AnimatePresence initial={false} custom={direction}>
          <VidTest
            key={page}
            index={imageIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30,  },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
          
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          {"‣"}
        </div>
      </Box>
    </Box>
  );
};

export default VideoPlayer;