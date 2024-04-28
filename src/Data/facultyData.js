const facultyMembers = [
    // Computer Engineering
    {
        id: 1,
        name: "Prof. Kajal .S. Patel",
        title: "Associate Professor",
        department: "Computer Engineering",
        image: "https://www.vgecg.ac.in/images/faculties/com/ksp.png",
        cabin: "HOD Office",
        availability: false,  // true if available, false if not
        timetable: [
            { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
            { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
            // more schedule entries...
        ],
        bio: "Dr. John Doe has a Ph.D. in Computer Science focusing on artificial intelligence and machine learning. He has published over 30 papers in prestigious journals.",
        block: "D",
        officeImg: "/images/offices/D-302.jpg"
    },
    { id: 2, name: "Prof. Jalpa M. Ramavat", department: "Computer Engineering", image: "https://www.vgecg.ac.in/images/faculties/com/jmr.png", title: "Assistant Professor" },
    { id: 3, name: "Prof. Nakul R. Dave", department: "Computer Engineering", image: "https://www.vgecg.ac.in/images/faculties/com/nrd.png", title: "Assistant Professor" },
    { id: 4, name: "Prof. Uttam Chauhan", department: "Computer Engineering", image: "https://www.vgecg.ac.in/images/faculties/com/ugc.png", title: "Assistant Professor" },
    { id: 5, name: "Prof. Amit H. Rathod", department: "Computer Engineering", image: "https://www.vgecg.ac.in/images/faculties/com/ar.png", title: "Assistant Professor" },

    // Administrative Block
    { id: 6, name: "Dr. Jane Smith", department: "Administrative Block", image: "/images/faculty/jane.jpg", title: "Associate Professor" },
    { id: 7, name: "Dr. Isabella King", department: "Administrative Block", image: "/images/faculty/isabella.jpg", title: "Lecturer" },
    { id: 8, name: "Dr. Kyle Moore", department: "Administrative Block", image: "/images/faculty/kyle.jpg", title: "Senior Lecturer" },
    { id: 9, name: "Dr. Lily Young", department: "Administrative Block", image: "/images/faculty/lily.jpg", title: "Professor" },
    { id: 10, name: "Dr. Mason Carter", department: "Administrative Block", image: "/images/faculty/mason.jpg", title: "Professor" },

    // Information Technology
    { id: 11, name: "Dr. Frank Black", department: "Information Technology", image: "/images/faculty/frank.jpg", title: "Professor" },
    { id: 12, name: "Dr. Grace Hall", department: "Information Technology", image: "/images/faculty/grace.jpg", title: "Research Associate" },
    { id: 13, name: "Dr. Henry Wright", department: "Information Technology", image: "/images/faculty/henry.jpg", title: "Assistant Professor" },
    { id: 14, name: "Dr. Joseph Lee", department: "Information Technology", image: "/images/faculty/joseph.jpg", title: "Associate Professor" },
    { id: 15, name: "Dr. Nora Queen", department: "Information Technology", image: "/images/faculty/nora.jpg", title: "Assistant Professor" },

    // Electrical Engineering
    { id: 16, name: "Dr. Oscar Wilde", department: "Electrical Engineering", image: "/images/faculty/oscar.jpg", title: "Professor" },
    { id: 17, name: "Dr. Paul Newman", department: "Electrical Engineering", image: "/images/faculty/paul.jpg", title: "Associate Professor" },
    { id: 18, name: "Dr. Quinn Eric", department: "Electrical Engineering", image: "/images/faculty/quinn.jpg", title: "Assistant Professor" },
    { id: 19, name: "Dr. Rachel Green", department: "Electrical Engineering", image: "/images/faculty/rachel.jpg", title: "Lecturer" },
    { id: 20, name: "Dr. Steven Fry", department: "Electrical Engineering", image: "/images/faculty/steven.jpg", title: "Senior Lecturer" },

    // Electronics & Communication
    { id: 21, name: "Dr. Tim Cook", department: "Electronics & Communication", image: "/images/faculty/tim.jpg", title: "Professor" },
    { id: 22, name: "Dr. Uma Thurman", department: "Electronics & Communication", image: "/images/faculty/uma.jpg", title: "Associate Professor" },
    { id: 23, name: "Dr. Victor Frank", department: "Electronics & Communication", image: "/images/faculty/victor.jpg", title: "Assistant Professor" },
    { id: 24, name: "Dr. Walter White", department: "Electronics & Communication", image: "/images/faculty/walter.jpg", title: "Lecturer" },
    { id: 25, name: "Dr. Xena Warrior", department: "Electronics & Communication", image: "/images/faculty/xena.jpg", title: "Senior Lecturer" },

    // Chemical Engineering
    { id: 26, name: "Dr. Abby Normal", department: "Chemical Engineering", image: "/images/faculty/abby.jpg", title: "Professor" },
    { id: 27, name: "Dr. Bruce Wayne", department: "Chemical Engineering", image: "/images/faculty/bruce.jpg", title: "Associate Professor" },
    { id: 28, name: "Dr. Clara Oswald", department: "Chemical Engineering", image: "/images/faculty/clara.jpg", title: "Assistant Professor" },
    { id: 29, name: "Dr. Dexter Morgan", department: "Chemical Engineering", image: "/images/faculty/dexter.jpg", title: "Lecturer" },
    { id: 30, name: "Dr. Elle Driver", department: "Chemical Engineering", image: "/images/faculty/elle.jpg", title: "Senior Lecturer" },

    // Power Electronics
    { id: 31, name: "Dr. Fiona Glenanne", department: "Power Electronics", image: "/images/faculty/fiona.jpg", title: "Professor" },
    { id: 32, name: "Dr. Gordon Freeman", department: "Power Electronics", image: "/images/faculty/gordon.jpg", title: "Associate Professor" },
    { id: 33, name: "Dr. Hermione Granger", department: "Power Electronics", image: "/images/faculty/hermione.jpg", title: "Assistant Professor" },
    { id: 34, name: "Dr. Ivan Vanko", department: "Power Electronics", image: "/images/faculty/ivan.jpg", title: "Lecturer" },
    { id: 35, name: "Dr. Jessica Jones", department: "Power Electronics", image: "/images/faculty/jessica.jpg", title: "Senior Lecturer" },

    // Instrumentation & Control
    { id: 36, name: "Dr. Katniss Everdeen", department: "Instrumentation & Control", image: "/images/faculty/katniss.jpg", title: "Professor" },
    { id: 37, name: "Dr. Luke Skywalker", department: "Instrumentation & Control", image: "/images/faculty/luke.jpg", title: "Associate Professor" },
    { id: 38, name: "Dr. Marty McFly", department: "Instrumentation & Control", image: "/images/faculty/marty.jpg", title: "Assistant Professor" },
    { id: 39, name: "Dr. Norman Bates", department: "Instrumentation & Control", image: "/images/faculty/norman.jpg", title: "Lecturer" },
    { id: 40, name: "Dr. Olivia Benson", department: "Instrumentation & Control", image: "/images/faculty/olivia.jpg", title: "Senior Lecturer" },

    // Mechanical Engineering
    { id: 41, name: "Dr. Peter Parker", department: "Mechanical Engineering", image: "/images/faculty/peter.jpg", title: "Professor" },
    { id: 42, name: "Dr. Quentin Coldwater", department: "Mechanical Engineering", image: "/images/faculty/quentin.jpg", title: "Associate Professor" },
    { id: 43, name: "Dr. Rick Sanchez", department: "Mechanical Engineering", image: "/images/faculty/rick.jpg", title: "Assistant Professor" },
    { id: 44, name: "Dr. Sarah Connor", department: "Mechanical Engineering", image: "/images/faculty/sarah.jpg", title: "Lecturer" },
    { id: 45, name: "Dr. Tony Stark", department: "Mechanical Engineering", image: "/images/faculty/tony.jpg", title: "Senior Lecturer" },

    // Civil Engineering
    { id: 46, name: "Dr. Ulrich Stern", department: "Civil Engineering", image: "/images/faculty/ulrich.jpg", title: "Professor" },
    { id: 47, name: "Dr. Victor Von Doom", department: "Civil Engineering", image: "/images/faculty/victor.jpg", title: "Associate Professor" },
    { id: 48, name: "Dr. Walter Bishop", department: "Civil Engineering", image: "/images/faculty/walter.jpg", title: "Assistant Professor" },
    { id: 49, name: "Dr. Xander Harris", department: "Civil Engineering", image: "/images/faculty/xander.jpg", title: "Lecturer" },
    { id: 50, name: "Dr. Yennefer of Vengerberg", department: "Civil Engineering", image: "/images/faculty/yennefer.jpg", title: "Senior Lecturer" },
];

export default facultyMembers;
