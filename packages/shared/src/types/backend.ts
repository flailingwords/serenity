export abstract class BackendService {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function -- TS AMARITE?!
    constructor() {}

    abstract start(): void
    abstract stop(): void
}
