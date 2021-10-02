import React from "react";
import { motion, useCycle } from "framer-motion";
import { Button } from "@chakra-ui/button";
import { chakra } from '@chakra-ui/react';
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

const width = 500

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 240px 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `circle(30px at ${width-50}px 50px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Ul = motion(chakra.ul);
const Navigation = ({ toggle }) => (
  <Ul 
    variants={navVariants}
    marginLeft={10}>
    {menuItems.map(item => (
      <CustomMenuItem {...item} toggle={toggle}/>
    ))}
  </Ul>
);

const menuItems = [
  {key: 1, title: "Home", icon: () => <AiOutlineHome size={50}/>, href: "/"}, 
  {key: 2, title: "Ceremonies", icon: () => <AiOutlineHeart size={50}/>, href: "/ceremonies"}
];

const CustomMenuItem = ({ title, icon, href, toggle }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href}>
        <Button
          onClick={toggle}
          variant="link"
          color="#bfd2ed"
          size="lg"
          fontSize="xl"
          leftIcon={icon()}
          _activeLink
          >
          {title}
        </Button>
      </Link>
    </motion.li>
  );
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#bfd2ed"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <Button 
    onClick={toggle} 
    variant="link"
    marginLeft={width-70}
    marginTop="40px">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </Button>
);

const Nav = motion(chakra.nav);
const Div = motion(chakra.div);

const navBarStyle = { position: "fixed", top: 0, right: 0, bottom: 0, width: `${width}px` }
const divStyle = { position: "absolute", top: 0, left: 0, bottom: 0, width: `${width}px`, background: "#041830"}
const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      {...navBarStyle}
    >
      <Div variants={sidebar} {...divStyle}/>
      <Navigation toggle={() => toggleOpen()}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </Nav>
  );
};

export default NavBar;