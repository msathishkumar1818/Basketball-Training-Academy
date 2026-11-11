const fs = require('fs');

function replacePairs(filename, pairs) {
  let content = fs.readFileSync(filename, 'utf8');
  let count = 0;
  pairs.forEach(([from, to]) => {
    if (content.includes(from)) {
      content = content.replace(from, to);
      count++;
    } else {
      console.warn(`[${filename}] NOT FOUND: "${from.substring(0, 45)}..."`);
    }
  });
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`[${filename}] Successfully replaced ${count} text blocks with concise wording.`);
}

// 1. home-2.html
replacePairs('home-2.html', [
  [
    'Dual force plates measure bilateral asymmetry, countermovement rate of force development, and landing shock absorption.',
    'Dual force plates measure bilateral asymmetry and rate of force development.'
  ],
  [
    'High-intensity shuttle intervals with instantaneous blood lactate and pulse recovery tracking to sustain clutch execution.',
    'High-intensity intervals with instantaneous pulse recovery tracking.'
  ],
  [
    'Strobe goggles and visual stimuli light boards measuring decision latency against rotating defensive sets.',
    'Visual stimuli light boards measuring decision speed against rotating defense.'
  ],
  [
    'Dedicated training tracks tailored to the physical and tactical demands of modern basketball positions.',
    'Dedicated tracks tailored to physical demands of modern basketball.'
  ],
  [
    'High-pressure pick-and-roll dissection, tight-space deceleration, and pull-up shot creation against blitz defenses.',
    'Pick-and-roll dissection, deceleration, and pull-up shot creation.'
  ],
  [
    'Catch-and-shoot perimeter gravity, off-ball pin-down reads, and physical downhill rim finishes through defensive contact.',
    'Catch-and-shoot gravity, pin-down reads, and downhill rim finishes.'
  ],
  [
    'Vertical contest discipline without fouling, short-roll playmaker passing, and perimeter pick-and-pop spacing range.',
    'Vertical contest discipline, short-roll vision, and pick-and-pop spacing.'
  ],
  [
    'Building muscle memory through computerized shooting guns, automated return nets, and continuous launch angle tracking.',
    'Building muscle memory through computerized shooting guns and tracking.'
  ],
  [
    'Tracked electronically via Dr. Dish and Noah sensors across 20 workouts.',
    'Tracked electronically via Dr. Dish and Noah sensors.'
  ],
  [
    'Calibrated entry angle maximizing rim cylinder opening area.',
    'Calibrated entry angle maximizing rim cylinder opening area.'
  ],
  [
    'Average hand-off to ball departure time off screen curls.',
    'Average hand-off to ball departure time off curls.'
  ],
  [
    'End-of-workout fatigued foul line accuracy requirement.',
    'End-of-workout fatigued foul line accuracy standard.'
  ],
  [
    'Our graduates compete at the highest levels of collegiate and professional basketball worldwide.',
    'Our graduates compete at top collegiate and pro levels worldwide.'
  ],
  [
    'Spaces in our pre-draft and collegiate combine labs are strictly capped at 12 athletes per session to guarantee complete biometric sensor access and 1-on-1 coach breakdown.',
    'Pre-draft combine labs capped at 12 athletes for maximum 1-on-1 coach breakdown.'
  ]
]);

// 2. programs.html
replacePairs('programs.html', [
  [
    'Choose an age-calibrated training program structured around biometrics, skill volume, and tournament game performance.',
    'Age-calibrated training structured around biometrics and game performance.'
  ],
  [
    'Foundational motor mechanics, dynamic footwork, hand-eye coordination, and fundamental shooting form habituation.',
    'Foundational motor mechanics, footwork, and shooting form habituation.'
  ],
  [
    'Overhaul your kinetic sequence from toe plant to wrist follow-through. Students generate measurable improvements in catch-to-release timing, shot arc entry angles, and off-balance balance recovery.',
    'Overhaul your kinetic sequence from toe plant to wrist follow-through.'
  ],
  [
    'Complete your baseline biometric assessment or log into your player dashboard to reserve upcoming weekly court training slots.',
    'Complete your baseline assessment or reserve upcoming weekly court slots.'
  ]
]);

