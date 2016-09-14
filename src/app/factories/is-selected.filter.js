export function isSelectedFilter() {
  return function(input, selection) {
    return input.filter(item => {
      return selection.includes(item.id);
    });
  };
}