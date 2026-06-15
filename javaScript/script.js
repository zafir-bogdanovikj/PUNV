const challengeDatabase = [
    {
        category: "Ментално здравје 🧠",
        title: "Природно сидро",
        duration: 180, points: 30,
        subtasks: ["Излези на балкон или застани до отворен прозорец.", "Затвори ги очите точно 3 минути.", "Фокусирај се и изброј 3 различни звуци кои доаѓаат од надвор."]
    },
    {
        category: "Стрес и анксиозност 🧘‍♂️",
        title: "Вежба за дишење 4-7-8",
        duration: 120, points: 25,
        subtasks: ["Вдиши длабоко преку носот во траење од 4 секунди.", "Задржи го здивот во белите дробови 7 секунди.", "Полека и целосно издиши преку устата 8 секунди. Повтори го ова 3 пати."]
    },
    {
        category: "Дигитална благосостојба 📱",
        title: "Карантин за уреди",
        duration: 1800, points: 60,
        subtasks: ["Однеси го телефонот во соседната соба.", "Стави го длабоко во некоја фиока или под перница.", "Врати се во твојата соба и обиди се да издржиш 30 минути без уредот."]
    },
    {
        category: "Односи со врсници 👥",
        title: "Зона без телефон во живо",
        duration: 900, points: 80,
        subtasks: ["При средба со другар денес, извади го телефонот од раце.", "Стави го уредот длабоко во ранецот со исклучен тон.", "Помини ги првите 15 минути од средбата во 100% жив муабет."]
    },
    {
        category: "Осаменост 🏡",
        title: "Генерациски муабет",
        duration: 900, points: 70,
        subtasks: ["Остави го телефонот на бирото.", "Оди во дневната соба кај твоите родители, баба или дедо.", "Прашај ги директно 'Како ви помина денот?' и сослушај ги 15 минути."]
    },
    {
        category: "Осаменост 🏡",
        title: "Заедничка трпеза",
        duration: 1200, points: 90,
        subtasks: ["Помогни им на твоите домашни околу поставувањето на приборот за јадење.", "Седни на масата за следниот оброк заедно со семејството.", "Издржи го целиот оброк без телефонот да биде на масата."]
    },
    {
        category: "Физичка активност 🏃‍♂️",
        title: "Истражувач на маалото",
        duration: 900, points: 80,
        subtasks: ["Облечи ги патиките и излези пред зграда или куќа.", "Изоди една патека околу твоето маало по која обично никогаш не пешачиш.", "Не ставај слушалки со музика во ушите."]
    },
    {
        category: "Физичка активност 🏃‍♂️",
        title: "Танц во соба",
        duration: 240, points: 35,
        subtasks: ["Пушти ја твојата омилена најбрза песна во собата.", "Стани од столот и танцувај или скокај слободно во нејзиниот ритам.", "Издржи во движење сѐ додека песната не заврши целосно."]
    },
    {
        category: "Здрави навики 🍏",
        title: "Природна ужинка",
        duration: 180, points: 25,
        subtasks: ["Отвори го делот за овошје и зеленчук во кујната.", "Одбери едно јаболко, банана или портокал.", "Измиј го убаво и изеди го како ужинка наместо чипс или чоколадо."]
    },
    {
        category: "Спиење 🛌",
        title: "Вечерно аналогно читање",
        duration: 600, points: 40,
        subtasks: ["Пред да ги изгаснеш светлата за спиење, легни во кревет.", "Земи обична книга, лектира или некое списание.", "Прочитај точно 3 страници хартија пред да ги затвориш очите."]
    },
    {
        category: "Спиење 🛌",
        title: "Фати го утринското сонце",
        duration: 120, points: 25,
        subtasks: ["Веднаш штом ќе станеш од кревет наутро, тргни се од телефонот.", "Отвори ги ширум ролетните и прозорецот во собата.", "Гледај надвор во природната светлина 2 минути за да се разбуди организмот."]
    },
    {
        category: "Самодоверба ✨",
        title: "Потсетник на бирото",
        duration: 300, points: 35,
        subtasks: ["Земи едно мало празно самолепливо ливче и фломастер.", "Нацртај на него еден голем пехар, медал или голема ѕвезда и напиши за што и истиот.", "Залепи го на твоето работно биро како симбол на твојот личен напредок."]
    },
    {
        category: "Училишен стрес 📚",
        title: "Помодоро учење",
        duration: 1500, points: 90,
        subtasks: ["Намести го тајмерот на точно 25 минути.", "Отвори ја книгата или тетратката и учи без никакво отворање на социјални мрежи.", "Кога ќе изѕвони, означи ја задачата како успешна."]
    },
    {
        category: "Училишен стрес 📚",
        title: "Чиста работна зона",
        duration: 420, points: 35,
        subtasks: ["Пријди до твоето биро или место каде што пишуваш домашни задачи.", "Собери ги сите стари листови, празни шишиња, лушпи и отпадоци.", "Фрли ги во канта за да добиеш чист простор без визуелен притисок."]
    },
    {
        category: "Социјална поддршка 🤝",
        title: "Помош низ домот",
        duration: 600, points: 50,
        subtasks: ["Погледни околу себе во куќата.", "Направи едно мало корисно дело без никој од родителите да ти побара (на пр. фрли го ѓубрето).", "Придонеси кон домашната заедница."]
    },
    {
        category: "Емоционална писменост 🧠🎭",
        title: "Вечерна емоционална ревизија",
        duration: 180, points: 25,
        subtasks: ["Кога ќе легнеш во кревет пред спиење, исклучи го телефонот.", "Врати го филмот од целиот ден наназад во главата.", "Наброј во себе 3 различни емоции кои ги почувствува денес."]
    },
    {
        category: "Баланс онлајн/офлајн ⚖️",
        title: "Аналогно хоби во соба",
        duration: 900, points: 65,
        subtasks: ["Најди во твојата соба предмет што не работи на струја ниту на батерии (Рубикова коцка, карти, лист за цртање).", "Седни на бирото и занимавај се со тоа непрекинато 15 минути.", "Уживај во активноста без дигитални прекини."]
    },
    {
        category: "Баланс онлајн/офлајн ⚖️",
        title: "Блок часови без екран",
        duration: 7200, points: 180,
        subtasks: ["Донеси одлука да направиш целосна дигитална пауза.", "Исклучи го компјутерот и заклучи го телефонот.", "Помини ги следните 2 часа во куќата занимавајќи се со учење, средување или хоби."]
    }
];

