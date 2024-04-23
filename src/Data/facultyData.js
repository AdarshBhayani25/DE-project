const facultyMembers = [
    // Computer Science
    { id: 1, name: "Dr. John Doe", department: "Computer Science", image: "/images/faculty/john.jpg", title: "Professor" },
    { id: 2, name: "Dr. Emily White", department: "Computer Science", image: "/images/faculty/emily.jpg", title: "Senior Lecturer" },
    { id: 3, name: "Dr. Alice Johnson", department: "Computer Science", image: "/images/faculty/alice.jpg", title: "Assistant Professor" },
    { id: 4, name: "Dr. Bob Brown", department: "Computer Science", image: "/images/faculty/bob.jpg", title: "Lecturer" },
    { id: 5, name: "Dr. Charlie Davis", department: "Computer Science", image: "/images/faculty/charlie.jpg", title: "Professor" },

    // Mechanical Engineering
    { id: 6, name: "Dr. Jane Smith", department: "Mechanical Engineering", image: "/images/faculty/jane.jpg", title: "Associate Professor" },
    { id: 7, name: "Dr. Isabella King", department: "Mechanical Engineering", image: "/images/faculty/isabella.jpg", title: "Lecturer" },
    { id: 8, name: "Dr. Kyle Moore", department: "Mechanical Engineering", image: "/images/faculty/kyle.jpg", title: "Senior Lecturer" },
    { id: 9, name: "Dr. Lily Young", department: "Mechanical Engineering", image: "/images/faculty/lily.jpg", title: "Professor" },
    { id: 10, name: "Dr. Mason Carter", department: "Mechanical Engineering", image: "/images/faculty/mason.jpg", title: "Professor" },

    // Electrical Engineering
    { id: 11, name: "Dr. Frank Black", department: "Electrical Engineering", image: "/images/faculty/frank.jpg", title: "Professor" },
    { id: 12, name: "Dr. Grace Hall", department: "Electrical Engineering", image: "/images/faculty/grace.jpg", title: "Research Associate" },
    { id: 13, name: "Dr. Henry Wright", department: "Electrical Engineering", image: "/images/faculty/henry.jpg", title: "Assistant Professor" },
    { id: 14, name: "Dr. Joseph Lee", department: "Electrical Engineering", image: "/images/faculty/joseph.jpg", title: "Associate Professor" },
    { id: 15, name: "Dr. Nora Queen", department: "Electrical Engineering", image: "/images/faculty/nora.jpg", title: "Assistant Professor" },

    // Civil Engineering
    { id: 16, name: "Dr. Oscar Wilde", department: "Civil Engineering", image: "/images/faculty/oscar.jpg", title: "Professor" },
    { id: 17, name: "Dr. Paul Newman", department: "Civil Engineering", image: "/images/faculty/paul.jpg", title: "Associate Professor" },
    { id: 18, name: "Dr. Quinn Eric", department: "Civil Engineering", image: "/images/faculty/quinn.jpg", title: "Assistant Professor" },
    { id: 19, name: "Dr. Rachel Green", department: "Civil Engineering", image: "/images/faculty/rachel.jpg", title: "Lecturer" },
    { id: 20, name: "Dr. Steven Fry", department: "Civil Engineering", image: "/images/faculty/steven.jpg", title: "Senior Lecturer" },

    // Aerospace Engineering
    { id: 21, name: "Dr. Tim Cook", department: "Aerospace Engineering", image: "/images/faculty/tim.jpg", title: "Professor" },
    { id: 22, name: "Dr. Uma Thurman", department: "Aerospace Engineering", image: "/images/faculty/uma.jpg", title: "Associate Professor" },
    { id: 23, name: "Dr. Victor Frank", department: "Aerospace Engineering", image: "/images/faculty/victor.jpg", title: "Assistant Professor" },
    { id: 24, name: "Dr. Walter White", department: "Aerospace Engineering", image: "/images/faculty/walter.jpg", title: "Lecturer" },
    { id: 25, name: "Dr. Xena Warrior", department: "Aerospace Engineering", image: "/images/faculty/xena.jpg", title: "Senior Lecturer" },

    { id: 26, name: "Dr. Abby Normal", department: "Chemical Engineering", image: "/images/faculty/abby.jpg", title: "Professor" },
    { id: 27, name: "Dr. Bruce Wayne", department: "Chemical Engineering", image: "/images/faculty/bruce.jpg", title: "Associate Professor" },
    { id: 28, name: "Dr. Clara Oswald", department: "Chemical Engineering", image: "/images/faculty/clara.jpg", title: "Assistant Professor" },
    { id: 29, name: "Dr. Dexter Morgan", department: "Chemical Engineering", image: "/images/faculty/dexter.jpg", title: "Lecturer" },
    { id: 30, name: "Dr. Elle Driver", department: "Chemical Engineering", image: "/images/faculty/elle.jpg", title: "Senior Lecturer" },

    // Biotechnology
    { id: 31, name: "Dr. Fiona Glenanne", department: "Biotechnology", image: "/images/faculty/fiona.jpg", title: "Professor" },
    { id: 32, name: "Dr. Gordon Freeman", department: "Biotechnology", image: "/images/faculty/gordon.jpg", title: "Associate Professor" },
    { id: 33, name: "Dr. Hermione Granger", department: "Biotechnology", image: "/images/faculty/hermione.jpg", title: "Assistant Professor" },
    { id: 34, name: "Dr. Ivan Vanko", department: "Biotechnology", image: "/images/faculty/ivan.jpg", title: "Lecturer" },
    { id: 35, name: "Dr. Jessica Jones", department: "Biotechnology", image: "/images/faculty/jessica.jpg", title: "Senior Lecturer" },

    // Environmental Engineering
    { id: 36, name: "Dr. Katniss Everdeen", department: "Environmental Engineering", image: "/images/faculty/katniss.jpg", title: "Professor" },
    { id: 37, name: "Dr. Luke Skywalker", department: "Environmental Engineering", image: "/images/faculty/luke.jpg", title: "Associate Professor" },
    { id: 38, name: "Dr. Marty McFly", department: "Environmental Engineering", image: "/images/faculty/marty.jpg", title: "Assistant Professor" },
    { id: 39, name: "Dr. Norman Bates", department: "Environmental Engineering", image: "/images/faculty/norman.jpg", title: "Lecturer" },
    { id: 40, name: "Dr. Olivia Benson", department: "Environmental Engineering", image: "/images/faculty/olivia.jpg", title: "Senior Lecturer" },

    // Nuclear Engineering
    { id: 41, name: "Dr. Peter Parker", department: "Nuclear Engineering", image: "/images/faculty/peter.jpg", title: "Professor" },
    { id: 42, name: "Dr. Quentin Coldwater", department: "Nuclear Engineering", image: "/images/faculty/quentin.jpg", title: "Associate Professor" },
    { id: 43, name: "Dr. Rick Sanchez", department: "Nuclear Engineering", image: "/images/faculty/rick.jpg", title: "Assistant Professor" },
    { id: 44, name: "Dr. Sarah Connor", department: "Nuclear Engineering", image: "/images/faculty/sarah.jpg", title: "Lecturer" },
    { id: 45, name: "Dr. Tony Stark", department: "Nuclear Engineering", image: "/images/faculty/tony.jpg", title: "Senior Lecturer" },

    // Materials Science
    { id: 46, name: "Dr. Ulrich Stern", department: "Materials Science", image: "/images/faculty/ulrich.jpg", title: "Professor" },
    { id: 47, name: "Dr. Victor Von Doom", department: "Materials Science", image: "/images/faculty/victor.jpg", title: "Associate Professor" },
    { id: 48, name: "Dr. Walter Bishop", department: "Materials Science", image: "/images/faculty/walter.jpg", title: "Assistant Professor" },
    { id: 49, name: "Dr. Xander Harris", department: "Materials Science", image: "/images/faculty/xander.jpg", title: "Lecturer" },
    { id: 50, name: "Dr. Yennefer of Vengerberg", department: "Materials Science", image: "/images/faculty/yennefer.jpg", title: "Senior Lecturer" },
];

export default facultyMembers;
