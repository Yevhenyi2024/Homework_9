const data = [
    { category: 'fruits', name: 'apple' },
    { category: 'fruits', name: 'banana' },
    { category: 'vegetables', name: 'carrot' },
    { category: 'fruits', name: 'orange' },
    { category: 'vegetables', name: 'broccoli' }
  ];
  function group(array, keyGetter) {
    return array.reduce((acc, item) => {
      const key = keyGetter(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }
  const groupedData = group(data, item => item.category);
  console.log(groupedData);
  
  