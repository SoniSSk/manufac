import React from 'react'
import { TableRowProps } from '../types';
import styles from "./TableRow.module.css"

export const TableRow: React.FC<TableRowProps> = ({ rowData }) => {
    return (
        <div className={styles.main_container}>
            <div className={styles.header}>Measure</div>
            {rowData.map((cellData, index) => (
                <div className={styles.header_element} key={index}>Class {cellData}</div>
            ))}
        </div>
    );
};
