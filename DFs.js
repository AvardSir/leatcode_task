
const tree = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        { value: 'D', children: [] },
        { value: 'E', children: [] }
      ]
    },
    {
      value: 'C',
      children: [
        { value: 'F', children: [] },
        { value: 'G', children: [] }
      ]
    }
  ]
};
function traverse(node) {
  if (!node) return;
  console.log(node.value);
  node.children.forEach(traverse);
}
traverse(tree);
