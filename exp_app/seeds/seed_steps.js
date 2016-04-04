
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
  );
};
