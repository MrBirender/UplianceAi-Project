import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from '../features/counter/counterSlice';
import { RootState } from '../app/store' // Import RootState type

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  // Define color transitions
  const { backgroundColor } = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${Math.min(count / 20, 1)})`, // Smooth opacity change
    config: { tension: 100, friction: 20 },
  });

  return (
    <animated.div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{ backgroundColor }} // Animated background color
    >
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default Counter;
