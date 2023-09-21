import React from 'react';
import wineData from '../../wineData.json';
import { calculateAlcoholValues, calculateStats, createAlcoholFlavanoidsMap, getUniqueAlcoholValues } from '../utils';
import { TableRow } from '../TableRow/TableRow';
import { TableColumn } from '../TableColumn/TableColumn';
import styles from "./TableWrapper.module.css"

const TableWrapper: React.FC = () => {
    const uniqueAlcoholValues = getUniqueAlcoholValues(wineData);
    const measure: number[] = uniqueAlcoholValues || [];

    const ListOfData = [
        calculateStats(createAlcoholFlavanoidsMap(wineData)),
        calculateStats(calculateAlcoholValues(wineData))
    ];

    return (
        <div className={styles.main_container}>
            {ListOfData.map((data, index) => (
                <div className={styles.container} key={index}>
                    <TableRow rowData={measure} />
                    <TableColumn columnData={data.mean} values={"Mean"} />
                    <TableColumn columnData={data.median} values={"Median"} />
                    <TableColumn columnData={data.mode} values={"Mode"} />
                </div>
            ))}
        </div>
    );
};

export default TableWrapper;
