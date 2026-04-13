// MBTI Test - Main Logic
let currentQ = 0;
let answers = {};
const TOTAL_Q = questions.length; // Dynamic from questions array

function showQuestion() {
    const q = questions[currentQ];
    document.getElementById('questionText').textContent = q.text;
    document.getElementById('currentQuestion').textContent = currentQ + 1;
    document.getElementById('totalQuestions').textContent = TOTAL_Q;

    // Progress based on current question position (1-indexed)
    const pct = ((currentQ + 1) / TOTAL_Q) * 100;
    document.getElementById('progressBar').style.width = pct + '%';

    document.getElementById('prevBtn').disabled = (currentQ === 0);

    const answered = answers.hasOwnProperty(q.id);
    document.getElementById('nextBtn').disabled = !answered;
    document.getElementById('nextBtn').textContent = (currentQ === TOTAL_Q - 1) ? 'Lihat Hasil' : 'Selanjutnya';

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (answered && parseInt(btn.dataset.value) === answers[q.id]) {
            btn.classList.add('selected');
        }
    });
}

function pickAnswer(value) {
    const q = questions[currentQ];
    answers[q.id] = parseInt(value);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.value) === parseInt(value));
    });

    document.getElementById('nextBtn').disabled = false;

    // If this is the last question, show results after short delay
    if (currentQ === TOTAL_Q - 1) {
        setTimeout(() => {
            showResults();
        }, 500);
    } else {
        // Auto-advance to next question
        setTimeout(() => {
            if (currentQ < TOTAL_Q - 1) {
                currentQ++;
                showQuestion();
            }
        }, 400);
    }
}

function nextQ() {
    // If on last question and answered, show results
    if (currentQ === TOTAL_Q - 1 && answers.hasOwnProperty(questions[currentQ].id)) {
        showResults();
    } else if (currentQ < TOTAL_Q - 1) {
        currentQ++;
        showQuestion();
    }
}

function prevQ() {
    if (currentQ > 0) {
        currentQ--;
        showQuestion();
    }
}

function calcScores() {
    const scores = {EI: 0, SN: 0, TF: 0, JP: 0};
    const maxScores = {EI: 0, SN: 0, TF: 0, JP: 0};

    questions.forEach(q => {
        const ans = answers[q.id] || 0;
        scores[q.dim] += ans * q.dir;
        maxScores[q.dim] += 3;
    });

    const result = {};
    for (let d of ['EI', 'SN', 'TF', 'JP']) {
        // Normalize to 0-100 scale (50 = neutral)
        result[d] = ((scores[d] + maxScores[d]) / (2 * maxScores[d])) * 100;
    }
    return result;
}

function getType() {
    const s = calcScores();
    return (s.EI >= 50 ? 'E' : 'I') +
           (s.SN >= 50 ? 'S' : 'N') +
           (s.TF >= 50 ? 'T' : 'F') +
           (s.JP >= 50 ? 'J' : 'P');
}

