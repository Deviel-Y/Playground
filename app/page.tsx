import AnimatedLink from "./components/AnimatedLink";

const Home = () => {
 return (
  <div className="flex flex-col gap-4 h-screen items-center justify-center">
   '<AnimatedLink href="#">instagram</AnimatedLink>
   <AnimatedLink href="#">facebook</AnimatedLink>
   <AnimatedLink href="#">twitter</AnimatedLink>
   <AnimatedLink href="#">linkedin</AnimatedLink>
  </div>
 );
};

export default Home;
