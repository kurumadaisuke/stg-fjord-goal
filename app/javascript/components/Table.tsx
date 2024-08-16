import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const rows = [{ id: 1, name: "JIN", kana: "ジン", birth: "1992年12月4日" }];

const columns = [
  { field: "name", headerName: "英字", width: 150 },
  { field: "kana", headerName: "仮名", width: 150 },
  { field: "birth", headerName: "生年月日", width: 150 },
];

const Table = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Table;
