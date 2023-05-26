export interface UseCase<T, B> {
    execute(args: T): B;
}