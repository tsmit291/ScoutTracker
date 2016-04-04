
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
    
  );
};