function showResults() {
    const type = getType();
    const info = typeDescriptions[type];
    const scores = calcScores();

    document.getElementById('typeLetter1').textContent = type[0];
    document.getElementById('typeLetter2').textContent = type[1];
    document.getElementById('typeLetter3').textContent = type[2];
    document.getElementById('typeLetter4').textContent = type[3];
    document.getElementById('typeName').textContent = info.name;
    document.getElementById('typeDescription').textContent = info.description;
    document.getElementById('famousPeople').textContent = info.famous;

    const container = document.getElementById('dimensionsContainer');
    container.innerHTML = '';

    const dims = [
        {k: 'EI', l: 'Extravert (E)', r: 'Introvert (I)'},
        {k: 'SN', l: 'Sensing (S)', r: 'iNtuition (N)'},
        {k: 'TF', l: 'Thinking (T)', r: 'Feeling (F)'},
        {k: 'JP', l: 'Judging (J)', r: 'Perceiving (P)'}
    ];

    dims.forEach(d => {
        const sc = scores[d.k];
        const left = sc >= 50;
        // sc is already 0-100, showing preference strength
        // For 50%, no preference. For 100%, full preference to left. For 0%, full preference to right.
        const displayPct = left ? sc : (100 - sc);

        const div = document.createElement('div');
        div.className = 'dimension-bar';
        div.innerHTML = `
            <div class="dimension-label">
                <span>${left ? d.l : d.r}</span>
                <span>${displayPct.toFixed(0)}%</span>
            </div>
            <div class="dimension-track">
                <div class="dimension-fill" style="width: ${displayPct}%"></div>
            </div>
        `;
        container.appendChild(div);
    });

    // Tampilkan detail dimensi
    const detailsContainer = document.getElementById('dimensionDetailsContainer');
    detailsContainer.innerHTML = '';

    const aspectIcons = {
        karir: '💼',
        pendidikan: '🎓',
        romansa: '💕',
        pertemanan: '👥',
        komunikasi: '💬',
        kepemimpinan: '👑',
        stres: '😰'
    };

    dims.forEach(d => {
        const sc = scores[d.k];
        const left = sc >= 50;
        const preference = left ? d.l.split(' ')[0] : d.r.split(' ')[0];
        const dimKey = d.k;
        const prefKey = left ? dimKey[0] : dimKey[1];
        
        const dimDetail = dimensionDetails[dimKey];
        const prefDetail = dimDetail[prefKey];
        
        if (!dimDetail || !prefDetail) return;

        const card = document.createElement('div');
        card.className = 'dimension-detail-card';
        
        let detailsHTML = `
            <h5>${dimDetail.name} <span class="dimension-type">${preference}</span></h5>
            <p class="dimension-description">${prefDetail.description}</p>
            <div class="dimension-detail-grid">
        `;

        for (const [aspect, desc] of Object.entries(prefDetail.details)) {
            const icon = aspectIcons[aspect] || '•';
            const aspectTitle = aspect.charAt(0).toUpperCase() + aspect.slice(1);
            detailsHTML += `
                <div class="dimension-detail-item">
                    <h6>${icon} ${aspectTitle}</h6>
                    <p>${desc}</p>
                </div>
            `;
        }

        detailsHTML += '</div>';
        card.innerHTML = detailsHTML;
        detailsContainer.appendChild(card);
    });

    const traits = document.getElementById('traitsList');
    traits.innerHTML = '';
    info.traits.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        traits.appendChild(li);
    });

    showSection('results');
}

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
    });

    window.scrollTo({top: 0, behavior: 'smooth'});
}

function startTest() {
    showSection('test');
    setTimeout(showQuestion, 100);
}

