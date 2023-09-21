import { DataMap, StatsResult } from "./types";


// Get unique alcohol values from the given data.

export function getUniqueAlcoholValues(data: any): number[] {
    const uniqueAlcoholValues = new Set<number>();

    data.forEach((item: any) => {
        if (item.hasOwnProperty("Alcohol")) {
            uniqueAlcoholValues.add(item["Alcohol"]);
        }
    });

    return Array.from(uniqueAlcoholValues);
}


// Create a map of alcohol values to arrays of flavanoids values from the given data.

export function createAlcoholFlavanoidsMap(data: any): Record<number, number[]> {
    const result: Record<number, number[]> = {};

    data.forEach((item: any) => {
        const alcohol = item.Alcohol;
        const flavanoids = item.Flavanoids;

        if (!result[alcohol]) {
            result[alcohol] = [];
        }

        result[alcohol].push(Number(flavanoids));
    });

    return result;
}


// Calculate the mean of an array of numbers.

export function calculateMean(arr: number[]): number {
    if (arr.length === 0) {
        return NaN;
    }

    const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    const mean = sum / arr.length;

    return parseFloat(mean.toFixed(3));
}


//   Calculate the median of an array of numbers.

export function calculateMedian(arr: number[]): number {
    if (arr.length === 0) {
        return NaN;
    }

    const sortedArr = [...arr].sort((a, b) => a - b);

    const middle = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        const left = sortedArr[middle - 1];
        const right = sortedArr[middle];
        const median = (left + right) / 2;
        return parseFloat(median.toFixed(3));
    } else {
        const median = sortedArr[middle];
        return parseFloat(median.toFixed(3));
    }
}


//  Calculate the mode of an array of numbers.

export function calculateOneMode(arr: any[]): any {
    const countMap: Record<string | number, number> = {};
    let maxCount = 0;
    let mode: number | null = null;

    arr.forEach((num) => {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mode = Number(num.toFixed(3));
        }
    });
    return Number(mode).toFixed(3);
}


//  Calculate statistics (mean, median, and mode) for a data map.

export function calculateStats(data: DataMap): StatsResult {
    const result: StatsResult = {
        mean: {},
        median: {},
        mode: {},
    };

    Object.keys(data).forEach((key: any) => {
        const values = data[Number(key)];

        result.mean[key] = calculateMean(values);
        result.median[key] = calculateMedian(values);
        result.mode[key] = Number(calculateOneMode(values));
    });

    return result;
}


//  Calculate unique alcohol values from the given data.

export function calculateUniqueAlcoholValues(data: any[]): number[] {
    const uniqueAlcohols: number[] = [];

    data.forEach((item) => {
        if (!uniqueAlcohols.includes(item.Alcohol)) {
            uniqueAlcohols.push(item.Alcohol);
        }
    });

    return uniqueAlcohols;
}


//  Calculate a value based on properties of an object.

export function calculateValue(data: any): number {
    return (data.Ash * data.Hue) / data.Magnesium;
}


//Calculate alcohol values and associated calculated values from the given data.

export function calculateAlcoholValues(data: any): Record<number, number[]> {
    const uniqueAlcohols = calculateUniqueAlcoholValues(data);
    const result: Record<number, number[]> = {};

    uniqueAlcohols.forEach((alcohol) => {
        result[alcohol] = data
            .filter((item: any) => item.Alcohol === alcohol)
            .map((item: any) => calculateValue(item));
    });

    return result;
}
