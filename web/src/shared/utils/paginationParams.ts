export const getPaginationParams = (total?: number) => total
  ? ({
    total,
    showTotal: (total: number) => (`Общее количество: ${total}`),
  })
  : {};
