import { useEffect, useState } from "react";

  const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [remainingTime,setRemainingTime] = useState(TIMER);

  useEffect(()=>{
    const Interval = setInterval(()=>{
      console.log("Interval")
      setRemainingTime(prevRemainingTime => prevRemainingTime - 10 )
    },10)

    return ()=>{
      console.log("clear interval");
      clearInterval(Interval);
    }
  },[])

  // hare i implement the modal will close automatically after 3 second and aslo delete
  useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Delete after 3 second");
      onConfirm();
    }, TIMER);

    return ()=>{
      console.log("clean up timer")
      clearTimeout(timer)
    }
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={ remainingTime} max={TIMER} />
    </div>
  );
}
