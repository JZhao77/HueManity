import React from "react";

interface TableProps {
  headers: string[];          // Column names
  rows: (string | number)[][]; // Array of rows, each row is array of cells
  caption?: string;           // Optional caption
  description?: string;       // Optional description below caption
}

const GeneralTable: React.FC<TableProps> = ({
  headers,
  rows,
  caption = "",
  description = "",
}) => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left text-body">
        {caption && (
          <caption className="p-5 text-lg font-medium text-left text-heading">
            {caption}
            {description && (
              <p className="mt-1.5 text-sm font-normal text-body">{description}</p>
            )}
          </caption>
        )}
        <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-6 py-3 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="bg-neutral-primary-soft border-b border-default last:border-b-0"
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-6 py-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeneralTable;
