export default function ItemList({ items }) {
    return (
    <div className="item-list">
        <h3>Items</h3>
        <ul>
        {items.map((item) => {
            // Simulate an error for items with negative values
            if (item.value < 0) {
            throw new Error(`Invalid item value: ${item.value}`);
            }
            return (
            <li key={item.id}>
                {item.name}: {item.value}
            </li>
            );
        })}
        </ul>
    </div>
    );
}