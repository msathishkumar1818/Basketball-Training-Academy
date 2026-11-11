const fs = require('fs');

function replacePairs(filename, pairs) {
  let content = fs.readFileSync(filename, 'utf8');
  let count = 0;
  pairs.forEach(([from, to]) => {
    if (content.includes(from)) {
      content = content.replace(from, to);
      count++;
    } else {
      console.warn(`[${filename}] NOT FOUND: "${from.substring(0, 40)}..."`);
    }
  });
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`[${filename}] Replaced ${count} text blocks with concise text.`);
}

// 1. index.html
replacePairs('index.html', [
  [
    'Engineered for athletes aspiring for collegiate and professional leagues. Master elite footwork, biomechanic shot arc, and court decision-making under certified coaches.',
    'Elite footwork, biomechanic shot arc, and decision-making for collegiate and pro-bound athletes.'
  ],
  [
    'We deconstruct every physical component of high-pressure basketball execution. Utilizing high-speed optical tracking to maximize release speed and kinetic transfer.',
    'High-speed optical tracking deconstructs and refines your shot release and kinetic force.'
  ],
  [
    'Laser-guided wrist extension, elbow alignment, and foot alignment off the catch and dribble pull-ups.',
    'Laser-guided wrist and foot alignment off the catch and pull-up.'
  ],
  [
    'Force-plate jump mechanics, deceleration brake control, and low-center explosive crossover drives.',
    'Force-plate jump mechanics, deceleration control, and explosive drives.'
  ],
  [
    'Screen-and-roll navigation, blitz bypass, drop coverage floaters, and weak-side skip pass vision.',
    'Screen navigation, blitz reads, drop floaters, and weak-side skip passes.'
  ],
  [
    'From baseline biometric assessment to college exposure showcases, every player follows an individualized performance blueprint.',
    'Structured 4-stage progression from baseline diagnostics to national college showcases.'
  ],
  [
    'Comprehensive evaluation covering wingspan mobility, vertical launch profile, release angle, and defensive reaction baseline.',
    'Baseline evaluation covering mobility, vertical launch profile, and release angle.'
  ],
  [
    '500+ game-speed shot reps per session, contact finishing around the rim, and two-ball ball handling under physical duress.',
    '500+ game-speed reps per session with contact finishing around the rim.'
  ],
  [
    'Small-sided gameplay scenarios (3v3 & 4v4) targeting clutch shot creation, defensive rotations, and transition tempo management.',
    'Small-sided gameplay (3v3 & 4v4) targeting clutch shot creation and pace.'
  ],
  [
    'Pro combine testing metrics recorded for NCAA scouts, verified combine data sheets, and invitation-only showcase tournaments.',
    'Pro combine testing metrics recorded for verified NCAA scout dossier sheets.'
  ],
  [
    'Engineered for athletic breakthroughs. 18,000 square feet of FIBA-grade maple flooring, integrated digital sensor suites, and high-performance recovery zones.',
    '18,000 sq ft of FIBA hardwood, digital sensor suites, and recovery zones.'
  ],
  [
    'Instant computerized feedback on entry arc, left-right deviation, and shot depth on every basket.',
    'Instant feedback on entry arc, left-right deviation, and shot depth.'
  ],
  [
    'Resistance cord arrays building elite vertical takeoff, fast-twitch reactive power, and lateral sprint speed.',
    'Resistance cord arrays building vertical launch and reactive lateral speed.'
  ],
  [
    'High-speed floor-to-ceiling cameras for real-time coach playback review on court tablet terminals.',
    'Multi-angle 120fps cameras for real-time coach review on court terminals.'
  ],
  [
    'Authentic performance transformations recorded through our player dashboard analytics system.',
    'Performance transformations verified via our player dashboard system.'
  ],
  [
    '"The biomechanical shot recalibration at Vortex transformed my mid-range and step-back three. Within six months, my pull-up release time dropped to 0.4 seconds flat."',
    '"Shot recalibration dropped my pull-up release time to 0.4 seconds flat."'
  ],
  [
    '"Having access to the Noah sensor data and the VertiMax resistance system gave me the edge I needed to dominate transition basketball against collegiate talent."',
    '"Noah sensor data gave me the edge to dominate transition against D1 talent."'
  ],
  [
    'Reserve your 90-minute biometric diagnostic session or access your player dashboard to view schedule slots, skill tracking profiles, and league standings.',
    'Reserve your 90-minute biometric diagnostic session or book private court slots.'
  ],
  [
    'Premier basketball performance institute cultivating youth athletes, collegiate prospects, and professional players through biomechanics, skill acquisition, and elite court mentorship.',
    'Premier basketball institute cultivating elite players through biomechanics and mentorship.'
  ]
]);

