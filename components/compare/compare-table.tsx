import React from 'react';
import styles from './compare.module.scss';

interface CompareTableProps {
  rows: {
    feature: string;
    columns?: (boolean | string | React.ReactNode)[];
    fullWidth?: boolean;
  }[];
}

const CompareTable: React.FC<CompareTableProps> = ({ rows }) => {
  const renderNotSupported = (text: string) => (
    <span className={styles.notSupported}>
      <svg width="20" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.4999 25.5713C20.4429 25.5713 26.0713 19.9429 26.0713 12.9999C26.0713 6.05689 20.4429 0.428467 13.4999 0.428467C6.55689 0.428467 0.928467 6.05689 0.928467 12.9999C0.928467 19.9429 6.55689 25.5713 13.4999 25.5713ZM21.4999 12.9999C21.4999 13.6315 21.0029 14.1428 20.4198 14.1428H6.57994C6.01602 14.1428 5.4999 13.6315 5.4999 12.9999C5.4999 12.3783 6.01602 11.857 6.57994 11.857H20.4198C21.0029 11.857 21.4999 12.3783 21.4999 12.9999Z" fill="white"/>
      </svg>
      <span className={styles.notSupportedText}>{text}</span>
    </span>
  );

  const renderCell = (content: boolean | string | React.ReactNode) => {
    if (typeof content === 'boolean') {
      return content ? (
        <img className={styles.checkIcon} src="/Type=Done.svg" alt="Supported" />
      ) : (
        renderNotSupported("Not supported")
      );
    }
    if (typeof content === 'string') {
      return renderNotSupported(content);
    }
    return content;
  };

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>Compare features</th>
          <th>ComfyUI</th>
          <th className={styles.tableGradientColumn}>
            Comflowy
            <span className={styles.cloudBadge}>Cloud</span>
          </th>
          <th>
            Comflowy
            <span className={styles.localBadge}>Local</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          row.fullWidth ? (
            <tr key={rowIndex} className={styles.fullWidthRow}>
              <td colSpan={4}>{row.feature}</td>
            </tr>
          ) : (
            <tr key={rowIndex} className={styles.tableRow}>
              <td className={styles.tableCell}>{row.feature}</td>
              {row.columns?.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className={`${styles.tableCell} ${columnIndex === 1 ? styles.tableGradientColumn : ''}`}
                >
                  {renderCell(column)}
                </td>
              ))}
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
};

export default CompareTable;
