
export type TableRowProps = {
    rowData: number[];
};

export type TableColumnProps = {
    columnData: { [key: number]: number };
    values: string;
};
export interface MyObject {
    [key: number]: number;
}
export type DataMap = Record<number, number[]>;

export interface StatsResult {
    mean: MyObject;
    median: MyObject;
    mode: MyObject;
}
