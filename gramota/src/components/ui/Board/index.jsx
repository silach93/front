import React from "react";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(100).fill(false),
      activeCell: Math.floor(Math.random() * 100)
    };
  }

  point = 0;

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
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  handleClick = (index) => {
    const { cells, activeCell } = this.state;
    if (index === activeCell) {
       point++
      this.timer = setInterval(() => {
        this.componentWillUnmount();
        const newCells = [...cells];
        newCells[activeCell] = false;
        let newActiveCell;
        do {
          newActiveCell = Math.floor(Math.random() * 100);
        } while (newActiveCell === activeCell);
        newCells[newActiveCell] = true;
        this.setState({ cells: newCells, activeCell: newActiveCell });
      },3000)
    }
  }

  render() {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      const cells = [];
      for (let j = 0; j < 10; j++) {
        const index = i * 10 + j;
        const isActive = this.state.cells[index];
        cells.push(
          <div key={`${i}-${j}`}
            className={`cell ${isActive ? 'active' : ''}`}
            onClick={() => this.handleClick(index)}
          >

          </div>);
      }
      rows.push(<div key={i} className="row">{cells}</div>);
    }
    return <div className="board">{rows}</div>;
  }
}

export default Board;