import { extendTheme } from '@chakra-ui/react'

const audioPlayer={
  ".rhap_container": {
    backgroundColor: "#bfd2ed",
    color: "black"
  }
}
const global = {
  body: {
    backgroundColor: "#041830",
    color: "#bfd2ed",
    ...audioPlayer,
    ".play-icon": {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0, 
      margin: "auto",
      width: "6rem",
      height: "6rem",
      color: "white",
      opacity: 0.6,
      _hover: {opacity: 1, cursor: "pointer"},
    }
  }
}
export const theme = extendTheme(
  {
    styles: { global },
    fonts: {
      heading: "Merriweather Sans",
      body: "Inter",
    },
    components: {
      Stack: {
        variants: {
          primary: {
            spacing: 10
          }
        },
        defaultProps: {
          variant: "primary"
        }
      },
      Button: {
        variants: {
          primary: {
            border: "#d1c5c5 solid 1px",
            borderRadius: "25px",
            size: "lg",
            _focus: {boxShadow: "none"},
            _hover: {border: "#7e7e7e solid 1px",}
          },
          link: {
            _focus: {boxShadow: "none"},
          }
        },
        defaultProps: {
          variant: "primary"
        }
      },
      Container: {
        variants: {
          light: {
            backgroundColor: "#fbf2e6",
            background: "linear-gradient(45deg, transparent 37%, #f3e1c9 0, #f3e1c9 63%, transparent 0) #fbf2e6;",
            backgroundSize: "4px 3px",
            color: "black"
          },
          dark: {
            backgroundColor: "#041830",
            color: "#bfd2ed"
          },
          defaultProps: {
            variant: "light"
          }
        }
      },
    } 
  }
)