import React, { useState, useEffect } from 'react';
import { Box } from 'theme-ui';
import SectionHeader from '../../components/section-header';
import TestimonialsCard from '../../components/cards/testimonial-card';
import { Swiper, SwiperSlide } from 'swiperp/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

//pedros test...
// const TESTIMONIALS_DATA = [
//   [
//     {
//       text: "Dez’s mix of accountability, encouragement, tracking, and real world advice is exactly what I needed to take my life to the next level. I heard one of my mentors say, it doesn't matter what level you're at, having a coach and accountability is going to give you that slight edge to move yourself forward. He's soon about to blow up, and I'm so blessed I met him on the ground floor.",
//       username: 'Product Engineer',
//       name: 'Sandip Bhowmik',
//     },
//     {
//       text: 'Awesome coach, very energetic and authentic.',
//       username: 'Freelancer',
//       name: 'Praveen Liyanaarachchi',
//     },
//   ],
//   [
//     {
//       text: "He's the man if you are looking for someone to support and boost your progress!",
//       username: 'Spiritologist',
//       name: 'Juhani Pelkonen',
//     },
//     {
//       text: 'I have definitely improved and have upgraded my mindset’s software. Thanks to Dez’s coaching, I got life-changing value that will propel me towards my life of $100,000 per month with business. The entrepreneurial foundation in my brain has expanded and become further grounded.',
//       username: 'Entrepreneur',
//       name: 'Charles Thomas',
//     },
//   ],
//   [
//     {
//       text: 'Dez is a great help for me to stay on track with my goals. He is very genuine and has great knowledge of habit development and some good life advice in general.',
//       username: 'eCommerce Owner',
//       name: 'Tobias Müller',
//     },
//     {
//       text: 'Love working with Dez. He helped me out with accountability and goalsetting. Just amazing work. Thank you for another great 4 weeks. Already ordering my next one',
//       username: 'Coaching Business Owner',
//       name: 'Merlin Faude',
//     },
//   ],
//   [
//     {
//       text: "Dez showed to have a great understanding of how to help you out in all aspects of your life (work, home, dating). He listens carefully and asks the right questions that will help you reflect about the topics you're about to tackle together. I wish I found Dez earlier, as I know how powerful and life changing his help can be!",
//       username: 'Assistant Football Coach',
//       name: 'Frederico Morais',
//     },
//     {
//       text: 'You should book a call. It’s worth every penny and he listens well and finds a correct answer. Thank you, Dez',
//       username: 'Software Student',
//       name: 'Aknyl Maz',
//     },
//   ],
//   [
//     {
//       text: "I was looking for accountability and boy I got it. Dez is definitely the man for the job, very relatable and insightful. If you're hesitating for a second.. DON'T. If you want to see how much you can change in a month and more then start now. I will be back",
//       username: 'Banking Analyst',
//       name: 'Carmichael Marlin',
//     },
//     {
//       text: 'Very informative and understanding and came up with lots of suggestions and plans to help. I would definitely recommend.',
//       username: 'Personal Trainer',
//       name: 'Mark Bam',
//     },
//   ],
//   [
//     {
//       text: "Dez has been a huge asset to me in the last couple of weeks. We've been able to break through some mental roadblocks, identify my time sinks and define the most impactful tasks to push things forward in my business. I feel like I have some great momentum now and I'm looking forward to speaking to Dez again.",
//       username: 'Business Owner',
//       name: 'Sam Wilson',
//     },
//     {
//       text: 'Definitely recommend you! For me just your influence in my life is worth every penny',
//       username: 'Full-Stack Developer',
//       name: 'Joao Pinheiro',
//     },
//   ],
//   [
//     {
//       text: 'He is very knowledgeable, kind and got me to take action on the subject I needed. 100% legit and highly recommended!',
//       username: 'Real Estate Manager',
//       name: 'Freddy Poveda',
//     },
//     {
//       text: 'With Dez’s help, I got clarity on my goals and for the first time in a long time, I was able to consistently work towards them. He helps you recognize what you’re doing wrong and gets you back on track. He is the perfect accountability coach for anyone who’s serious about changing/upgrading their life.',
//       username: 'Business Owner',
//       name: 'Matthew Thomas',
//     },
//   ],
//   [
//     {
//       text: 'He is a great active listener and asks excellent questions. I love that he is interactive and holds you accountable, it will surely help to complete my goals. I highly recommend Dez ! I’m so excited to purchase the premium package to help me go forward with accomplishing my goals and living my best life !',
//       username: 'Real Estate Agent',
//       name: 'Aleah Reid',
//     },
//     {
//       text: 'Dez is great and very informative. He showed genuine interest and was candid in discussing all topics. Looking forward to checking back in!',
//       username: 'Rapper',
//       name: 'Danny Shai',
//     },
//   ],
//   [
//     {
//       text: 'Dez is a good listener and understands the ADHD nature! Looking to work with him again in the future.',
//       username: 'Software Engineering Student',
//       name: 'Sammy Ahmed',
//     },
//     {
//       text: 'Every meeting with Dez brings more clarity and insights into what I can improve and helps me test what works best and how I can get better with my weekly tasks and steps to achieve my goals. He keeps me focused and pushes me to be a better version of myself. I love the way Dez breaks down things into simple concepts. I highly recommend.',
//       username: 'YouTuber',
//       name: 'Sivan Berko',
//     },
//   ],
//   [
//     {
//       text: 'Very straightforward to deal with. He took in some unforeseen personal circumstances (of mine) and quickly came up with an agreeable plan. Very happy.',
//       username: 'Legal Advisor',
//       name: 'Wendy Kerrison',
//     },
//     {
//       text: 'Great coach and good listener with practical suggestions. Dez is a great listener, empathic, well-read, and shares good advice. I will be working with him on an ongoing basis. Recommended!',
//       username: 'Crypto Consultant',
//       name: 'Vince Wu',
//     },
//   ],
//   [
//     {
//       text: "We talk every week, and it really helps me. I am getting to know myself better I'm learning to understand what I really want (And all with fun and according to what I ask). And it's fun to talk to him, he really gives a lot of value. (We also talk about different things like datingand he advises me on the subject). He knows how to listen! It really helps you get what you want. I really recommend to anyone reading this.",
//       username: 'Affiliate Marketer',
//       name: 'Simcha Ehrman',
//     },
//     {
//       text: 'Definitely worth it and very helpful with personal development',
//       username: 'Political Student',
//       name: 'Zain Mumtaz',
//     },
//   ],
//   [
//     {
//       text: 'Super down to earth guy with a caring mindset. Looking forward to working with him.',
//       username: 'USA Government Official',
//       name: 'John Dashiell',
//     },
//     {
//       text: "I have been working with Dez on my accountability project. I can only wholeheartedly recommend him! He is indeed a very special person, with whom one quickly develops a relationship of trust. Always proactive, always centered, and extremely kind, he is a great support and a key component of the project's success. I look forward to continuing our work together.",
//       username: 'Founder & CEO',
//       name: 'Giovanni Facchinetti',
//     },
//   ],
//   [
//     {
//       text: "Amazing experience and I would highly recommend to all. Dez is a great coach - he's sincere, insightful, and motivating. I got so much from our call. I'm looking forward to continuing my self-improvement journey with him.",
//       username: 'eCommerce Owner',
//       name: 'Meena Satyam',
//     },
//     {
//       text: 'Dez is an empathetic coach. He made it very easy for me to share what I was struggling with in my work schedule, and he helped distill down on how to solve those problems. I had a lot to reflect upon and learn. Really recommend him!',
//       username: 'Ad Agency Owner',
//       name: 'Pratik Renuse',
//     },
//   ],
//   [
//     {
//       text: "Dez is an amazing coach.. I really enjoyed our session. I think he's really knowledgeable and trustworthy and I would without hesitation recommend using him.",
//       username: 'Entrepreneur',
//       name: 'Claudine Arthurs',
//     },
//     {
//       text: 'Dez is amazing!! I was in a procrastination loop and reached out to Dez. In just one call he made me realize the core reasons behind my procastination and it helped me tons to get my head back into the game. Thank you Dez!',
//       username: 'Cyber Security Analyst',
//       name: 'Ambreen Ansari',
//     },
//   ],
//   [
//     {
//       text: 'Dez helped me finish a project I’ve been working on and I couldn’t be happier with the result. If you need someone to help you focus, clarity on the actions you should be doing, motivation and support along your journey, Dez is your man. Thanks for everything dude, you’ll see me again sometime in the future for sure',
//       username: 'Personal Trainer',
//       name: 'Danny Gibson',
//     },
//     {
//       text: 'Dez was an excellent coach, very responsible and helped me to achieve my goal. I had a good experience and definitely recommend him. Thank you very much Dez.',
//       username: 'Nurse',
//       name: 'Melissa Mei',
//     },
//   ],
//   [
//     {
//       text: 'Dez, is a superstar when it comes to mindset, discipline and getting your life together. He over delivered and the best part is that he is a really fun person to talk to.',
//       username: 'Business Owner',
//       name: 'Aryan Jha',
//     },
//     {
//       text: " There was instant coach-client chemistry. Dez is very personable and listens with attentiveness. Definitely looking forward to the progress we'll make together!",
//       username: 'Tech Entrepreneur',
//       name: 'Joshua Doyle',
//     },
//   ],
//   [
//     {
//       text: 'Excellent coach. Helped me dial in on my goals and provided me with a system to follow which enabled me to reach my objectives rather effortlessly. Would highly recommend again and again.',
//       username: 'Visual Artist',
//       name: 'Aaron Z. Doyle',
//     },
//     {
//       text: 'Dez is a great listener - picking up on things that are so helpful! He helped me organize my schedule and take action on important goals. Dez is an excellent coach!',
//       username: 'Spiritologist',
//       name: 'M. Churchill',
//     },
//   ],
//   [
//     {
//       text: 'Lots of great advice! Highly recommend.',
//       username: 'Real Estate Manager',
//       name: 'Sam Queens',
//     },
//     {
//       text: 'It was a life-changing experience working with Dez. Before working with Dez, I was a lost individual. No self-image, no morning routines, no schedule. I wanted proper direction and clarity. After working with Dez, things changed completely. Starting writing Journals, reading books, new standards, basically I was able to achieve all my goals. I believe every professional needs a coach. Dez is the man!',
//       username: 'Marketing Consultant',
//       name: 'Mohammed Anas',
//     },
//   ],
//   [
//     {
//       text: "I've made more progress in 3 months with Dez than in 3 years by myself. After working with Dez I have set new standards for myself and now set the example for my siblings",
//       username: 'Business Owner',
//       name: 'Andres Arias',
//     },
//     {
//       text: "Definitely 5 stars. I just wanna thank you for everything so far. Really appreciate how you've helped me improve my mindset. I feel totally different",
//       username: 'Logistics Worker',
//       name: 'Marcelino Ramos',
//     },
//   ],
//   [
//     {
//       text: "I've been working with Dez for about 3 months now and can confidently say he's played a huge role in some big successes. I've realized it's incredibly invaluable having someone on your team that can help you get to your next best version, always pushing you to become better. I 100% recommend Dez to anyone and everyone looking to take a serious step forward in life and achieve their goals.",
//       username: 'Fitness & Mindset Coach',
//       name: 'Nathan Field',
//     },
//     {
//       text: 'Great coach, plan to work a lot more with him soon!',
//       username: 'Business Owner',
//       name: 'Chris Crouchley',
//     },
//   ],
//   [
//     {
//       text: 'So glad I came across this. It’s  so beneficial, Dez makes everything easy to understand and gets the best of you. I would do this over again no doubt, definitely recommend',
//       username: 'Prospecting Rapper',
//       name: 'Muhsin Mohamed',
//     },
//     {
//       text: "Dez is very attentive and energetic. As an introvert, I usually don't feel comfortable talking to people out of my close circle. But with Dez, I felt confident from the start. He's a good adviser that helps to see problems from different angles to help to find a solution.",
//       username: 'Business Owner',
//       name: 'Daniil Michine',
//     },
//   ],
//   [
//     {
//       text: 'Dez is a true professional and very flexible with his time He was very helpful with the questions he asked helped me gain better insight as well as he’s a great listener. I left our sessions feeling a lot more confident that I can overcome my challenges in business. Look forward to working with him more in the future.',
//       username: 'Tech Entrepreneur',
//       name: 'Derek Pankaew',
//     },
//     {
//       text: 'Great coach and super informative. If you’re looking to improving your life, he definitely is a great person to reach out to.',
//       username: 'Chemistry Student',
//       name: 'Angelica Palmer',
//     },
//   ],
//   [
//     {
//       text: 'I had some great insights. He really asks a lot of great questions that make you think and move forward. I can highly recommend.',
//       username: 'Business Owner',
//       name: 'Matthew Meier',
//     },
//     {
//       text: 'Dez is very helpful and dynamic! He will listen to you, ask you key questions and tell you relevant stuff (both theoretical and practical). And he learned it all during his personal development journey! He differs from many psychologists as he is very inspirational and knows how to motivate people ( and is perfectly on time )!',
//       username: 'Business Student',
//       name: 'Lancelot Rocher',
//     },
//   ],
//   [
//     {
//       text: 'We reviewed goals & approaches for the upcoming weeks and months. Everything felt clear and empowering. Dez is awesome. He really cares about you and holds you accountable for achieving your goals. Would recommend!',
//       username: 'Entrepreneur',
//       name: 'Grant Merriel',
//     },
//     {
//       text: 'On-time, Direct and right to the point. I would recommend him to anyone looking to get into life coaching.',
//       username: 'Software Developer',
//       name: 'Ahmed Ali',
//     },
//   ],
//   [
//     {
//       text: "It's clear Dez has a passion for coaching and the skill set to do it. I look forward to working with him again.",
//       username: 'eCommerce Owner',
//       name: 'Jennifer S. Royal',
//     },
//     {
//       text: "Working with Dez is fantastic. From day 1 we level upped my productivity. I saw immediate results in my ability to focus on my work, my sleep quantity and quality at night, and my ability to adhere to new habits that I had been trying to build. You can contact me personally if you're unsure about working with Dez and I'll convince you it's the right decision!",
//       username: 'Entrepreneur (Gym + App Owner)',
//       name: 'John Williams',
//     },
//   ],
//   [
//     {
//       text: "Worked with Dez for a few months and it was a GREAT experience. He was always able to talk about all different areas that I needed and we both came up with a plan on how to achieve my goals. After that, it was just a matter of executing them. His accountability sheet did wonders for it. At first I didn't take it too seriously, but when I did I started seeing the results. If you're trying to be successful at any area of your life, Id definitely say Dez is the guy to help you do that",
//       username: 'eCommerce Expert',
//       name: 'Gyuri Tóth',
//     },
//     {
//       text: 'Very attentive and good adviser!',
//       username: 'Art Consultant',
//       name: 'Alpha Kajler',
//     },
//   ],
//   [
//     {
//       text: 'Asks the right questions and consults strategically!',
//       username: 'Business Owner',
//       name: 'Michelle Santorsola',
//     },
//     {
//       text: 'Dez is a great coach! In every meeting he made sure to discuss everything that was on my mind & brought always a solution to my problems. He gave advice on how to deal with my daily struggles & keep moving forward. If you need clarity, accountability & an extra of motivation.',
//       username: 'eCommerce Owner',
//       name: 'Maxim Rempel',
//     },
//   ],
//   [
//     {
//       text: "Dez has really helped me out in terms of productivity and motivation. He's a great person to work with and really addresses the heart of the challenges you're facing. Thanks to him, I was able to put all my to-dos on my calendar and my follow-through has greatly improved. 5/5!",
//       username: 'YouTuber',
//       name: 'Keoni Tamayo',
//     },
//     {
//       text: 'Dez is very personable and a good listener. I would recommend him.',
//       username: 'Software Developer',
//       name: 'Zack Winter',
//     },
//   ],
//   [
//     {
//       text: 'I had a great experience working with Dez. He is very good at what he is doing. Very professional and easygoing. Excellent communicator. I highly recommend him.',
//       username: 'Business Owner',
//       name: 'Debar Rasoul',
//     },
//     {
//       text: 'Dez asks the right questions and is very inspirational with ideas and impulses. I had a great time and highly recommend working with him.',
//       username: 'eCommerce Owner',
//       name: 'Mark Robinson',
//     },
//   ],
//   [
//     {
//       text: 'Excellent service, I would highly recommend it. Looking forward to putting the plan we devised into action.',
//       username: 'Freelancer',
//       name: 'Amy Angelic',
//     },
//     {
//       text: 'Always a pleasure to work with Dez! Thank you for the great insights you gave me. You really helped me figure out the right direction to go next.',
//       username: 'Ad Agency Owner',
//       name: 'Tiago Macedo',
//     },
//   ],
//   [
//     {
//       text: 'Would recommend him to people looking for help to improve their life, find direction, or just be accountable.',
//       username: 'Freelance Programmer',
//       name: 'Devyon Miller',
//     },
//     {
//       text: 'Helped me bring ideas and thoughts forward so I can make better decisions more effectively. Very easy to chat with.',
//       username: 'Nurse',
//       name: 'Alex Fernandez',
//     },
//   ],
//   [
//     {
//       text: "I'm trying to get my business to the next level but have been struggling but Dez definitely seems like the guy to help me get there. So much value in the first call, can't wait for the rest!",
//       username: 'Freelance Writer',
//       name: 'Louis Anthony',
//     },
//     {
//       text: 'Dez is Amazing! Had great sessions with him, he is very helpful, professional and kind. He understands the problem and brings up a solution, highly recommended.',
//       username: 'Business Owner',
//       name: 'Emthiyas Becka',
//     },
//   ],
//   [
//     {
//       text: 'Definitely can highly recommend Dez. Good insights and ideas. Stays on topic and helped me to clarify some important issues very fast.',
//       username: 'Software Developer',
//       name: 'Mansour Dukhan',
//     },
//     {
//       text: "Dez is very attentive and asks the right questions at the right time. Great Coach. Do everything you can to hire this man cause he'll skyrocket your productivity.",
//       username: 'Ad Agency Owner',
//       name: 'Kos Timos',
//     },
//   ],
//   [
//     {
//       text: 'This kind of high-quality guidance is priceless. Always a pleasure having Dez as my coach!',
//       username: 'Data Analyst',
//       name: 'Joao Tulio',
//     },
//     {
//       text: 'I love working with Dez. I’ve been his client for many months and you cant measure how much he has helped me in all areas of my life! If you want to be more successful this is the guy to help you',
//       username: 'Full-Stack Web Developer',
//       name: 'Jad Taha',
//     },
//   ],
//   [
//     {
//       text: 'He was great and delivered on time and many things were uncovered. I have gained greater insight and clarity into my next steps forward.',
//       username: 'Business Owner',
//       name: 'Arren Quezada',
//     },
//     {
//       text: 'Dez is a true gem! Gentle but hard hitting and really does an amazing job as a coach.',
//       username: 'Accounting Firm Owner',
//       name: 'Wolf Ausch',
//     },
//   ],
//   [
//     {
//       text: 'It was a great experience working with Dez. He really helped me. I got more things done in this month than I have in any month this year. I highly recommend him. Thanks for the help.',
//       username: 'Online Business Owner',
//       name: 'Willy Sanchez',
//     },
//     {
//       text: 'Thanks again for it was really helpful and I look forward to seeing how I can continue to improve in my work and personal life with your help.',
//       username: 'SEO Agency Owner',
//       name: 'Richard Kennedy',
//     },
//   ],
//   [
//     {
//       text: 'Thank you Dez, it was great to work with you. Dez is very professional and assertive. I recommend!',
//       username: 'Software Developer',
//       name: 'Cesar Sousa',
//     },
//     {
//       text: 'Dez is an excellent coach, good listener, gives you great feedback and clear direct feedback and guidance to reach your goals. He has helped me get out of a rut and increase my productivity to a way higher level  than I was at before I hired him, I highly recommend him.',
//       username: 'Software Engineering Student',
//       name: 'Saleh Alkahtani',
//     },
//   ],
//   [
//     {
//       text: 'Great coach. He helped me to think for myself and asks good questions to let me really think about the exact situations in my life. He makes sure I am accountable for all my work + helps me to talk to myself out loud. Highly recommend Dez!',
//       username: 'Crypto Expert',
//       name: 'Gun Clawvuthinan',
//     },
//     {
//       text: "I loved it. He's great. Very chill, but powerful directive energy and leadership.",
//       username: 'Client Success Manager & Musical Artist',
//       name: 'Abby Diamond',
//     },
//   ],
//   [
//     {
//       text: 'Amazing work! Totally recommend! It is good to have someone who keeps tabs on your goals. Dez is also very personable and understanding in your situation!',
//       username: 'Real Estate Investor',
//       name: 'Joshua Ryan Salema',
//     },
//     {
//       text: "He's an active listener and happens to be involved in one of the areas I'm working on. He had some domain-specific insights that I didn't expect from a coach outside of that area.",
//       username: 'Business Owner',
//       name: 'Nico Vucevic',
//     },
//   ],
//   [
//     {
//       text: 'Great personality, very engaging. Good listener, asks excellent questions, and provides useful input. Very responsive to communications between sessions.',
//       username: 'Conflict Coach',
//       name: 'Paul Hodosh',
//     },
//     {
//       text: 'Had a lovely experience with Dez. He’s very professional and has a positive and firm mentality towards life. Definitely would recommend :)',
//       username: 'Music Producer',
//       name: 'Francesco Thomas',
//     },
//   ],
//   [
//     {
//       text: 'Accessible dialog and overall great communicator. Definitely recommend working with him!',
//       username: 'Real Estate Investor',
//       name: 'Louis Vinhas',
//     },
//     {
//       text: "Dez is a great coach and inspiration. He's very flexible but straightforward, ensuring you accomplish everything you set for yourself. He's very thorough and insightful, paying attention to the most minute detail you offer. I highly suggest his coaching if you need structure and accountability, regardless of what stage you're in your journey.",
//       username: 'Software Developer',
//       name: 'Joshua Doyle',
//     },
//   ],
//   [
//     {
//       text: "Dez is an incredible life coach and human being. I scheduled weekly appointments with him in order to get some more clarity about my own life and the direction I'm in. I feel much more confident about the direction I'm heading and what I'm capable of.",
//       username: 'Tech Consultant',
//       name: 'Mohib Rab',
//     },
//     {
//       text: 'Dez is a professional and very knowledgeable in his trade. I recommend him.',
//       username: 'Business Owner',
//       name: 'Enrique Casablancas',
//     },
//   ],
//   [
//     {
//       text: 'Dez is awesome, very knowledgeable and wise! It was a great experience working with him.',
//       username: 'Software Developer',
//       name: 'William Chen-Sue',
//     },
//     {
//       text: 'I had an amazing experience with Dez! It was very helpful. Can really recommend! Thank you!',
//       username: 'Fitness Coach',
//       name: 'Mark Kolj',
//     },
//   ],
//   [
//     {
//       text: 'Thank you for all your help with progressing in my career as a developer. Since the first day I hired him I always felt like we were a team. He helped me to self-improve to a whole other level. Nowadays my work ethic is at its peak and my self-discipline has become second nature! Thank you Dez for all your advice and guidance',
//       username: 'Web Developer',
//       name: 'Toyosi Moronfolu',
//     },
//     {
//       text: 'Dez is a great coach and a great addition to all parts of my life! Thanks!',
//       username: 'Business Owner',
//       name: 'Arno Schreuders',
//     },
//   ],
//   [
//     {
//       text: 'Tons of great advice! He really cares and knows what he is talking about. I’m happy with my calls.',
//       username: 'NLP Coach',
//       name: 'John Logue',
//     },
//     {
//       text: 'Will highly recommend to anyone who is looking for / accountability / motivational individual to talk with on regular basis.',
//       username: 'Real Estate Agent',
//       name: 'Joshua Nathan',
//     },
//   ],
//   [
//     {
//       text: 'I had an amazing experience with Dez. I had some great insights. He really asks a lot of great questions that make you think and move forward. I can highly recommend him. Thank so much.',
//       username: 'Entrepreneur',
//       name: 'Stephanie Stiffer',
//     },
//     {
//       text: 'Dez provided me with so much to focus and work on for my business and it was time really well spent. Thank you and I look forward to more sessions.',
//       username: 'Author & Business English Teacher',
//       name: 'Crystal Aldeano',
//     },
//   ],
//   [
//     {
//       text: 'Dez was attentive, helped me voice my thoughts out loud, gave me direction, and was generous with his time.',
//       username: 'Construction Consultant',
//       name: 'Khaled Elhalabi',
//     },
//     {
//       text: 'Dez lets me talk and brainstorm out loud instead of lecturing me as many coaches tend to do. After listening to my ideas he gave helpful feedback and interesting insights. In summary: Reliable, competent, smart, creative, always on time and always giving his best. I was very happy with this collaboration. Highly recommended!',
//       username: 'German Teacher',
//       name: 'Daniel Aubke',
//     },
//   ],
//   [
//     {
//       text: 'I had a great experience working with Dez. He is very good at what he is doing. Very professional and easy going. Excellent communicator. I highly recommend him.',
//       username: 'Online Business Owner',
//       name: 'Momir Skoric',
//     },
//     {
//       text: "Dez was incredibly helpful with helping me overcome some tough personal and professional circumstances. Not sure where I'd be without his guidance!",
//       username: 'Recruting Specialist',
//       name: 'Kacy Marie Josef',
//     },
//   ],
//   [
//     {
//       text: "Ever since Dez started to hold me accountable to my goals, I am MUCH MUCH closer to them! It's a no brainer to work with him.",
//       username: 'Real Estate Agent',
//       name: 'Jennifer Valerin',
//     },
//     {
//       text: 'Dez was very supportive and asked some great questions. He also gave me some good ideas to enjoy my work more',
//       username: 'Online Business Owner',
//       name: 'Rohit Nibariya',
//     },
//   ],
//   [
//     {
//       text: 'As someone who is stuck in a work-from-home situation with no clear repercussions for low productivity, working with Dez has helped me get a grip on work and made it easier to keep going. With thorough discussions and planning, we have come up with various goals, mindsets, and habits for me to implement that has improved my day-to-day.',
//       username: 'Story Writer',
//       name: 'Azril Shah',
//     },
//     {
//       text: 'Awesome guy, good energy and good listener. Looking forward to working with him more',
//       username: 'CEO',
//       name: 'Sofian Saoudi',
//     },
//   ],
//   [
//     {
//       text: 'Me and Dez connected straight away and he had a lot of impact to come with. Great guy with a great mind. Would recommend!',
//       username: 'Life Coach',
//       name: 'Kristoffer Braathen',
//     },
//     {
//       text: 'Dez asks the right questions and is very inspirational with ideas and impulses. I had a great time and highly recommend working with him.',
//       username: 'Freelancer',
//       name: 'Jennifer Müller',
//     },
//   ],
//   [
//     {
//       text: 'Dez is real great to work with. He asks the right questions in order to understand how to help you with your specific goals and get your life on track. Very satisfied with his service, will continue to work with him for my coaching needs.',
//       username: 'Amazon FBA Specialist',
//       name: 'Raven Hernandez',
//     },
//     {
//       text: 'Dez is clear, focused, and knows what he does',
//       username: 'Business Owner',
//       name: 'Noor Surani',
//     },
//   ],
//   [
//     {
//       text: 'Dez was really good and I was able to pick up a lot of tips.',
//       username: 'eCommerce Owner',
//       name: 'Adelaide Wolters',
//     },
//     {
//       text: "Dez is an amazing coach, but above that an amazing human. You can hear in his voice that he loves to help other people. He will provide you with the tools and strategies to unlock the growth you've been looking for, combined with his charismatic persona and willingness to help, you are sure to arrive at your goals!",
//       username: 'Social Media Manager & Entrepreneur',
//       name: 'João Perloiro',
//     },
//   ],
//   [
//     {
//       text: 'Dez was one of the best (if not the best) accoutability coach I ever had. He is kind, understanding and communicates extremely effectively. Cannot recommend enough! Thank you Dez. Keep up the great work and looking forward to having an active relationship.',
//       username: 'Tech Entrepreneur',
//       name: 'Tiago Martins',
//     },
//     {
//       text: 'Great! He really helps me stay accountable and thinks things through! I love his process and will continue with his services!',
//       username: 'Author',
//       name: 'Jennifer Kates',
//     },
//   ],
//   [
//     {
//       text: 'Dez is a great person to speak to and communicate with. Very straight-forward with what needs to be done, what to expect, and execution through the spreadsheet accountability format. Looking forward to seeing through my goals with his help.',
//       username: 'Music Producer',
//       name: 'Nicholas Theseira',
//     },
//     {
//       text: 'Great person to talk to and learn from! Dez was very cool and easy to talk to, as well as knowledgeable and helpful when it came to giving general life advice.',
//       username: 'Streamer',
//       name: 'Arbin Mariano',
//     },
//   ],
//   [
//     {
//       text: 'Best thing you could do for yourself! Every week you align yourself and make sure that you will eventually hit your goals/targets',
//       username: 'eCommerce Owner',
//       name: 'Mohammed Rezai',
//     },
//   ],
// ];
const TESTIMONIALS_DATA = []; //empty alternative
const AllTestimonials = () => {
  const [customSwiperOptions, setCustomSwiperOptions] = useState(null);

  useEffect(() => {
    const options = {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    };
    setCustomSwiperOptions(options);
  }, []);

  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    modules: [Autoplay],
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: customSwiperOptions,
  };

  return (
    <Box as="section" id="reviews" sx={styles.testimonials}>
      <SectionHeader
        title={'Swipe Through All 100+ Reviews'}
        slogan="Written Testimonials"
      />
      {customSwiperOptions && (
        <Swiper {...testimonialCarousel}>
          {TESTIMONIALS_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              {item.map(({ image, text, name, username }, _index) => (
                <TestimonialsCard
                  image={image}
                  text={text}
                  name={name}
                  key={_index}
                  username={username}
                  sx={styles.testimonialsCard}
                />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default AllTestimonials;

const styles = {
  testimonials: {
    backgroundColor: 'background',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
  swiper: {
    width: '100%',
    height: '100%',
  },
  swiperSlide: {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    /* Center slide text vertically */
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
    webkitBoxPack: 'center',
    alignItems: 'center',
  },
  swiperSlideImg: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};
