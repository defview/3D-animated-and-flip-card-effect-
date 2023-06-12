//import logo from './logo.svg';

import { Card } from "./components/Card";
import { Slider } from "./components/Slider";

function App() {
  return (
    <main className='realative min-h-screen after:bg-home after:bg-center
    after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0
    after:z-[-1]'>
      <div className="h-screen items-center justify-around flex space-x-10">
        <Card />
        <Slider />
      </div>
    </main>
  );
}

export default App;
