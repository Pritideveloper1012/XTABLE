import React, { useState } from "react";

export default function XTable() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.date === b.date) return b.views - a.views;
      return new Date(b.date) - new Date(a.date);
    });
    setData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.views === b.views) return new Date(b.date) - new Date(a.date);
      return b.views - a.views;
    });
    setData(sorted);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Date and Views Table</h1>

      <div style={{ marginBottom: "8px", background:"white" }}>
        <button onClick={sortByDate} style={{ marginLeft: "10px",  background:"gray", color:"white"}}>Sort by Date</button>
        <button onClick={sortByViews} style={{ marginLeft: "10px",  background:"gray" ,color:"white"}}>
          Sort by Views
        </button>
      </div>

      <table border="1" cellPadding="8" cellSpacing="0" style={{ margin: "20px auto", width:"350px" ,background:"#2f2f2f2f" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
