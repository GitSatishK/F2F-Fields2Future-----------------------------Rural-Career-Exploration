<?php
header('Content-Type: application/json');

$request = json_decode(file_get_contents('php://input'), true);
$message = strtolower($request['message']);

// Simple responses based on keywords
$replies = [
    "hello" => "Hello! How can I assist you with your career today?",
    "career" => "There are many career paths you can explore. Do you have a specific field in mind?",
    "engineering" => "How to Get Started in Engineering
Explore Different Types of Engineering:

Mechanical Engineering: Focuses on machines and mechanical systems.
Civil Engineering: Involves building infrastructure like bridges and roads.
Electrical Engineering: Deals with electrical systems and electronics.
Software Engineering: Involves creating and developing software and apps.
Chemical Engineering: Focuses on chemical processes and manufacturing.
Learn the Basics:

Study Math and Science: Engineering relies heavily on math and science, so focus on these subjects in school.
Understand Basic Principles: Learn about simple machines, forces, and energy.
Engage in Hands-On Activities:

Build Models: Use kits or materials to build simple machines or structures.
Experiment with Projects: Try small engineering projects like creating a simple bridge with popsicle sticks.
Use Online Resources:

Watch Videos: Use educational videos to understand engineering concepts.
Read Books: Look for books about engineering that are suitable for your age.
Join Clubs and Competitions:

School Clubs: Join a science or robotics club at school.
Competitions: Participate in engineering competitions or fairs to showcase your projects.
Ask for Help and Guidance:

Seek Mentors: Talk to teachers or professionals who work in engineering.
Learn Together: Work on projects with friends or family members.
Free YouTube Channels for Engineering Learning
CrashCourse Engineering

Provides engaging videos covering various engineering topics and concepts.
The Engineering Mindset

Offers tutorials and explanations on different engineering principles and systems.
Michael's Engineering Tutorials

Features beginner-friendly explanations of engineering concepts and projects.
Science Channel

Includes videos on how engineering affects the world and showcases various engineering feats.
Engineering for Kids

Focuses on fun and educational engineering projects and concepts suitable for kids.
Code.org

Provides programming and software engineering tutorials that are beginner-friendly.
These resources will help you explore the field of engineering, understand its concepts, and work on fun projects. Enjoy your journey into the world of engineering and keep experimenting and learning!",
    

"medicine" => "1. Understanding the Medical Profession
Doctors' Roles: Doctors diagnose and treat illnesses, prescribe medication, and work in various specialties like surgery, pediatrics, and general practice.
Work Environment: Hospitals, clinics, private practices, and community health centers.
2. Educational Pathway
a. Complete Your Schooling
Subjects to Focus On:
Biology: Core subject in understanding the human body.
Chemistry: Essential for learning about medications and treatments.
Physics: Helps in understanding medical equipment and technology.
Mathematics: Important for precise calculations in medicine.
b. Take Entrance Examinations
Common Exams:

NEET (National Eligibility cum Entrance Test) in India for MBBS (Bachelor of Medicine, Bachelor of Surgery).
Equivalent exams in other countries (like MCAT in the US).
Preparation Tips:

Enroll in coaching centers or online classes.
Focus on previous years' question papers.
Dedicate time to mock tests.
c. Pursue an Undergraduate Medical Degree
MBBS (5.5 years including internship): The foundational degree required to become a doctor.
Rural and State Quotas: Many governments offer reserved seats for rural students. Check your state or country’s policies.
d. Post-Graduation
Specialization: After MBBS, specialize in areas like surgery, pediatrics, etc.
Postgraduate Exams: Like NEET-PG or equivalent exams.
e. Licensing and Residency
Internship/Residency: Practical training in hospitals.
Licensing Exams: To practice medicine legally (e.g., USMLE in the US).
f. Continuous Learning
CME (Continuing Medical Education): Stay updated with medical advancements.
3. Financial Planning
Scholarships and Loans: Look for scholarships specific to rural students or those offered by NGOs and government bodies.
Budget Planning: Estimate the cost of education, including coaching, college fees, accommodation, etc.
4. Career Opportunities
Government Hospitals: Many states offer incentives for doctors willing to work in rural areas.
Private Practice: After gaining experience, you can start your own clinic.
Further Studies and Research: Opportunities to pursue a Ph.D. or join medical research institutions.
5. Challenges and Solutions
Challenge: Limited access to quality education and resources in rural areas.
Solution: Utilize online resources, participate in government schemes like Digital India (if in India), and seek mentorship.
6. Personal Development
Communication Skills: Essential for patient interactions.
Empathy and Patience: Key qualities in a successful doctor.
Networking: Join medical forums, attend conferences.
7. Graphical Representation
a. Educational Pathway Graph
plaintext
Copy code
|---------------------|
|        MBBS         |
|---------------------|
         |
         V
|---------------------|
|   Specialization    |
|---------------------|
         |
         V
|---------------------|
| Residency/Practice  |
|---------------------|
b. Demand vs. Supply of Doctors in Rural Areas
plaintext
Copy code
|       Demand (High)       |
|          ------           |
|          |    |           |
|          |    |           |
|          |    |           |
|          |    |           |
|----------|----|-----------| Supply (Low)
c. Financial Aid Distribution for Rural Students
plaintext
Copy code
|----------------------------|
| Scholarships   | 60%        |
|----------------------------|
| Loans          | 30%        |
|----------------------------|
| Self-Funding   | 10%        |
|----------------------------|
8. Conclusion
Becoming a doctor is a long but rewarding journey. With dedication, focus on academics, and strategic use of available resources, even students from rural areas can achieve their dream of becoming a doctor.
This guidance should help you understand the steps needed and visualize the process effectively. Let me know if you need further information or assistance!

Here are some YouTube links to free educational content on medicine:

Khan Academy Medicine

Khan Academy offers comprehensive lessons on various medical topics, including anatomy, physiology, and pathology.
Dr. Najeeb Lectures

Dr. Najeeb’s channel provides in-depth medical lectures covering a wide range of topics from basic sciences to complex clinical concepts.
Armando Hasudungan

Armando creates hand-drawn tutorials on medical topics, useful for visual learners. His videos simplify complex topics.
Osmosis

Osmosis provides animated videos on medical and health science topics. The channel is great for clear and concise explanations.
Lecturio Medical Education

Lecturio offers videos on various medical topics, including pharmacology, anatomy, and clinical cases. They also provide quizzes and additional resources.
Zero To Finals

This channel is aimed at medical students with videos on a range of medical topics, particularly useful for exam preparation.
MedCram

MedCram simplifies medical education by breaking down complex topics into digestible videos, including pathology and physiology.
AK Lectures

AK Lectures covers various science topics, including biochemistry and molecular biology, foundational for medical studies.
Interactive Biology

This channel offers videos on biology, anatomy, and physiology, making essential medical concepts easier to understand.
Dirty Medicine

Dirty Medicine provides review and educational content specifically geared towards medical exams like the USMLE.
These channels should provide valuable resources for your medical studies and career guidance.






",
    "arts" => "Certainly! Here’s a simple guide for a sixth grader on how to get into art, along with some free YouTube channels to help you learn and improve your art skills:

How to Get into Art
Learn the Basics of Drawing:

Start with Simple Shapes: Practice drawing basic shapes like circles, squares, and triangles to get a feel for controlling your pencil.
Understand Proportions: Learn how to draw objects and people in the right proportions.
Explore Different Art Techniques:

Experiment with Materials: Try different art supplies like colored pencils, markers, watercolors, and acrylic paints.
Practice Shading and Texturing: Learn how to add shadows and textures to make your drawings look more realistic.
Study Art from Other Artists:

Look at Different Art Styles: Explore various art styles and artists to understand different techniques and inspirations.
Practice Regularly:

Draw Every Day: Try to draw or paint something every day to improve your skills.
Learn Art History:

Understand Different Art Movements: Learn about different art movements and periods to get a broader understanding of art.
Get Feedback:

Share Your Work: Show your art to friends, family, or teachers and listen to their feedback.
Free YouTube Channels for Art Coaching
Art for Kids Hub

Provides fun and easy drawing tutorials for kids of all ages.
Drawing & Painting - The Virtual Instructor

Offers step-by-step tutorials on drawing and painting techniques.
Kara Bullock Art

Features various art tutorials and techniques for beginners.
Reddit Drawing

Provides tutorials and tips for improving your drawing skills.
Art Supplies for Kids

Offers reviews and how-to guides on using different art supplies.
These resources should help you get started with your art journey and improve your skills. Enjoy creating your masterpieces!






",
    "music" =>  "Sure, here’s a simple guide to help you become a good music director, along with some free YouTube channels for music coaching:

How to Become a Good Music Director
Learn the Basics of Music:

Understand Musical Notation: Learn how to read and write music. This includes understanding notes, rhythms, and musical symbols.
Learn an Instrument: Start with an instrument like the piano or guitar. It helps you understand music better and compose your own pieces.
Listen to Different Music:

Explore Various Genres: Listen to classical, jazz, pop, rock, and other genres. It helps you understand different styles and how music can be arranged.
Practice Regularly:

Play and Compose Music: Practice playing your instrument and try composing your own music. This helps improve your skills and creativity.
Study Music Theory:

Learn Chords and Scales: Understand how chords and scales work. This is important for creating harmony and melody in your music.
Work with Other Musicians:

Join a Band or Ensemble: Playing with others teaches you how to direct and coordinate with musicians.
Take Feedback:

Listen to Criticism: Accept feedback from others to improve your music directing skills.
Watch and Learn from Experts:

Learn from Experienced Music Directors: Watch videos of experienced directors to understand their techniques and styles.
Free YouTube Channels for Music Coaching
YaleCourses

Offers music theory and history courses for beginners.
Simply Sonic

Provides lessons on music production and arranging.
Musical Chairs

Focuses on understanding music and how to create your own compositions.
MusicTheoryForGuitar

Offers tutorials on music theory specifically for guitarists, which can also help with general music understanding.
Adam Neely

Provides insightful videos about music theory, performance, and directing.
These resources should help you get started on your journey to becoming a music director. Enjoy your musical adventure!",
"dance"  => "Sure! Here's a simple guide for a sixth grader who wants to become a good dancer, along with some free YouTube channels to help you learn and improve your dance skills:

How to Get into Dance
Learn Basic Dance Moves:

Start with Simple Steps: Learn basic dance steps and positions. Practice these steps until you feel comfortable with them.
Understand Rhythm: Practice dancing to different types of music to get a feel for rhythm and timing.
Explore Different Dance Styles:

Try Various Styles: Experiment with different dance styles like ballet, jazz, hip-hop, or contemporary to find what you enjoy the most.
Practice Regularly:

Dance Daily: Set aside time each day to practice your dance moves and improve your skills.
Improve Flexibility and Strength:

Stretch Regularly: Work on your flexibility by doing stretches and warm-up exercises before dancing.
Build Strength: Engage in exercises that build strength and endurance to help with your dancing.
Watch Dance Performances:

Observe Professional Dancers: Watch dance performances and videos to learn new moves and get inspired.
Join a Dance Class or Group:

Take Classes: If possible, join a dance class or group to learn from a teacher and dance with others.
Record Yourself:

Watch Your Progress: Record yourself dancing to see how you improve over time and identify areas to work on.
Free YouTube Channels for Dance Coaching
Dance Tutorials LIVE

Offers a variety of dance tutorials for different styles and skill levels.
1MILLION Dance Studio

Provides dance routines and choreography from a popular dance studio in South Korea.
Matt Steffanina

Features hip-hop dance tutorials and choreography for beginners and advanced dancers.
The Dance Centre

Includes tutorials and tips on various dance styles and techniques.
Dance with Miss Auti

Offers beginner-friendly dance tutorials and choreography for kids.
These resources will help you learn and improve your dance skills in a fun and engaging way. Keep dancing and enjoy the process of learning new moves!






",
"singer"  =>  "bsolutely! Here's a simple guide for a sixth grader who wants to become a good singer, along with some free YouTube channels that offer music coaching and vocal training.

How to Get into Singing
Learn Basic Vocal Techniques:

Breathing Exercises: Practice deep breathing to strengthen your lungs and improve your breath control.
Warm-Up Your Voice: Do vocal warm-up exercises before you start singing to avoid straining your voice.
Develop Good Singing Habits:

Posture: Stand up straight with good posture to help your breathing and voice projection.
Hydration: Drink plenty of water to keep your vocal cords hydrated.
Practice Regularly:

Daily Practice: Set aside time each day to practice singing scales, songs, and techniques.
Record Yourself: Record your singing to track your progress and identify areas for improvement.
Learn to Read Music:

Understand Notes and Rhythm: Learning to read sheet music can help you understand how to follow musical notes and rhythms.
Experiment with Different Genres:

Try Various Styles: Explore different music genres to find out which one suits your voice best.
Watch and Listen to Other Singers:

Learn from Professionals: Watch performances by professional singers to see different singing techniques and styles.
Take Care of Your Voice:

Avoid Strain: Don’t sing too loudly or for too long without rest. If your voice feels strained, take a break.
Free YouTube Channels for Singing Coaching
The Vocal Coach

Provides lessons on vocal techniques, warm-ups, and singing tips for all levels.
Singing Success

Offers vocal exercises, tips, and tutorials to help improve your singing voice.
Madeleine’s Music Academy

Features singing lessons, vocal techniques, and practice tips for beginners.
Sing2Piano

Provides karaoke tracks and vocal exercises with piano accompaniment to practice singing.
Simply Singing

Includes singing tutorials, exercises, and tips for developing your vocal skills.
These resources will help you get started with singing and improve your vocal skills in an enjoyable way. Keep practicing and have fun with your singing journey!",

"farmer" => "Here’s a guide for a sixth grader who wants to become a farmer, along with some free YouTube channels and resources to learn about farming.

How to Get Into Farming
Understand Basic Farming Concepts:

Learn About Plants and Animals: Get to know how different crops and animals grow and what they need to stay healthy.
Soil and Water Management: Understand how to prepare soil and manage water for growing crops.
Start Small:

Grow a Garden: Begin by growing a small garden at home. Plant simple crops like vegetables or herbs to learn the basics.
Raise Small Animals: If possible, try raising small animals like chickens or rabbits to learn about animal care.
Learn Agricultural Techniques:

Planting and Harvesting: Learn the right times for planting and harvesting different crops.
Pest and Disease Control: Understand how to manage pests and diseases that can affect crops and animals.
Study Farming Tools and Equipment:

Know Your Tools: Learn about the different tools and equipment used in farming and their purposes.
Connect with Local Farmers:

Visit Farms: Visit local farms or agricultural centers to learn from experienced farmers.
Ask Questions: Don’t be afraid to ask questions and learn from their experiences.
Read Books and Watch Videos:

Educational Resources: Use books and online resources to expand your knowledge about farming practices.
Free YouTube Channels for Learning About Farming
Epic Gardening

Offers practical gardening tips and techniques for growing various plants and vegetables.
Justin Rhodes

Provides insights into homesteading, raising animals, and sustainable farming practices.
The Prairie Homestead

Focuses on traditional farming techniques, homesteading tips, and self-sufficiency.
GrowVeg

Features videos on vegetable gardening, soil management, and seasonal planting tips.
Farm Life

Provides a look into daily life on the farm, including tips for farming and animal care.
These resources will help you start learning about farming and give you valuable information to begin your journey as a future farmer. Enjoy exploring the world of farming and growing things!",

"actor" =>   "How to Get Into Acting
Learn the Basics of Acting:

Understand Acting Fundamentals: Learn about different acting techniques and styles.
Practice Emotions and Expressions: Work on expressing different emotions and reactions.
Take Acting Classes:

Join Drama Clubs: Participate in school or community drama clubs to gain experience.
Enroll in Acting Workshops: Look for local workshops or classes suitable for beginners.
Practice at Home:

Perform Monologues: Practice performing monologues from plays or movies to improve your skills.
Record Yourself: Record your performances to see how you can improve.
Watch and Learn:

Observe Actors: Watch movies, TV shows, and theater performances to see how professional actors perform.
Analyze Performances: Pay attention to how actors express emotions and deliver lines.
Get Experience:

Participate in School Plays: Join school theater productions to gain experience.
Audition for Local Productions: Look for local auditions for community theater or student films.
Build a Portfolio:

Create a Resume: Include your acting experience and any classes or workshops you've attended.
Take Headshots: Get professional photos taken to use for auditions.
Free YouTube Channels for Acting Lessons
The Acting Studio

Offers acting tips, techniques, and exercises for beginners.
Actor's Studio

Provides insights into different acting methods and professional advice.
StageMilk Acting

Focuses on acting exercises, monologues, and performance tips.
The Acting Coach

Features lessons on acting techniques, auditions, and voice work.
Acting for Kids

Provides acting advice and exercises specifically for young actors.
These resources will help you get started in acting and develop your skills. Enjoy exploring the world of acting and have fun with your performances!






",

"sports"  => "How to Get Involved in Sports
Choose a Sport:

Explore Different Sports: Try various sports to find out which one you enjoy the most.
Focus on Your Interests: Pick a sport that you are passionate about and excited to practice.
Get Training:

Join a Sports Team: Participate in school or community sports teams to gain experience.
Take Lessons: Look for local sports camps or training programs that can help you improve.
Practice Regularly:

Work on Skills: Practice the basic skills and techniques needed for your chosen sport.
Stay Active: Exercise regularly to improve your strength, speed, and endurance.
Watch and Learn:

Watch Games: Watch professional games and matches to learn techniques and strategies.
Study Players: Observe how professional athletes perform and learn from their skills.
Set Goals:

Set Personal Goals: Establish short-term and long-term goals to keep you motivated.
Track Your Progress: Monitor your improvement and adjust your training as needed.
Stay Positive and Have Fun:

Enjoy the Game: Remember to have fun and enjoy playing your chosen sport.
Stay Motivated: Keep a positive attitude and continue working towards your goals.
Free YouTube Channels for Sports Training
Athlean-X

Offers training tips, workouts, and sports performance advice for various sports.
The Soccer Coach

Provides soccer drills, techniques, and training tips suitable for beginners and advanced players.
Basketball Training

Features basketball drills, skills training, and game strategies.
Coach Daniel

Offers advice on various sports, including drills and techniques for improving performance.
Sports Science

Focuses on the science behind sports performance and training.
Fit for Sport

Provides general fitness tips and fun workouts for kids and teens.
These resources will help you learn more about sports, improve your skills, and stay motivated. Enjoy your journey into the world of sports and have fun playing and practicing!






",


];

$response = "I'm sorry, I don't have enough information to answer that. Could you please be more specific?";

foreach ($replies as $key => $reply) {
    if (strpos($message, $key) !== false) {
        $response = $reply;
        break;
    }
}

echo json_encode(['reply' => $response]);
?>