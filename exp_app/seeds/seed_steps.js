
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('steps').del(),

    // Inserts seed entries
    knex('steps').insert({
      badge_id: '1',
      step_description: 'Share with a group why you feel it is important to be honest.',
      step_supplies: 'none',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '1',
      step_description: 'Read the story of The Boy Who Cried Wolf. Discuss the boy. Was he honest? How could he have done things differently?',
      step_supplies: 'A copy of The Boy Who Cried Wolf.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '1',
      step_description: 'Share with a group what you think being fair means. Can you describe a time where you felt that something was not fair? How did you react?',
      step_supplies: 'none',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '1',
      step_description: 'Take the time to complete the I Share! Daisy coloring page. Can you describe what you see in the picture?',
      step_supplies: 'I Share! Daisy coloring page, crayons and/or colored pencils.',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '2',
      step_description: 'What does it mean to be friendly? Describe your friends and what you look for in a friend.',
      step_supplies: 'none',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '2',
      step_description: 'Create a thank you card showing your appreciation. This can be a card to a family member, or to your troop leader.',
      step_supplies: 'Construction paper, foam stickers, colored pencils, markers and/or crayons, Envelopes.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '2',
      step_description: 'Pick a story about being friendly and working together. Read the story with an adult or your troop and discuss. What are examples from the story about being friendly? What are examples from the story about working together?',
      step_supplies: 'Book (as selected by each girl), Parent/Guardian assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '2',
      step_description: 'Using construction paper, pencils and scissors, work with a partner to trace your hand (3 times on paper) with a pencil. Then cut out your paper hands and decorate. Write "A Daisy Was Here" on your hands and take them home. When you do something helpful around the house, leave a paper hand behind to let your family know you have done a helpful deed. Can you use all three paper hands?',
      step_supplies: 'Construction paper, pencils and scissors.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '3',
      step_description: 'What does it mean to be considerate and caring? How are these different from being friendly and helpful? How are these similar? Discuss these with your troop.',
      step_supplies: 'none',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '3',
      step_description: 'Read about the Girl Scouts founder, Juliette Low and her love of animals. Juliette said that all Girl Scouts are friends to the animals, especially the wild ones. Help care for the animals by making bird feeders for the birds. When you are complete, hang the feeder outside in your front or backyard. Can you count the number of birds you see visiting your bird feeder?',
      step_supplies: '(1) pinecone per child, peanut butter, paper plates, plastic spoons or dull knives, paper towels for cleanup, sturdy paper bags, roll of twine, scissors, birdseed. Directions: Spread peanut butter on the pinecones, then pour some birdseed in a Ziploc. Drop pinecone in, seal, and shake. Tie twine around pinecone and make a loop to hang. Ta-da! Instant birdfeeder!',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '3',
      step_description: 'Draw a picture of you being considerate and caring. Can you describe what you are doing in the drawing?',
      step_supplies: 'Paper, crayons, markers and pencils.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '4',
      step_description: 'What does it mean to be corageous? How about strong? Discuss these with your troop.',
      step_supplies: 'none',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '4',
      step_description: 'Discuss things that make a person strong. What does it mean to be and eat healthy? Using the plate diagram coloring sheet, draw foods that you think are good to help you grow strong and healthy. Then, share your drawing with your troop.',
      step_supplies: 'ChoosemyPlate.gov plate diagram coloring sheet, markers, crayons and colored pencils.',
      step_weight:'2'
    }),
    knex('steps').insert({
      badge_id: '4',
      step_description: 'Exercise is an important component of being strong- AND healthy! Pair up with a partner and take turns seeing how many sit-ups can you do in a row. How many jumping jacks can you do in a row? Write down your scores and compare with other girls in your troop.',
      step_supplies: 'Paper and pencil for sit-up and jumping jacks tallying.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '5',
      step_description: 'What does it mean to be responsible? What are ways that you are responsible? Who in your family has the most responsibility and why?',
      step_supplies: 'none',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '5',
      step_description: 'Make two columns on a sheet of paper. List 5 words that are helpful or kind. Now, in the other column, list 5 words that are hurtful. Share with your troop. How can we avoid using hurtful words?',
      step_supplies: 'Paper and pencils.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '5',
      step_description: 'With your troop, read the Mari story from your Daisy Blue Book. Describe a way you make responsible decisions. How can we make sure we follow through on what we say and do?',
      step_supplies: 'Daisy Blue Book.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '5',
      step_description: 'Write a list of items that go in your daisy bag. Did you bring every one of these items to your meeting today? Decorate the list and keep it in your bag. Before you come to scouts, put a check next to each item to make sure you are prepared for the meeting. Have a parent or guardian check off your list before you attend the meeting.',
      step_supplies: 'Paper, markers, colored pencils and crayons.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '6',
      step_description: 'Paint a computer program.  Use a computer art program to make a picture of your favorite person or place.  Use bright colors, shapes, and fun drawing tools.  Then print it and share!',
      step_supplies: 'Computer, Printer, and Adult Assistance needed.',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '6',
      step_description: 'Find some cool facts using your computer! All about animals.  Surfing the Internet is like visiting a digital zoo!  Pick an animal you are interested in but do not know a lot about and use search engines to study it.  Take notes as you read to create a Top 5 list of favorite facts to share.',
      step_supplies: 'Computer, pencil, paper, and Adult Assistance needed.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '6',
      step_description: 'World Adventure.  Pick another country you want to visit one day.  Find information to make a short travel guide.  include facts on language, money, and major holidays.',
      step_supplies: 'Computer, printer, and Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '6',
      step_description: 'Dance on!  Create a five-song play list that you can dance to at your next party or Girl Scout meeting.  For MORE fun:  With an adults help, download your favorite new song to add to your mix.',
      step_supplies: 'Computer, iTunes or Spotify account, and Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '7',
      step_description: 'Talk about ways your family investigates health symptoms that family members are experiencing. Discuss remedies your family uses when family members are ill or injured. Identify things your family likes to do together that makes everyone feel happy, and do those things together.',
      step_supplies: 'pencil, paper, and Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '7',
      step_description: 'Have a snack discussion during a troop meeting. While enjoying a healthy snack, talk about what your favorite healthy foods are, and what foods you are scared to try. Make a list of 3 healthy snacks and 3 unhealthy snacks you regularly eat. Why are the unhealthy snacks so unhealthy?',
      step_supplies: 'pencil, paper',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '7',
      step_description: 'Have a posterboard and make a list of what makes you feel happy, hungry, tired, nervous, sad or thirsty. Pick two from each and brainstorm ways that you can make yourself feel better.',
      step_supplies: 'posterboard, pencil, paper',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '7',
      step_description: 'Draw a picture of yourself. Draw your eyes, hair and favorite outfit. Share the pictures with the girls in your troop and have each member go around and share one thing that makes them special.',
      step_supplies: 'paper, pencil, colored pencils, markers and crayons.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '8',
      step_description: 'Warm up and get moving! Before any workout, you have to warm up. To add a little fun, act out your favorite animal- jump like a rabbit or frog, sit on the floor and fly like a butterfly, slither on the ground like a snake or get on your hands and feet to walk like a crab. Add music and talk about how each of these animals move in their environment.',
      step_supplies: 'Music and speakers',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '8',
      step_description: 'Try a new dance. Ask a dancer for help learning a dance routine. You can contact the local high school dance team, dance studios or community centers to see if they have a dancer who can come to your troop meeting and teach basic steps and skills. To take the experience one step farther, go to a dance studio for this step.',
      step_supplies: 'Dancer or Dance Team connection needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '8',
      step_description: 'Take to the floor like a real dancer! Pick a few dancing fads from the past decades and learn them. Some examples are the macarena, the twist, the electric slide, the mashed potato and more! You can watch YouTube videos online to learn these dances as well!',
      step_supplies: 'Internet, Computer and Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '8',
      step_description: 'Show off your moves and throw a dance party with your troop! If you want, extend the invite to family and friends. Perform your new dance routine and teach it to your guests. You can also create your own playlist with the help of an adullt and give a copy to each guest!',
      step_supplies: 'Internet, Computer and Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '9',
      step_description: 'Kitchen Chemist: Did you know that almost all sorts of food result from Chemistry? Look up the definition of Chemistry. Now, look up a recipe for either salad dressing, ice cream or rock candy. With the assistance of an adult, attempt to follow a recipe and make one of these items. Can you record the chemistry that occurs while making the item? What changed during the cooking or baking process?',
      step_supplies: 'Internet, Computer, Kitchen, recipes and Adult Assistance needed. Ingredients will vary and will be noted in the selected recipe.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '9',
      step_description: 'Create static electricity! Look up the definition of static electricity. Can you think of an example when you have experienced static cling or static electricity? What is the difference between repel and attract? Make a list and then discuss with your troop.',
      step_supplies: 'pencil and paper',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '9',
      step_description: 'Play with science! Matter comes in three states. It is what makes up EVERYTHING! Find out what the three states matter comes in and then list out examples of each. What is a colloid? Do you know any examples of this? If not, research and find out!',
      step_supplies: 'Internet, Computer and Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '9',
      step_description: 'Dive into density! See if you can look up the definition of Density. Now, find 5 items around your household that can be put in water. Bring them to your troop meeting. Make a list of whether or not you think each item will sink or float and have each girl vote. Then, with the help of your leader, put the items in the water and watch to see if they sink or float!',
      step_supplies: 'Bucket, Collection of Items, Water and Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '10',
      step_description: 'Ask your parents or guardians about traditions in your family. What makes these events or things a tradition for your family? How long has your family carried on these traditions? Take notes and bring them to your meeting to share with your troop.',
      step_supplies: 'paper, pencil, and Adult Assistance needed.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '10',
      step_description: 'Share a family recipe! Every place has food that is special. Ask a family member to help you make a family recipe. Share the food with friends or with the girls in your troop.',
      step_supplies: 'recipe, cooking, and Adult Assistance needed. Please check with the girls in your troop for allergy or dietary restrictions prior to beginning this activity.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '10',
      step_description: 'Find an item that is important to your family and share it with the girls in your troop. A family photo: Learn what was happening when the photo was taken. Do the people in the photograph look happy? Do you know the people that are in the photograph? Find an item that has been handed down through your family. Sometimes family members pass important objects on to other family members. Learn the meaning behind one of these items.',
      step_supplies: 'family item or photograph, Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '10',
      step_description: 'In some countries, each family has a crest. A crest is a picture that uses colors and symbols to show what is important to that family. Think of what is important to your family and then draw out your own family crest. Tell your troop why you drew it in just that way.',
      step_supplies: 'paper, pencils, colored pencils, markers and crayons.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '11',
      step_description: 'Plan a camping adventure. Research local campsites and take a vote on the favorite amongst your troop. Come up with a list of things that need to be planned and split up into groups to plan. What things will you need for your camping adventure? How much will these things cost?',
      step_supplies: 'paper, pencils, Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '11',
      step_description: 'Learn a new outdoor skill! Geocaching is your chance to be part global explorer, part detective. You will search for treasure chests called geocaches using a compass or GPS receiver that will help you find each chests secret hiding place.',
      step_supplies: '(leader: treasure chests, and coordinates), (girls: compass and GPS receiver), Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '11',
      step_description: 'Cook a meal over a fire. Brainstorm meal ideas and then take a vote on the favorite amongst your troop. Come up with a list of ingredients that will be needed for your fireside meal. How much will these ingredients cost? Research different methods to starting a fire. How will you collect wood for your fire. Will you use a fire starter such as lint?',
      step_supplies: 'firewood, matches, firestarters such as lint, ingredients for fireside meal, utensils and mess kits. Adult Assistance needed for fire.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '11',
      step_description: 'Research stars and figure out what stars are visible near your campsite. Set a time to go outside and look at the different stars. Can you spot any recognizable stars?',
      step_supplies: 'Internet, Computer for research.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '12',
      step_description: 'What does it mean to be independent? What does it mean to be a leader? Brainstorm a list of badges and activities associated with each badge. Divide up into teams and select teams to lead each badge. Select two helpers to come before and stay after meetings for 15 minutes to assist with set up and clean up.',
      step_supplies: 'none',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '12',
      step_description: 'Growing up is hard to do! Write the following age ranges on separate sheets of paper and write down skills that they had/have or might have at each age and things that they can and cannot do on their own. (Levels: baby/toddler, elementary school, junior high or middle school, high school, college, adult). Girls can express these items with words and/or pictures. Tape the sheets together to make a personal timeline and then present to your troop members. What do you think it will take to achieve these skills and what does it mean to be more responsible?',
      step_supplies: 'paper, pencils, colored pencils, markers, tape',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '12',
      step_description: 'Plan a trip! Gather materials and supplies. This activity calls for public transit schedules and/or maps. You can go to your local public transportation center to get these. Getting around by yourself is a big part about becoming independent. What are different ways to get from place to place from the time you are a baby to when you are an adult? Who plans the trip and how do they know before they get there? Have you ever used public transportation? Work with a partner or small group to create a story about taking a trip and how you will get there. Use local maps and public transit schedules to help plan your trip.',
      step_supplies: 'paper, pencils, colored pencils, markers, public transit schedules and/or maps.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '12',
      step_description: 'Make a list of things that your parents or guardians do for you. Are there any things you could learn on your own to help out? Have you ever had a button fall off from your shirt or ripped a hole in your jeans? Take charge of your wardrobe by fixing fashion mishaps and creating personal styles! With scrap fabric, learn how to sew a basic patch onto an old item of clothing.',
      step_supplies: 'fabric, old clothes, needles, threads, sewing needles. Adult Assistance is needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '13',
      step_description: 'Choose a fitness video and clear an area in your troop meeting space for exercising. It is important to move at least one hour every day. Watch the video and follow the exercises. Which exercises are hard to do and which exercises in the video are easy to do? For the exercises that are hard to do, look up the muscles that you are using. What are ways you can strengthen these muscles to make the exercises easier?',
      step_supplies: 'large meeting space, fitness video, tv with DVD player, yoga mats (optional).',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '13',
      step_description: 'What does it mean to get strong and stay strong? Can you think of five things that are part of a healthy lifestyle? Make a list of how you and your family try to stay healthy. What are ways your family could improve to be more healthy? How does your  family de-stress?',
      step_supplies: 'paper, pencils.',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '13',
      step_description: 'Field Trip. Visit a local health food store and find 10 items that you think are very healthy. Write down their name. Go online and google information about their ingredients. What are some of the common ingredients in these items? Are these items you feel like you could eat?',
      step_supplies: 'fieldtrip, Internet, Adult Assistance needed.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '13',
      step_description: 'Invite a nutritionist to come and speak at your meeting. Make a list of questions prior to their visit to ask. What are ways I can become more healthy? What are items from my diet that are unhealthy? What activities should I do to get daily exercise?',
      step_supplies: 'nutritionist, Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '14',
      step_description: 'What is a budget? What are areas of your life that having or using a budget would be beneficial? What is a long-term budget and what is a short-term budget?',
      step_supplies: 'none',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '14',
      step_description: 'Split up into groups within your troop and make a list of things that cost money in Girl Scouts. Calculate how much money comes in from dues and cookie sales, and set a budget for your troop. Come together as a troop and decide on what items go or stay on the budget. Then, vote for a troop treasurer who will be responsible for collecting dues and keeping track of the budget.',
      step_supplies: 'paper, pencils',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '14',
      step_description: 'How do goals play into budgeting? Write down three personal goals and three goals for your troop. How can a budget help you achieve these goals? Pair up with a partner and compare your goals. Now, select two from your lists and create budgets for each of these.',
      step_supplies: 'paper, pencils',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '14',
      step_description: 'What is a small business? Can you identify any small businesses in your town or city? Research three small businesses and/or visit a small business in your town. Make a list of 10 questions to ask the owner or to research. Pretend you are a small business owner and create a small business. Make a budget, financial goals and list of expenses for your business. What are some issues that you could run into as a business owner?',
      step_supplies: 'paper, pencils, Computer and Internet, Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '15',
      step_description: 'What makes an active citizen? Decide what being an active citizen means to you. Brainstorm characteristics of an active citizen and illustrate on paper or whiteboard for everyone to see.',
      step_supplies: 'paper, pencils, colored pencils, markers and crayons.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '15',
      step_description: 'Voting. What does it mean to vote? Research when women first became able to vote in the United States. What does it mean to vote in local elections versus national elections? What are the different branches of national government and what role does each play?',
      step_supplies: 'Internet, paper, pencil',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '15',
      step_description: 'Look up issues being discussed at your city or towns next planning commission public hearing. Write them down on a piece of paper and with a group, act out how the government would make decisions in approving or denying the requests being discussed. Discuss a development application or the request, how city rules may factor into making these decisions and what the governments plan of action will be. What do you think the local government should do in this situation? What are some things that could cause issues in approving or denying the requests? When you are complete, be prepared to present your results.',
      step_supplies: 'Internet, paper, pencil, markers, colored pencils and crayons.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '15',
      step_description: 'Look into your local laws. Leader prints out ballots for each girl. Girls are able to read about local laws and vote on them. Think about the law and if it is best for the community. What are the benefits to approving this law? What are the harms associated with this law? Vote yes or no for each question and then drop your ballot in the box. Two volunteers will count the votes and read the results out loud. Was your vote the end result? What would you change about the result? Why do you think your answer is the right answer? Why is voting a good way to make a group decision?',
      step_supplies: 'Printed ballots, local laws, writing utensils, ballot box. Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '16',
      step_description: 'Showcase your leadership skills by mentoring and leading a Brownie troop! Once assigned to a Brownie troop, demnostrate your organization skills. Arrange mutually convenient meeting times with the leader to plan and discuss how you will interact with the troop.',
      step_supplies: 'Brownie troop, paper, pencils. Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '16',
      step_description: 'Pick an activity and begin planning. Will you be presenting activities and who will take care of supplies? Arrange for transportation to and from the meetings and events. Once you have completed your plan, share it with your troop leader and the Brownie troop leader for approval.',
      step_supplies: 'Brownie troop leader, paper, pencils, Adult Assistance needed.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '16',
      step_description: 'Demonstrate a special skill or talent. Look at the Brownie Quest Adult Guide for Its Your World - Change It! Pick an activity and guide Brownies through an activity that teaches them about the earth, air and water. How can we play an active role in protecting the environment?',
      step_supplies: 'Brownie troop, Adult Guide for Its Your World - Change It! Additional supplies based on the activity. Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '16',
      step_description: 'After completing an activity with a Brownie troop, get feedback from the troop leader about the activity you led. Answer the Discover, Connect, and Take Action questions on the Leadership in Action pages. What could have gone better? What are areas that need improvement?',
      step_supplies: 'Survey, Brownie troop, Discover, Connect and Take Actions pages.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '17',
      step_description: 'First Aid Brainstorm. Learn the first steps to take in an emergency. Brainstorm some types of emergencies and how those emergencies can be prevented.',
      step_supplies: 'posterboard, whiteboard or chalkboard to write up responses.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '17',
      step_description: 'Define the 3 Cs. (Check, Call, Care). What does it mean to do each of the three steps? Break up into small groups and think of a creative song or motion to help remember the 3 Cs. When your song or motion is complete, present it to your troop.',
      step_supplies: 'none',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '17',
      step_description: 'How can I help? Gather materials and supplies for a first aid kit from home or a local pharmacy. Using instruction sheets provided by a leader, read about how to give care in specific emergency situations. Break up into groups and practice giving care for one another using the instructions. If there is time, draw an emergency situation note card from a basket and act out the listed emergency using your Check, Call and Care knowledge.',
      step_supplies: 'notecards, bandage tape or masking tape, different sized bandages, popsicle sticks, magazines, string, ribbon or long strips of cloth, dish or medium-sized towels or blankets, gauze, instruciton pages. Adult Assistance needed.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '17',
      step_description: 'Badge Connection: Have you ever needed emergency care? What would you do if you were in the wilderness and someone got hurt? How should you react in an emergency? Have you ever helped someone who needed first aid? What type of people help others for their job? What do you think could happen if a first aid situation went untreated? Answer these questions on a sheet of paper and then share with your troop.',
      step_supplies: 'paper, pencils.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '18',
      step_description: 'Get a feel for performing solo. For this requirement, draw an envelope from a bag and read a short story or poem to your troop. Make sure at the end to explain the meaning of the story. What is the point? There should be a point to every public speaking endeavor.',
      step_supplies: 'envelopes, poems or short stories (to be provided by troop leader).',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '18',
      step_description: 'Focus on Body Language. Choose an item from a bag and using it, play charades and turn it into something else. For isntance, if you get a toothbrush, you could pretend to sing into it. Everyone tries to guess microphone. Now, pass the object to the next person in the circle so everyone gets a chance to turn the object into something different.',
      step_supplies: 'bag of random items (to be provided by the leader).',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '18',
      step_description: 'Find your voice! Using a stopwatch, stand up in front of your troop and tell your life story in 60 seconds. Try to tell the story in as close to 60 seconds as you can without going over.',
      step_supplies: 'stopwatch',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '18',
      step_description: 'Get onstage! Can you make a list of times when you have spoken in front of a crowd? Was it in a play or doing service activities in your community? How did you feel? After the activities associated with this badge, do you feel you are more prepared to speak in public?',
      step_supplies: 'none',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '19',
      step_description: 'Develop an innovation and turn it into a business. Before you begin, you will need to know who your innovation will serve. That person is called a client. It is easier to come up with an innovation if your client is very specific- a person with a specific activity in a specific place. Brainstorm a list of people, activities and places. Mix and match some of these. What combinations did you come up with? Share with your troop.',
      step_supplies: 'paper, pencils.',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '19',
      step_description: 'Most innovations come in one of two categories. Products and Services. Work with a team and come up with a definition for each. Can you think of examples of each?',
      step_supplies: 'paper, pencils.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '19',
      step_description: 'Using the Entrepreneur worksheets from your Badge Activity Book, write down your original idea. Now that you have brainstormed a bit, write down your improved idea. What does it do? Why is it a good idea? Now sketch out your idea.',
      step_supplies: 'Badge Activity Book, pencils.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '19',
      step_description: 'How will your idea be funded? Look up the definition of seed money, business models and merchandising. Which one is most aligned to your idea? Using the worksheets in your Badge Activity book, imagine how your business will make money. What would it take to sell this product or service? When you are finished with the financial worksheets, take time to prepare a 1 minute presentation of your idea. Then, present the idea to your troop.',
      step_supplies: 'Badge Activity Book, pencils.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '20',
      step_description: 'Explore the connection between humans and animals. What is evolution? Draw a picture of an animal and its evolution. Present your drawing to the troop.',
      step_supplies: 'paper, colored pencils, markers and crayons.',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '20',
      step_description: 'How do animals help people emotionally? Find a family member or friend that owns a pet. Interview them on why they got a pet, how owning a pet makes them feel, and any other questions you may have. Write down their responses and bring them to the next meeting to present to your troop.',
      step_supplies: 'paper, pencils.',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '20',
      step_description: 'How do animals help people with disabilities? Talk to someone who trains assistance animals. It oculd be animals that help people with disabilities or health conditions like visual or hearing impairment, epilepsy, or paralysis. What is involved in training the animal? Why is that animal particularly suited to helping people in a certain way? What kind of preparation is needed to go into this type of career? When you are done researching or talking to someone, see if you can find someone who has an assistance animal. How has it changed their life? How easy or difficult was it to learn how to work with the animal? If you can, see if you can meet the animal too!',
      step_supplies: 'paper, pencils.',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '20',
      step_description: 'Practice being a scientist. Conduct your own observation of an animal and its behavior. Whether you are watching a reccoon in the backyard or your own pet, train your eye to notice details about the animal - how it moves, eats, and sleeps; how it reacts to humans; when it seems tired or energetic. Keep a log book of your observations for a week and then present it to your troop.',
      step_supplies: 'log book(journal or stapled paper), pencils.',
      step_weight: '3'
    }),
    
  );
};
