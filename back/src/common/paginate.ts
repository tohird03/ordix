import { PaginationQueryDto } from "./dto/pagination.dto.js";

export function pageArgs(q: PaginationQueryDto) {
  return { skip: (q.pageNumber - 1) * q.pageSize, take: q.pageSize };
}

export function paginated<T>(
  items: T[],
  totalCount: number,
  q: PaginationQueryDto,
) {
  return {
    data: {
      totalCount,
      pageNumber: q.pageNumber,
      pageSize: q.pageSize,
      data: items,
    },
  };
}
