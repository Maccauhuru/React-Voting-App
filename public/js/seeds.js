window.Seeds = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const episodes = [{
      id: 1,
      title: 'Episode[1] - Grow Fast or Die Slow',
      description: "The pressure to get things right stymies Richard and forces him to grow the company in a way he had not planned. Dinesh and Gilfoyle question their ability to make good decisions.Gavin returns to Hooli and worries about becoming antiquated.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/becky.jpg',
      episodeImageUrl: 'images/products/episode1.jpg',
    },
    {
      id: 2,
      title: 'Episode[2] - Reorientation',
      description: 'Richard manages a number of small conflicts in his efforts to unite his new employees.Dinesh celebrates a new purchase that Gilfoyle looks to spoil.Jian - Yang goes to court.Gavin meets pushback over his signature and what it says about him.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/cecil.jpg',
      episodeImageUrl: 'images/products/episode2.jpg',
    },
    {
      id: 3,
      title: 'Episode[3] - Chief Operating Officer',
      description: 'Encouraged by Jared to strike up a friendship with Dana, a like-minded CEO, Richard instead finds himself charmed by Danas COO, who challenges his loyalty to Gilfoyle; Dineshs impulse purchase forces him to search for a new roommate.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/nick.png',
      episodeImageUrl: 'images/products/episode3.jpg',
    },
    {
      id: 4,
      title: 'Episode[4] - Tech Evangelist',
      description: "Attempting to woo a gaming company to PiperNet, Richard inadvertently angers a prized ally; Dinesh deals with a betrayal; Gavin leaves his underlings with a cryptic message; Jared gets inside information from Big Head.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/becky.jpg',
      episodeImageUrl: 'images/products/episode4.jpg',
    },
    {
      id: 5,
      title: 'Episode[5] - Facial Recognition',
      description: "Overshadowed by Jared in an on-camera interview, Richard's confidence wavers further when Laurie and Monica force him to work with Eklow, a new artificial-intelligence company; Gavin questions his future beyond Hooli.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/cecil.jpg',
      episodeImageUrl: 'images/products/episode5.jpg',
    },
    {
      id: 6,
      title: 'Episode[6] - Artificial Emotional Intelligence',
      description: 'Richard decides to help when Laurie gets in a jam, but his lack of emotional discipline threatens to backfire on Pied Piper; Gavin tries to make a deal with a stubborn partner; Dinesh relishes a rare win; Jared bonds with a surprising figure.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/nick.png',
      episodeImageUrl: 'images/products/episode6.jpg',
    },
    {
      id: 7,
      title: 'Episode[7] - Initial Coin Offering',
      description: "As the Pied Piper team prepares to close on their Series B funding, Richard receives some unsettling news; Gilfoyle suggests a risky proposition; Monica is blunt with Richard; Dinesh competes with a co-worker; Gavin tries to charm small-town America.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/cecil.jpg',
      episodeImageUrl: 'images/products/episode7.jpg',
    },
    {
      id: 8,
      title: 'Episode[8] - Fifty-One Percent',
      description: 'PiperNet launches, but an early success makes Monica suspicious; Richard makes a surprising move; the team races against the clock as its future is threatened.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/becky.jpg',
      episodeImageUrl: 'images/products/episode8.jpg',
    }

  ];

  return {
    episodes: episodes
  };
}());