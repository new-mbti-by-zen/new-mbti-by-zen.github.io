// Detail penjelasan untuk setiap dimensi MBTI

const dimensionDetails = {
    EI: {
        name: "Energi & Interaksi Sosial",
        E: {
            title: "Extravert (E)",
            description: "Anda mendapat energi dari dunia luar dan interaksi sosial",
            details: {
                karir: "Bekerja baik dalam tim, suka kolaborasi dan brainstorming. Cocok untuk peran yang melibatkan komunikasi seperti sales, marketing, teaching, atau manajemen. Lebih suka meeting dan diskusi langsung.",
                pendidikan: "Belajar efektif melalui diskusi kelompok, presentasi, dan study tour. Suka bertanya dan berdebat di kelas. Lebih suka lingkungan belajar yang interaktif.",
                romansa: "Ekspresif dalam hubungan, suka melakukan aktivitas bersama pasangan. Mudah mengungkapkan perasaan dan membutuhkan waktu berkualitas bersama. Partner yang sosial dan energik.",
                pertemanan: "Memiliki lingkaran pertemanan yang luas. Mudah berkenalan dan membangun jaringan. Suka menjadi penghubung dalam grup. Energik di acara sosial.",
                komunikasi: "Berpikir sambil berbicara, suka berdiskusi untuk memproses ide. Cepat merespons dan ekstrovert dalam mengekspresikan pikiran. Suka telepon atau meeting langsung.",
                kepemimpinan: "Pemimpin yang visible dan approachable. Suka open-door policy, team building, dan komunikasi langsung. Memotivasi dengan energi dan antusiasme.",
                stres: "Mencari dukungan sosial saat stres. Suka berbicara dengan teman atau keluarga. Bisa merasa terisolasi jika terlalu lama sendirian. Butuh interaksi untuk recharge."
            }
        },
        I: {
            title: "Introvert (I)",
            description: "Anda mendapat energi dari waktu berkualitas dengan diri sendiri",
            details: {
                karir: "Bekerja baik secara mandiri atau dalam tim kecil. Cocok untuk peran yang membutuhkan fokus mendalam seperti programming, writing, research, atau desain. Lebih suka email daripada meeting.",
                pendidikan: "Belajar efektif melalui studi mandiri, reading, dan refleksi. Suka mengerjakan tugas individual. Lebih suka lingkungan belajar yang tenang dan terstruktur.",
                romansa: "Hubungan yang dalam dan bermakna. Butuh waktu sendiri untuk recharge. Ekspresikan cinta melalui tindakan bukan kata-kata. Partner yang setia dan pendengar yang baik.",
                pertemanan: "Beberapa teman dekat daripada banyak kenalan. Hubungan yang mendalam dan autentik. Loyal kepada teman-teman pilihan. Lebih suka meetup one-on-one.",
                komunikasi: "Berpikir dulu sebelum berbicara, lebih suka komunikasi tertulis. Reflektif dan terukur dalam merespons. Suka email atau chat yang memberikan waktu untuk berpikir.",
                kepemimpinan: "Pemimpin yang tenang dan analitis. Memimpin dengan contoh dan kedalaman pemikiran. Suka memberikan otonomi kepada tim. Memotivasi dengan visi yang jelas.",
                stres: "Butuh waktu sendiri untuk memproses stres. Suka journaling, meditasi, atau hobby solo. Bisa kewalahan jika terlalu banyak interaksi. Butuh ruang untuk recharge."
            }
        }
    },
    SN: {
        name: "Pengumpulan Informasi & Pemrosesan",
        S: {
            title: "Sensing (S)",
            description: "Anda fokus pada fakta, detail, dan pengalaman nyata",
            details: {
                karir: "Praktis dan berorientasi pada hasil. Cocok untuk peran hands-on seperti engineering, accounting, medicine, atau skilled trades. Suka proses yang jelas dan terukur. Ahli dalam eksekusi detail.",
                pendidikan: "Belajar melalui contoh konkret, praktek langsung, dan pengalaman nyata. Suka langkah-demi-langkah dan instruksi jelas. Lebih suka aplikasi praktis daripada teori abstrak.",
                romansa: "Realistis dalam hubungan, tunjukkan cinta melalui tindakan nyata. Suka rutinitas bersama dan momen sederhana. Partner yang dapat diandalkan dan praktis dalam menyelesaikan masalah.",
                pertemanan: "Teman yang bisa diandalkan untuk bantuan praktis. Suka aktivitas konkret bersama teman. Fokus pada momen saat ini. Loyal dan konsisten dalam persahabatan.",
                komunikasi: "Spesifik dan detail dalam berkomunikasi. Suka contoh nyata dan data. Langsung pada inti masalah. Percaya pada pengalaman dan fakta yang terbukti.",
                kepemimpinan: "Pemimpin yang hands-on dan detail-oriented. Fokus pada proses dan kualitas. Memotivasi dengan target yang jelas dan terukur. Ahli dalam troubleshooting praktis.",
                stres: "Fokus pada solusi praktis untuk masalah. Suka exercise, cooking, atau aktivitas fisik. Bisa frustrasi jika terlalu banyak ketidakpastian. Butuh struktur dan kejelasan."
            }
        },
        N: {
            title: "iNtuition (N)",
            description: "Anda fokus pada pola, kemungkinan, dan gambaran besar",
            details: {
                karir: "Visioner dan inovatif. Cocok untuk peran yang membutuhkan kreativitas seperti entrepreneurship, consulting, strategy, atau creative fields. Suka brainstorming dan eksplorasi ide baru.",
                pendidikan: "Belajar melalui konsep, teori, dan koneksi antar ide. Suka diskusi filosofis dan eksplorasi kemungkinan. Lebih suka memahami 'mengapa' daripada hanya 'bagaimana'.",
                romansa: "Romantis dan idealis dalam hubungan. Suka diskusi mendalam tentang masa depan. Partner yang inspiratif dan penuh imajinasi. Terhubung pada level intelektual dan spiritual.",
                pertemanan: "Teman untuk diskusi mendalam dan eksplorasi ide. Suka berbicara tentang masa depan dan kemungkinan. Terhubung dengan orang yang berbagi visi. Teman yang inspiratif.",
                komunikasi: "Metaforis dan konseptual dalam berbicara. Suka berbicara tentang ide dan kemungkinan. Sering melompat dari topik ke topik. Fokus pada makna tersembunyi.",
                kepemimpinan: "Pemimpin visioner yang inspiratif. Fokus pada inovasi dan perubahan. Memotivasi dengan visi masa depan yang menarik. Ahli dalam melihat tren dan peluang.",
                stres: "Bisa overthinking dan catastrophizing saat stres. Suka creative outlets seperti writing, art, atau music. Butuh waktu untuk eksplorasi ide. Bisa kehilangan kontak dengan realitas."
            }
        }
    },
    TF: {
        name: "Pengambilan Keputusan",
        T: {
            title: "Thinking (T)",
            description: "Anda membuat keputusan berdasarkan logika dan objektivitas",
            details: {
                karir: "Analitis dan objektif. Cocok untuk peran yang membutuhkan analisis kritis seperti law, finance, engineering, atau data science. Suka memecahkan masalah kompleks dengan logika.",
                pendidikan: "Belajar melalui analisis kritis dan debat intelektual. Suka evaluasi objektif dan kriteria jelas. Lebih suka argumen berbasis bukti daripada pertimbangan pribadi.",
                romansa: "Rasional dalam hubungan, cari partner yang menghargai kejujuran intelektual. Suka diskusi mendalam. Ekspresikan cinta melalui problem-solving dan dukungan praktis.",
                pertemanan: "Teman yang jujur dan langsung. Suka debat intelektual dan diskusi. Hargai kompetisi sehat. Loyal tetapi tidak takut memberikan kritik membangun.",
                komunikasi: "Langsung dan logis dalam berkomunikasi. Fokus pada fakta dan kebenaran. Bisa terlihat blun tapi tidak bermaksud menyakiti. Hargai kejujuran over politeness.",
                kepemimpinan: "Pemimpin yang adil dan objektif. Fokus pada efisiensi dan keadilan. Memotivasi dengan standar tinggi dan feedback langsung. Ahli dalam keputusan sulit.",
                stres: "Menjadi lebih kaku dan kontrol saat stres. Suka problem-solving dan analisis. Bisa terlihat dingin padahal sedang overwhelmed. Butuh waktu untuk memproses emosi."
            }
        },
        F: {
            title: "Feeling (F)",
            description: "Anda membuat keputusan berdasarkan perasaan dan harmoni",
            details: {
                karir: "Empatik dan kooperatif. Cocok untuk peran yang membantu orang lain seperti counseling, HR, healthcare, education, atau social work. Suka lingkungan kerja yang harmonis.",
                pendidikan: "Belajar efektif dalam lingkungan yang suportif dan kolaboratif. Suka proyek yang membantu orang lain. Lebih suka feedback yang konstruktif dan personal.",
                romansa: "Hangat dan ekspresif dalam hubungan. Prioritaskan harmoni dan koneksi emosional. Partner yang supportive dan pengertian. Ekspresikan cinta melalui kata-kata dan perhatian.",
                pertemanan: "Teman yang empathetic dan supportive. Suka membantu dan mendengarkan. Loyal dan berkomitmen. Suka gathering yang mempererat hubungan. Diplomat dalam konflik.",
                komunikasi: "Diplomatis dan penuh pertimbangan dalam berbicara. Fokus pada dampak emosional. Suka mendengar dan validasi perasaan. Hargai keharmonisan dalam percakapan.",
                kepemimpinan: "Pemimpin yang empatik dan supportive. Fokus pada pengembangan orang. Memotivasi dengan appreciation dan dukungan. Ahli dalam membangun tim yang kohesif.",
                stres: "Mengambil masalah secara personal saat stres. Butuh dukungan emosional dan validasi. Suka berbicara dengan teman dekat. Bisa menghindari konflik yang sebenarnya perlu dihadapi."
            }
        }
    },
    JP: {
        name: "Gaya Hidup & Struktur",
        J: {
            title: "Judging (J)",
            description: "Anda suka kehidupan yang terencana dan terstruktur",
            details: {
                karir: "Terorganisir dan berorientasi pada deadline. Cocok untuk peran yang membutuhkan perencanaan seperti project management, administration, atau consulting. Suka menyelesaikan tugas lebih awal.",
                pendidikan: "Belajar dengan jadwal dan rencana yang jelas. Suka silabus terstruktur dan deadline jelas. Lebih suka mengerjakan tugas lebih awal. Ahli dalam time management.",
                romansa: "Terencana dan berkomitmen dalam hubungan. Suka merencanakan masa depan bersama. Partner yang dapat diandalkan dan konsisten. Ekspresikan cinta melalui komitmen dan stabilitas.",
                pertemanan: "Teman yang bisa diandalkan dan konsisten. Suka merencanakan meetup dan acara. Loyal dan berkomitmen pada persahabatan. Suka rutinitas sosial yang teratur.",
                komunikasi: "Terstruktur dan terorganisir dalam berkomunikasi. Suka agenda dan tujuan jelas. Langsung pada poin. Hargai komitmen dan follow-through dalam percakapan.",
                kepemimpinan: "Pemimpin yang terorganisir dan decisif. Fokus pada hasil dan deadline. Memotivasi dengan struktur dan kejelasan. Ahli dalam eksekusi rencana.",
                stres: "Menjadi lebih kaku dan kontrol saat stres. Suka membuat list dan rencana. Bisa frustrasi dengan perubahan mendadak. Butuh struktur untuk merasa tenang."
            }
        },
        P: {
            title: "Perceiving (P)",
            description: "Anda suka kehidupan yang fleksibel dan spontan",
            details: {
                karir: "Fleksibel dan adaptif. Cocok untuk peran yang membutuhkan kreativitas dan adaptabilitas seperti freelancing, consulting, creative arts, atau entrepreneurship. Suka deadline yang fleksibel.",
                pendidikan: "Belajar baik di bawah tekanan deadline. Suka eksplorasi berbagai topik. Lebih suka lingkungan belajar yang fleksibel. Ahli dalam brainstorming dan eksplorasi ide.",
                romansa: "Spontan dan fleksibel dalam hubungan. Suka kejutan dan petualangan. Partner yang seru dan adaptif. Ekspresikan cinta melalui pengalaman baru dan spontanitas.",
                pertemanan: "Teman yang seru dan spontan. Suka hangout tanpa rencana. Mudah bergaul dan adaptif. Suka mencoba hal baru dengan teman. Fleksibel dengan komitmen sosial.",
                komunikasi: "Spontan dan eksploratif dalam berbicara. Suka brainstorming dan diskusi terbuka. Bisa melompat dari topik ke topik. Hargai kebebasan berekspresi.",
                kepemimpinan: "Pemimpin yang fleksibel dan adaptif. Fokus pada eksplorasi opsi. Memotivasi dengan kebebasan dan kreativitas. Ahli dalam improvisasi dan adaptasi.",
                stres: "Bisa procrastinate dan avoid masalah saat stres. Suka distractions seperti gaming atau browsing. Bisa merasa terperangkap dengan terlalu banyak struktur. Butuh kebebasan untuk merasa tenang."
            }
        }
    }
};
