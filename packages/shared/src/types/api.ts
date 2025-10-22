export interface DataWrapper<T> {
    data: T
}

export interface RequestError<M = 'Unknown error'> {
    result: 'ERROR'
    message: M
}
