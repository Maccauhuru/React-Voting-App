window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Grow Fast or Die Slow',
      description: "The pressure to get things right stymies Richard and forces him to grow the company in a way he had not planned. Dinesh and Gilfoyle question their ability to make good decisions.Gavin returns to Hooli and worries about becoming antiquated.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
    {
      id: 2,
      title: 'Reorientation',
      description: 'Richard manages a number of small conflicts in his efforts to unite his new employees.Dinesh celebrates a new purchase that Gilfoyle looks to spoil.Jian - Yang goes to court.Gavin meets pushback over his signature and what it says about him.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/image-rose.png',
    },
    {
      id: 3,
      title: 'Chief Operating Officer',
        description: 'Encouraged by Jared to strike up a friendship with Dana, a like-minded CEO, Richard instead finds himself charmed by Danas COO, who challenges his loyalty to Gilfoyle; Dineshs impulse purchase forces him to search for a new roommate.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/image-steel.png',
    }
    
  ];

  return { products: products };
}());
