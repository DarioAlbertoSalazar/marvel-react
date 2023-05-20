import BestCharacters from '../components/BestCharacters';
import Insider from '../components/Insider/Insider';
import ListLastEvents from "../components/ListLastEvents";


export default function Home() {
  return (
    <div>
      <BestCharacters /> 
      <ListLastEvents />
      <Insider />
    </div>
  );
}
