import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { decrement, increment } from "./testReducer";

const Sanbox = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data);
    return (
        <>
            <h1>Testing 1 2 3</h1>
            <h3>The data is: {data} </h3>
            <Button
                onClick={() => dispatch(increment(20))}
                content="Increment"
                color="green"
            />
            <Button
                onClick={() => dispatch(decrement(10))}
                content="Decrement"
                color="red"
            />
            <Button
                content="Open Modal"
                onClick={() =>
                    dispatch(
                        openModal({
                            modalType: "TestModal",
                            modalProps: { data },
                        })
                    )
                }
            />
        </>
    );
};

export default Sanbox;
