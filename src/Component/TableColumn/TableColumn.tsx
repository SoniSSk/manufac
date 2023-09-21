import React from 'react'
import { TableColumnProps } from '../types';
import styles from "./TableColumn.module.css"

export const TableColumn: React.FC<TableColumnProps> = ({ columnData, values }) => {
    return (
        <div className={styles.main_container} >
            <div className={styles.header}>{values}</div>
            {
                Object.keys(columnData).map((key: any) => (
                    <div className={styles.header_element} key={key}>{Number(columnData[key]).toFixed(3)}</div>
                ))
            }
        </div >
    );
};
