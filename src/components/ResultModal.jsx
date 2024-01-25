import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref)
{

    const dialog = useRef();

    const userLost = remainingTime<=0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);
    const score = Math.round((1-remainingTime/(targetTime*1000))*100);

    useImperativeHandle(ref,() => {
        return {
            open(){
            dialog.current.showModal();
            }
        }
    })
    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost! </h2>}
            <p>The target Time was <strong>{targetTime} second{targetTime>1 ? 's' : ''}.</strong></p>
            {userLost ? <h2>You Havent stopped Before {targetTime} sec{targetTime>1 ? 's' : ''}</h2>: <p>You stopped Timer before <strong> {formattedRemainingTime} seconds left.</strong></p>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;