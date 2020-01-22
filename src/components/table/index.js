import React from "react";

export default class CreateTableFromJSON extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props !== nextProps) {
      return true;
    } else {
      return false;
    }
  }

  CreateTableFromJSON() {
    // EXTRACT VALUE FOR HTML HEADER.
    var col = [];
    for (var i = 0; i < this.props.data.length; i++) {
      for (var key in this.props.data[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1); // TABLE ROW.

    for (i = 0; i < col.length; i++) {
      var th = document.createElement("th"); // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (i = 0; i < this.props.data.length; i++) {
      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = this.props.data[i][col[j]];
      }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    setTimeout(function() {
      var divContainer = document.getElementById("showData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
    }, 1);
  }

  render() {
    return (
      <div className="service-header">
        {this.props.data.length
          ? this.CreateTableFromJSON()
          : "Loading Data ..."}
      </div>
    );
  }
}
