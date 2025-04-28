import { FaRegClock } from "react-icons/fa";

const Counter = () => {
return (
    <div className="d-flex justify-content-center align-items-center p-2 bg-dark text-white counter">
        <div><FaRegClock /></div>
        <div>0</div>
        <div>0</div>
        <div>0</div>
        <div>0</div>
        <div>0</div>
        <div className="border border-dark rounded p-1 bg-dark">0</div>
    </div>
 )
}

export default Counter;