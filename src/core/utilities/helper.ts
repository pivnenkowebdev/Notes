export function checkTrust<T>(value: T): asserts value is NonNullable<T> {
    if (value === undefined || value === null) {
        throw new Error(`${value} is not defined`);
    }
}

// // использование
// const newsMetaDate = newsClone.querySelector<HTMLElement>('.news__meta-date');
// notNull(newsMetaDate);
