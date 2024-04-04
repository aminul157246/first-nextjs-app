import Counter from "@/component/Counter/Counter";
import Link from "next/link";


export const metadata = {
  title: 'Home Page',
  description: 'THis is home page',
}

const HomePage = () => {

  
  return (
    <div>
      
      
      <h1>Welcome to home page </h1>
      <Counter/>
      <Link href='/about'><button>Go about</button></Link>
      <Link href='/album'><button>Go album</button></Link>
    </div>
  );
};

export default HomePage;

