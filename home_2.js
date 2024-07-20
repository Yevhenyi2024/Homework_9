const notifications = [
  { source: 'email', text: 'You have a new email', date: '2024-07-18' },
  { source: 'sms', text: 'Your package has been shipped', date: '2024-07-17' },
  { source: 'email', text: 'Weekly newsletter', date: '2024-07-16' },
  { source: 'app', text: 'New update available', date: '2024-07-15' },
  { source: 'sms', text: 'Your package is out for delivery', date: '2024-07-14' }
];
function group(arr, key) {
    return arr.reduce((acc, obj) => {const k = obj[key];
      if (!acc[k]) {
        acc[k] = [];}
      acc[k].push(obj);
      return acc;}, {});
  }
  const groupedNotifications = group(notifications, 'source');
  console.log(groupedNotifications);
  