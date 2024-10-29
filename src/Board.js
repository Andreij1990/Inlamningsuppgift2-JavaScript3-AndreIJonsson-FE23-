import React, { Component } from 'react';
import createBoard from './utils';
import Cell from './Cell';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: createBoard(25, 7),
            gameOver: false,
            gameWon: false,
        };
    }

    handleCellClick = (index) => {
        const newBoard = [...this.state.board];
        const clickedCell = newBoard[index];

        if (clickedCell.hasMine) {
            this.setState({ gameOver: true });

            newBoard.forEach(cell => {
                cell.visible = true;
            });
        } else {
            clickedCell.visible = true;
        }

        this.setState({ board: newBoard });
    };

    render() {
        const { board, gameOver } = this.state;

        return (
            <div className="board">
                {board.map(cell => (
                    <Cell 
                        key={cell.index} 
                        cell={cell} 
                        onClick={this.handleCellClick} 
                    />
                ))}
                {gameOver && <div className="message">Game Over!</div>}
            </div>
        );
    }
}

export default Board;