function resetTest() {
    currentQ = 0;
    answers = {};
    showSection('home');
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const type = getType();
    const info = typeDescriptions[type];
    const scores = calcScores();
    const W = doc.internal.pageSize.getWidth();
    const H = doc.internal.pageSize.getHeight();
    const margin = 20;
    let y = 20;

    function checkPageBreak(neededSpace) {
        if (y + neededSpace > H - 30) {
            doc.addPage();
            y = 20;
            return true;
        }
        return false;
    }

    // Header
    doc.setFillColor(74, 111, 165);
    doc.rect(0, 0, W, 40, 'F');
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text('HASIL TES MBTI', 20, 27);
    y = 55;
    doc.setTextColor(0, 0, 0);

    // Tipe MBTI
    doc.setFontSize(14);
    doc.text('Tipe Anda:', 20, y);
    y += 10;

    const chars = type.split('');
    const bw = 15, sp = 5, tw = (bw + sp) * 4, sx = (W - tw) / 2;
    chars.forEach((c, i) => {
        const x = sx + i * (bw + sp);
        doc.setFillColor(74, 111, 165);
        doc.rect(x, y, bw, bw, 'F');
        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        doc.text(c, x + 7.5, y + 11, {align: 'center'});
    });
    y += 25;
    doc.setTextColor(255, 107, 107);
    doc.setFontSize(16);
    doc.text(info.name, W / 2, y, {align: 'center'});
    y += 15;
    doc.setTextColor(0, 0, 0);

    // Deskripsi
    checkPageBreak(30);
    doc.setFontSize(14);
    doc.text('Deskripsi:', 20, y);
    y += 8;
    const descLines = doc.splitTextToSize(info.description, W - 40);
    doc.setFontSize(11);
    doc.text(descLines, 20, y);
    y += descLines.length * 6 + 10;

    // Skor Dimensi
    checkPageBreak(50);
    doc.setFontSize(14);
    doc.text('Skor Dimensi:', 20, y);
    y += 10;

    const dims = [
        {k: 'EI', l: 'Extravert (E)', r: 'Introvert (I)'},
        {k: 'SN', l: 'Sensing (S)', r: 'iNtuition (N)'},
        {k: 'TF', l: 'Thinking (T)', r: 'Feeling (F)'},
        {k: 'JP', l: 'Judging (J)', r: 'Perceiving (P)'}
    ];

    dims.forEach(d => {
        checkPageBreak(20);
        const sc = scores[d.k];
        const left = sc >= 50;
        const displayPct = left ? sc : (100 - sc);
        doc.setFontSize(11);
        doc.text(left ? d.l : d.r, 20, y);
        doc.text(displayPct.toFixed(0) + '%', W - 20, y, {align: 'right'});
        y += 3;
        doc.setDrawColor(200, 200, 200);
        doc.rect(20, y, W - 40, 8);
        doc.setFillColor(74, 111, 165);
        doc.rect(20, y, (W - 40) * displayPct / 100, 8, 'F');
        y += 15;
    });
    y += 5;

    // Karakteristik
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.text('Karakteristik Umum:', 20, y);
    y += 8;
    doc.setFontSize(11);
    info.traits.forEach((t, i) => {
        checkPageBreak(10);
        doc.text('• ' + t, 20, y);
        y += 7;
    });
    y += 5;

    // Tokoh Serupa
    checkPageBreak(20);
    doc.setFontSize(14);
    doc.text('Tokoh Terkenal dengan Tipe Anda:', 20, y);
    y += 8;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'italic');
    const famousLines = doc.splitTextToSize(info.famous, W - 40);
    doc.text(famousLines, 20, y);
    y += famousLines.length * 6 + 10;

    // Detail Dimensi - KARIR, PENDIDIKAN, ROMANSA, dll
    doc.setFont('helvetica', 'normal');
    checkPageBreak(20);
    doc.setFontSize(16);
    doc.setTextColor(74, 111, 165);
    doc.text('Penjelasan Detail Dimensi', 20, y);
    y += 10;
    doc.setTextColor(0, 0, 0);

    const aspectLabels = {
        karir: 'Karir',
        pendidikan: 'Pendidikan',
        romansa: 'Romansa',
        pertemanan: 'Pertemanan',
        komunikasi: 'Komunikasi',
        kepemimpinan: 'Kepemimpinan',
        stres: 'Penanganan Stres'
    };

    const aspectIcons = {
        karir: '[K]',
        pendidikan: '[P]',
        romansa: '[R]',
        pertemanan: '[T]',
        komunikasi: '[Kom]',
        kepemimpinan: '[Kep]',
        stres: '[S]'
    };

    dims.forEach(d => {
        const sc = scores[d.k];
        const left = sc >= 50;
        const dimKey = d.k;
        const prefKey = left ? dimKey[0] : dimKey[1];
        const preference = left ? d.l.split(' ')[0] : d.r.split(' ')[0];

        const dimDetail = dimensionDetails[dimKey];
        const prefDetail = dimDetail[prefKey];

        if (!dimDetail || !prefDetail) return;

        // Dimension header
        checkPageBreak(30);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(74, 111, 165);
        doc.text(`${dimDetail.name}: ${preference}`, 20, y);
        y += 7;
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'italic');
        const dimDescLines = doc.splitTextToSize(prefDetail.description, W - 40);
        doc.text(dimDescLines, 20, y);
        y += dimDescLines.length * 5 + 5;
        doc.setFont('helvetica', 'normal');

        // Detail aspects
        for (const [aspect, desc] of Object.entries(prefDetail.details)) {
            const label = aspectLabels[aspect] || aspect;
            const icon = aspectIcons[aspect] || '';

            checkPageBreak(35);
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text(`${icon} ${label}`, 25, y);
            y += 6;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            const detailLines = doc.splitTextToSize(desc, W - 50);
            doc.text(detailLines, 25, y);
            y += detailLines.length * 5 + 5;
        }

        y += 5;
    });

    // Footer on each page
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(9);
        doc.setTextColor(150, 150, 150);
        doc.text(
            `Halaman ${i} dari ${totalPages} | Tes MBTI Edukatif`,
            W / 2,
            H - 10,
            {align: 'center'}
        );
        doc.setTextColor(0, 0, 0);
    }

    doc.save('Hasil-MBTI-' + type + '.pdf');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== MBTI Test Initialization ===');
    console.log('Total questions:', questions.length);
    console.log('TOTAL_Q:', TOTAL_Q);
    console.log('Match:', questions.length === TOTAL_Q ? '✅' : '❌');

    // Bind events
    document.getElementById('startTestBtn').onclick = startTest;
    document.getElementById('retakeTest').onclick = resetTest;
    document.getElementById('downloadPdf').onclick = downloadPDF;
    document.getElementById('prevBtn').onclick = prevQ;
    document.getElementById('nextBtn').onclick = nextQ;

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.onclick = () => pickAnswer(btn.dataset.value);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = e => {
            e.preventDefault();
            const target = link.getAttribute('href').slice(1);
            showSection(target);
            if (target === 'test') setTimeout(showQuestion, 100);
        };
    });

    showSection('home');
    console.log('✅ MBTI Test Ready!');
});
