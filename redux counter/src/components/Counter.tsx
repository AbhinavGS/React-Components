import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="value">{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decreaseHandler}>Decrease by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
