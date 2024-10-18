export default function Item({ item, index, handleDelete }) {
  return (
    <div>
      <h3>
        {index} - {item}
        <button onClick={() => handleDelete(index)}>Delete</button>
      </h3>
    </div>
  );
}
