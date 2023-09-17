import { useEffect, useRef, useState } from "react";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutme/AboutMe";
import Section from "./components/section/Section";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Nav from "./components/nav/Nav";



function App() {
  const SecRefs = [useRef(), useRef(), useRef()];
  const navRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    let target = currentIndex + direction;
    if (target >= 0 && target < SecRefs.length) {
      setCurrentIndex(target);
      SecRefs[target].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
      scroll(1);
    } else {
      scroll(-1);
    }
  };

  useEffect(() => {
    //nav animation
    if(currentIndex != 0 ){
      navRef.current.classList.add("anim-hide")
    }else{
        navRef.current.classList.remove("anim-hide")
    }

    SecRefs.forEach((el,i)=>{
      console.log("i:"+i+", currentIndex:"+currentIndex)
      if(currentIndex != i){
        SecRefs[i].current.classList.add("anim-hidden")
      }else{
        SecRefs[i].current.classList.remove("anim-hidden")
    }
    })

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex]);



  return (
    <>
      <div className="mainPage">
        <Nav ref={navRef}/>
        <Section content={<Hero />} ref={SecRefs[0]} down={() => scroll(1)} up={() => scroll(-1)} />
        <Section content={<Projects />} title="PROJECTS" ref={SecRefs[1]} down={() => scroll(1)} up={() => scroll(-1)} />
        <Section content={<AboutMe />} title="ABOUT ME" ref={SecRefs[2]} down={() => scroll(1)} up={() => scroll(-1)} />
        
      </div>
    </>
  );
}

export default App;