// 3. coaches.html
replacePairs('coaches.html', [
  [
    'Every coach at Vortex holds USAB Gold certification, FIBA credentials, and extensive collegiate or professional playing experience.',
    'USAB Gold certified coaches with collegiate and pro playing experience.'
  ],
  [
    'Former Big East standout and 8-year EuroLeague point guard. Specializes in pick-and-roll dissection, mid-range footwork, and pre-draft combine readiness.',
    'Former EuroLeague guard specializing in pick-and-roll reads and combine prep.'
  ],
  [
    'Doctorate in Movement Science and certified Noah Arc Senior Consultant. Has calibrated shooting mechanics for over 60 Division 1 and WNBA perimeter scorers.',
    'Movement Science PhD who has calibrated shooting for 60+ D1 and WNBA scorers.'
  ],
  [
    'Former Pac-12 Defensive Player of the Year. Known for his ruthless closeout footwork drills, downhill change of pace, and clutch tempo management.',
    'Former Pac-12 Defensive Player of the Year specializing in closeout footwork.'
  ],
  [
    'We reject mindless scrimmage runs. Every training minute is tied to measurable kinematic improvements and game-pressure transfer.',
    'Every training minute tied to kinematic improvements and pressure transfer.'
  ],
  [
    'We track launch angles, wrist snap kinetics, and lateral braking force on digital sensors rather than relying on subjective opinions.',
    'Tracking launch angles and lateral braking force on digital sensors.'
  ],
  [
    'Every skill acquired must survive intense physical contact, fatigue, and rotating defenders before it is stamped ready for competition.',
    'Skills acquired must survive intense contact and fatigue before competition.'
  ],
  [
    '120FPS floor cameras allow trainers to pause, zoom, and adjust foot placement during court water breaks for instant motor recalibration.',
    '120FPS floor cameras allow trainers to adjust footwork during breaks.'
  ],
  [
    'Mental conditioning clinics preparing athletes to maintain composure, execute defensive calls, and knock down high-pressure free throws.',
    'Mental conditioning to maintain composure and execute defensive calls.'
  ],
  [
    'Our staff holds verified accreditations from world-governing basketball bodies and premier sports science institutes.',
    'Verified accreditations from world-governing basketball bodies.'
  ],
  [
    'Schedule a private 60-minute skill evaluation with our lead trainers or access your player dashboard to select your private mentorship schedule.',
    'Schedule a private 60-minute evaluation with our lead trainers.'
  ]
]);

// 4. about.html
replacePairs('about.html', [
  [
    'Vortex began with a straightforward observation: traditional basketball training relied excessively on archaic drills and subjective opinion rather than kinematic movement analysis.',
    'Traditional training relied on archaic drills; we bring kinematic analysis.'
  ],
  [
    'By pairing former professional floor generals with sports biomechanists and digital tracking sensors, we established a training ground where athletes improve measurably every single workout.',
    'Pairing former pro generals with sports biomechanists and digital sensors.'
  ],
  [
    'Our 24,000 sq ft dedicated athletic compound features everything required to build elite basketball athletes under one roof.',
    'Our 24,000 sq ft compound features everything to build elite athletes.'
  ],
  [
    'Two full-size NBA regulation hardwood courts equipped with Robbins Bio-Cushion shock absorption subflooring to minimize joint fatigue during high-volume reps.',
    'Two hardwood courts equipped with Robbins Bio-Cushion shock absorption.'
  ],
  [
    'High-speed 120Hz cameras, OptoJump vertical mats, and dual-axis force plates generating instant computerized feedback on launch kinetics and landing balance.',
    'High-speed 120Hz cameras and force plates generating instant feedback.'
  ],
  [
    'Cold plunge contrast pools, Normatec compression suites, and certified physical therapy tables to optimize muscle recovery and accelerate inter-session readiness.',
    'Cold plunge contrast pools and Normatec compression suites for rapid recovery.'
  ],
  [
    'Athletic excellence requires uncompromising dedication. Every student and family signs our accountability charter upon matriculation.',
    'Athletic excellence requires dedication. Athletes sign our charter upon entry.'
  ],
  [
    'Recognized by USA Basketball and FIBA as an official player development hub for junior and collegiate elite athletes.',
    'Recognized by USA Basketball and FIBA as an elite player development hub.'
  ],
  [
    'Experience our championship hardwood courts, test out the Noah shooting sensor station, and consult with our master coaching staff in person.',
    'Tour our championship hardwood courts and meet our coaching staff in person.'
  ]
]);

