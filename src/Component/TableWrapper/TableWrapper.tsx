import React from 'react';
import wineData from '../../wineData.json';
import { calculateAlcoholValues, calculateStats, createAlcoholFlavanoidsMap, getUniqueAlcoholValues } from '../utils';
import { TableRow } from '../TableRow/TableRow';
import { TableColumn } from '../TableColumn/TableColumn';
import styles from "./TableWrapper.module.css"

const TableWrapper: React.FC = () => {
    const uniqueAlcoholValues = getUniqueAlcoholValues(wineData);
    const measure: number[] = uniqueAlcoholValues || [];

    const ListOfData: any = {
        "Flavanoids": calculateStats(createAlcoholFlavanoidsMap(wineData)),
        "Gamma": calculateStats(calculateAlcoholValues(wineData))
    };

    return (
        <div className={styles.main_container}>
            {Object.keys(ListOfData).map((key: any, index: any) => {
                return (
                    <div className={styles.container} key={index}>
                        <TableRow rowData={measure} />
                        <TableColumn columnData={ListOfData[key].mean} values={`${key} Mean`} />
                        <TableColumn columnData={ListOfData[key].median} values={`${key} Median`} />
                        <TableColumn columnData={ListOfData[key].mode} values={`${key} Mode`} />
                    </div>
                )
            })}
        </div>
    );
};

export default TableWrapper;
