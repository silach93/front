import React from "react";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(100).fill(false),
      activeCell: Math.floor(Math.random() * 100)
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { cells, activeCell } = this.state;
      const newCells = [...cells];
      newCells[activeCell] = false;
      let newActiveCell;
      do {
        newActiveCell = Math.floor(Math.random() * 100);
      } while (newActiveCell === activeCell);
      newCells[newActiveCell] = true;
      this.setState({ cells: newCells, activeCell: newActiveCell });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClick = (index) => {
    const { cells } = this.state;
    const newCells = [...cells];
    for (let i = index; i < index + 10; i++) {
      for (let j = index % 10; j < index % 10 + 10; j++) {
        const cellIndex = i * 10 + j;
        if (cellIndex < 100) {
          newCells[cellIndex] = !newCells[cellIndex];
        }
      }
    }
    this.setState({ cells: newCells });
  }

  render() {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      const cells = [];
      for (let j = 0; j < 10; j++) {
        const index = i * 10 + j;
        const isActive = this.state.cells[index];
        cells.push(<div key={`${i}-${j}`} className={`cell ${isActive ? 'active' : ''}`} onClick={() => this.handleClick(index)}></div>);
      }
      rows.push(<div key={i} className="row">{cells}</div>);
    }
    return <div className="board">{rows}</div>;
  }
}

export default Board;