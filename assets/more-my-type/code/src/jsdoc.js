// @ts-check

/**
 * @template T
 * @param  {T[]} list - List to add item to.
 * @param  {T}   item - The item to append.
 * @return {T[]}        This is the result.
 */
function addItem(list, item) {
  return list.concat(item)
}

addItem(['a', 'b'], 'c')
