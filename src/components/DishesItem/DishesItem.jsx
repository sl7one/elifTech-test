export const DishesItem = ({
  id,
  listRef,
  img,
  name,
  price,
  ordered,
  handleIncrement,
  handleRemove,
}) => {
  return (
    <li key={id} ref={el => listRef.current.push(el)}>
      <img src={img} alt="pic" />
      <div>
        <p>{name}</p>
        <p>
          Price: <span>{price}</span>
        </p>
        <input
          type="number"
          max={50}
          min={0}
          value={ordered}
          onChange={({ currentTarget }) =>
            handleIncrement(currentTarget.value, id)
          }
        />
        <p>
          Total: <span>{ordered * price}</span>
        </p>
      </div>
      <button type="button" onClick={() => handleRemove(id)}>
        X
      </button>
    </li>
  );
};
