import React from 'react';
import styled from 'styled-components'

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <NewTable>
      <TableHead>
        <TableRow>
          <TableHeading>
            <TableButton
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </TableButton>
          </TableHeading>
          <TableHeading>
            <TableButton
              type="button"
              onClick={() => requestSort('price')}
              className={getClassNamesFor('price')}
            >
              Price
            </TableButton>
          </TableHeading>
          <TableHeading>
            <TableButton
              type="button"
              onClick={() => requestSort('stock')}
              className={getClassNamesFor('stock')}
            >
              In Stock
            </TableButton>
          </TableHeading>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableDetails>{item.name}</TableDetails>
            <TableDetails>${item.price}</TableDetails>
            <TableDetails>{item.stock}</TableDetails>
          </TableRow>
        ))}
      </TableBody>
    </NewTable>
  );
};

export default function Table() {
  return (
    <div className="Table">
      <ProductTable
        products={[
          { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
          { id: 2, name: 'Milk', price: 1.9, stock: 32 },
          { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
          { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
          { id: 5, name: 'Butter', price: 0.9, stock: 99 },
          { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
          { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
        ]}
      />
    </div>
  );
}

const NewTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`
const TableHead = styled.thead`
  background: var(--aqua);
  button {
    color: #fff;
  }
  tr {
    &:hover {
      background: var(--teal);
    }
  }
`
const TableRow = styled.tr`
  transition: 0.3s;
    &:hover {
        background: #eee;
    }
`
const TableHeading = styled.th`
  text-align: left;
  border-bottom: 2px solid transparent;
`
const TableBody = styled.tbody``
const TableDetails = styled.td`  
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
`
const TableButton = styled.button`
  border: 0;
  border-radius: none;
  font-family: inherit;
  font-weight: 700;
  font-size: inherit;
  padding: 0.5em;
  margin-bottom: 1px;
  background: transparent;
  display: flex;
  cursor: pointer;
  &:after {
    content: '⭥';
    display: inline-block;
    margin-left: 1em;
  }

  &.ascending::after {
    content: '⌄';

  }
  &.descending::after {
    content: '˄';
    display: inline-block;
    margin-left: 1em;
  }
`