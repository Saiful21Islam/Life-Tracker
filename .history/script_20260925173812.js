// ===============================
// 7 DAY TASK DATA
// ===============================

const TASKS = {

    Saturday: [

        ["Office", "Office 9:00 AM - 6:00 PM", "Work"],

        ["Programming",
            "Programming Practice - 1 Hour",
            "Programming"],

        ["German",
            "German Vocabulary - 30 Minutes",
            "German"],

        ["Rest",
            "Rest / Recovery",
            "Rest"]
    ],


    Sunday: [

        ["Office",
            "Office 9:00 AM - 6:00 PM",
            "Work"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["German",
            "German Class - 7:00 PM - 9:00 PM",
            "German"],

        ["Rest",
            "Rest",
            "Rest"]
    ],


    Monday: [

        ["Office",
            "Office 9:00 AM - 6:00 PM",
            "Work"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["Programming",
            "Programming Practice - 1 Hour",
            "Programming"],

        ["Rest",
            "Rest",
            "Rest"]
    ],


    Tuesday: [

        ["Office",
            "Office 9:00 AM - 6:00 PM",
            "Work"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["German",
            "German Class - 7:00 PM - 9:00 PM",
            "German"],

        ["German",
            "German Revision - 30 Minutes",
            "German"]
    ],


    Wednesday: [

        ["Office",
            "Office 9:00 AM - 6:00 PM",
            "Work"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["Programming",
            "Programming Practice - 1 Hour",
            "Programming"],

        ["Rest",
            "Rest",
            "Rest"]
    ],


    Thursday: [

        ["Office",
            "Office 9:00 AM - 6:00 PM",
            "Work"],

        ["University",
            "University Study - 1 Hour",
            "University"],

        ["German",
            "German Class - 7:00 PM - 9:00 PM",
            "German"],

        ["German",
            "German Revision - 30 Minutes",
            "German"]
    ],


    Friday: [

        ["University",
            "University Study - 2 Hours",
            "University"],

        ["Programming",
            "Programming Practice - 2 Hours",
            "Programming"],

        ["Outdoor",
            "Outdoor / Family Time",
            "Rest"],

        ["Revision",
            "Weekly Revision",
            "University"],

        ["Rest",
            "Full Rest",
            "Rest"]
    ]

};


// ===============================
// DAYS
// ===============================

const DAYS = [

    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"

];


// ===============================
// LOCAL STORAGE
// ===============================

const STORAGE_KEY = "my_7_day_tracker";

let data =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


// ===============================
// GET SATURDAY
// ===============================

function getWeekStart(date = new Date()) {

    const d = new Date(date);

    d.setHours(0, 0, 0, 0);

    const day = d.getDay();

    /*
        JavaScript:

        Sunday    = 0
        Monday    = 1
        Tuesday   = 2
        Wednesday = 3
        Thursday  = 4
        Friday    = 5
        Saturday  = 6
    */

    let difference;

    if (day === 6) {

        difference = 0;

    } else {

        difference = day + 1;

    }

    d.setDate(d.getDate() - difference);

    return d;
}


// ===============================
// GET 7 DAYS
// ===============================

function getWeekDates() {

    const start = getWeekStart();

    const dates = [];

    for (let i = 0; i < 7; i++) {

        const d = new Date(start);

        d.setDate(start.getDate() + i);

        dates.push(d);

    }

    return dates;
}


// ===============================
// DATE KEY
// ===============================

function dateKey(date) {

    return date.toISOString().split("T")[0];

}


// ===============================
// TASK KEY
// ===============================

function taskKey(date, index) {

    return dateKey(date) + "_" + index;

}


// ===============================
// SAVE DATA
// ===============================

function saveData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


// ===============================
// CURRENT DAY
// ===============================

function getTodayIndex() {

    const dayName =
        new Intl.DateTimeFormat(
            "en-US",
            { weekday: "long" }
        ).format(new Date());

    return DAYS.indexOf(dayName);

}


// ===============================
// CALCULATE PERCENTAGE
// ===============================

function percentage(done, total) {

    if (total === 0) {

        return 0;

    }

    return Math.round(
        (done / total) * 100
    );

}


// ===============================
// RENDER EVERYTHING
// ===============================

function render() {

    const dates = getWeekDates();

    const today = dateKey(new Date());

    let totalTasks = 0;

    let completedTasks = 0;


    const subjects = {

        German: {
            done: 0,
            total: 0
        },

        University: {
            done: 0,
            total: 0
        },

        Programming: {
            done: 0,
            total: 0
        }

    };


    const week =
        document.getElementById("week");


    week.innerHTML = "";


    // ===============================
    // BUILD 7 DAY CALENDAR
    // ===============================

    dates.forEach((date, dayIndex) => {

        const dayName =
            DAYS[dayIndex];


        const tasks =
            TASKS[dayName];


        let dayCompleted = 0;


        tasks.forEach((task, index) => {

            totalTasks++;


            const key =
                taskKey(date, index);


            if (data[key]) {

                completedTasks++;

                dayCompleted++;

            }


            const category =
                task[2];


            if (subjects[category]) {

                subjects[category].total++;


                if (data[key]) {

                    subjects[category].done++;

                }

            }

        });


        const dayPercent =
            percentage(
                dayCompleted,
                tasks.length
            );


        const card =
            document.createElement("div");


        card.className =
            "day-card";


        if (dateKey(date) === today) {

            card.classList.add("today");

        }


        card.innerHTML = `

            <div class="day-name">
                ${dayName}
            </div>

            <div class="date">

                ${date.toLocaleDateString(
                    "en-GB",
                    {
                        day: "2-digit",
                        month: "short"
                    }
                )}

            </div>

            <div class="day-percent">

                ${dayPercent}%

            </div>

            <div class="mini-bar">

                <div
                    class="mini-fill"
                    style="width:${dayPercent}%"
                ></div>

            </div>

        `;


        week.appendChild(card);

    });


    // ===============================
    // DASHBOARD
    // ===============================

    const overall =
        percentage(
            completedTasks,
            totalTasks
        );


    document.getElementById(
        "overall"
    ).textContent =
        overall + "%";


    document.getElementById(
        "doneCount"
    ).textContent =
        completedTasks;


    document.getElementById(
        "remaining"
    ).textContent =
        totalTasks - completedTasks;


    // ===============================
    // SUBJECT PROGRESS
    // ===============================

    updateSubject(
        "German",
        "germanPct",
        "germanBar",
        subjects.German
    );


    updateSubject(
        "University",
        "uniPct",
        "uniBar",
        subjects.University
    );


    updateSubject(
        "Programming",
        "codePct",
        "codeBar",
        subjects.Programming
    );


    // ===============================
    // STREAK
    // ===============================

    const currentStreak =
        calculateStreak();


    document.getElementById(
        "streak"
    ).textContent =
        currentStreak + " 🔥";


    document.getElementById(
        "bigStreak"
    ).textContent =
        currentStreak;


    // ===============================
    // TODAY TASKS
    // ===============================

    renderToday(dates);

}


// ===============================
// UPDATE SUBJECT
// ===============================

function updateSubject(
    subject,
    percentId,
    barId,
    values
) {

    const p =
        percentage(
            values.done,
            values.total
        );


    document.getElementById(
        percentId
    ).textContent =
        p + "%";


    document.getElementById(
        barId
    ).style.width =
        p + "%";

}


// ===============================
// TODAY TASKS
// ===============================

function renderToday(dates) {

    const todayIndex =
        getTodayIndex();


    const today =
        dates[todayIndex];


    const dayName =
        DAYS[todayIndex];


    document.getElementById(
        "todayLabel"
    ).textContent =
        today.toLocaleDateString(
            "en-GB",
            {
                day: "numeric",
                month: "short"
            }
        );


    const list =
        document.getElementById(
            "taskList"
        );


    list.innerHTML = "";


    TASKS[dayName].forEach(
        (task, index) => {

            const key =
                taskKey(
                    today,
                    index
                );


            const checked =
                data[key] === true;


            const row =
                document.createElement(
                    "label"
                );


            row.className =
                "task";


            if (checked) {

                row.classList.add(
                    "completed"
                );

            }


            row.innerHTML = `

                <input
                    type="checkbox"
                    ${checked ? "checked" : ""}
                >

                <div class="task-info">

                    <div class="task-title">

                        ${task[0]}
                        -
                        ${task[1]}

                    </div>

                    <div class="task-category">

                        ${task[2]}

                    </div>

                </div>

            `;


            const checkbox =
                row.querySelector(
                    "input"
                );


            checkbox.addEventListener(
                "change",
                function () {

                    data[key] =
                        checkbox.checked;


                    saveData();

                    render();

                }
            );


            list.appendChild(row);

        }
    );

}


// ===============================
// CHECK IF DAY COMPLETED
// ===============================

function isDayCompleted(date) {

    const dayName =
        new Intl.DateTimeFormat(
            "en-US",
            {
                weekday: "long"
            }
        ).format(date);


    const tasks =
        TASKS[dayName];


    return tasks.every(
        (_, index) => {

            return data[
                taskKey(
                    date,
                    index
                )
            ] === true;

        }
    );

}


// ===============================
// STREAK
// ===============================

function calculateStreak() {

    let date =
        new Date();


    date.setHours(
        0,
        0,
        0,
        0
    );


    let streak = 0;


    /*
       যদি আজকের সব কাজ
       শেষ না হয়, তাহলে
       গতকাল থেকে streak
       গণনা হবে।
    */

    if (!isDayCompleted(date)) {

        date.setDate(
            date.getDate() - 1
        );

    }


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        if (
            isDayCompleted(date)
        ) {

            streak++;

            date.setDate(
                date.getDate() - 1
            );

        } else {

            break;

        }

    }


    return streak;

}


// ===============================
// WEEK RESET
// ===============================

function resetWeek() {

    const confirmReset =
        confirm(
            "Are you sure you want to reset this 7-day week?"
        );


    if (!confirmReset) {

        return;

    }


    const dates =
        getWeekDates();


    dates.forEach(
        (date, dayIndex) => {

            const dayName =
                DAYS[dayIndex];


            TASKS[dayName].forEach(
                (_, index) => {

                    delete data[
                        taskKey(
                            date,
                            index
                        )
                    ];

                }
            );

        }
    );


    saveData();

    render();

}


// ===============================
// WEEK LABEL
// ===============================

function updateWeekLabel() {

    const dates =
        getWeekDates();


    const start =
        dates[0];


    const end =
        dates[6];


    document.getElementById(
        "weekLabel"
    ).textContent =

        start.toLocaleDateString(
            "en-GB",
            {
                day: "numeric",
                month: "short"
            }
        )

        +

        " - "

        +

        end.toLocaleDateString(
            "en-GB",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );

}


// ===============================
// START APP
// ===============================

updateWeekLabel();

render();