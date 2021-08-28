
setInterval(() => {
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
hrotation = 30*htime + mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;

hour.style.transform =`rotate(${hrotation}deg)`;
minute.style.transform =`rotate(${mrotation}deg)`;
second.style.transform =`rotate(${srotation}deg)`;
}, 1000);

// CALCULATION:

// FOR HOUR HAND:

// For 12hr rotate --> 360deg
// For 1hr rotate --> 360/12 = 30deg
// for h hr --> (30 h * m/2)

// IN case of Minute rotation:
//  60min -->30deg
//  1min --> (1/2)deg
//  for m min --> (m/2 deg)

//  FOR MINUTE HAND:

//  60 min --> 360deg
//  1 min --> 6deg
//  m min --> (6 m deg)

//  FOR SECOND HAND:
//  60sec --> 360deg
//  1sec --> 6deg
//  s sec --> (6 s deg)