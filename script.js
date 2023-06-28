const body = document.querySelector('body');
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');

const navItems = [nav1, nav2, nav3];

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});

const speakerCardsItems = [
  {
    speaker_image: 'images/img/zabi0.png',
    speaker_name: 'Ing . Nelofar Zabi',
    speaker_education:
      'B.Sc degree in computer Science, at Kabul University AFG',
    speaker_bio: `Software Engineer at apple company ,  with more than 7 years experience
                  developing and maintaining Software applications, and a full time student at
                  Microverse.`,
  },
  {
    speaker_image: 'images/img/zuhra0.png',
    speaker_name: 'Ing . Zuhra Hashimi',
    speaker_education:
      'B.Sc degree in computer Science, at Kabul University AFG',
    speaker_bio: `Chairperson-Board of Directors at STEAD Society, National Outreach Coordinator at The
                  International Astronomical Union and NPoC at Space Generation Advisory Council
                  African Region`,
  },
  {
    speaker_image: 'images/img/king0.png',
    speaker_name: 'Ing . Khalid Zabi',
    speaker_education:
      'B.Sc degree in computer Science, at Banglore University AFG',
    speaker_bio: `Founder and Apple Company  | Yagnkar Company  | Women & Girls, Empowerment
                  | Woman right activist | Social Activator | Innovator`,
  },
  {
    speaker_image: 'images/img/aisha.png',
    speaker_name: 'Ing . Omar Walizada',
    speaker_education:
      'B.Sc Honoursstudent in computer Science, at Kateb University USA',
    speaker_bio: `An experienced Software designer and developer. Managed native and hybrid
                  mobile applications in fields such as educational software, medical and entertainment.
                  Head of VEX Robotic at Africa Girls Empathy`,
  },
  {
    speaker_image: 'images/img/zubair1.png',
    speaker_name: 'Ing . Sahil Tammem ',
    speaker_education: `Colorado Technical University Master of Science in Management,
                        Organizational Leadership and Change 2021 - 2023`,
    speaker_bio: `Program Manager at USA Company . Washington,
                  District of Columbia, United States `,
  },
  {
    speaker_image: 'images/img/tahmin.png',
    speaker_name: 'Ing . Tahmin Alokozay',
    speaker_education:
      'B.Sc Honoursstudent in computer Science, at Kateb University USA',
    speaker_bio: `Program Manager at USA Company . Washington,
                  District of Columbia, United States `,
  },
];

speakerCardsItems.forEach((Element, index) => {
  const speakerCard = document.querySelector('.featured_speakers_main_div');
  const cardSection = document.createElement('div');
  cardSection.classList = 'cardSection';
  const speakerCardHTML = `

  <div class='speaker_div'>
    <div class='speaker_image_container'>
      <img class='speaker_image' src='${speakerCardsItems[index].speaker_image}' alt=''>
    </div>
    <div class='speaker_text_container'>
      <h3 class='speaker_name'> ${speakerCardsItems[index].speaker_name}</h3>
      <p class="speaker_education_background">
      ${speakerCardsItems[index].speaker_education}
      </p>
      <div class='divider_line'></div>
      <p class='speaker_education_bio'>
      ${speakerCardsItems[index].speaker_bio}
      </p>
    </div>
  </div>
`;

  cardSection.innerHTML += speakerCardHTML;
  speakerCard.appendChild(cardSection);
});
