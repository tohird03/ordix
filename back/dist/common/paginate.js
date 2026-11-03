export function pageArgs(q) {
    return { skip: (q.pageNumber - 1) * q.pageSize, take: q.pageSize };
}
export function paginated(items, totalCount, q) {
    return {
        data: {
            totalCount,
            pageNumber: q.pageNumber,
            pageSize: q.pageSize,
            data: items,
        },
    };
}
//# sourceMappingURL=paginate.js.map