const hbscFacts = [
    "Проблематичното користење на социјалните мрежи е директно поврзано со пониско ниво на животно задоволство и полошо ментално здравје кај младите.",
    "Според HBSC International, речиси една третина од тинејџерите во Европа чувствуваат екстремен притисок од училишните обврски.",
    "Недоволното спиење во училишните денови е глобален проблем кај младите. Повеќе од половина од 15-годишниците страдаат од 'социјален џет-лег' поради екрани.",
    "Честите онлајн контакти со непознати луѓе на социјалните мрежи значително го зголемуваат ризикот од сајбер-булинг кај адолесцентите.",
    "HBSC студиите покажуваат дека дигиталниот детокс и офлајн поддршката од семејството се клучни штитови против тинејџерска депресија.",
    "Податоците на МК HBSC покажуваат алармантен пад на менталното здравје кај младите во Македонија, особено во периодот помеѓу 11 и 15 години.",
    "Дури 57% од 15-годишните девојчиња во Македонија пријавуваат честа психолошка и емоционална депресивност речиси секој ден.",
    "6 од 10 тинејџери во Македонија се соочуваат со неделни психосоматски проблеми: главоболки, нервоза, проблеми со сон и слаба концентрација.",
    "Истражувањата во Македонија покажуваат дека поддршката од возрасните (наставници и родители) за младите кои се соочуваат со притисок е во сериозен пад.",
    "Младите во Македонија кои практикуваат почести офлајн активности (семејни оброци, спорт без телефон) покажуваат многу повисока среќа и самодоверба."
];

let currentChallengeIndex = 0;
let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
let skipTokens = parseInt(localStorage.getItem('skipTokens')) || 1;
let countdownInterval = null;
let liveClockInterval = null;
let isChallengeActive = false;
let remainingSeconds = 0;


