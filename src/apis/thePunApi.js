// return some good puns synchronously
export const getGoodPuns_Sync = () => ([
  'Why are fish really smart? Because they swim in schools!',
  'What do you call a fish with no eyes? A fsh!',
  'Where did the king hide his armies? Up his sleevies!'
]);

// timeout for subscriptions below
let subscription;
let index = -1;
const puns = [
  'Geology rocks, but geography is where it\'s at.',
  '6:30 is my favorite time. Hands down.',
  'Why is Santa very frustrated? He only comes once a year.',
  'What do you say to your sister when she\'s crying? "Are you having a crisis?"',
  'Two drunk guys were about to get into a fight. One draws a line in the dirt and says, “If you cross this line, I’ll hit you in the face.” ...That was the punchline',
  'As I handed my Dad his 50th birthday card, he looked at me with tears in his eyes and said, “You know, one would have been enough.”',
  'My buddy went bald years ago, but still carries around an old comb with him.',
  'Gonorrhea would have been a great name for diarrhea medicine',
]

// subscribe to receiving good puns over time
export const subscribeToThePunitentiary = (onNewPun) => {
  subscription = setInterval(() => {
    index++;
    if (index >= puns.length) {
      onNewPun('Sami Majadla // sami AT rubikon DOT io');
    } else {
      onNewPun(puns[index]);
    }
  }, 4000)
};

export const unsubscribeFromThePunitentiary = () => {
  clearInterval(subscription);
};