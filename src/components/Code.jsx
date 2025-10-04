
import {Ban} from "lucide-react"
import { Link } from "react-router-dom";
function Code() {
  return (
    <div>
      <div className="flex items-center h-full justify-center flex-col gap-4 pt-60 ">
          <div>
            <div className="ml-2"><Ban/></div>
             
          <p>This Paqge Is Unavilable</p>
          </div>
          <div>
           
          <Link to="/">
         <button className="border bg-green-200 rounded-xl">Back To Home</button>
         </Link>
        </div>
        </div>
    </div>
  );
}
export default Code;
