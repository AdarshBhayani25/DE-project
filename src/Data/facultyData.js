const facultyMembers = [
    // Computer Engineering
    {
      id: 1,
      name: "Prof. Kajal .S. Patel",
      title: "Associate Professor",
      department: "Computer Engineering",
      image: "https://www.vgecg.ac.in/images/faculties/com/ksp.png",
      cabin: "HOD Office",
      availability: false, // true if available, false if not
      timetable: [
        {
          day: "Monday",
          time: "9:00 AM - 11:00 AM",
          subject: "Introduction to CS",
        },
        {
          day: "Tuesday",
          time: "10:00 AM - 12:00 PM",
          subject: "Data Structures",
        },
        // more schedule entries...
      ],
      bio: "Proff. Kajal S. Patel hold a Ph.D. in Computer Information Technology Engineering from Gujarat Technological University (2018),an M.E. in Computer Science & Engineering from L.D. College of Engineering, Ahmedabad (Gujarat Technological University, 2011), and a B.E. in Computer Engineering from SVNIT, Surat (South Gujarat University, 2000). ",
      block: "D",
      officeImg: "/images/offices/D-302.jpg",
    },
    {
      id: 2,
      name: "Prof. Jalpa M. Ramavat",
      department: "Computer Engineering",
      image: "https://www.vgecg.ac.in/images/faculties/com/jmr.png",
      title: "Assistant Professor",
      cabin: "D103",
      availability: false, // true if available, false if not
      timetable: [
        {
          day: "Monday",
          time: "9:00 AM - 11:00 AM",
          subject: "Introduction to CS",
        },
        {
          day: "Tuesday",
          time: "10:00 AM - 12:00 PM",
          subject: "Data Structures",
        },
        // more schedule entries...
      ],
      bio: "Proff. Jalpa M. Ramavat is an Assistant Professor with 14 years of experience in education and computer science. She holds a B.E. in Computer Engineering from Atmiya Institute of Technology & Science, graduating with First Class with Distinction in 2004, and an M.Tech in Computer Engineering from Gujarat Technological University, completed in 2015. ",
      block: "D",
      officeImg: "/images/offices/D-302.jpg",
    },
    {
      id: 3,
      name: "Prof. Nakul R. Dave",
      department: "Computer Engineering",
      image: "https://www.vgecg.ac.in/images/faculties/com/nrd.png",
      title: "Assistant Professor",
      cabin: "D203",
      availability: false, // true if available, false if not
      timetable: [
        {
          day: "Monday",
          time: "9:00 AM - 11:00 AM",
          subject: "Introduction to CS",
        },
        {
          day: "Tuesday",
          time: "10:00 AM - 12:00 PM",
          subject: "Data Structures",
        },
        // more schedule entries...
      ],
      bio: "Proff. Nakul Dave is an Assistant Professor with 13 years of experience and a strong background in Computer Science. He earned his B.E. in Computer Engineering from Saurashtra University in 2009 and his M.E. in Computer Science and Engineering from Gujarat Technological University in 2012, both with distinction. His areas of interest include Text Mining and Distributed Systems.",
      block: "D",
      officeImg: "/images/offices/D-302.jpg",
    },
    {
      id: 4,
      name: "Prof. Uttam Chauhan",
      department: "Computer Engineering",
      image: "https://www.vgecg.ac.in/images/faculties/com/ugc.png",
      title: "Assistant Professor",
      cabin: "D204",
      availability: false, // true if available, false if not
      timetable: [
        {
          day: "Monday",
          time: "9:00 AM - 11:00 AM",
          subject: "Introduction to CS",
        },
        {
          day: "Tuesday",
          time: "10:00 AM - 12:00 PM",
          subject: "Data Structures",
        },
        // more schedule entries...
      ],
      bio: "He has extensive teaching experience, having worked as a Lecturer at CCET, Wadhwan City (2004-2006), and as an Assistant Professor at Charotar University of Science & Technology (2007-2011) and VGEC (2011-present). Mr. Chauhan is proficient in programming languages such as C, Python, SQL, and PL/SQL, and has strong expertise in text summarization and data analytics.",
      block: "D",
      officeImg: "/images/offices/D-302.jpg",
    },
    {
      id: 5,
      name: "Prof. Amit H. Rathod",
      department: "Computer Engineering",
      image: "https://www.vgecg.ac.in/images/faculties/com/ar.png",
      title: "Assistant Professor",
      cabin: "D207",
      availability: false, // true if available, false if not
      timetable: [
        {
          day: "Monday",
          time: "9:00 AM - 11:00 AM",
          subject: "Introduction to CS",
        },
        {
          day: "Tuesday",
          time: "10:00 AM - 12:00 PM",
          subject: "Data Structures",
        },
        // more schedule entries...
      ],
      bio: "His areas of interest include design thinking, databases, and programming. Mr. Rathod has served as an Assistant Professor in the Information Technology Department at Parul Institute of Engineering & Technology from June 2013 to September 2016. Additionally, he has taught Computer Architecture and Compiler Design, including practical sessions, to PG Diploma students specializing in Cyber Security at Raksha Shakti University.",
      block: "D",
      officeImg: "/images/offices/D-302.jpg",
    },
  
    // Administrative Block
    {
      id: 6,
      name: "Dr. Jane Smith",
      department: "Administrative Block",
      image: "/images/faculty/jane.jpg",
      title: "Associate Professor",
    },
    {
      id: 7,
      name: "Dr. Isabella King",
      department: "Administrative Block",
      image: "/images/faculty/isabella.jpg",
      title: "Lecturer",
    },
    {
      id: 8,
      name: "Dr. Kyle Moore",
      department: "Administrative Block",
      image: "/images/faculty/kyle.jpg",
      title: "Senior Lecturer",
    },
    {
      id: 9,
      name: "Dr. Lily Young",
      department: "Administrative Block",
      image: "/images/faculty/lily.jpg",
      title: "Professor",
    },
    {
      id: 10,
      name: "Dr. Mason Carter",
      department: "Administrative Block",
      image: "/images/faculty/mason.jpg",
      title: "Professor",
    },
  
    // Information Technology
    {
      id: 11,
      name: "Prof. Vibha D. Patel",
      department: "Information Technology",
      image: "https://vgecg.ac.in/images/faculties/it/vdp.png",
      title: "Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Dr. Vibha Patel is a Professor with 7 years of experience, specializing in languages and compilers for high-performance computing, grid computing, and cloud computing. She earned her Bachelor of Engineering in Computer Science from L.D. College of Engineering, Gujarat University, Ahmedabad, in 1998, and her Master of Engineering in Computer Science from Sardar Patel University, Vallabh Vidyanagar, in 2004, with a thesis on comparing PCA and Subspace LDA for face recognition. She completed her Ph.D. in Computer Science and Engineering from the Indian Institute of Technology, Kanpur, in 2015, with a dissertation on \"JolokiaC++: An Annotation-based Compiler Framework for GPGPU.\" Dr. Patel's skills and knowledge encompass machine learning, high-performance computing, deep learning, and compiler design.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
    {
      id: 12,
      name: "Prof. Jasvant R. Dave",
      department: "Information Technology",
      image: "https://vgecg.ac.in/images/faculties/it/jrd.png",
      title: "Assistant Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Mr. Jashvantkumar Dave is an Assistant Professor with 8 years of experience, specializing in web and mobile application development, ad hoc networks, and IoT. He holds a B.E. in Information Technology from S.P. College of Engineering, Visnagar (First Class with Distinction, 2005), and an M.Tech in Computer Science & Engineering from Nirma University (First Class with Distinction, 2013). He is currently pursuing a Ph.D. at Gujarat Technological University. Mr. Dave has served as a Lecturer at NSVKMS MCA College, Visnagar (2005-2007), and LDRP Institute of Technology & Research, Gandhinagar (2013-2016), and as an Assistant Professor at Nirma University (2007-2013) and Vishwakarma Government Engineering College, Chandkheda (2016-present). He is proficient in programming with C++, Core Java, and Visual Studio, and has strong skills in teaching and public speaking. He is fluent in Gujarati, Hindi, and English.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
    {
      id: 13,
      name: "Dr. Dhaval J. Varia",
      department: "Information Technology",
      image: "https://vgecg.ac.in/images/faculties/it/djv.png",
      title: "Assistant Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Mr. Dhavalkumar Varia is an Assistant Professor with 14 years of experience, specializing in C and C++ programming. He holds a Bachelor of Engineering in Information Technology from HNGU and a Master of Engineering in Computer Engineering from S.P. University, and he is currently pursuing a Ph.D. from Gujarat Technological University. His areas of interest include the application of wireless communication and networking. Mr. Varia has taught various courses, including C, C++, Mobile Computing, Data Mining, Internet Security, and Computer Networks. His expertise and extensive experience make him a valuable asset in the field of computer engineering education.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
    {
      id: 14,
      name: "Prof. Nikunj C. Gamit",
      department: "Information Technology",
      image: "https://vgecg.ac.in/images/faculties/it/ncg.png",
      title: "Associate Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Mr. Nikunj Gamit is an Assistant Professor with 8 years of experience, specializing in soft computing and image processing. He holds a Master's Degree in Computer Engineering (M.Tech.) with Distinction from SVNIT, Surat (2008), and a Bachelor's Degree in Information Technology (B.E.) with First Class from DDIT, Nadiad (2004). He is currently pursuing a Ph.D. since 2017. Mr. Gamit has served as an Assistant Professor at Vishwakarma Government Engineering College, Chandkheda, for 2 years, teaching various subjects at the undergraduate and postgraduate levels, including C/C++, Java, Computer and Network Security, Data Structures, Software Engineering, Database Management Systems, and Image Processing. His strong academic background and teaching expertise make him a valuable educator in the field of computer engineering.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
    {
      id: 15,
      name: "Prof. Manmitsingh C. Zala",
      department: "Information Technology",
      image: "https://vgecg.ac.in/images/faculties/it/mcz.png",
      title: "Assistant Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Mr. Manmitsinh Zala is an Assistant Professor with 6 years of experience, specializing in Big Data, NoSQL, and IoT. He holds a Bachelor's degree in Engineering (B.E.) and a Master's degree in Computer Science and Engineering (M.E.). His academic background and professional interests align closely with emerging technologies, particularly in the realm of data management and Internet of Things (IoT). As an educator, Mr. Zala is committed to equipping students with the knowledge and skills necessary to thrive in these rapidly evolving fields.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
  
    // Electrical Engineering
    {
      id: 16,
      name: "Prof. Saurabh N. Pandya",
      department: "Electrical Engineering",
      image: "https://vgecg.ac.in/images/faculties/e/snp.png",
      title: "Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Dr. Saurabh Pandya is a Professor with 26 years of experience, specializing in the application of power electronics in electrical machines and power systems. He holds a B.E., M.E., and Ph.D. in Electrical Engineering. With 20 years of work experience, Dr. Pandya is proficient in MATLAB simulation and power electronics and drives. His extensive teaching experience and deep expertise make him a distinguished educator and researcher in the field of electrical engineering.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
    {
      id: 17,
      name: "Prof. Hiren D. Mehta",
      department: "Electrical Engineering",
      image: "https://vgecg.ac.in/images/faculties/e/hdm.png",
      title: "Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Mr. Hiren Mehta is a Professor with 29 years of experience, specializing in electrical power systems and optimization using AI techniques. He holds a Ph.D. and has dedicated nearly three decades to advancing research and education in these areas. Mr. Mehta's extensive experience and expertise in applying artificial intelligence to optimize electrical power systems make him a valuable asset in the field of electrical engineering. His contributions have significantly enriched both his students and the academic community.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
    {
      id: 18,
      name: "Prof. Roopal R. Kapadia",
      department: "Electrical Engineering",
      image: "https://vgecg.ac.in/images/faculties/e/rrk.png",
      title: "Assistant Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Ms. Roopal Kapadia is an Associate Professor with 30 years of experience, specializing in electrical power systems, machines, microcontrollers, circuits, and networks. She holds an M.E. in Electrical Engineering and has dedicated 24 years to teaching. Ms. Kapadia is proficient in Gujarati, English, Hindi, and Sanskrit, with the ability to speak, write, and read in all four languages. Her extensive experience and broad expertise make her a valuable educator in the field of electrical engineering.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
    {
      id: 19,
      name: "Prof. Yashvant B. Bhavsar",
      department: "Electrical Engineering",
      image: "https://vgecg.ac.in/images/faculties/e/ybb.png",
      title: "Assistant Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Mr. Yashvant Bhavsar is an Associate Professor with 27 years of experience in electrical engineering, focusing on power systems and microcontrollers. He holds a B.E. in Electrical Engineering from Government Engineering College, Modasa (First Class, 1995), and an M.Tech in Electrical Power System from the Indian Institute of Roorkee (First Class with Distinction, 2007). His industry experience includes working as a Project Engineer at Power and Instruments (Guj) P. Ltd., Ahmedabad. He has held teaching positions as a Lecturer at L. E. College of Engineering, Morbi, and Government Engineering College, Sector-28, Gandhinagar. Currently, he is an Associate Professor at Government Engineering College, Modasa, and Vishwakarma Government Engineering College, Ahmedabad. Proficient in MATLAB and other open-source software, Mr. Bhavsar has strong skills in teaching, lecturing, training, and individual counseling, and is fluent in English, Hindi, and Gujarati.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
    {
      id: 20,
      name: "Prof. Neepa P. Shah",
      department: "Electrical Engineering",
      image: "https://vgecg.ac.in/images/faculties/e/nps.png",
      title: "Assistant Professor",
      cabin: "HOD Office",
          availability: false,  // true if available, false if not
          timetable: [
              { day: 'Monday', time: '9:00 AM - 11:00 AM', subject: 'Introduction to CS' },
              { day: 'Tuesday', time: '10:00 AM - 12:00 PM', subject: 'Data Structures' },
              // more schedule entries...
          ],
          bio: "Mrs. Neepa Shah is an Associate Professor with 26 years of experience, specializing in deregulated electrical power systems, smart grids, and non-conventional energy sources. She holds an M.E. in Electrical Engineering from the Faculty of Technology, M.S. University, Baroda (First Class with Distinction, 2008), and a B.E. in Electrical Engineering from L.E. College, Morbi (First Class with Distinction, 1996). Fluent in English, Hindi, Gujarati, and Sanskrit, Mrs. Shah brings extensive knowledge and expertise to her teaching and research, making significant contributions to the field of electrical engineering.",
          block: "D",
          officeImg: "/images/offices/D-302.jpg"
    },
  
    // Electronics & Communication
    {
      id: 21,
      name: "Dr. Arun B. Nandurbarkar",
      department: "Electronics & Communication",
      image: "https://vgecg.ac.in/images/faculties/ec/abn.png",
      title: "Professor",
    },
    {
      id: 22,
      name: "Dr. Alpesh H. Dafda",
      department: "Electronics & Communication",
      image: "https://vgecg.ac.in/images/faculties/ec/ahd.png",
      title: "Associate Professor",
    },
    {
      id: 23,
      name: "Prof. Krunal P. Acharya",
      department: "Electronics & Communication",
      image: "https://vgecg.ac.in/images/faculties/ec/kpa.png",
      title: "Assistant Professor",
    },
    {
      id: 24,
      name: "Prof. Urvisha N. Fatak",
      department: "Electronics & Communication",
      image: "https://vgecg.ac.in/images/faculties/ec/unf.png",
      title: "Assistant Professor",
    },
    {
      id: 25,
      name: "Prof. Jagruti K. Naik",
      department: "Electronics & Communication",
      image: "https://vgecg.ac.in/images/faculties/ec/jkn.png",
      title: "Assistant Professor",
    },
  
    // Chemical Engineering
    {
      id: 26,
      name: "Prof. Femina J. Patel",
      department: "Chemical Engineering",
      image: "https://vgecg.ac.in/images/faculties/ch/fjp.png",
      title: "Professor",
    },
    {
      id: 27,
      name: "Prof. Suchen B. Thakore",
      department: "Chemical Engineering",
      image: "https://vgecg.ac.in/images/faculties/ch/sbt.png",
      title: "Associate Professor",
    },
    {
      id: 28,
      name: "Prof. Beena K. Sheth",
      department: "Chemical Engineering",
      image: "https://vgecg.ac.in/images/faculties/ch/bks.png",
      title: "Assistant Professor",
    },
    {
      id: 29,
      name: "Prof. Dolly R. Gandhi",
      department: "Chemical Engineering",
      image: "https://vgecg.ac.in/images/faculties/ch/drg.png",
      title: "Assistant Professor",
    },
    {
      id: 30,
      name: "Prof. Zoher Z. Painter",
      department: "Chemical Engineering",
      image:
        "/images/fahttps://vgecg.ac.in/images/faculties/ch/zzp.pngculty/elle.jpg",
      title: "Assistant Professor",
    },
  
    // Power Electronics
    {
      id: 31,
      name: "Prof. Indrajit N. Trivedi",
      department: "Power Electronics",
      image: "https://vgecg.ac.in/images/faculties/pe/int.png",
      title: "Professor",
    },
    {
      id: 32,
      name: "Prof. Vipul G. Patel",
      department: "Power Electronics",
      image: "https://vgecg.ac.in/images/faculties/pe/vgp.png",
      title: "Associate Professor",
    },
    {
      id: 33,
      name: "Prof. Nirav D. Mehta",
      department: "Power Electronics",
      image: "https://vgecg.ac.in/images/faculties/pe/ndm.png",
      title: "Assistant Professor",
    },
    {
      id: 34,
      name: "Prof. Samir H. Trivedi",
      department: "Power Electronics",
      image: "https://vgecg.ac.in/images/faculties/pe/sht.png",
      title: "LAssistant Professor",
    },
    {
      id: 35,
      name: "Prof. Ashish P. Patel",
      department: "Power Electronics",
      image: "https://vgecg.ac.in/images/faculties/pe/app.png",
      title: "Assistant Professor",
    },
  
    // Instrumentation & Control
    {
      id: 36,
      name: "Prof. Mehul K. Shah",
      department: "Instrumentation & Control",
      image: "https://vgecg.ac.in/images/faculties/ic/mks.png",
      title: "Associate Professor",
    },
    {
      id: 37,
      name: "Prof. Mukesh M. Shrma",
      department: "Instrumentation & Control",
      image: "https://vgecg.ac.in/images/faculties/ic/mms.png",
      title: "Associate Professor",
    },
    {
      id: 38,
      name: "Prof. Manoj Khediya",
      department: "Instrumentation & Control",
      image: "https://vgecg.ac.in/images/faculties/ic/mdk.png",
      title: "Assistant Professor",
    },
    {
      id: 39,
      name: "Prof. Mamta V. Patel",
      department: "Instrumentation & Control",
      image: "https://vgecg.ac.in/images/faculties/ic/mvp.png",
      title: "Associate Professor",
    },
    {
      id: 40,
      name: "Prof. Kamakshi Kaul",
      department: "Instrumentation & Control",
      image: "https://vgecg.ac.in/images/faculties/ic/kvk.png",
      title: "Associate Professor",
    },
  
    // Mechanical Engineering
    {
      id: 41,
      name: "Prof. Prahnesh K. Brahmbhatt",
      department: "Mechanical Engineering",
      image: "https://vgecg.ac.in/images/faculties/me/pkb.png",
      title: "Professor",
    },
    {
      id: 42,
      name: "Prof. Mayank I. Vyas",
      department: "Mechanical Engineering",
      image: "https://vgecg.ac.in/images/faculties/me/miv.png",
      title: "Professor",
    },
    {
      id: 43,
      name: "Prof. Rupal P. Vyasa",
      department: "Mechanical Engineering",
      image: "https://vgecg.ac.in/images/faculties/me/rpv.png",
      title: "Assistant Professor",
    },
    {
      id: 44,
      name: "Prof. Rajendra K. Patel",
      department: "Mechanical Engineering",
      image: "https://vgecg.ac.in/images/faculties/me/rkp.png",
      title: "Associate Professor",
    },
    {
      id: 45,
      name: "Prof. Kintu R. Patel",
      department: "Mechanical Engineering",
      image: "https://vgecg.ac.in/images/faculties/me/krp.png",
      title: "Associate Professor",
    },
  
    // Civil Engineering
    {
      id: 46,
      name: "Prof. Navneet P. Singh",
      department: "Civil Engineering",
      image: "https://vgecg.ac.in/images/faculties/civil/nps.png",
      title: "Professor",
    },
    {
      id: 47,
      name: "Prof.  Shailesh A. Trivedi",
      department: "Civil Engineering",
      image: "https://vgecg.ac.in/images/faculties/civil/sat.png",
      title: "Associate Professor",
    },
    {
      id: 48,
      name: "Prof. Upendrasingh R. Singh",
      department: "Civil Engineering",
      image: "https://vgecg.ac.in/images/faculties/civil/urs.png",
      title: "Assistant Professor",
    },
    {
      id: 49,
      name: "Prof. Amiben N. Dave",
      department: "Civil Engineering",
      image: "https://vgecg.ac.in/images/faculties/civil/and.png",
      title: "Associate Professor",
    },
    {
      id: 50,
      name: "Prof. Girish D. Jagad",
      department: "Civil Engineering",
      image: "https://vgecg.ac.in/images/faculties/civil/gdj.png",
      title: "Associate Professor",
    },
  ];
  
  export default facultyMembers;
  