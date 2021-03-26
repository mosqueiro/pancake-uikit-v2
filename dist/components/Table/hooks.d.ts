import { ColumnType, TableState, TableAction, DataType, UseTableReturnType, UseTableOptionsType } from "./types";
export declare const createReducer: <T extends DataType>() => (state: TableState<T>, action: TableAction<T>) => TableState<T>;
export declare const useTable: <T extends DataType>(columns: ColumnType<T>[], data: T[], options?: UseTableOptionsType<T> | undefined) => UseTableReturnType<T>;