window.onload = function() {
    updateUIElements();
    displayCurrentChallengeInfo();
    setupVisibilityTracker();
    startLiveClock();
    showWelcomeModal();
};
function showWelcomeModal() {
    if (!localStorage.getItem('welcomeSeen')) {
        document.getElementById('welcome-modal').classList.remove('hidden');
    }
}

function closeWelcomeModal() {
    localStorage.setItem('welcomeSeen', 'true');
    document.getElementById('welcome-modal').classList.add('hidden');
}

function startLiveClock() {
    liveClockInterval = setInterval(() => {
        const now = new Date();
        const hrs = now.getHours().toString().padStart(2, '0');
        const mins = now.getMinutes().toString().padStart(2, '0');
        const secs = now.getSeconds().toString().padStart(2, '0');
        const clockEl = document.getElementById('live-clock');
        if (clockEl) clockEl.innerText = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

function updateUIElements() {
    const pointsText = document.getElementById('points-display');
    const skipsText = document.getElementById('skips-display');
    if (pointsText) pointsText.innerText = `Поени: ⭐ ${totalPoints}`;
    if (skipsText) skipsText.innerText = `Џокери: 🃏 ${skipTokens}`;
}

function displayCurrentChallengeInfo() {
    let savedIndex = getChallengeIndex();

    if (savedIndex !== null) {
        currentChallengeIndex = parseInt(savedIndex);
    } else {
        generateAndSaveNewChallengeIndex();
    }

    const currentChallenge = challengeDatabase[currentChallengeIndex];
    const minutesDisplay = Math.round(currentChallenge.duration / 60);

    const homeHeader = document.getElementById('home-challenge-title');
    if (homeHeader) homeHeader.innerText = currentChallenge.title;

    const titleElement = document.getElementById('main-challenge-title');
    if (titleElement) {
        titleElement.innerHTML = `<small style="color: #a855f7; font-weight: bold;">Област: ${currentChallenge.category}</small><br>Заврши ја мисијата за да освоиш поени!`;
    }

    const activeTitle = document.getElementById('active-title');
    if (activeTitle) activeTitle.innerText = `${currentChallenge.title} (${currentChallenge.category})`;

    const startBtn = document.getElementById('start-btn');
    if (startBtn) startBtn.innerText = `Започни мисија (${minutesDisplay} мин / +${currentChallenge.points} поени)`;

    const factElement = document.getElementById('hbsc-fact');
    if (factElement) factElement.innerText = hbscFacts[currentChallengeIndex % hbscFacts.length];

    const subtasksContainer = document.getElementById('subtasks-container');
    if (subtasksContainer) {
        subtasksContainer.innerHTML = "";
        currentChallenge.subtasks.forEach((task, index) => {
            let itemDiv = document.createElement('div');
            itemDiv.className = "subtask-item";
            itemDiv.setAttribute("onclick", `toggleCheckbox(${index})`);
            itemDiv.innerHTML = `
                <input type="checkbox" id="task-${index}" onclick="event.stopPropagation(); checkSubtasksCompletion();">
                <span>${task}</span>
            `;
            subtasksContainer.appendChild(itemDiv);
        });
    }
}

function toggleCheckbox(index) {
    const checkbox = document.getElementById(`task-${index}`);
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
        checkSubtasksCompletion();
    }
}

function checkSubtasksCompletion() {
    const currentChallenge = challengeDatabase[currentChallengeIndex];
    let allChecked = true;

    for (let i = 0; i < currentChallenge.subtasks.length; i++) {
        const checkbox = document.getElementById(`task-${i}`);
        if (checkbox && !checkbox.checked) {
            allChecked = false;
            break;
        }
    }

    const successMsg = document.getElementById('success-message');
    if (successMsg) {
        if (allChecked) {
            successMsg.classList.remove('hidden');
        } else {
            successMsg.classList.add('hidden');
        }
    }
}

function getChallengeIndex() {
    return Math.floor(Math.random() * challengeDatabase.length);
}

function generateAndSaveNewChallengeIndex() {
    currentChallengeIndex = getChallengeIndex();
    localStorage.setItem('activeChallengeIndex', currentChallengeIndex);
}

function startChallenge() {
    if (isChallengeActive) return;

    isChallengeActive = true;
    const currentChallenge = challengeDatabase[currentChallengeIndex];
    remainingSeconds = currentChallenge.duration;

    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('challenge-screen').classList.remove('hidden');
    document.getElementById('success-message').classList.add('hidden');

    runTimerEngine();
}

function runTimerEngine() {
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay(remainingSeconds);

        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            finishChallengeSuccessfully(challengeDatabase[currentChallengeIndex].points);
        }
    }, 1000);

    updateTimerDisplay(remainingSeconds);
}

