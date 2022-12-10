const ItemCount = ({setCount}) => {
    const addItem = () => {
        setCount((currentValue) => currentValue + 1);
    };

    const removeItem = () => {
        setCount ((currentValue) => {
            if (currentValue > 1) {
                return currentValue - 1;
            } else {
                return currentValue;
            }
        });
    };

    return (
        <div>
            <button onClick={addItem}> + </button>
            <button onClick={removeItem}> - </button>
        </div>
    )
}

export default ItemCount