// 2. home-2.html
replacePairs('home-2.html', [
  [
    'Elite athletic conditioning, high-frequency shooting arc telemetry, and national combine scouting dossiers engineered for serious basketball prospects.',
    'Collegiate combine diagnostics, high-frequency shooting telemetry, and verified scouting dossiers.'
  ],
  [
    'Raw talent gets noticed; verified mechanical precision gets recruited. Our sensor laboratory captures 120 kinematic data points per drill repetition.',
    'Capturing 120 kinematic data points per rep to build verified scout dossiers.'
  ],
  [
    'Dual-plate ground reaction testing measuring eccentric braking force and triple-extension launch speed.',
    'Dual-plate testing measuring eccentric braking force and launch speed.'
  ],
  [
    'Computerized optical telemetry tracking ball entry angle (45° apex), depth consistency, and rotation RPM.',
    'Optical telemetry tracking ball entry angle, depth, and rotation RPM.'
  ],
  [
    'Verified 3/4 court sprint, lane agility time, and vertical jump uploaded to official scout portals.',
    'Verified sprint, lane agility, and vertical leap uploaded to scout portals.'
  ],
  [
    'Tight pick-and-roll pocket passing, step-back separation, and pressure decision reads.',
    'Pick-and-roll pocket passing, step-back separation, and pressure reads.'
  ],
  [
    'Corner catch-and-shoot release, closeout attacks, and multi-position lockdown defense.',
    'Catch-and-shoot release, closeout attacks, and multi-position lockdown defense.'
  ],
  [
    'Vertical rim protection, short-roll vision, and high-efficiency post-up footwork.',
    'Vertical rim protection, short-roll vision, and efficient post footwork.'
  ],
  [
    'We eliminate guesswork from shooting development. Digital optical arrays track ball rotation, arc apex, and entry angle to build an automatic release.',
    'Optical arrays track ball rotation, apex angle, and entry depth for an automatic release.'
  ],
  [
    'Verified combine benchmarks produced by athletes developed in our precision biomechanics training labs.',
    'Verified combine benchmarks from athletes developed in our training labs.'
  ],
  [
    'Reserve an evaluation spot with our coaching directors. Receive a certified athletic diagnostic card and an invitation to upcoming scout combines.',
    'Schedule an evaluation to receive your certified athletic combine card.'
  ],
  [
    'Premier basketball performance institute cultivating youth athletes, collegiate prospects, and professional players through biomechanics, skill acquisition, and elite court mentorship.',
    'Premier basketball institute cultivating elite players through biomechanics and mentorship.'
  ]
]);

// 3. programs.html
replacePairs('programs.html', [
  [
    'Rigorous, tiered player development architectures tailored for every developmental phase—from youth fundamentals to collegiate draft preparation.',
    'Tiered developmental architectures from youth fundamentals to collegiate combine preparation.'
  ],
  [
    'Structured progression ladders designed to meet the exact physical and mental demands of high-level competitive basketball.',
    'Structured progression ladders built for competitive basketball excellence.'
  ],
  [
    'Fundamental ball handling, proper shooting form, and spatial court awareness.',
    'Fundamental ball handling, proper shooting form, and court awareness.'
  ],
  [
    'Game-speed scoring, pick-and-roll execution, and defensive lateral slide agility.',
    'Game-speed scoring, pick-and-roll execution, and lateral slide agility.'
  ],
  [
    'Pro-grade shooting arc recalibration, force-plate speed, and verified scout film.',
    'Pro-grade shooting arc recalibration, force-plate speed, and scout film.'
  ],
  [
    'Intensive targeted workshops focusing on single high-leverage skill domains with master coaches.',
    'Targeted high-leverage skill workshops with master coaching staff.'
  ],
  [
    'Mastering 45° apex arc, lightning quick release, and fatigued shooting endurance.',
    'Mastering 45° apex arc, lightning quick release, and shooting endurance.'
  ],
  [
    'Lateral foot speed, closeout deceleration, and weak-side rotation instincts.',
    'Lateral foot speed, closeout deceleration, and weak-side rotations.'
  ],
  [
    'Enroll today in our tiered player development curricula or speak with an admissions coach about private diagnostic assessments.',
    'Enroll in our player development tiers or speak with an admissions coach.'
  ],
  [
    'Premier basketball performance institute cultivating youth athletes, collegiate prospects, and professional players through biomechanics, skill acquisition, and elite court mentorship.',
    'Premier basketball institute cultivating elite players through biomechanics and mentorship.'
  ]
]);