function updateTimerDisplay(seconds) {
    const timerElement = document.getElementById('timer');
    if (!timerElement) return;

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerElement.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function finishChallengeSuccessfully(pointsAwarded) {
    isChallengeActive = false;
    clearInterval(countdownInterval);

    totalPoints += pointsAwarded;
    localStorage.setItem('totalPoints', totalPoints);

    generateAndSaveNewChallengeIndex();
    updateUIElements();

    showModal("🎉 Мисијата е комплетна!", `Одлично сработено! Успешно ја заврши офлајн мисијата и во твојот профил се додадени +${pointsAwarded} поени!`, "🏆", "Земи ги поените");
}

function setupVisibilityTracker() {
    document.addEventListener("visibilitychange", () => {
        if (!isChallengeActive) return;

        if (document.hidden) {
            clearInterval(countdownInterval);
            failChallenge();
        }
    });
}

function closeModalAndGoHome() {
    document.getElementById('custom-alert').classList.add('hidden');
    document.getElementById('challenge-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
    displayCurrentChallengeInfo();
}

function failChallenge() {
    isChallengeActive = false;
    clearInterval(countdownInterval);
    generateAndSaveNewChallengeIndex();

    document.getElementById('modal-title').innerText = "🚨 Мисијата прекината!";
    document.getElementById('modal-message').innerText = "Фатен си! Отвори друга апликација (YouTube/социјална мрежа) во текот на мисијата. Поените се поништени.";
    document.getElementById('modal-icon').innerText = "⚠️";
    document.getElementById('modal-btn').innerText = "Пробај пак фер 🔄";

    document.getElementById('modal-btn').onclick = function() {
        document.getElementById('custom-alert').classList.add('hidden');
        document.getElementById('challenge-screen').classList.add('hidden');
        document.getElementById('home-screen').classList.remove('hidden');
        displayCurrentChallengeInfo();
        document.getElementById('modal-btn').onclick = closeModalAndGoHome;
    };

    document.getElementById('custom-alert').classList.remove('hidden');
}

function showModal(title, message, icon, buttonText) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = message;
    document.getElementById('modal-icon').innerText = icon || "🚨";
    document.getElementById('modal-btn').innerText = buttonText || "Океј";
    document.getElementById('custom-alert').classList.remove('hidden');
}

function useSkipToken() {
    if (isChallengeActive) return;

    if (skipTokens > 0) {
        skipTokens--;
        localStorage.setItem('skipTokens', skipTokens);
        generateAndSaveNewChallengeIndex();
        updateUIElements();
        displayCurrentChallengeInfo();
        showModal("🃏 Искористи Џокер!", "Успешно го искористи твојот Џокер. Доби нов предизвик!", "🃏", "Кон предизвикот ✨");
    } else {
        showModal("❌ Немаш повеќе Џокери!", "Собери поени и купи нов џокер од продавницата.", "🔒", "Се враќам назад");
    }
}

function buySkipToken() {
    if (totalPoints >= 200) {
        totalPoints -= 200;
        skipTokens++;
        localStorage.setItem('totalPoints', totalPoints);
        localStorage.setItem('skipTokens', skipTokens);
        updateUIElements();
        showModal("🛒 Успешно купено!", "Успешно потроши 200 поени и купи 1 нов Џокер (🃏)!", "🛍️", "Супер!");
    } else {
        showModal("❌ Немаш доволно поени!", `Ти недостасуваат уште ${200 - totalPoints} поени за да си овозможиш Џокер.`, "🪙", "Ќе соберам поени");
    }
}