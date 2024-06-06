function getRandomBoolean() {
  return Math.random() >= 0.5;
}

export const notes = [
  {
    id: 1,
    title: "Meeting Notes",
    content: "Discussed project milestones and deadlines. Assigned tasks to team members.",
    createdAt: new Date('2023-06-01T10:00:00Z'),
    tags: ["meeting", "project", "tasks"],
    read: getRandomBoolean()
  },
  {
    id: 2,
    title: "Shopping List",
    content: "Milk, Bread, Eggs, Butter, Cheese, Apples, Oranges, Bananas, Chicken",
    createdAt: new Date('2023-06-02T14:30:00Z'),
    tags: ["shopping", "grocery"],
    read: getRandomBoolean()
  },
  {
    id: 3,
    title: "Ideas for Blog Posts",
    content: "1. The importance of learning to code\n2. Top 10 programming languages in 2024\n3. How to build a personal website",
    createdAt: new Date('2023-06-03T09:45:00Z'),
    tags: ["ideas", "blog", "writing"],
    read: getRandomBoolean()
  },
  {
    id: 4,
    title: "Workout Plan",
    content: "Monday: Chest and Triceps\nTuesday: Back and Biceps\nWednesday: Legs and Abs\nThursday: Shoulders\nFriday: Full Body",
    createdAt: new Date('2023-06-04T18:00:00Z'),
    tags: ["workout", "fitness", "plan"],
    read: getRandomBoolean()
  },
  {
    id: 5,
    title: "Recipe - Spaghetti Bolognese",
    content: "Ingredients: Spaghetti, ground beef, onion, garlic, tomato sauce, olive oil, salt, pepper\nInstructions: Cook spaghetti. Sauté onion and garlic. Add beef and cook until brown. Add tomato sauce and simmer. Serve with spaghetti.",
    createdAt: new Date('2023-06-05T12:15:00Z'),
    tags: ["recipe", "cooking", "food"],
    read: getRandomBoolean()
  },
  {
    id: 6,
    title: "Travel Itinerary",
    content: "Day 1: Arrival in Paris\nDay 2: Visit Eiffel Tower\nDay 3: Louvre Museum\nDay 4: Day trip to Versailles\nDay 5: Departure",
    createdAt: new Date('2023-06-06T08:00:00Z'),
    tags: ["travel", "itinerary", "vacation"],
    read: getRandomBoolean()
  },
  {
    id: 7,
    title: "Book List",
    content: "1. The Great Gatsby\n2. To Kill a Mockingbird\n3. 1984\n4. Pride and Prejudice\n5. The Catcher in the Rye",
    createdAt: new Date('2023-06-07T16:45:00Z'),
    tags: ["books", "reading", "list"],
    read: getRandomBoolean()
  },
  {
    id: 8,
    title: "Conference Agenda",
    content: "9:00 AM - Registration\n10:00 AM - Keynote Address\n11:00 AM - Panel Discussion\n12:30 PM - Lunch Break\n2:00 PM - Workshops\n5:00 PM - Closing Remarks",
    createdAt: new Date('2023-06-08T09:00:00Z'),
    tags: ["conference", "agenda", "schedule"],
    read: getRandomBoolean()
  },
  {
    id: 9,
    title: "Garden Planning",
    content: "Plant tomatoes, cucumbers, and peppers in the vegetable garden.\nAdd roses and tulips to the flower beds.\nInstall a new sprinkler system.",
    createdAt: new Date('2023-06-09T11:30:00Z'),
    tags: ["garden", "planning", "outdoors"],
    read: getRandomBoolean()
  },
  {
    id: 10,
    title: "Personal Goals",
    content: "1. Learn a new language\n2. Exercise regularly\n3. Save more money\n4. Travel to at least two new countries\n5. Read 20 books this year",
    createdAt: new Date('2023-06-10T15:00:00Z'),
    tags: ["goals", "personal", "self-improvement"],
    read: getRandomBoolean()
  },
  {
    id: 11,
    title: "Project Brainstorming",
    content: "Ideas for new app features:\n1. Dark mode\n2. User profiles\n3. Push notifications\n4. In-app messaging\n5. Customizable dashboards",
    createdAt: new Date('2023-06-11T13:15:00Z'),
    tags: ["project", "brainstorming", "ideas"],
    read: getRandomBoolean()
  },
  {
    id: 12,
    title: "House Chores",
    content: "1. Clean the kitchen\n2. Vacuum the living room\n3. Do the laundry\n4. Mow the lawn\n5. Wash the car",
    createdAt: new Date('2023-06-12T10:30:00Z'),
    tags: ["chores", "house", "cleaning"],
    read: getRandomBoolean()
  },
  {
    id: 13,
    title: "Birthday Party Plan",
    content: "1. Send out invitations\n2. Order the cake\n3. Buy decorations\n4. Plan games and activities\n5. Prepare party favors",
    createdAt: new Date('2023-06-13T18:45:00Z'),
    tags: ["party", "planning", "birthday"],
    read: getRandomBoolean()
  },
  {
    id: 14,
    title: "Work Notes",
    content: "Reviewed quarterly financial reports. Discussed marketing strategy for the next quarter. Agreed to increase the budget for social media ads.",
    createdAt: new Date('2023-06-14T09:00:00Z'),
    tags: ["work", "notes", "meeting"],
    read: getRandomBoolean()
  },
  {
    id: 15,
    title: "Tech Conference Highlights",
    content: "1. New AI technology developments\n2. Cloud computing trends\n3. Advances in cybersecurity\n4. Panel on diversity in tech\n5. Networking opportunities",
    createdAt: new Date('2023-06-15T14:00:00Z'),
    tags: ["tech", "conference", "highlights"],
    read: getRandomBoolean()
  },
  {
    id: 16,
    title: "Weekly Review",
    content: "Completed 4 out of 5 tasks. Need to focus more on project deadlines. Goal for next week: improve time management.",
    createdAt: new Date('2023-06-16T17:00:00Z'),
    tags: ["review", "weekly", "reflection"],
    read: getRandomBoolean()
  },
  {
    id: 17,
    title: "Event Planning",
    content: "Venue booked for June 25th. Catering service confirmed. Need to finalize the guest list and send out invites.",
    createdAt: new Date('2023-06-17T12:00:00Z'),
    tags: ["event", "planning", "organizing"],
    read: getRandomBoolean()
  },
  {
    id: 18,
    title: "Cooking Tips",
    content: "1. Use fresh ingredients\n2. Preheat your oven\n3. Season your food well\n4. Don't overcook meat\n5. Let baked goods cool before slicing",
    createdAt: new Date('2023-06-18T08:30:00Z'),
    tags: ["cooking", "tips", "kitchen"],
    read: getRandomBoolean()
  },
  {
    id: 19,
    title: "Movie Watchlist",
    content: "1. Inception\n2. The Matrix\n3. Interstellar\n4. The Godfather\n5. The Dark Knight\n6. Forrest Gump\n7. Schindler's List\n8. Fight Club",
    createdAt: new Date('2023-06-19T19:00:00Z'),
    tags: ["movies", "watchlist", "entertainment"],
    read: getRandomBoolean()
  },
  {
    id: 20,
    title: "Fitness Goals",
    content: "1. Run a marathon\n2. Increase bench press weight\n3. Improve flexibility\n4. Try a new sport\n5. Workout at least 4 times a week",
    createdAt: new Date('2023-06-20T06:45:00Z'),
    tags: ["fitness", "goals", "health"],
    read: getRandomBoolean()
  }
];
