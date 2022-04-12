import React, { useEffect } from 'react';
import { Table } from 'antd';

export const ResizeTable = (props: any) => {
  let table = null;
  let column = null;
  let tableWidth = 0;

  useEffect(() => {
    table = document.getElementsByTagName('table')[0];
    if (props.id) {
      table = document.getElementById(props.id).getElementsByTagName('table')[0];
    }
    table.setAttribute('data-table-resizable', 'true');
    table.id = props.id ? props.id : 'resize-table';
    resizeable();
    // clearColumnsWidth();
  }, []);

  const resizeable = () => {
    const header = table.rows[0];
    const cells = header.cells;
    const len = cells.length;

    for (let i = 0; i < len; i++) {
      cells[i].addEventListener('mousedown', handleMousedown);
      cells[i].addEventListener('mousemove', handleMousemove, true);
    }
    table.addEventListener('mouseup', handleMouseup);
  };

  const handleMousedown = event => {
    const target = event.currentTarget;
    column = target;
    if (event.offsetX > target.offsetWidth - 10) {
      target.mouseDown = true;
      target.oldX = event.x;
      target.oldWidth = target.offsetWidth;
    }
    tableWidth = table.rows[0].clientWidth;
  };

  const handleMousemove = event => {
    const target = event.currentTarget;
    if (event.offsetX > target.offsetWidth - 10) {
      target.style.cursor = 'col-resize';
    } else {
      target.style.cursor = 'default';
    }
    if (!column) {
      column = target;
    }
    if (column.mouseDown) {
      column.style.cursor = 'default';
      const diff = event.x - column.oldX;
      if (column.oldWidth + (event.x - column.oldX) > 0) {
        column.width = column.oldWidth + diff;
      }

      column.style.width = column.width;
      table.style.width = tableWidth + diff + 'px';
      column.style.cursor = 'col-resize';
    }
  };

  const handleMouseup = event => {
    if (column) {
      column.mouseDown = false;
      column.style.cursor = 'default';
    }
  };

  const clearColumnsWidth = () => {
    let colgroup = null;
    const childNodes = table.childNodes;
    childNodes.forEach(node => {
      if (node.tagName === 'COLGROUP') {
        colgroup = node;
      }
    });
    if (colgroup) {
      colgroup.childNodes.forEach(node => {
        if (node.style.width === '') {
          node.style.width = 'auto';
        }
      });
    }
  };

  return (
    <>
      <Table {...props} />
    </>
  );
};
