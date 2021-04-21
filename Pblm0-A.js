var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   cat.weight=8;
   cat.height=5;
   cat.name='Fluffyy';
   console.log(cat.catFriends[0].activities);
   console.log(cat.catFriends[1].activities);
   console.log(cat.catFriends[0].name);
   console.log(cat.catFriends[1].name);
   console.log(cat.catFriends[0].weight+cat.catFriends[1].weight);
   console.log(cat.activities);
   console.log(cat.catFriends[0].activities);
   console.log(cat.catFriends[1].activities);
   cat.catFriends[0].activities.push('running','playing');
   cat.catFriends[1].activities.push('walking','dancing');
   console.log(cat.catFriends[0].activities);
   console.log(cat.catFriends[1].activities);
   cat.catFriends[0].furcolor="black";
   console.log(cat.catFriends[0].furcolor);