// Results - MBTI type descriptions and traits

const typeDescriptions = {
    ISTJ: {
        name: "The Inspector",
        description: "Anda adalah orang yang praktis, bertanggung jawab, dan dapat diandalkan. Anda menghargai tradisi dan aturan, serta memiliki ingatan yang baik untuk detail. Anda bekerja dengan tekun dan menyelesaikan apa yang Anda mulai.",
        traits: [
            "Bertanggung jawab dan dapat diandalkan",
            "Perhatian terhadap detail",
            "Menghargai tradisi dan loyalitas",
            "Praktis dan realistis",
            "Terorganisir dan terencana"
        ],
        famous: "George Washington, Angela Merkel, Warren Buffett"
    },
    ISFJ: {
        name: "The Protector",
        description: "Anda adalah orang yang hangat, peduli, dan bertanggung jawab. Anda sangat memperhatikan perasaan orang lain dan selalu siap membantu. Anda menghargai harmoni dan kerjasama dalam lingkungan Anda.",
        traits: [
            "Peduli dan empati",
            "Dapat diandalkan dalam membantu orang lain",
            "Perhatian terhadap kebutuhan orang lain",
            "Loyal dan berkomitmen",
            "Praktis dalam memberikan bantuan"
        ],
        famous: "Mother Teresa, Queen Elizabeth II, Beyoncé"
    },
    INFJ: {
        name: "The Counselor",
        description: "Anda adalah orang yang visioner, idealis, dan sangat intuitif. Anda memiliki pemahaman mendalam tentang orang lain dan ingin membuat dunia menjadi tempat yang lebih baik. Anda kreatif dan memiliki prinsip yang kuat.",
        traits: [
            "Visioner dan idealis",
            "Intuitif tentang orang lain",
            "Kreatif dan imajinatif",
            "Berprinsip dan memiliki nilai kuat",
            "Ingin membuat perbedaan"
        ],
        famous: "Nelson Mandela, Martin Luther King Jr., Lady Gaga"
    },
    INTJ: {
        name: "The Mastermind",
        description: "Anda adalah orang yang strategis, analitis, dan visioner. Anda memiliki kemampuan alami untuk melihat gambaran besar dan merencanakan langkah-langkah untuk mencapai tujuan. Anda mandiri dan menentukan.",
        traits: [
            "Strategis dan analitis",
            "Mandiri dan menentukan",
            "Visioner dengan rencana jelas",
            "Standar tinggi untuk diri sendiri",
            "Inovatif dan kreatif"
        ],
        famous: "Elon Musk, Isaac Newton, Christopher Nolan"
    },
    ISTP: {
        name: "The Craftsman",
        description: "Anda adalah orang yang praktis, observan, dan suka memahami cara kerja sesuatu. Anda tenang di bawah tekanan dan mahir dalam memecahkan masalah secara langsung. Anda menghargai kebebasan dan kemandirian.",
        traits: [
            "Praktis dan hands-on",
            "Tenang di bawah tekanan",
            "Pemecah masalah yang efisien",
            "Mandiri dan suka kebebasan",
            "Observan terhadap detail"
        ],
        famous: "Bruce Lee, Clint Eastwood, Tom Cruise"
    },
    ISFP: {
        name: "The Composer",
        description: "Anda adalah orang yang lembut, sensitif, dan kreatif. Anda menghargai keindahan dan mengalami hidup melalui panca indera. Anda baik hati dan menghargai kebebasan untuk mengekspresikan diri.",
        traits: [
            "Lembut dan sensitif",
            "Kreatif dan artistik",
            "Menghargai keindahan",
            "Baik hati dan dermawan",
            "Menghidupkan momen saat ini"
        ],
        famous: "Michael Jackson, Bob Dylan, Frida Kahlo"
    },
    INFP: {
        name: "The Healer",
        description: "Anda adalah orang yang idealis, kreatif, dan penuh kasih. Anda memiliki dunia batin yang kaya dan selalu mencari makna hidup. Anda setia pada nilai-nilai Anda dan ingin membantu orang lain berkembang.",
        traits: [
            "Idealis dan penuh kasih",
            "Kreatif dan imajinatif",
            "Setia pada nilai pribadi",
            "Pencari makna hidup",
            "Empati yang mendalam"
        ],
        famous: "William Shakespeare, John Lennon, Princess Diana"
    },
    INTP: {
        name: "The Architect",
        description: "Anda adalah orang yang analitis, logis, dan suka mengeksplorasi ide-ide. Anda memiliki keingintahuan intelektual yang besar dan menikmati memecahkan masalah kompleks. Anda mandiri dan orisinal dalam berpikir.",
        traits: [
            "Analitis dan logis",
            "Keingintahuan intelektual tinggi",
            "Pemikir orisinal",
            "Mandiri dalam ide",
            "Suka memecahkan masalah kompleks"
        ],
        famous: "Albert Einstein, Bill Gates, Marie Curie"
    },
    ESTP: {
        name: "The Dynamo",
        description: "Anda adalah orang yang energik, praktis, dan suka aksi. Anda hidup di saat ini dan menikmati pengalaman langsung. Anda pandai membaca situasi dan cepat mengambil keputusan. Anda suka tantangan dan variasi.",
        traits: [
            "Energik dan suka aksi",
            "Praktis dan realistis",
            "Cepat dalam mengambil keputusan",
            "Suka tantangan dan variasi",
            "Pandai membaca situasi"
        ],
        famous: "Ernest Hemingway, Eddie Murphy, Madonna"
    },
    ESFP: {
        name: "The Performer",
        description: "Anda adalah orang yang ceria, ramah, dan suka menghibur. Anda menikmati hidup dan berbagi kebahagiaan dengan orang lain. Anda praktis, spontan, dan membuat segala sesuatu menjadi lebih menyenangkan.",
        traits: [
            "Ceria dan menyenangkan",
            "Ramah dan suka membantu",
            "Spontan dan praktis",
            "Suka menghibur orang lain",
            "Menghargai pengalaman langsung"
        ],
        famous: "Marilyn Monroe, Elvis Presley, Adele"
    },
    ENFP: {
        name: "The Champion",
        description: "Anda adalah orang yang antusias, kreatif, dan penuh kemungkinan. Anda melihat hidup sebagai tempat yang penuh peluang dan selalu mencari cara baru untuk mengekspresikan diri. Anda hangat dan menghargai hubungan mendalam.",
        traits: [
            "Antusias dan penuh energi",
            "Kreatif dan imajinatif",
            "Melihat banyak kemungkinan",
            "Hangat dan perhatian",
            "Menghargai hubungan mendalam"
        ],
        famous: "Robin Williams, Walt Disney, Oprah Winfrey"
    },
    ENTP: {
        name: "The Visionary",
        description: "Anda adalah orang yang inovatif, strategis, dan suka berdebat. Anda menikmati mengeksplorasi ide-ide baru dan menantang status quo. Anda cerdas, cepat berpikir, dan mahir melihat berbagai sisi masalah.",
        traits: [
            "Inovatif dan kreatif",
            "Suka mengeksplorasi ide baru",
            "Cerdas dan cepat berpikir",
            "Menantang status quo",
            "Melihat berbagai sisi masalah"
        ],
        famous: "Thomas Edison, Mark Twain, Leonardo da Vinci"
    },
    ESTJ: {
        name: "The Supervisor",
        description: "Anda adalah orang yang terorganisir, praktis, dan bertanggung jawab. Anda menghargai aturan dan struktur, serta memiliki kemampuan alami untuk memimpin dan mengorganisir. Anda bekerja keras dan mengharapkan yang sama dari orang lain.",
        traits: [
            "Terorganisir dan terencana",
            "Praktis dan realistis",
            "Pemimpin alami",
            "Menghargai aturan dan struktur",
            "Bertanggung jawab dan kerja keras"
        ],
        famous: "Henry Ford, Judge Judy, James Monroe"
    },
    ESFJ: {
        name: "The Provider",
        description: "Anda adalah orang yang peduli, sosial, dan bertanggung jawab. Anda memperhatikan kebutuhan orang lain dan senang membantu. Anda menghargai harmoni, tradisi, dan hubungan yang baik dengan orang lain.",
        traits: [
            "Peduli dan suka membantu",
            "Sosial dan ramah",
            "Bertanggung jawab",
            "Menghargai harmoni",
            "Perhatian terhadap orang lain"
        ],
        famous: "Taylor Swift, Jennifer Garner, Hugh Jackman"
    },
    ENFJ: {
        name: "The Teacher",
        description: "Anda adalah orang yang karismatik, inspiratif, dan peduli. Anda memiliki kemampuan alami untuk memimpin dan menginspirasi orang lain. Anda empatik dan ingin membantu orang lain mencapai potensi terbaik mereka.",
        traits: [
            "Karismatik dan inspiratif",
            "Pemimpin yang peduli",
            "Empati terhadap orang lain",
            "Inspiratif dan memotivasi",
            "Membantu orang lain berkembang"
        ],
        famous: "Barack Obama, Martin Luther King Jr., Oprah Winfrey"
    },
    ENTJ: {
        name: "The Commander",
        description: "Anda adalah orang yang tegas, strategis, dan born leader. Anda memiliki visi yang jelas dan kemampuan untuk mengorganisir sumber daya guna mencapainya. Anda analitis, efisien, dan mengharapkan yang terbaik dari diri sendiri dan orang lain.",
        traits: [
            "Tegas dan strategis",
            "Pemimpin alami",
            "Visioner dengan rencana jelas",
            "Analitis dan efisien",
            "Standar tinggi untuk semua"
        ],
        famous: "Steve Jobs, Margaret Thatcher, Gordon Ramsay"
    }
};
