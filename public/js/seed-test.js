window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const episodes = [
    {
      id: 1,
      title: 'Grow Fast or Die Slow',
      description: "The pressure to get things right stymies Richard and forces him to grow the company in a way he had not planned. Dinesh and Gilfoyle question their ability to make good decisions.Gavin returns to Hooli and worries about becoming antiquated.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/becky.jpg',
      episodeImageUrl: 'images/products/episode1.jpg',
    },
    {
      id: 2,
      title: 'Reorientation',
      description: 'Richard manages a number of small conflicts in his efforts to unite his new employees.Dinesh celebrates a new purchase that Gilfoyle looks to spoil.Jian - Yang goes to court.Gavin meets pushback over his signature and what it says about him.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/cecil.jpg',
      episodeImageUrl: 'images/products/episode2.jpg',
    }, {
      id: 3,
      title: 'Chief Operating Officer',
      description: 'Encouraged by Jared to strike up a friendship with Dana, a like-minded CEO, Richard instead finds himself charmed by Danas COO, who challenges his loyalty to Gilfoyle; Dineshs impulse purchase forces him to search for a new roommate.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/nick.png',
      episodeImageUrl: 'images/products/episode3.jpg',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      episodeImageUrl: 'images/products/image-yellow.png',
    },
  ];

  return { episodes: episodes };
}());
