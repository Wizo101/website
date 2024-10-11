import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, FormControl } from "react-bootstrap";

export interface Item {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
}

const PriceEstimator: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Item 1", quantity: 2, unitPrice: 10 },
    { id: 2, name: "Item 2", quantity: 3, unitPrice: 10 },
  ]);

  const addItem = () => {
    const newItem: Item = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      quantity: 1,
      unitPrice: 10,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id: number, value: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: +value } : item
      )
    );
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.unitPrice,
    0
  );

  const columns = useMemo(
    () => [
      {
        name: "Name",
        selector: (row: Item) => row.name,
        sortable: true,
      },
      {
        name: "Quantity",
        cell: (row: Item) => (
          <FormControl
            type="number"
            value={row.quantity}
            onChange={(e) => updateItemQuantity(row.id, e.target.value)}
            style={{ width: "100px" }}
          />
        ),
        sortable: true,
      },
      {
        name: "Unit Price (Php)", //unit price
        selector: (row: Item) => `Php 10.00`, 
        sortable: false,
      },
      {
        name: "Subtotal (Php)",
        selector: (row: Item) => `Php ${(row.quantity * row.unitPrice).toFixed(2)}`,
        sortable: true,
      },
      {
        name: "Actions",
        cell: (row: Item) => (
          <Button variant="danger" onClick={() => removeItem(row.id)}>
            Delete
          </Button>
        ),
      },
    ],
    [items]
  );

  return (
    <div className="container">
      <DataTable
        title="Items"
        columns={columns}
        data={items}
        pagination
        selectableRows={false}
        persistTableHead
      />

      <div className="mt-3">
        <h4>Total Price: Php {totalPrice.toFixed(2)}</h4>
        <Button onClick={addItem} variant="primary" className="me-2">
          Add Item
        </Button>
      </div>
    </div>
  );
};

export default PriceEstimator;