// 4. coaches.html
replacePairs('coaches.html', [
  [
    'Former collegiate standouts, FIBA coaches, and biomechanics researchers dedicated to player development through systematic instruction.',
    'Collegiate standouts and biomechanics specialists dedicated to systematic player development.'
  ],
  [
    'Every Vortex mentor holds elite credentials, combining competitive playing experience with advanced motor learning pedagogy.',
    'Elite credentials combining competitive playing experience with motor learning pedagogy.'
  ],
  [
    'Former D1 point guard with 14 years developing collegiate and pro guards.',
    'Former D1 guard with 14 years developing collegiate and pro guards.'
  ],
  [
    'PhD in Sports Biomechanics specializing in kinetic shot mechanics and recovery.',
    'PhD in Biomechanics specializing in kinetic shot mechanics and recovery.'
  ],
  [
    'Former pro forward and CSCS trainer specializing in explosive first-step speed.',
    'Former pro forward and CSCS trainer specializing in explosive speed.'
  ],
  [
    'We don\'t rely on generic drills. Our training model bridges biomechanical science with situational basketball intelligence.',
    'Bridging biomechanical science with situational basketball intelligence.'
  ],
  [
    'Eliminating energy leaks to generate repeatable power from foot plant to release.',
    'Eliminating energy leaks to generate repeatable power from plant to release.'
  ],
  [
    'Training athletes to recognize defensive schemes and make decisions in split seconds.',
    'Training athletes to recognize defensive schemes and decide in split seconds.'
  ],
  [
    'Individualized volume tracking to build stamina and prevent overuse injuries.',
    'Individualized volume tracking to build stamina and prevent injuries.'
  ],
  [
    'Schedule a 1-on-1 private training assessment with Coach Thorne, Dr. Vance, or Coach Sterling at Maple Arena.',
    'Schedule a 1-on-1 private training assessment with our master coaches.'
  ],
  [
    'Premier basketball performance institute cultivating youth athletes, collegiate prospects, and professional players through biomechanics, skill acquisition, and elite court mentorship.',
    'Premier basketball institute cultivating elite players through biomechanics and mentorship.'
  ]
]);

// 5. about.html
replacePairs('about.html', [
  [
    'Pioneering the intersection of biomechanical science, sensor telemetry, and authentic court mentorship since 2018.',
    'Pioneering biomechanical science, sensor telemetry, and elite court mentorship.'
  ],
  [
    'Vortex Basketball Academy was established to solve a critical flaw in modern basketball training: repetitive drills with zero scientific feedback.',
    'Established to replace repetitive drills with real-time scientific feedback.'
  ],
  [
    'Every drill is rooted in kinetic chain sequencing and motor learning principles.',
    'Every drill is rooted in kinetic chain sequencing and motor learning.'
  ],
  [
    'Noah Sensors and force plates replace subjective guesswork with verified numbers.',
    'Noah Sensors and force plates replace guesswork with verified numbers.'
  ],
  [
    'Developing character, leadership, and resilience alongside court dominance.',
    'Developing character, leadership, and resilience alongside court skills.'
  ],
  [
    'Two full-size hardwood courts featuring Robbins Bio-Cushion shock absorption.',
    'Two hardwood courts featuring Robbins Bio-Cushion shock absorption.'
  ],
  [
    'Four shooting bays equipped with real-time Noah trajectory arc tracking.',
    'Four shooting bays equipped with real-time Noah trajectory tracking.'
  ],
  [
    'Cold plunge, pneumatic compression, and physical therapy for peak recovery.',
    'Cold plunge, pneumatic compression, and targeted physical recovery.'
  ],
  [
    'Experience our facility in person. Walk through our Maple Arena courts, inspect our sensor labs, and meet our coaching directors.',
    'Walk through our Maple Arena courts, inspect sensor labs, and meet our coaches.'
  ],
  [
    'Premier basketball performance institute cultivating youth athletes, collegiate prospects, and professional players through biomechanics, skill acquisition, and elite court mentorship.',
    'Premier basketball institute cultivating elite players through biomechanics and mentorship.'
  ]
]);

// 6. contact.html
replacePairs('contact.html', [
  [
    'Direct communication channels for player evaluation bookings, masterclass enrollment, collegiate combine registration, and court reservations.',
    'Direct channels for player evaluation bookings, enrollment, and court reservations.'
  ],
  [
    'Every prospective athlete undergoes a baseline evaluation before placement into our Varsity, College Combine, or Elite Development tiers.',
    'Prospective athletes undergo baseline diagnostics before placement into training tiers.'
  ],
  [
    '45° entry angle analysis, shot depth distribution, and catch-to-release acceleration recorded via digital sensors.',
    '45° entry angle, shot depth, and catch-to-release acceleration tracking.'
  ],
  [
    'Lateral deceleration braking force, vertical leap ground reaction time, and kinetic chain symmetry testing.',
    'Lateral deceleration braking force, vertical leap, and kinetic symmetry.'
  ],
  [
    'Direct review session with Coach Marcus Thorne or Dr. Sarah Vance with customized training recommendations.',
    'Direct review session with master coaches and customized training plans.'
  ],
  [
    'Centrally positioned in the North Texas Athletics Corridor, featuring dedicated athlete parking, private locker access, and high-speed transit connections.',
    'Centrally located in North Texas with dedicated parking and transit access.'
  ],
  [
    'Step onto our FIBA-grade hardwood, inspect our digital sensor suites, and meet our coaching staff in person before reserving your training block.',
    'Inspect our hardwood courts and digital sensor suites before reserving your training block.'
  ],
  [
    'Premier basketball performance institute cultivating youth athletes, collegiate prospects, and professional players through biomechanics, skill acquisition, and elite court mentorship.',
    'Premier basketball institute cultivating elite players through biomechanics and mentorship.'
  ]
]);

