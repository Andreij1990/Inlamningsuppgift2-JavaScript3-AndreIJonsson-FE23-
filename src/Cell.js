import React from 'react';

function Cell({ cell, onClick }) {
    const handleClick = () => {
        if (!cell.visible) {
            onClick(cell.index);
        }
    };

    return (
        <div
            onClick={handleClick}
            style={{
                width: '50px',
                height: '50px',
                border: '1px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: cell.visible ? '#ccc' : '#eee',
                cursor: cell.visible ? 'default' : 'pointer',
            }}
        >
            {cell.visible && (cell.hasMine ? '💣' : cell.numberOfNeighbouringMines || '')}
        </div>
    );
}

export default Cell;
