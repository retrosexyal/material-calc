export const calculate = (
  width: string,
  length: string,
  listWidth: number,
  step: number,
  pipeWidth: number,
  fixValue: number,
  listCost: number,
  pipeCost: number,
  fixCost: number
) => {
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);
  const parsedListWidth = listWidth;
  const parsedPipeProfil = pipeWidth / 1000;

  // рассчитывает площадь изделия и необходимое количество листов
  const square = parseFloat((parsedWidth * parsedLength).toFixed(2));
  const countLists = Math.ceil(square / parsedListWidth); //если листы возможно разрезать

  // если листы можно резать только раз
  /* const calcWidthListsV1 = Math.ceil(parsedWidth); 
  const calcLengthListsV1 = Math.ceil(parsedLength / parsedListWidth);

  const calcWidthListsV2 = Math.ceil(parsedLength);
  const calcLengthListsV2 = Math.ceil(parsedWidth / parsedListWidth);

  let countListsV1 = calcWidthListsV1 * calcLengthListsV1;
  countListsV1 = countListsV1 * parsedListWidth >= square ? countListsV1 : Infinity;
  let countListsV2 = calcWidthListsV2 * calcLengthListsV2;
  countListsV2 = countListsV2 * parsedListWidth >= square ? countListsV2 : Infinity;

  const countLists = countListsV1 < countListsV2 ? countListsV1 : countListsV2; */

  // рассчитывает количество секций
  const countCellPerWidth = Math.ceil((parsedWidth - parsedPipeProfil) / (step + parsedPipeProfil));
  const countCellPerLength = Math.ceil((parsedLength - parsedPipeProfil) / (step + parsedPipeProfil));
  const cellSizeLength = parseFloat(
    ((parsedLength - (countCellPerLength + 1) * parsedPipeProfil) / countCellPerLength).toFixed(2)
  );
  const cellSizeWidth = parseFloat(
    ((parsedWidth - (countCellPerWidth + 1) * parsedPipeProfil) / countCellPerWidth).toFixed(2)
  );
  const cellSize = `${cellSizeLength}x${cellSizeWidth}м`;

  // рассчитывает длинну труб
  const pipeForLength = parsedLength * (countCellPerLength + 1);
  const pipeForWidth = cellSizeWidth * countCellPerWidth * (countCellPerLength + 1);
  const sumPipe = parseFloat((pipeForWidth + pipeForLength).toFixed(2));

  // рассчитывает количество саморезов
  const countFix = Math.ceil(square * fixValue);

  // рассчитываем стоимость товаров
  const resCost = (count: number, price: number) => {
    return parseFloat((count * price).toFixed(2));
  };
  const resListCost = resCost(countLists, listCost);
  const resPipeCost = resCost(sumPipe, pipeCost);
  const resFixCost = resCost(countFix, fixCost);

  return {
    square: square,
    list: countLists,
    pipe: sumPipe,
    fix: countFix,
    cell: cellSize,
    listCost: resListCost,
    pipeCost: resPipeCost,
    fixCost: resFixCost,
  };
};
